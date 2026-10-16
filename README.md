# pi-web-workflows

A [PI WEB](https://github.com/Gang-of-Beads/pi-web) plugin that draws the `workflow` tool of [pi-dynamic-workflows](https://www.npmjs.com/package/pi-dynamic-workflows) as a live progress card in the conversation.

While a workflow runs, the card shows each phase with its agents and their state (queued, running, done, failed), and the final result once the run ends. A `workflow` call that does not carry a progress snapshot (it has just started, or another extension registered a tool of the same name) keeps PI WEB's ordinary tool card.

## Requirements

- PI WEB 2.202610.5 or later. Earlier releases bundle their own copy of this plugin, which wins over an installed one (Settings → PI WEB plugins reports the duplicate id).
- The pi-dynamic-workflows extension installed in pi, so sessions have the `workflow` tool.

On pi 1.x, pi-dynamic-workflows starts its workflow agents with only the models pi itself knows about (`auth.json`, `models.json` and pi's built-in providers). Providers that another extension registers, such as pi-multi-account pools, are not available to those agents until pi-dynamic-workflows supports pi 1.x model runtimes.

## Install

```sh
pi install npm:@gang-of-beads/pi-web-workflows
```

To follow `main` instead of releases, install `git:github.com/Gang-of-Beads/pi-web-workflows`.

Then reload the PI WEB tab. The plugin has no server part, so the session daemon does not need a restart.

To remove it:

```sh
pi remove npm:@gang-of-beads/pi-web-workflows
```

## How it works

The plugin contributes a tool renderer for the tool named `workflow`. PI WEB hands the renderer the tool's streamed updates; the renderer reads the progress snapshot pi-dynamic-workflows puts in each update's `details` and draws it with a small Lit element. Everything runs in the browser; the plugin stores nothing.

## Development

```sh
npm install
npm run typecheck
npm run build
```

`npm run build` bundles `src/pi-web-plugin.ts` and Lit into one ES module, `dist/pi-web-plugin.js`, because PI WEB loads a plugin's browser module as-is, without an import map. The built `dist/` is committed so that `pi install git:` works without a build step; `npm run check` fails when it is out of date.

To try a change in a running PI WEB, link the working copy as a local plugin and reload the tab:

```sh
mkdir -p ~/.pi-web/plugins
ln -s "$PWD" ~/.pi-web/plugins/workflows
```

See [PI WEB's plugin documentation](https://github.com/Gang-of-Beads/pi-web/blob/main/docs/plugins.md) for the plugin contract.

## Contributing

Issues and pull requests are welcome. Please keep changes small and focused, run `npm run check` before opening a pull request, and describe what you changed and how you checked it in a running PI WEB.

## Releasing

Update `version` in `package.json` and `package-lock.json`, give `CHANGELOG.md` a section for it, commit, and push a matching `v<version>` tag. The release workflow checks the package, publishes it to npm, and creates the GitHub Release from that CHANGELOG section.

## License

[MIT](LICENSE)
