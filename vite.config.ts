import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  resolve: {
    alias: [
      { find: "components", replacement: "./src/components" },
      { find: "constant", replacement: "./src/constant" },
      { find: "context", replacement: "./src/context" },
      { find: "hooks", replacement: "./src/hooks" },
      { find: "types", replacement: "./src/types" },
    ],
  },
});
