import grapesjs from 'grapesjs'
import loadComponents from "./componentsRegister";
import loadBlocks from "./blocksRegister";
import loadTraits from "./traitsRegister";
import events from "./events";
import en from "./locale/en";
import zh from "./locale/zh";
import echarts from "echarts";
import Vue from "vue";
import merge from "lodash/merge";
require("echarts/theme/dark");
require("echarts/theme/macarons");
require("echarts/theme/dark-blue");

export default grapesjs.plugins.add('gjs-echarts-presets', function (editor, { intl = {}, ...restOpts }) {
    // Configure language(en - English, zh - Simplified Chinese)
    const { locale = "en", messages = { en } } = intl;
    const options = {
        ...{
            i18n: {
                locale,
            },
            // default options
        },
        ...restOpts,
    };
    // Load i18n files
    let optLocales = {};
    Object.entries(messages).map(([lang, def]) => {
        optLocales[lang] = {};
        optLocales[lang]["grapesjs-echarts-presets"] = def;
    });
    const locales = merge({ en, zh }, optLocales);
    editor.I18n &&
    editor.I18n.addMessages(locales) &&
    editor.I18n.setLocale(locale);
    // Attach Events
    events(editor);
    editor.echarts = echarts;
    editor.Vue = Vue;
    // Add Traits
    loadTraits(editor, options);
    // Add Components
    editor.registeredComponents = loadComponents(editor, options);
    // Add Blocks
    loadBlocks(editor, options);
});
