// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    // config options
    base: "",
    build: {
        sourcemap: true,
    },
    test: {
        setupFiles: ['./vitest.setup.js'],
        environment: 'jsdom',
        globals: true,
        deps: {
            inline: ['vitest-canvas-mock'],
        },
        threads: false,
        environments: {
            jsdom: {
                resources: 'usable',
            }
        }
    },
});