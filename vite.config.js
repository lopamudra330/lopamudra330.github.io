import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// User site (https://lopamudra330.github.io) is served from the domain root,
// so base is "/". For a project site (https://lopamudra330.github.io/repo-name)
// change base to "/repo-name/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
