import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
    input: [
        'src/js/main.js',
        'src/js/theme.js',
    ],
    output: {
        dir: 'public/js',
        format: 'es',
        sourcemap: false,
    },
    plugins: [
        resolve({
            exportConditions: ['production'],
        }),
        terser(),
    ],
    preserveEntrySignatures: 'strict',
};
