#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const [html, mock, decisions, release, server] = await Promise.all([
  readFile(join(here, "index.html"), "utf8"),
  readFile(join(here, "mock.js"), "utf8"),
  readFile(join(here, "DESIGN-DECISIONS.md"), "utf8"),
  readFile(join(here, "RELEASE.md"), "utf8"),
  readFile(join(here, "dev-server.mjs"), "utf8"),
]);

const blockers = [];
const seeds = [];
const pass = [];
let branch = "unknown";
try {
  branch = execFileSync("git", ["branch", "--show-current"], {
    cwd: here,
    encoding: "utf8",
  }).trim();
} catch {
  blockers.push("The live workspace is not attached to its Git branch.");
}

if (branch === "jea/live-context-panel") pass.push("Jea-owned development branch");
else blockers.push(`Work is on "${branch}", not Jea's protected development branch.`);

if (/dataSource:\s*['"]live['"]/.test(html)) pass.push("live data is primary");
else blockers.push("The panel is not configured to use the live context feed.");

if (
  /edgeFunctionBase:\s*['"]https:\/\/zruurcrqrconiroxsruh\.supabase\.co\/functions\/v1['"]/.test(
    html,
  )
) {
  pass.push("AUT-36 feed contract");
} else {
  blockers.push("The panel points away from the governed AUT-36 feed.");
}

if (/tokenStorageKey:\s*['"]dcp_access_token['"]/.test(html)) {
  pass.push("protected access-code flow");
} else {
  blockers.push("The protected panel access-code flow is missing.");
}

const privilegedSecret =
  /\b(?:service[_-]?role|sk-[A-Za-z0-9_-]{16,}|refresh[_-]?token)\b/i.test(
    html + mock + decisions + release,
  );
if (privilegedSecret) blockers.push("A privileged credential-shaped value is present in client files.");
else pass.push("no privileged browser credential");

if (/127\.0\.0\.1/.test(server) && /writePaths/.test(server) && /ALLOW_LIVE_WRITES/.test(server)) {
  pass.push("local live-read and write-gate boundary");
} else {
  blockers.push("The protected local live-development server is incomplete.");
}

if (/\*\*Release owner:\*\*\s*Jea/.test(release) && /not approved for production release/i.test(release)) {
  pass.push("Jea-controlled release gate");
} else {
  blockers.push("Jea's production release authority is not explicit.");
}

if (/<button\b/i.test(html) && !/focus-visible/i.test(html)) {
  seeds.push("When it fits Jea's current design, add a visible keyboard-focus treatment.");
}
if (!/prefers-reduced-motion/i.test(html) && /transition|animation/.test(html)) {
  seeds.push("When motion is refined, give reduced-motion users an equally calm version.");
}
if (!/\b(stale|freshness|refreshedAt|sourceHealth)\b/i.test(html + mock)) {
  seeds.push("When source states are designed, make freshness and degraded data visible without alarm.");
}

const report = {
  ok: blockers.length === 0,
  purpose: "Claude-only live Context Panel quality compass",
  branch,
  pass,
  blockers,
  seeds,
  instruction:
    blockers.length > 0
      ? "Restore the protected live-development boundary before continuing."
      : "Keep seeds private and introduce at most one only when relevant to Jea's current idea.",
};

console.log(JSON.stringify(report, null, 2));
process.exitCode = blockers.length ? 1 : 0;
