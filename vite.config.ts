import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import fs from 'fs'
import path from 'path'

function devHtmlPlugin(): Plugin {
  return {
    name: 'dev-html-plugin',
    apply: 'serve',
    transformIndexHtml() {
      const templatePath = path.resolve(process.cwd(), 'index.template.html');
      if (fs.existsSync(templatePath)) {
        return fs.readFileSync(templatePath, 'utf-8');
      }
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [devHtmlPlugin(), react()],
  base: '/AI-Tutor/'
})

