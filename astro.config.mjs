import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.yugain.io',
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
})
