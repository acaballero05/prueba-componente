import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import { terser } from "rollup-plugin-terser";
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import svgr from '@svgr/rollup'
import url from 'rollup-plugin-url'
import postcss from 'rollup-plugin-postcss'
import external from 'rollup-plugin-peer-deps-external'

export default {
    input: 'src/index.tsx', // our source file
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: pkg.module,
            format: 'es', // the preferred format
            sourcemap: true
        }
    ],
    external: [
        ...Object.keys(pkg.dependencies || {})
    ],
    plugins: [
        typescript({
            typescript: require('typescript'),
        }),
        terser(),
        json(),
        commonjs(),
        resolve(),
        sourceMaps(),
        external(),
        postcss({
            modules: true
        }),
        url(),
        svgr(),
    ]
};