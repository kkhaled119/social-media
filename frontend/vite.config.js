import { defineConfig } from "vite"; // تأكد من إضافة هذا السطر
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/auth": {
        target: "http://localhost:5003",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
