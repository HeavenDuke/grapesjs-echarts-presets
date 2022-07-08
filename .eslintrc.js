module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: ["eslint:recommended", "plugin:vue/essential"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        echarts: true,
        define: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    plugins: ["vue"],
    rules: {
        indent: ["error", 2],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
    }
};
