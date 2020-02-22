import { createCompatibilityConfig } from '@open-wc/building-rollup';

// if you need to support IE11 use "modern-and-legacy-config" instead.
// import { createCompatibilityConfig } from '@open-wc/building-rollup';
// export default createCompatibilityConfig({ input: './index.html' });
const configs = createCompatibilityConfig({
    input: './src/WcEcProdHorList.js',
    plugins: {
        indexHTML: false,
        workbox: false,
    }
});


export default configs.map(config => ({
    ...config,
    output: {
        ...config.output,
        format: 'iife',
        sourcemap: false,
        dir: 'dist',
        name: 'WcEcProdHorList'
    },
    plugins: [...config.plugins],
}));