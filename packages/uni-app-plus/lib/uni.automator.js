"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=e(require("debug")),o=e(require("postcss-selector-parser"));function n(e){e.walk(e=>{if("tag"===e.type){const t=e.value;e.value="page"===t?"body":"uni-"+t}})}const c=["Page.getElement","Page.getElements","Element.getElement","Element.getElements"];const s=t("automator:devtool");const r={"Tool.close":{reflect:async()=>{}},"App.exit":{reflect:async()=>{}},"App.enableLog":{reflect:()=>Promise.resolve()},"App.captureScreenshot":{reflect:async(e,t)=>{}}};!function(e){c.forEach(t=>{e[t]=function(e){return{reflect:async(t,o)=>t(e,o,!1),params:e=>(e.selector&&(e.selector=o(n).processSync(e.selector)),e)}}(t)})}(r);const a={devtools:{name:"App",paths:[],validate:async function(e){return e.options=e.options||{},e},create:async function(e,t,o){s("createDevtools")}},adapter:r};module.exports=a;