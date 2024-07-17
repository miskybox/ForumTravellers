import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Divide 'react' y 'react-dom' en un chunk separado
          'react-vendor': ['react', 'react-dom'],
          // Divide 'fontawesome' en otro chunk
          'fontawesome': ['@fortawesome/react-fontawesome', '@fortawesome/free-solid-svg-icons', '@fortawesome/fontawesome-svg-core']
        }
      },
      external: ['@fortawesome/react-fontawesome']
    },
    chunkSizeWarningLimit: 1000 
  }
});

/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@fortawesome/react-fontawesome']
    },
    chunkSizeWarningLimit: 1000 // Ajusta el límite de advertencia de tamaño de chunk
  }
});
*/ 