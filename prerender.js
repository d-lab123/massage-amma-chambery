import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

async function run() {
  const ssrBundlePath = toAbsolute('dist-ssr/entry-server.js')
  
  if (!fs.existsSync(ssrBundlePath)) {
    throw new Error(`SSR bundle not found at ${ssrBundlePath}. Please run the SSR build first.`)
  }

  // Import the SSR-rendered App from the built SSR bundle
  const { render } = await import(pathToFileURL(ssrBundlePath).href)

  // Read the client-built index.html template
  const templatePath = toAbsolute('dist/index.html')
  if (!fs.existsSync(templatePath)) {
    throw new Error(`index.html template not found at ${templatePath}. Please run the client build first.`)
  }
  
  let html = fs.readFileSync(templatePath, 'utf-8')

  // Render the app HTML
  console.log('Rendering React application to static HTML...')
  const appHtml = render()

  // Inject the rendered HTML into the template
  html = html.replace('<!--ssr-outlet-->', appHtml)

  // Write the final index.html
  fs.writeFileSync(templatePath, html)
  console.log('Static HTML injected into dist/index.html.')

  // Clean up the temporary dist-ssr directory
  const ssrDir = toAbsolute('dist-ssr')
  if (fs.existsSync(ssrDir)) {
    console.log('Cleaning up temporary dist-ssr directory...')
    fs.rmSync(ssrDir, { recursive: true, force: true })
  }

  console.log('Static Site Generation (SSG) completed successfully!')
}

run().catch((err) => {
  console.error('SSG Generation failed:', err)
  process.exit(1)
})
