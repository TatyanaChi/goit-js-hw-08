!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var o,i,f,u,a,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function j(e){return l=e,a=setTimeout(T,t),d?b(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=f}function T(){var e=p();if(O(e))return h(e);a=setTimeout(T,function(e){var n=t-(e-c);return s?g(n,f-(e-l)):n}(e))}function h(e){return a=void 0,m&&o?b(e):(o=i=void 0,u)}function w(){var e=p(),n=O(e);if(o=arguments,i=this,c=e,n){if(void 0===a)return j(c);if(s)return a=setTimeout(T,t),b(c)}return void 0===a&&(a=setTimeout(T,t)),u}return t=S(t)||0,y(n)&&(d=!!n.leading,f=(s="maxWait"in n)?v(S(n.maxWait)||0,t):f,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=i=a=void 0},w.flush=function(){return void 0===a?u:h(p())},w}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||a.test(t)?c(t.slice(2),r?2:8):f.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})};var j,O="feedback-form-state",T={},h={formRef:document.querySelector(".feedback-form"),inputEmailRef:document.querySelector(".feedback-form input"),inputMessageRef:document.querySelector(".feedback-form textarea")};h.formRef.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,console.log(T),localStorage.setItem(O,JSON.stringify(T)),JSON.parse(localStorage.getItem(O))}),500)),h.formRef.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(O))),e.currentTarget.reset(),localStorage.removeItem(O)})),(j=localStorage.getItem(O))&&(console.log(j),h.formRef.value=j.formData)}();
//# sourceMappingURL=03-feedback.ad5f1628.js.map
