const {override, fixBabelImports, addLessLoader,addWebpackAlias} = require('customize-cra');
const path = require('path');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            'primary-color': '#09c',
            'font-size-base': '12px',
            'form-item-margin-bottom': '12px',
            'border-radius-base': '0px',
            'border-radius-sm': '0px',

        },
    }),
    addWebpackAlias({
        ["@"]: path.resolve(__dirname, "src"),
        // ["containers"]: path.resolve(__dirname, "src/containers"),
        // ["components"]: path.resolve(__dirname, "src/components")
    })
);
