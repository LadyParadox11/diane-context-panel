# Context Panel Release Gate

**Release owner:** Jea
**Current branch:** `jea/live-context-panel`
**Current state:** Live-data development; not approved for production release
**Production branch:** `main`
**Production URL:** `https://ladyparadox11.github.io/diane-context-panel/`

The panel uses real read data during development. Local write endpoints are
blocked unless Jea explicitly opens the write-test gate for one bounded test.

Production release occurs only after Jea says the panel is ready. At that point,
Claude helps her:

1. review the final visual and interaction behavior in Missive-sized,
   phone-sized, and iPad-sized views;
2. run `node studio-check.mjs`;
3. verify a known, unknown, ambiguous, empty, and degraded live-data case;
4. verify every visible action against a real readback or receipt;
5. review the exact diff with Jea;
6. merge the approved branch to `main`;
7. wait for the GitHub Pages build from `main` to report `built`;
8. verify the deployed panel in Missive and preserve the pre-merge commit as the
   rollback point.

Passing a technical check does not substitute for Jea's release decision.
