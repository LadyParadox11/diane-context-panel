#!/usr/bin/env node

import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const host = "127.0.0.1";
const port = Number.parseInt(process.env.CONTEXT_PANEL_PORT || "4173", 10);
const upstream = "https://zruurcrqrconiroxsruh.supabase.co/functions/v1";
const allowWrites = process.env.ALLOW_LIVE_WRITES === "1";
const writePaths = new Set(["/dispatch", "/mesh-note"]);
const allowedFiles = new Map([
  ["/", "index.html"],
  ["/index.html", "index.html"],
  ["/mock.js", "mock.js"],
]);

const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
};

function json(res, status, body) {
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
  });
  res.end(JSON.stringify(body));
}

function livePreviewHarness() {
  return `
<script id="jea-live-preview-harness">
(() => {
  const params = new URLSearchParams(location.search);
  const from = params.get("from") || "preview@example.com";
  const name = params.get("name") || "";
  const subject = params.get("subject") || "Context Panel live development preview";
  const body = params.get("body") || "Live read-only development preview.";
  const deliveredAt = Date.now();

  window.Missive = {
    on(eventName, callback) {
      if (eventName === "change:conversations") {
        queueMicrotask(() => callback(["local-live-preview"]));
      }
    },
    async fetchConversations() {
      return [{
        id: "local-live-preview",
        subject,
        messages: [],
        latest_message: {
          id: "local-live-preview-message",
          subject,
          body,
          preview: body,
          delivered_at: deliveredAt,
          from_field: { address: from, name },
          to_fields: [{ address: "dianecotman@strategicthinking.llc", name: "Diane" }],
          cc_fields: [],
          bcc_fields: [],
        },
      }];
    },
    closeSelf() {},
    openURL(url) { window.open(url, "_blank", "noopener,noreferrer"); },
  };
})();
</script>`;
}

async function serveFile(req, res, fileName) {
  let body = await readFile(join(here, fileName));
  if (fileName === "index.html") {
    let html = body.toString("utf8");
    html = html.replace(
      /edgeFunctionBase:\s*['"]https:\/\/zruurcrqrconiroxsruh\.supabase\.co\/functions\/v1['"]/,
      "edgeFunctionBase: location.origin + '/functions/v1'",
    );
    html = html.replace(
      "<!-- the panel: reads MOCK and builds the cards -->",
      `${livePreviewHarness()}\n\n  <!-- the panel: reads MOCK and builds the cards -->`,
    );
    body = Buffer.from(html);
  }
  res.writeHead(200, {
    "content-type": mime[extname(fileName)] || "application/octet-stream",
    "cache-control": "no-store",
    "x-content-type-options": "nosniff",
    "referrer-policy": "no-referrer",
  });
  res.end(body);
}

async function proxy(req, res, pathname) {
  const functionPath = pathname.slice("/functions/v1".length);
  if (writePaths.has(functionPath) && !allowWrites) {
    return json(res, 409, {
      error: "live_write_gate_closed",
      message: "Jea's local development write gate is closed.",
    });
  }

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const body = chunks.length ? Buffer.concat(chunks) : undefined;
  const headers = new Headers();
  for (const name of ["apikey", "authorization", "x-panel-token", "content-type"]) {
    const value = req.headers[name];
    if (typeof value === "string" && value) headers.set(name, value);
  }
  headers.set("origin", "https://ladyparadox11.github.io");

  const query = req.url?.includes("?") ? req.url.slice(req.url.indexOf("?")) : "";
  const target = new URL(upstream + functionPath + query);
  const response = await fetch(target, {
    method: req.method,
    headers,
    body: ["GET", "HEAD"].includes(req.method || "GET") ? undefined : body,
    redirect: "manual",
  });
  const responseBody = Buffer.from(await response.arrayBuffer());
  res.writeHead(response.status, {
    "content-type": response.headers.get("content-type") || "application/json; charset=utf-8",
    "cache-control": "no-store",
    "x-content-type-options": "nosniff",
  });
  res.end(responseBody);
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${host}:${port}`);
    if (url.pathname.startsWith("/functions/v1/")) {
      await proxy(req, res, url.pathname);
      return;
    }
    const fileName = allowedFiles.get(url.pathname);
    if (!fileName) {
      json(res, 404, { error: "not_found" });
      return;
    }
    await serveFile(req, res, fileName);
  } catch {
    json(res, 500, { error: "local_preview_failed" });
  }
});

server.listen(port, host, () => {
  console.log(`Jea's live Context Panel: http://${host}:${port}/`);
  console.log("Live reads: enabled");
  console.log(`Live writes: ${allowWrites ? "enabled for this session" : "blocked"}`);
  console.log("Add ?from=someone@example.com to preview a sender. Requests and access codes are not logged.");
});
