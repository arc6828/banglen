if (self.CavalryLogger) { CavalryLogger.start_js(["jHmwc"]); }

__d("GenderConst",[],(function(a,b,c,d,e,f){e.exports={NOT_A_PERSON:0,FEMALE_SINGULAR:1,MALE_SINGULAR:2,FEMALE_SINGULAR_GUESS:3,MALE_SINGULAR_GUESS:4,MIXED_UNKNOWN:5,NEUTER_SINGULAR:6,UNKNOWN_SINGULAR:7,FEMALE_PLURAL:8,MALE_PLURAL:9,NEUTER_PLURAL:10,UNKNOWN_PLURAL:11}}),null);
__d("IntlVariations",[],(function(a,b,c,d,e,f){e.exports={BITMASK_NUMBER:28,BITMASK_GENDER:3,NUMBER_ZERO:16,NUMBER_ONE:4,NUMBER_TWO:8,NUMBER_FEW:20,NUMBER_MANY:12,NUMBER_OTHER:24,GENDER_MALE:1,GENDER_FEMALE:2,GENDER_UNKNOWN:3}}),null);
__d("warning",["requireCond","cr:888908","cr:1105154"],(function(a,b,c,d,e,f){a=b("cr:888908");c=a;e.exports=c}),null);
__d("InlineFbtResult",["requireCond","cr:1183579"],(function(a,b,c,d,e,f){a=b("cr:1183579");e.exports=a}),null);
__d("FbtReactUtil",[],(function(a,b,c,d,e,f){a=typeof Symbol==="function"&&Symbol["for"]&&Symbol["for"]("react.element")||60103;var g=!1;b={REACT_ELEMENT_TYPE:a,injectReactShim:function(a){var b={validated:!0};g?Object.defineProperty(a,"_store",{configurable:!1,enumerable:!1,writable:!1,value:b}):a._store=b}};e.exports=b}),null);
__d("FbtResult",["FbtReactUtil","FbtResultBase"],(function(a,b,c,d,e,f){var g=function(a){return a.content};a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d){d=a.call(this,c,d)||this;d.$$typeof=b("FbtReactUtil").REACT_ELEMENT_TYPE;d.key=null;d.ref=null;d.type=g;d.props={content:c};return d}c.get=function(a){return new c(a.contents,a.errorListener)};return c}(b("FbtResultBase"));e.exports=a}),null);
__d("TransAppInlineMode",[],(function(a,b,c,d,e,f){a=Object.freeze({STRING_MANAGER:"STRING_MANAGER",TRANSLATION:"TRANSLATION",APPROVE:"APPROVE",REPORT:"REPORT",NO_INLINE:"NO_INLINE"});e.exports=a}),null);
__d("getUnwrappedFbt",["FbtResultGK"],(function(a,b,c,d,e,f){function a(a){a=a.contents;var c=b("FbtResultGK").inlineMode,d=b("FbtResultGK").shouldReturnFbtResult;if(!d&&c!=="REPORT")return(a==null?void 0:a.length)===1&&typeof a[0]==="string"?a[0]:a}e.exports=a}),null);
__d("getFbtResult",["FbtResult","FbtResultGK","InlineFbtResult","SiteData","TransAppInlineMode","getUnwrappedFbt","gkx","recoverableViolation"],(function(a,b,c,d,e,f){e.exports=a;var g=b("FbtResultGK").inlineMode;if(b("SiteData").is_comet&&g==="TRANSLATION"){b("recoverableViolation")("TransAppInlineMode=TRANSLATION should not happen on Comet yet. "+("[inlineMode="+((c=g)!=null?c:"")+"]")+("[runtime_site_is_comet="+String(b("gkx")("708253"))+"]"),"internationalization")}function a(a){var c=b("getUnwrappedFbt")(a);if(c!=null)return c;c=a.contents;var d=a.patternString,e=a.patternHash;return g!=null&&g!=="NO_INLINE"?new(b("InlineFbtResult"))(c,g,d,e):b("FbtResult").get(a)}}),null);
__d("guid",[],(function(a,b,c,d,e,f){e.exports=a;function a(){return"f"+(Math.random()*(1<<30)).toString(16).replace(".","")}}),null);
__d("Deferred",["Promise"],(function(a,b,c,d,e,f){"use strict";b("Promise").resolve();a=function(){function a(a){var c=this;a=a||b("Promise");this.$1=!1;this.$2=new a(function(a,b){c.$3=a,c.$4=b})}var c=a.prototype;c.getPromise=function(){return this.$2};c.resolve=function(a){this.$1=!0,this.$3(a)};c.reject=function(a){this.$1=!0,this.$4(a)};c.isSettled=function(){return this.$1};return a}();e.exports=a}),null);
__d("regeneratorRuntime",["Promise"],(function(a,b,c,d,e,f){"use strict";var g=Object.prototype.hasOwnProperty,h=typeof Symbol==="function"&&(typeof Symbol==="function"?Symbol.iterator:"@@iterator")||"@@iterator",i=e.exports;function j(a,b,c,d){b=Object.create((b||q).prototype);d=new z(d||[]);b._invoke=w(a,c,d);return b}i.wrap=j;function k(a,b,c){try{return{type:"normal",arg:a.call(b,c)}}catch(a){return{type:"throw",arg:a}}}var l="suspendedStart",m="suspendedYield",n="executing",o="completed",p={};function q(){}function r(){}function s(){}var t=s.prototype=q.prototype;r.prototype=t.constructor=s;s.constructor=r;r.displayName="GeneratorFunction";function a(a){["next","throw","return"].forEach(function(b){a[b]=function(a){return this._invoke(b,a)}})}i.isGeneratorFunction=function(a){a=typeof a==="function"&&a.constructor;return a?a===r||(a.displayName||a.name)==="GeneratorFunction":!1};i.mark=function(a){Object.setPrototypeOf?Object.setPrototypeOf(a,s):Object.assign(a,s);a.prototype=Object.create(t);return a};i.awrap=function(a){return new u(a)};function u(a){this.arg=a}function v(a){function c(c,f){var g=a[c](f);c=g.value;return c instanceof u?b("Promise").resolve(c.arg).then(d,e):b("Promise").resolve(c).then(function(a){g.value=a;return g})}typeof process==="object"&&process.domain&&(c=process.domain.bind(c));var d=c.bind(a,"next"),e=c.bind(a,"throw");c.bind(a,"return");var f;function g(a,d){var e=f?f.then(function(){return c(a,d)}):new(b("Promise"))(function(b){b(c(a,d))});f=e["catch"](function(a){});return e}this._invoke=g}a(v.prototype);i.async=function(a,b,c,d){var e=new v(j(a,b,c,d));return i.isGeneratorFunction(b)?e:e.next().then(function(a){return a.done?a.value:e.next()})};function w(a,b,c){var d=l;return function(e,f){if(d===n)throw new Error("Generator is already running");if(d===o){if(e==="throw")throw f;return B()}while(!0){var g=c.delegate;if(g){if(e==="return"||e==="throw"&&g.iterator[e]===void 0){c.delegate=null;var h=g.iterator["return"];if(h){h=k(h,g.iterator,f);if(h.type==="throw"){e="throw";f=h.arg;continue}}if(e==="return")continue}h=k(g.iterator[e],g.iterator,f);if(h.type==="throw"){c.delegate=null;e="throw";f=h.arg;continue}e="next";f=void 0;var i=h.arg;if(i.done)c[g.resultName]=i.value,c.next=g.nextLoc;else{d=m;return i}c.delegate=null}if(e==="next")d===m?c.sent=f:c.sent=void 0;else if(e==="throw"){if(d===l){d=o;throw f}c.dispatchException(f)&&(e="next",f=void 0)}else e==="return"&&c.abrupt("return",f);d=n;h=k(a,b,c);if(h.type==="normal"){d=c.done?o:m;var i={value:h.arg,done:c.done};if(h.arg===p)c.delegate&&e==="next"&&(f=void 0);else return i}else h.type==="throw"&&(d=o,e="throw",f=h.arg)}}}a(t);t[h]=function(){return this};t.toString=function(){return"[object Generator]"};function x(a){var b={tryLoc:a[0]};1 in a&&(b.catchLoc=a[1]);2 in a&&(b.finallyLoc=a[2],b.afterLoc=a[3]);this.tryEntries.push(b)}function y(a){var b=a.completion||{};b.type="normal";delete b.arg;a.completion=b}function z(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(x,this),this.reset(!0)}i.keys=function(a){var b=[];for(var c in a)b.push(c);b.reverse();return function c(){while(b.length){var d=b.pop();if(d in a){c.value=d;c.done=!1;return c}}c.done=!0;return c}};function A(a){if(a){var b=a[h];if(b)return b.call(a);if(typeof a.next==="function")return a;if(!isNaN(a.length)){var c=-1;b=function b(){while(++c<a.length)if(g.call(a,c)){b.value=a[c];b.done=!1;return b}b.value=void 0;b.done=!0;return b};return b.next=b}}return{next:B}}i.values=A;function B(){return{value:void 0,done:!0}}z.prototype={constructor:z,reset:function(a){this.prev=0;this.next=0;this.sent=void 0;this.done=!1;this.delegate=null;this.tryEntries.forEach(y);if(!a)for(var b in this)b.charAt(0)==="t"&&g.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=void 0)},stop:function(){this.done=!0;var a=this.tryEntries[0];a=a.completion;if(a.type==="throw")throw a.arg;return this.rval},dispatchException:function(a){if(this.done)throw a;var b=this;function c(c,d){f.type="throw";f.arg=a;b.next=c;return!!d}for(var d=this.tryEntries.length-1;d>=0;--d){var e=this.tryEntries[d],f=e.completion;if(e.tryLoc==="root")return c("end");if(e.tryLoc<=this.prev){var h=g.call(e,"catchLoc"),i=g.call(e,"finallyLoc");if(h&&i){if(this.prev<e.catchLoc)return c(e.catchLoc,!0);else if(this.prev<e.finallyLoc)return c(e.finallyLoc)}else if(h){if(this.prev<e.catchLoc)return c(e.catchLoc,!0)}else if(i){if(this.prev<e.finallyLoc)return c(e.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(a,b){for(var c=this.tryEntries.length-1;c>=0;--c){var d=this.tryEntries[c];if(d.tryLoc<=this.prev&&g.call(d,"finallyLoc")&&this.prev<d.finallyLoc){var e=d;break}}e&&(a==="break"||a==="continue")&&e.tryLoc<=b&&b<=e.finallyLoc&&(e=null);d=e?e.completion:{};d.type=a;d.arg=b;e?this.next=e.finallyLoc:this.complete(d);return p},complete:function(a,b){if(a.type==="throw")throw a.arg;a.type==="break"||a.type==="continue"?this.next=a.arg:a.type==="return"?(this.rval=a.arg,this.next="end"):a.type==="normal"&&b&&(this.next=b)},finish:function(a){for(var b=this.tryEntries.length-1;b>=0;--b){var c=this.tryEntries[b];if(c.finallyLoc===a){this.complete(c.completion,c.afterLoc);y(c);return p}}},"catch":function(a){for(var b=this.tryEntries.length-1;b>=0;--b){var c=this.tryEntries[b];if(c.tryLoc===a){var d=c.completion;if(d.type==="throw"){var e=d.arg;y(c)}return e}}throw new Error("illegal catch attempt")},delegateYield:function(a,b,c){this.delegate={iterator:A(a),resultName:b,nextLoc:c};return p}}}),null);
__d("errorCode",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){throw new Error('errorCode("'+a+'"): This should not happen. Oh noes!')}}),null);
__d("FbtErrorListenerWWW",["FBLogger","killswitch"],(function(a,b,c,d,e,f){a=function(){function a(a){this.$1=a.hash,this.$2=a.translation}var c=a.prototype;c.onStringSerializationError=function(a){var c="Context not logged.";if(!b("killswitch")("JS_RELIABILITY_FBT_LOGGING"))try{var d=JSON.stringify(a);d!=null&&(c=d.substr(0,250))}catch(a){c=a.message}d=(a==null?void 0:(d=a.constructor)==null?void 0:d.name)||"";b("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix('Converting to a string will drop content data. Hash="%s" Translation="%s" Content="%s" (type=%s,%s)',this.$1,this.$2,c,typeof a,d)};c.onStringMethodUsed=function(a){b("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix("Error using fbt string. Used method %s on Fbt string. Fbt string is designed to be immutable and should not be manipulated.",a)};return a}();e.exports=a}),null);
__d("FbtPureStringResult",["FbtResult"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("FbtResult"));e.exports=a}),null);
__d("getFbsResult",["FbtPureStringResult"],(function(a,b,c,d,e,f){function a(a){return new(b("FbtPureStringResult"))(a.contents,a.errorListener)}e.exports=a}),null);
__d("getTranslatedInput",[],(function(a,b,c,d,e,f){e.exports=a;var g="B!N@$T",h={};function a(a){var b=a.table;typeof b==="string"&&b.startsWith(g)&&(b in h||(h[b]=JSON.parse(b.substring(g.length))),b=h[b]);return{table:b,args:a.args}}}),null);
__d("FbtEnv",["requireDeferred","Banzai","FbtErrorListenerWWW","IntlViewerContext","getFbsResult","getFbtResult","getTranslatedInput","promiseDone","FbtHooks"],(function(a,b,c,d,e,f){"use strict";var g,h=b("requireDeferred")("FbtLogging"),i=!1;a={setupOnce:function(){if(i)return;i=!0;(g||(g=b("FbtHooks"))).register({errorListener:function(a){return new(b("FbtErrorListenerWWW"))(a)},getFbsResult:b("getFbsResult"),getFbtResult:b("getFbtResult"),getTranslatedInput:b("getTranslatedInput"),onTranslationOverride:function(a){return b("Banzai").post("intl_qt_event",{hash:a})},getViewerContext:function(){return b("IntlViewerContext")},logImpression:function(a){return b("promiseDone")(h.load().then(function(b){return b.logImpression==null?void 0:b.logImpression(a)}))}})}};e.exports=a}),null);
__d("FbtHooksImpl",[],(function(a,b,c,d,e,f){var g={};a={getErrorListener:function(a){return g.errorListener==null?void 0:g.errorListener(a)},logImpression:function(a){g.logImpression==null?void 0:g.logImpression(a)},onTranslationOverride:function(a){g.onTranslationOverride==null?void 0:g.onTranslationOverride(a)},getFbsResult:function(a){return g.getFbsResult(a)},getFbtResult:function(a){return g.getFbtResult(a)},getTranslatedInput:function(a){var b;return(b=g.getTranslatedInput==null?void 0:g.getTranslatedInput(a))!=null?b:a},getViewerContext:function(){return g.getViewerContext()},register:function(a){Object.assign(g,a)}};e.exports=a}),null);
__d("FbtHooks",["FbtEnv","FbtHooksImpl"],(function(a,b,c,d,e,f){e.exports=b("FbtHooksImpl"),b("FbtEnv").setupOnce()}),null);
__d("FbtTable",["invariant"],(function(a,b,c,d,e,f,g){"use strict";var h={ARG:{INDEX:0,SUBSTITUTION:1},access:function(a,b,c){if(c>=b.length){typeof a==="string"||Array.isArray(a)||g(0,21388,JSON.stringify(a));return a}var d=b[c];d=d[h.ARG.INDEX];if(d==null)return h.access(a,b,c+1);typeof a!=="string"&&!Array.isArray(a)||g(0,20954,typeof a);for(var e=0;e<d.length;++e){var f=a[d[e]];if(f==null)continue;f=h.access(f,b,c+1);if(f!=null)return f}return null}};e.exports=h}),null);
__d("FbtTableAccessor",[],(function(a,b,c,d,e,f){"use strict";a={getEnumResult:function(a){return[[a],null]},getGenderResult:function(a,b,c){return[a,b]},getNumberResult:function(a,b,c){return[a,b]},getSubstitution:function(a){return[null,a]},getPronounResult:function(a){return[[a,"*"],null]}};e.exports=a}),null);
__d("FbtNumberType",["IntlNumberTypeConfig","IntlVariations"],(function(a,b,c,d,e,f){a=new Function("IntlVariations",'"use strict"; return (function(n) {'+b("IntlNumberTypeConfig").impl+"});")(b("IntlVariations"));e.exports={getVariation:a}}),null);
__d("IntlNumberType",["FbtNumberType"],(function(a,b,c,d,e,f){a=function(a){return b("FbtNumberType")};f.get=a}),null);
__d("IntlVariationResolverImpl",["invariant","FbtHooks","IntlNumberType","IntlVariations"],(function(a,b,c,d,e,f,g){var h,i="_1";a={EXACTLY_ONE:i,getNumberVariations:function(a){var c=b("IntlNumberType").get((h||(h=b("FbtHooks"))).getViewerContext().locale).getVariation(a);c&b("IntlVariations").BITMASK_NUMBER||g(0,11647,c,typeof c);return a===1?[i,c,"*"]:[c,"*"]},getGenderVariations:function(a){a&b("IntlVariations").BITMASK_GENDER||g(0,11648,a,typeof a);return[a,"*"]}};e.exports=a}),null);
__d("IntlVariationResolver",["IntlHoldoutGK","IntlVariationResolverImpl"],(function(a,b,c,d,e,f){var g=b("IntlVariationResolverImpl").EXACTLY_ONE;a={getNumberVariations:function(a){return b("IntlHoldoutGK").inIntlHoldout?a===1?[g,"*"]:["*"]:b("IntlVariationResolverImpl").getNumberVariations(a)},getGenderVariations:function(a){return b("IntlHoldoutGK").inIntlHoldout?["*"]:b("IntlVariationResolverImpl").getGenderVariations(a)}};e.exports=a}),null);
__d("NumberFormatConsts",["NumberFormatConfig"],(function(a,b,c,d,e,f){a={get:function(a){return b("NumberFormatConfig")}};e.exports=a}),null);
__d("escapeRegex",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.replace(/([.?*+\^$\[\]\\(){}|\-])/g,"\\$1")}e.exports=a}),null);
__d("intlNumUtils",["FbtHooks","NumberFormatConsts","escapeRegex"],(function(a,b,c,d,e,f){var g,h=3;f=["\u0433\u0440\u043d.","\u0434\u0435\u043d.","\u043b\u0432.","\u043c\u0430\u043d.","\u0564\u0580.","\u062c.\u0645.","\u062f.\u0625.","\u062f.\u0627.","\u062f.\u0628.","\u062f.\u062a.","\u062f.\u062c.","\u062f.\u0639.","\u062f.\u0643.","\u062f.\u0644.","\u062f.\u0645.","\u0631.\u0633.","\u0631.\u0639.","\u0631.\u0642.","\u0631.\u064a.","\u0644.\u0633.","\u0644.\u0644.","\u0783.","B/.","Bs.","Fr.","kr.","L.","p.","S/."];var i={};function j(a){i[a]||(i[a]=new RegExp(a,"i"));return i[a]}var k=j(f.reduce(function(a,c,d){return a+(d?"|":"")+"("+b("escapeRegex")(c)+")"},""));function l(a,c,d,e,f,g,i){d===void 0&&(d="");e===void 0&&(e=".");f===void 0&&(f=0);g===void 0&&(g={primaryGroupSize:h,secondaryGroupSize:h});var k=g.primaryGroupSize||h;g=g.secondaryGroupSize||k;i=i&&i.digits;var l;c==null?l=a.toString():typeof a==="string"?l=r(a,c):l=p(a,c);a=l.split(".");c=a[0];l=a[1];if(Math.abs(parseInt(c,10)).toString().length>=f){a="$1"+d+"$2$3";f="(\\d)(\\d{"+(k-0)+"})($|\\D)";k=c.replace(j(f),a);if(k!=c){c=k;f="(\\d)(\\d{"+(g-0)+"})("+b("escapeRegex")(d)+")";g=j(f);while((k=c.replace(g,a))!=c)c=k}}i!=null&&(c=m(c,i),l=l&&m(l,i));d=c;l&&(d+=e+l);return d}function m(a,b){var c="";for(var d=0;d<a.length;++d){var e=b[a.charCodeAt(d)-48];c+=e!==void 0?e:a[d]}return c}function a(a,c){var d=b("NumberFormatConsts").get((g||(g=b("FbtHooks"))).getViewerContext().locale);return l(a,c,"",d.decimalSeparator,d.minDigitsForThousandsSeparator,d.standardDecimalPatternInfo,d.numberingSystemData)}function n(a,c){var d=b("NumberFormatConsts").get((g||(g=b("FbtHooks"))).getViewerContext().locale);return l(a,c,d.numberDelimiter,d.decimalSeparator,d.minDigitsForThousandsSeparator,d.standardDecimalPatternInfo,d.numberingSystemData)}function o(a){return a&&Math.floor(Math.log10(Math.abs(a)))}function c(a,b,c){var d=o(a),e=a;d<c&&(e=a*Math.pow(10,-d+c));a=Math.pow(10,o(e)-c+1);e=Math.round(e/a)*a;if(d<c){e/=Math.pow(10,-d+c);if(b==null)return n(e,c-d-1)}return n(e,b)}function p(a,b){b=b==null?0:b;var c=Math.pow(10,b);a=a;a=Math.round(a*c)/c;a+="";if(!b)return a;if(a.indexOf("e-")!==-1)return a;c=a.indexOf(".");var d;c==-1?(a+=".",d=b):d=b-(a.length-c-1);for(var b=0,c=d;b<c;b++)a+="0";return a}var q=function(a,b){a=a;for(var c=0;c<b;c++)a+="0";return a};function r(a,b){var c=a.indexOf("."),d=c===-1?a:a.slice(0,c);a=c===-1?"":a.slice(c+1);return b!=null?d+"."+q(a.slice(0,b),b-a.length):d}function s(a,c,d){d===void 0&&(d="");var e=u(),f=a;e&&(f=a.split("").map(function(a){return e[a]||a}).join("").trim());f=f.replace(/^[^\d]*\-/,"\x02");f=f.replace(k,"");a=b("escapeRegex")(c);c=b("escapeRegex")(d);d=j("^[^\\d]*\\d.*"+a+".*\\d[^\\d]*$");if(!d.test(f)){d=j("(^[^\\d]*)"+a+"(\\d*[^\\d]*$)");if(d.test(f)){f=f.replace(d,"$1\x01$2");return t(f)}d=j("^[^\\d]*[\\d "+b("escapeRegex")(c)+"]*[^\\d]*$");d.test(f)||(f="");return t(f)}d=j("(^[^\\d]*[\\d "+c+"]*)"+a+"(\\d*[^\\d]*$)");f=d.test(f)?f.replace(d,"$1\x01$2"):"";return t(f)}function t(a){a=a.replace(/[^0-9\u0001\u0002]/g,"").replace("\x01",".").replace("\x02","-");var b=Number(a);return a===""||isNaN(b)?null:b}function u(){var a=b("NumberFormatConsts").get((g||(g=b("FbtHooks"))).getViewerContext().locale),c={};a=a.numberingSystemData&&a.numberingSystemData.digits;if(a==null)return null;for(var d=0;d<a.length;d++)c[a.charAt(d)]=d.toString();return c}function d(a){var c=b("NumberFormatConsts").get((g||(g=b("FbtHooks"))).getViewerContext().locale);return s(a,c.decimalSeparator||".",c.numberDelimiter)}var v={formatNumber:a,formatNumberRaw:l,formatNumberWithThousandDelimiters:n,formatNumberWithLimitedSigFig:c,parseNumber:d,parseNumberRaw:s,truncateLongNumber:r,getFloatString:function(a,b,c){a=String(a);a=a.split(".");b=v.getIntegerString(a[0],b);return a.length===1?b:b+c+a[1]},getIntegerString:function(a,b){b=b;b===""&&(b=",");a=String(a);var c=/(\d+)(\d{3})/;while(c.test(a))a=a.replace(c,"$1"+b+"$2");return a}};e.exports=v}),null);
__d("IntlPhonologicalRewrites",["IntlPhonologicalRules"],(function(a,b,c,d,e,f){"use strict";a={get:function(a){return b("IntlPhonologicalRules")}};e.exports=a}),null);
__d("IntlPunctuation",["FbtHooks","IntlPhonologicalRewrites"],(function(a,b,c,d,e,f){var g;d="[.!?\u3002\uff01\uff1f\u0964\u2026\u0eaf\u1801\u0e2f\uff0e]";var h=new RegExp(d+"[)\"'\xbb\u0f3b\u0f3d\u2019\u201d\u203a\u3009\u300b\u300d\u300f\u3011\u3015\u3017\u3019\u301b\u301e\u301f\ufd3f\uff07\uff09\uff3d\\s]*$"),i={};function j(a){var b;b=(b=a)!=null?b:"";var c=i[b];c==null&&(c=i[b]=k(a));return c}function k(a){var c=[];a=b("IntlPhonologicalRewrites").get(a);for(var d in a.patterns){var e=a.patterns[d];for(var f in a.meta){var g=new RegExp(f.slice(1,-1),"g"),h=a.meta[f];d=d.replace(g,h);e=e.replace(g,h)}e==="javascript"&&(e=function(a){return a.slice(1).toLowerCase()});c.push([new RegExp(d.slice(1,-1),"g"),e])}return c}function a(a){var c=j((g||(g=b("FbtHooks"))).getViewerContext().locale);a=a;for(var d=0;d<c.length;d++){var e=c[d],f=e[0];e=e[1];a=a.replace(f,e)}return a.replace(/\x01/g,"")}function c(a){return typeof a!=="string"?!1:h.test(a)}e.exports={PUNCT_CHAR_CLASS:d,endsInPunct:c,applyPhonologicalRules:a}}),null);
__d("substituteTokens",["invariant","IntlPunctuation"],(function(a,b,c,d,e,f,g){var h=new RegExp("\\{([^}]+)\\}("+b("IntlPunctuation").PUNCT_CHAR_CLASS+"*)","g");function i(a){return a}function a(a,c){if(c==null)return a;typeof c==="object"||g(0,6041,a);var d=[],e=[];a=a.replace(h,function(a,f,g){a=c[f];if(a!=null&&typeof a==="object"){d.push(a);e.push(f);return"\x17"+g}else if(a===null)return"";return String(a)+(b("IntlPunctuation").endsInPunct(String(a))?"":g)}).split("\x17").map(b("IntlPunctuation").applyPhonologicalRules);if(a.length===1)return a[0];var f=a[0]!==""?[a[0]]:[];for(var j=0;j<d.length;j++)f.push(i(d[j])),a[j+1]!==""&&f.push(a[j+1]);return f}e.exports=a}),null);
__d("fbt",["invariant","FbtEnv","FbtHooks","FbtQTOverrides","FbtResultBase","FbtTable","FbtTableAccessor","GenderConst","IntlVariationResolver","intlNumUtils","substituteTokens"],(function(a,b,c,d,e,f,g){var h;b("FbtEnv").setupOnce();var i=b("FbtQTOverrides").overrides,j=b("IntlVariationResolver").getGenderVariations,k=b("IntlVariationResolver").getNumberVariations,l=!1,m=b("FbtTable").ARG,n={NUMBER:0,GENDER:1},o={OBJECT:0,POSSESSIVE:1,REFLEXIVE:2,SUBJECT:3},p={};c=function(){};c._=function(a,c,d){if(((d==null?void 0:d.hk)||(d==null?void 0:d.ehk))&&l)return{text:a,fbt:!0,hashKey:d.hk};a=(h||(h=b("FbtHooks"))).getTranslatedInput({table:a,args:c,options:d});c=a.table;d=a.args;a={};if(c.__vcg!=null){d=d||[];var e=(h||(h=b("FbtHooks"))).getViewerContext();e=e.GENDER;var f=j(e);d.unshift(b("FbtTableAccessor").getGenderResult(f,null,e))}d&&(typeof c!=="string"&&(c=b("FbtTable").access(c,d,0)),a=Object.assign.apply(Object,[{}].concat(d.map(function(a){return a[m.SUBSTITUTION]||{}}))),c!==null||g(0,479));var k;if(Array.isArray(c)){f=c[0];k=c[1];e="1_"+k;i[e]!=null&&i[e]!==""&&(f=i[e],(h||(h=b("FbtHooks"))).onTranslationOverride(k));(h||(h=b("FbtHooks"))).logImpression(k)}else if(typeof c==="string")f=c;else throw new Error("Table access did not result in string: "+(c===void 0?"undefined":JSON.stringify(c))+", Type: "+typeof c);d=p[f];e=q(a);if(d&&!e)return d;else{c=b("substituteTokens")(f,a);d=s(c,f,k);e||(p[f]=d);return d}};function q(a){for(var b in a)return!0;return!1}c._enum=function(a,c){return b("FbtTableAccessor").getEnumResult(a)};c._subject=function(a){return b("FbtTableAccessor").getGenderResult(j(a),null,a)};c._param=function(a,c,d){var e;e=(e={},e[a]=c,e);if(d)if(d[0]===n.NUMBER){var f=d.length>1?d[1]:c;typeof f==="number"||g(0,484);var h=k(f);typeof c==="number"&&(e[a]=b("intlNumUtils").formatNumberWithThousandDelimiters(c));return b("FbtTableAccessor").getNumberResult(h,e,f)}else if(d[0]===n.GENDER){d.length>1||g(0,485);a=d[1];c=j(a);return b("FbtTableAccessor").getGenderResult(c,e,a)}else g(0,486);else return b("FbtTableAccessor").getSubstitution(e)};c._plural=function(a,c,d){var e=k(a),f={};c&&(typeof d==="number"?f[c]=b("intlNumUtils").formatNumberWithThousandDelimiters(d):f[c]=d||b("intlNumUtils").formatNumberWithThousandDelimiters(a));return b("FbtTableAccessor").getNumberResult(e,f,a)};c._pronoun=function(a,c,d){c!==b("GenderConst").NOT_A_PERSON||!d||!d.human||g(0,487);d=r(a,c);return b("FbtTableAccessor").getPronounResult(d)};function r(a,c){switch(c){case b("GenderConst").NOT_A_PERSON:return a===o.OBJECT||a===o.REFLEXIVE?b("GenderConst").NOT_A_PERSON:b("GenderConst").UNKNOWN_PLURAL;case b("GenderConst").FEMALE_SINGULAR:case b("GenderConst").FEMALE_SINGULAR_GUESS:return b("GenderConst").FEMALE_SINGULAR;case b("GenderConst").MALE_SINGULAR:case b("GenderConst").MALE_SINGULAR_GUESS:return b("GenderConst").MALE_SINGULAR;case b("GenderConst").MIXED_UNKNOWN:case b("GenderConst").FEMALE_PLURAL:case b("GenderConst").MALE_PLURAL:case b("GenderConst").NEUTER_PLURAL:case b("GenderConst").UNKNOWN_PLURAL:return b("GenderConst").UNKNOWN_PLURAL;case b("GenderConst").NEUTER_SINGULAR:case b("GenderConst").UNKNOWN_SINGULAR:return a===o.REFLEXIVE?b("GenderConst").NOT_A_PERSON:b("GenderConst").UNKNOWN_PLURAL}return b("GenderConst").NOT_A_PERSON}c._name=function(a,c,d){var e=j(d),f={};f[a]=c;return b("FbtTableAccessor").getGenderResult(e,f,d)};function s(a,c,d){a=typeof a==="string"?[a]:a;var e=(h||(h=b("FbtHooks"))).getErrorListener({translation:c,hash:d});a=h.getFbtResult({contents:a,errorListener:e,patternString:c,patternHash:d});return a}c.enableJsonExportMode=function(){l=!0};c.disableJsonExportMode=function(){l=!1};function a(a){return a instanceof b("FbtResultBase")}c.isFbtInstance=a;e.exports=c}),null);
__d("getAsyncHeaders",["ZeroCategoryHeader","isFacebookURI"],(function(a,b,c,d,e,f){e.exports=a;function a(a){var c={};b("isFacebookURI")(a)&&b("ZeroCategoryHeader").value&&(c[b("ZeroCategoryHeader").header]=b("ZeroCategoryHeader").value);return c}}),null);
__d("normalizeBoundingClientRect",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,b){a=a.ownerDocument.documentElement;var c=a?a.clientLeft:0;a=a?a.clientTop:0;var d=Math.round(b.left)-c;c=Math.round(b.right)-c;var e=Math.round(b.top)-a;b=Math.round(b.bottom)-a;return{left:d,right:c,top:e,bottom:b,width:c-d,height:b-e}}}),null);
__d("getElementRect",["containsNode","normalizeBoundingClientRect"],(function(a,b,c,d,e,f){e.exports=a;function a(a){var c;c=a==null?void 0:(c=a.ownerDocument)==null?void 0:c.documentElement;return!a||!("getBoundingClientRect"in a)||!b("containsNode")(c,a)?{left:0,right:0,top:0,bottom:0,width:0,height:0}:b("normalizeBoundingClientRect")(a,a.getBoundingClientRect())}}),null);
__d("forEachObject",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=Object.prototype.hasOwnProperty;function a(a,b,c){for(var d in a){var e=d;g.call(a,e)&&b.call(c,a[e],e,a)}}}),null);
__d("uuid",[],(function(a,b,c,d,e,f){e.exports=a;function a(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=Math.random()*16|0;a=a=="x"?b:b&3|8;return a.toString(16)})}}),null);