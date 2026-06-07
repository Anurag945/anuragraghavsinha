import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { askAssistant } from './api/lib/answer.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load .env (all keys, not just VITE_*) so the dev chat endpoint can use GEMINI_API_KEY
  const env = loadEnv(mode, process.cwd(), '')
  if (env.GEMINI_API_KEY) process.env.GEMINI_API_KEY = env.GEMINI_API_KEY

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        // Dev-only: makes POST /api/chat work under `npm run dev`
        // (in production this is handled by the Vercel function in /api/chat.js)
        name: 'dev-chat-api',
        configureServer(server) {
          server.middlewares.use('/api/chat', (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405
              res.end('Method not allowed')
              return
            }
            let body = ''
            req.on('data', (c) => (body += c))
            req.on('end', async () => {
              res.setHeader('Content-Type', 'application/json')
              try {
                const { messages } = JSON.parse(body || '{}')
                const answer = await askAssistant(messages || [])
                res.end(JSON.stringify({ answer }))
              } catch (e) {
                const msg = String(e?.message || e)
                res.statusCode = msg.includes('missing_key') ? 503 : 500
                res.end(JSON.stringify({ error: msg.includes('missing_key') ? 'not_configured' : 'assistant_error' }))
              }
            })
          })
        },
      },
    ],
  }
})
