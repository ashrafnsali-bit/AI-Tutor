import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import fs from 'fs'
import path from 'path'

function devHtmlPlugin(): Plugin {
  return {
    name: 'dev-html-plugin',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0] || '';
        if (url === '/' || url === '/AI-Tutor/' || url === '/AI-Tutor/index.html' || url === '/index.html') {
          const templatePath = path.resolve(process.cwd(), 'index.template.html');
          if (fs.existsSync(templatePath)) {
            const raw = fs.readFileSync(templatePath, 'utf-8');
            server.transformIndexHtml(req.url || '/', raw)
              .then(html => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.end(html);
              })
              .catch(err => {
                console.error('Error transforming index.template.html:', err);
                next();
              });
            return;
          }
        }
        next();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [devHtmlPlugin(), react()],
  base: '/AI-Tutor/'
})

