import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from "vite-plugin-dts";
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
    plugins: [
      dts({
        outDir: "dist/types",
        insertTypesEntry: true,
      }),
      createHtmlPlugin({
        template: './index.html',
        // inject: {
        //   data: 
        //   {
        //       VERSION:"0.0.1" 
        //   },
        // },
      }),
    ],

    resolve: {
      extensions: ['.ts', '.js', '.json']
    },
    
    build: {
      outDir: 'dist',
      assetsDir: '',
      lib: {
          entry: resolve(__dirname, './src/issue_demo.ts'),
          name: 'issue',
          fileName: 'issue'
      },
      rollupOptions: {
        external: ['@xbs/webix-pro','webix-jet'],
        output: {
          globals: {
            '@xbs/webix-pro': 'webix',
          }
        },
      },
    }

})
