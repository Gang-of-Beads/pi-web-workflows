import { rm } from "node:fs/promises";
import * as esbuild from "esbuild";

/**
 * PI WEB loads a plugin's browser module as-is: the page has no import map, so the module must be
 * one file with its own imports (lit) bundled in.
 */
await rm("dist", { recursive: true, force: true });
await esbuild.build({
  banner: { js: "/*! Bundles Lit, BSD-3-Clause: see THIRD_PARTY_NOTICES.md */" }, entryPoints: ["src/pi-web-plugin.ts"],
  outfile: "dist/pi-web-plugin.js",
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2022",
  legalComments: "eof",
  logLevel: "info",
});
