import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    root: '.',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                portfolio: resolve(__dirname, 'portfolio.html'),
                services: resolve(__dirname, 'services.html'),
                contact: resolve(__dirname, 'contact.html'),
                about: resolve(__dirname, 'about.html')
            },
        },
    },
});
