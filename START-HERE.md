# You are building Diane's real Context Panel 🌿

This is the live Context Panel code. The choices you make here can become the
version Diane uses in Missive.

You work safely on your own branch, so nothing changes in production until you
say it is ready.

## Open the live development panel

1. Open Terminal in this folder.
2. Run:

   `node dev-server.mjs`

3. Open the local address it shows.
4. Enter the existing panel access code when the lock screen asks for it.

The preview reads from the real Context Panel feed. It does not print or save the
access code anywhere in the project.

To preview a particular sender locally, add their email after `?from=` in the
local address. Claude can help you do this without exposing it outside your
computer.

## What is safe while you design

- Live context reads are enabled.
- Live write buttons are blocked in local development unless you explicitly
  decide to run one bounded write test.
- `mock.js` is still available for edge cases that live data cannot safely or
  reliably reproduce.
- Production does not update until you say, “This is ready to deploy.”

Tell Claude what you want to change and keep working in short visible loops.
This is your system and your release. 🚀
