# Diane Context Panel

Jea's live Context Panel for Missive. The production client is `index.html`; it
reads the protected AUT-36 Context feed and is published from this repository's
`main` branch with GitHub Pages.

## Development

Jea works on `jea/live-context-panel`:

```sh
node studio-check.mjs
node dev-server.mjs
```

The local preview uses live read data. It blocks `/dispatch` and `/mesh-note`
unless Jea deliberately opens the bounded write-test gate. The access code is
entered in the existing panel lock screen and must never be committed or logged.

See `START-HERE.md` for Jea's on-ramp, `CLAUDE.md` for collaboration boundaries,
`DESIGN-DECISIONS.md` for her explicit choices, and `RELEASE.md` for the
production gate.

## Production

Production is served at:

`https://ladyparadox11.github.io/diane-context-panel/`

GitHub Pages is configured to publish the repository root from `main`. Nothing
is merged or deployed until Jea says the panel is ready. Once she approves the
exact diff, merging her branch to `main` triggers the production build; the
deployed panel is then verified in Missive and against the protected live feed.

`mock.js` is a supplemental regression fixture. It is not the primary
development or production data source.
