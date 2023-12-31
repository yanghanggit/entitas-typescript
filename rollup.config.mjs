import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        typescript(),
        resolve(),
        commonjs(),
        serve({
            open: true,
            contentBase: ['.'],
            host: 'localhost',
            port: 3000
        }),
        livereload({
            watch: 'dist'
        })
    ]
};
