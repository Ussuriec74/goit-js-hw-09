!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("iU1Pc");function a(e,t){return new Promise((function(n,r){setTimeout((function(){Math.random()>.3?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault(),t.target.tagName;for(var n=parseInt(t.currentTarget.elements.amount.value),r=parseInt(t.currentTarget.elements.step.value),o=parseInt(t.currentTarget.elements.delay.value),u=1;u<=n;u+=1)a(u,o).then((function(t){var n=t.position,r=t.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(r,"ms"))})).catch((function(t){var n=t.position,r=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(r,"ms"))})),o+=r;t.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.6d4c686b.js.map
