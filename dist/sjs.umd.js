!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):r.slowJsonStringify=e()}(this,function(){var r=function(e,n){for(var t in e){if(t===n)return[t];if(e[t]&&"object"==typeof e[t]){var i=r(e[t],n);if(i)return i.unshift(t),i}}};return function(e){var n=function(e){var n={},t=new Map,i="",o=JSON.stringify(e,function(o,a){var u=Array.isArray(a);return("object"!=typeof a||u)&&(u&&t.set(o,a[0]),function(r){var e=new Set(["number","string","boolean","array-simple","function"]);if(Array.isArray(r)){if(e.has(r[0])||e.has(typeof r[0]))return;throw new Error('Expected either "array-simple" or a function. received '+r)}if("function"!=typeof r&&!e.has(r))throw new Error('Expected one of: "number", "string", "boolean". received '+r)}(a),n[o]=r(e,o),i+='"'+o+'"|'),a});return{map:n,arrais:t,props:i,str:o}}(e),t=n.map,i=n.arrais,o=function(r,e){var n=[],t=r.replace(e,function(r){switch(r){case'"string"':return'"__par__"';case'"number"':case'"boolean"':case'["array-simple"]':case"[null]":return"__par__";default:var e=r.match(/(?<=\").+?(?=\")/)[0];return n.push(e),r}}).split("__par__");return{queue:n,chunks:t}}(n.str,new RegExp(n.props+'"(string|number|boolean)"|\\[(.*?)\\]',"gm")),a=o.queue,u=o.chunks,f=u[u.length-1];return function(r){var e="";return a.forEach(function(n,o){var a=function(r,e){return t[n].reduce(function(r,e){return r&&r[e]},r)}(r),f=i.has(n)?function(r,e){if("array-simple"===e)return JSON.stringify(r);for(var n="",t=0,i=r;t<i.length;t+=1)n+=e(i[t])+",";return"["+n.substr(0,n.length-1)+"]"}(a,i.get(n)):a;e+=u[o]+f}),e+f}}});
//# sourceMappingURL=sjs.umd.js.map
