define(["exports"],(function(t){"use strict";const e="object"==typeof global&&global&&global.Object===Object&&global;var o="object"==typeof self&&self&&self.Object===Object&&self;const n=e||o||Function("return this")(),c=n.Symbol;var l=Object.prototype,r=l.hasOwnProperty,i=l.toString,b=c?c.toStringTag:void 0,a=Object.prototype.toString,u=c?c.toStringTag:void 0;t.Symbol$1=c,t.baseGetTag=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?function(t){var e=r.call(t,b),o=t[b];try{t[b]=void 0;var n=!0}catch(t){}var c=i.call(t);return n&&(e?t[b]=o:delete t[b]),c}(t):function(t){return a.call(t)}(t)},t.freeGlobal$1=e,t.isObject=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},t.isObjectLike=function(t){return null!=t&&"object"==typeof t},t.root$1=n}));