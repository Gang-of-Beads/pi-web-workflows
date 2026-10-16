# Changelog

## 0.1.1

- The README says that on pi 1.x, the workflow agents pi-dynamic-workflows starts see only the models pi itself knows about (`auth.json`, `models.json` and pi's built-in providers); providers another extension registers, such as pi-multi-account pools, are not available to them until pi-dynamic-workflows supports pi 1.x model runtimes.
- Built against `@gang-of-beads/pi-web-plugin-api`, the plugin contract package PI WEB publishes for plugin repositories, instead of the whole PI WEB package. Only the build changed: the published plugin code is the same as 0.1.0's.

## 0.1.0

- First release. The Workflows plugin moves out of PI WEB's bundled plugins into this repository; it draws the pi-dynamic-workflows `workflow` tool as a live progress card exactly as the bundled copy did. The plugin id stays `workflows`, so an existing `plugins.workflows` setting keeps applying.
- Published to npm: install with `pi install npm:@gang-of-beads/pi-web-workflows`.
