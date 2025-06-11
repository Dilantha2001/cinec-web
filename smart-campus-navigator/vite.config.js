import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/

export default defineConfig({
  theme: {
    extend: {
      animation: {
        typing: "typing 4s steps(40, end), blink-caret 0.75s step-end infinite",
      },
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "blink-caret": {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "white" },
        },
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
