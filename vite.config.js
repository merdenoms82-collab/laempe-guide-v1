import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/laempe-guide-v1/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['apple-touch-icon-180.png'],
      manifest: {
        name: 'Laempe Reference Guide',
        short_name: 'Laempe Guide',
        description: 'Fast offline operator reference for the Laempe core machine',
        theme_color: '#0B0F1A',
        background_color: '#0B0F1A',
        display: 'standalone',
        scope: '/laempe-guide-v1/',
        start_url: '/laempe-guide-v1/',
        icons: [
          {
            src: 'pwa-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        navigateFallback: '/laempe-guide-v1/index.html',
        navigateFallbackAllowlist: [/^\/laempe-guide-v1/],
      },
    }),
  ],
})
