/*

 CSS Browser Selector v0.4.0 (Nov 02, 2010)
 Rafael Lima (http://rafael.adm.br)
 http://rafael.adm.br/css_browser_selector
 License: http://creativecommons.org/licenses/by/2.5/
 Contributors: http://rafael.adm.br/css_browser_selector#contributors
 */
function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);


// jQuery Browser
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(bb\d+|meego).+mobile|avantgo|android|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);


/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-appearance-csscolumns-flexbox-flexboxtweener-inlinesvg-objectfit-preserve3d-smil-svg-touchevents-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,s,i,a;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],t=w[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),y.push((o?"":"no-")+a.join("-"))}}function s(e){var t=x.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?x.className.baseVal=t:x.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(){var e=t.body;return e||(e=i(S?"svg":"body"),e.fake=!0),e}function f(e,n,r,o){var s,a,f,u,d="modernizr",c=i("div"),p=l();if(parseInt(r,10))for(;r--;)f=i("div"),f.id=o?o[r]:d+(r+1),c.appendChild(f);return s=i("style"),s.type="text/css",s.id="s"+d,(p.fake?p:c).appendChild(s),p.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",u=x.style.overflow,x.style.overflow="hidden",x.appendChild(p)),a=n(c,e),p.fake?(p.parentNode.removeChild(p),x.style.overflow=u,x.offsetHeight):c.parentNode.removeChild(c),!!a}function u(e,t){return!!~(""+e).indexOf(t)}function d(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var o;for(var s in e)if(e[s]in t)return n===!1?e[s]:(o=t[e[s]],r(o,"function")?d(o,n||t):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+p(t[o])+":"+r+")");return s=s.join(" or "),f("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,o,s){function l(){d&&(delete z.style,delete z.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var f=m(e,o);if(!r(f,"undefined"))return f}for(var d,c,p,h,v,g=["modernizr","tspan","samp"];!z.style&&g.length;)d=!0,z.modElem=i(g.shift()),z.style=z.modElem.style;for(p=e.length,c=0;p>c;c++)if(h=e[c],v=z.style[h],u(h,"-")&&(h=a(h)),z.style[h]!==n){if(s||r(o,"undefined"))return l(),"pfx"==t?h:!0;try{z.style[h]=o}catch(y){}if(z.style[h]!=v)return l(),"pfx"==t?h:!0}return l(),!1}function v(e,t,n,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?h(a,t,o,s):(a=(e+" "+N.join(i+" ")+i).split(" "),c(a,t,n))}function g(e,t,r){return v(e,n,n,t,r)}var y=[],w=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr,Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var x=t.documentElement,S="svg"===x.nodeName.toLowerCase(),b=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=b,Modernizr.addTest("preserve3d",function(){var e=i("a"),t=i("a");e.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",t.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",e.appendChild(t),x.appendChild(e);var n=t.getBoundingClientRect();return x.removeChild(e),n.width&&n.width<4}),Modernizr.addTest("inlinesvg",function(){var e=i("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var T={}.toString;Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(T.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))});var _=C.testStyles=f;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",b.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");_(r,function(e){n=9===e.offsetTop})}return n});var k="Moz O ms Webkit",E=C._config.usePrefixes?k.split(" "):[];C._cssomPrefixes=E;var R=function(t){var r,o=b.length,s=e.CSSRule;if("undefined"==typeof s)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in s)return"@"+t;for(var i=0;o>i;i++){var a=b[i],l=a.toUpperCase()+"_"+r;if(l in s)return"@-"+a.toLowerCase()+"-"+t}return!1};C.atRule=R;var N=C._config.usePrefixes?k.toLowerCase().split(" "):[];C._domPrefixes=N;var j={elem:i("modernizr")};Modernizr._q.push(function(){delete j.elem});var z={style:j.elem.style};Modernizr._q.unshift(function(){delete z.style}),C.testAllProps=v,C.testAllProps=g,Modernizr.addTest("appearance",g("appearance")),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=g("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=g("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||g(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("flexbox",g("flexBasis","1px",!0)),Modernizr.addTest("flexboxtweener",g("flexAlign","end",!0));var P=C.prefixed=function(e,t,n){return 0===e.indexOf("@")?R(e):(-1!=e.indexOf("-")&&(e=a(e)),t?v(e,t,n):v(e,"pfx"))};Modernizr.addTest("objectfit",!!P("objectFit"),{aliases:["object-fit"]}),o(),s(y),delete C.addTest,delete C.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);


/*! jquery-inputformat 30-12-2014 */
String.prototype.endsWith||Object.defineProperty(String.prototype,"endsWith",{value:function(a,b){var c=this.toString();(void 0===b||b>c.length)&&(b=c.length),b-=a.length;var d=c.indexOf(a,b);return-1!==d&&d===b}}),$.inputformat={defaultOptions:{thousandSep:" ",decimalSep:".",allowDecimals:!1,allowNegative:!1,allowLeadingZero:!1,maxDecimalDigits:"unlimited"},getOptions:function(a){return JSON.parse($(a).attr("input-format"))},getThousandSep:function(a){return this.getOptions(a).thousandSep},getDecimalSep:function(a){return this.getOptions(a).decimalSep},getMaxDecimalDigits:function(a){return this.getOptions(a).maxDecimalDigits},isAllowDecimals:function(a){return this.getOptions(a).allowDecimals},isAllowNegative:function(a){return this.getOptions(a).allowNegative},isAllowLeadingZero:function(a){return this.getOptions(a).allowLeadingZero},getSelectionText:function(){var a="";return window.getSelection?a=window.getSelection().toString():document.selection&&"Control"!=document.selection.type&&(a=document.selection.createRange().text),a},setCaretPosition:function(a,b){if(a.setSelectionRange)a.focus(),a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",b),c.select()}},getCaretPosition:function(a){var b=0;if(document.selection){a.focus();var c=document.selection.createRange();c.moveStart("character",-a.value.length),b=c.text.length}else(a.selectionStart||"0"==a.selectionStart)&&(b=a.selectionStart);return b},replaceAll:function(a,b,c){return c.replace(new RegExp(a,"g"),b)},unformat:function(a,b){var c="",d="",e="",f=$.inputformat.getThousandSep(a),g=$.inputformat.getDecimalSep(a),h=$.inputformat.isAllowLeadingZero(a);if("0"==b)return"0";var i=b.indexOf(g);if(-1==i?c=b:(c=b.substring(0,i),d=i<b.length-1?b.substring(i+1):""),c=$.inputformat.replaceAll(f,"",c.toString()),e=""!==d?c+g+d:c,!h)for(;"0"==e.charAt(0);)e=e.substring(1);return e},format:function(a,b){var c="0"==b?0:$.inputformat.unformat(a,b),d="",e="",f=$.inputformat.getThousandSep(a),g=$.inputformat.getDecimalSep(a),h=c.indexOf(g);-1==h?d=c:(d=c.substring(0,h),e=h<=c.length-1?c.substring(h+1):"");var i=d.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+f);return-1!=h&&""!==e&&(i=i+g+e),i}},$.fn.inputNumber=function(a){if(void 0!==a){if(void 0===a.thousandSep&&(a.thousandSep=$.inputformat.defaultOptions.thousandSep),void 0===a.decimalSep&&(a.decimalSep=$.inputformat.defaultOptions.decimalSep),void 0!==a.maxDecimalDigits){if("unlimited"!=a.maxDecimalDigits&&isNaN(a.maxDecimalDigits))throw"maxDecimalDigits must a number or 'unlimited'"}else a.maxDecimalDigits=$.inputformat.defaultOptions.maxDecimalDigits;if(void 0!==a.allowDecimals){if(a.allowDecimals!==!0&&a.allowDecimals!==!1)throw"allowDecimals must boolean"}else a.allowDecimals=$.inputformat.defaultOptions.allowDecimals;if(void 0!==a.allowNegative){if(a.allowNegative!==!0&&a.allowNegative!==!1)throw"allowNegative must boolean"}else a.allowNegative=$.inputformat.defaultOptions.allowNegative;if(void 0!==a.allowLeadingZero){if(a.allowLeadingZero!==!0&&a.allowLeadingZero!==!1)throw"allowNegative must boolean"}else a.allowLeadingZero=$.inputformat.defaultOptions.allowLeadingZero;if(void 0!==a.numericOnly){if(a.numericOnly!==!0&&a.numericOnly!==!1)throw"numericOnly must boolean";a.numericOnly===!0&&(a.allowDecimals=!1,a.allowNegative=!1,a.thousandSep="")}}else a=$.inputformat.defaultOptions;$(this).attr("input-format",JSON.stringify(a)),$(this).on("paste",function(){var a=this;setTimeout(function(){var b=$.inputformat.unformat(a,a.value);$(a).val(isNaN(b)?$.inputformat.oldValue:$.inputformat.format(a,b))},0)}),$(this).keyup(function(a){var b=$.inputformat.getCaretPosition(this),c=this,d=$(c).val();if(a.ctrlKey)switch(a.keyCode){case 65:case 67:case 88:case 86:return}switch(a.keyCode){case 16:case 17:case 36:case 35:case 37:case 39:break;case 96:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 8:case 46:case 189:setTimeout(function(){var a=$.inputformat.format(c,d),e=a.length-d.length;$(c).val(a),$.inputformat.setCaretPosition(c,b+e)},0)}}),$(this).keydown(function(a){var b=$.inputformat.getCaretPosition(this),c=$(this).val(),d=$.inputformat.getThousandSep(this),e=$.inputformat.getDecimalSep(this),f=$.inputformat.getMaxDecimalDigits(this),g=$.inputformat.isAllowLeadingZero(this);if($.inputformat.oldValue=c,a.ctrlKey)switch(a.keyCode){case 65:case 67:break;case 88:a.preventDefault();break;case 86:a.preventDefault();break;default:a.preventDefault()}else switch(a.keyCode){case 96:case 48:if(g||$.inputformat.getSelectionText()==c||(0===b&&""!==c?a.preventDefault():1==b&&"0"===c&&a.preventDefault()),"unlimited"==f)break;var h=c.lastIndexOf(e);-1!=h&&b>h&&c.length-h==f+1&&a.preventDefault();break;case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(0===b&&0===c.indexOf("-")&&a.preventDefault(),g||1==b&&"0"===c&&a.preventDefault(),"unlimited"==f)break;var i=c.lastIndexOf(e);-1!=i&&b>i&&c.length-i==f+1&&a.preventDefault();break;case 36:case 9:case 8:c.substr(b-1,1)==d&&(c=c.substr(0,b)+c.substr(b),$(this).val(c));break;case 46:case 35:case 37:case 39:break;case 110:case 190:$.inputformat.isAllowDecimals(this)!==!0&&a.preventDefault(),-1!=c.indexOf(e)&&a.preventDefault(),b<c.length&&a.preventDefault();break;case 109:case 189:$.inputformat.isAllowNegative(this)!==!0&&a.preventDefault(),b>0?a.preventDefault():0===c.indexOf("-")&&a.preventDefault();break;default:a.preventDefault()}})};



/*!
 Autosize 3.0.15
 license: MIT
 http://www.jacklmoore.com/autosize
 */
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module);else{var n={exports:{}};t(n.exports,n),e.autosize=n.exports}}(this,function(e,t){"use strict";function n(e){function t(){var t=window.getComputedStyle(e,null);p=t.overflowY,"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),c="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(c)&&(c=0),i()}function n(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,p=t,f&&(e.style.overflowY=t),o()}function o(){var t=window.pageYOffset,n=document.body.scrollTop,o=e.style.height;e.style.height="auto";var i=e.scrollHeight+c;return 0===e.scrollHeight?void(e.style.height=o):(e.style.height=i+"px",v=e.clientWidth,document.documentElement.scrollTop=t,void(document.body.scrollTop=n))}function i(){var t=e.style.height;o();var i=window.getComputedStyle(e,null);if(i.height!==e.style.height?"visible"!==p&&n("visible"):"hidden"!==p&&n("hidden"),t!==e.style.height){var r=d("autosize:resized");e.dispatchEvent(r)}}var s=void 0===arguments[1]?{}:arguments[1],a=s.setOverflowX,l=void 0===a?!0:a,u=s.setOverflowY,f=void 0===u?!0:u;if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!r.has(e)){var c=null,p=null,v=e.clientWidth,h=function(){e.clientWidth!==v&&i()},y=function(t){window.removeEventListener("resize",h,!1),e.removeEventListener("input",i,!1),e.removeEventListener("keyup",i,!1),e.removeEventListener("autosize:destroy",y,!1),e.removeEventListener("autosize:update",i,!1),r["delete"](e),Object.keys(t).forEach(function(n){e.style[n]=t[n]})}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",y,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",i,!1),window.addEventListener("resize",h,!1),e.addEventListener("input",i,!1),e.addEventListener("autosize:update",i,!1),r.add(e),l&&(e.style.overflowX="hidden",e.style.wordWrap="break-word"),t()}}function o(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=d("autosize:destroy");e.dispatchEvent(t)}}function i(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=d("autosize:update");e.dispatchEvent(t)}}var r="function"==typeof Set?new Set:function(){var e=[];return{has:function(t){return Boolean(e.indexOf(t)>-1)},add:function(t){e.push(t)},"delete":function(t){e.splice(e.indexOf(t),1)}}}(),d=function(e){return new Event(e)};try{new Event("test")}catch(s){d=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}var a=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(a=function(e){return e},a.destroy=function(e){return e},a.update=function(e){return e}):(a=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return n(e,t)}),e},a.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e},a.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e}),t.exports=a});



//! Likely 2.0.8 by Ilya Birman, ilyabirman.net
//! Rewritten sans jQuery by Evgeny Steblinsky, volter9.github.io
//! Inspired by Social Likes by Artem Sapegin, http://sapegin.me
!function t(e,n,i){function o(c,s){if(!n[c]){if(!e[c]){var u="function"==typeof require&&require;if(!s&&u)return u(c,!0);if(r)return r(c,!0);throw new Error("Cannot find module '"+c+"'")}var a=n[c]={exports:{}};e[c][0].call(a.exports,function(t){var n=e[c][1][t];return o(n?n:t)},a,a.exports,t,e,n,i)}return n[c].exports}for(var r="function"==typeof require&&require,c=0;c<i.length;c++)o(i[c]);return o}({1:[function(t,e){function n(t,e,n){this.widget=t,this.likely=e,this.options=c.merge(n),this.init()}var i=t("./services"),o=t("./config"),r=t("./fetch"),c=t("./utils"),s=t("./dom"),u='<span class="{className}">{content}</span>';n.prototype={init:function(){this.detectService(),this.detectParams(),this.service&&(this.initHtml(),setTimeout(this.initCounter.bind(this),0))},update:function(t){var e="."+o.prefix+"counter";counters=s.findAll(e,this.widget),c.extend(this.options,c.merge({forceUpdate:!1},t)),c.toArray(counters).forEach(function(t){t.parentNode.removeChild(t)}),this.initCounter()},detectService:function(){var t=this.widget,e=c.getDataset(t).service;if(!e){for(var n=t.className.split(" "),o=0;o<n.length&&!(n[o]in i);o++);e=n[o]}e&&(this.service=e,c.extend(this.options,i[e]))},detectParams:function(){var t=this.options,e=c.getDataset(this.widget);if(e.counter){var n=parseInt(e.counter,10);isNaN(n)?t.counterUrl=e.counter:t.counterNumber=n}t.title=e.title||t.title,t.url=e.url||t.url},initHtml:function(){var t=this.options,e=this.widget,n=e.innerHTML;e.addEventListener("click",this.click.bind(this)),e.classList.remove(this.service),e.className+=" "+this.className("widget");var i=c.template(u,{className:this.className("button"),content:n}),o=c.template(u,{className:this.className("icon"),content:s.wrapSVG(t.svgi)});e.innerHTML=o+i},initCounter:function(){var t=this.options;t.counters&&t.counterNumber?this.updateCounter(t.counterNumber):t.counterUrl&&r(this.service,t.url,t)(this.updateCounter.bind(this))},className:function(t){var e=o.prefix+t;return e+" "+e+"_"+this.service},updateCounter:function(t){t=parseInt(t,10)||0;var e=s.find("."+o.name+"__counter",this.widget);e&&e.parentNode.removeChild(e);var n={className:this.className("counter"),content:t};t||this.options.zeroes||(n.className+=" "+o.prefix+"counter_empty",n.content=""),this.widget.appendChild(s.createNode(c.template(u,n))),this.likely.updateCounter(this.service,t)},click:function(){var t=this.options;if(t.click.call(this)){var e=c.makeUrl(t.popupUrl,{url:t.url,title:t.title});s.openPopup(this.addAdditionalParamsToUrl(e),o.prefix+this.service,t.popupWidth,t.popupHeight)}return!1},addAdditionalParamsToUrl:function(t){var e=c.query(c.merge(this.widget.dataset,this.options.data)),n=-1===t.indexOf("?")?"?":"&";return""===e?t:t+n+e}},e.exports=n},{"./config":2,"./dom":3,"./fetch":6,"./services":11,"./utils":17}],2:[function(t,e){var n="https:"===window.location.protocol;e.exports={name:"likely",prefix:"likely__",secure:n,protocol:n?"https:":"http:"}},{}],3:[function(t,e){var n=document.createElement("div"),i=0,o=e.exports={wrapSVG:function(t){return'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M'+t+'z"/></svg>'},createNode:function(t){return n.innerHTML=t,n.children[0]},getScript:function(t){var e=document.createElement("script"),n=document.head;e.type="text/javascript",e.src=t,n.appendChild(e),n.removeChild(e)},getJSON:function(t,e){var n=encodeURIComponent("random_fun_"+ ++i);t=t.replace(/callback=(\?)/,"callback="+n),window[n]=e,o.getScript(t)},find:function(t,e){return(e||document).querySelector(t)},findAll:function(t,e){return(e||document).querySelectorAll(t)},openPopup:function(t,e,n,i){var o=Math.round(screen.width/2-n/2),r=0;screen.height>i&&(r=Math.round(screen.height/3-i/2));var c="left="+o+",top="+r+",width="+n+",height="+i+",personalbar=0,toolbar=0,scrollbars=1,resizable=1",s=window.open(t,e,c);return s?(s.focus(),s):location.href=t}}},{}],4:[function(t,e){e.exports=function(t){var e=[];return function(n){var i=typeof n;return"undefined"==i?t:void("function"==i?e.push(n):(t=n,e.forEach(function(t){t(n)})))}}},{}],5:[function(t){var e=t("./index.js");window.likely=e,window.addEventListener("load",e.initiate)},{"./index.js":7}],6:[function(t,e){var n=t("./services"),i=t("./factory"),o=t("./utils"),r=(t("./dom"),{});e.exports=function(t,e,c){r[t]||(r[t]={});var s=r[t],u=s[e];if(!c.forceUpdate&&u)return u;u=i();var a=o.makeUrl(c.counterUrl,{url:e});return n[t].counter(a,u,e),s[e]=u}},{"./dom":3,"./factory":4,"./services":11,"./utils":17}],7:[function(t,e){"use strict";var n=t("./widget"),i=t("./config"),o=t("./utils"),r=t("./dom"),c=function(t,e){e=e||{};var r=t[i.name];return r?r.update(e):t[i.name]=new n(t,o.merge({},c.defaults,e,o.bools(t))),r};c.initiate=c.initate=function(){var t=r.findAll("."+i.name);o.toArray(t).forEach(c)},c.defaults={counters:!0,timeout:1e3,zeroes:!1,title:document.title,wait:500,url:window.location.href.replace(window.location.hash,"")},e.exports=c},{"./config":2,"./dom":3,"./utils":17,"./widget":18}],8:[function(t,e){var n=t("./dom"),i=function(t,e){var i=this;n.getJSON(t,function(t){try{"function"==typeof i.convertNumber&&(t=i.convertNumber(t)),e(t)}catch(n){}})};e.exports=function(t){t.counter=t.counter||i,t.click=t.click||function(){return!0}}},{"./dom":3}],9:[function(t,e){e.exports={counterUrl:"https://graph.facebook.com/fql?q=SELECT+total_count+FROM+link_stat+WHERE+url%3D%22{url}%22&callback=?",convertNumber:function(t){return t.data[0].total_count},popupUrl:"https://www.facebook.com/sharer/sharer.php?u={url}",popupWidth:600,popupHeight:500}},{}],10:[function(t,e){var n=(t("../config"),t("../utils"),t("../dom"),{counterUrl:"https://share.yandex.net/counter/gpp/?url={url}&callback=?",gid:0,promises:{},popupUrl:"https://plus.google.com/share?url={url}",popupWidth:700,popupHeight:500});e.exports=n},{"../config":2,"../dom":3,"../utils":17}],11:[function(t,e){var n=t("../service"),i=t("../utils"),o=t("../svg.json"),r={odnoklassniki:t("./odnoklassniki"),vkontakte:t("./vk"),pinterest:t("./pinterest"),facebook:t("./facebook"),twitter:t("./twitter"),gplus:t("./gplus")};i.each(r,function(t,e){n(t),t.svgi=o[e],t.name=e}),e.exports=r},{"../service":8,"../svg.json":16,"../utils":17,"./facebook":9,"./gplus":10,"./odnoklassniki":12,"./pinterest":13,"./twitter":14,"./vk":15}],12:[function(t,e){var n=t("../config"),i=t("../utils"),o=t("../dom"),r={counterUrl:n.secure?void 0:"http://connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}",counter:function(t,e){this.promises.push(e),o.getScript(i.makeUrl(t,{index:this.promises.length-1}))},promises:[],popupUrl:"http://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}",popupWidth:640,popupHeight:400};i.set(window,"ODKL.updateCount",function(t,e){r.promises[t](e)}),e.exports=r},{"../config":2,"../dom":3,"../utils":17}],13:[function(t,e){var n=t("../config");e.exports={counterUrl:n.protocol+"//api.pinterest.com/v1/urls/count.json?url={url}&callback=?",convertNumber:function(t){return t.count},popupUrl:n.protocol+"//pinterest.com/pin/create/button/?url={url}&description={title}",popupWidth:630,popupHeight:270}},{"../config":2}],14:[function(t,e){e.exports={popupUrl:"https://twitter.com/intent/tweet?url={url}&text={title}",popupWidth:600,popupHeight:450,click:function(){return/[\.\?:\-–—]\s*$/.test(this.options.title)||(this.options.title+=":"),!0}}},{}],15:[function(t,e){var n=t("../config"),i=t("../utils"),o=t("../dom"),r={counterUrl:"https://vk.com/share.php?act=count&url={url}&index={index}",counter:function(t,e){this.promises.push(e),o.getScript(i.makeUrl(t,{index:this.promises.length-1}))},promises:[],popupUrl:n.protocol+"//vk.com/share.php?url={url}&title={title}",popupWidth:550,popupHeight:330};i.set(window,"VK.Share.count",function(t,e){r.promises[t](e)}),e.exports=r},{"../config":2,"../dom":3,"../utils":17}],16:[function(t,e){e.exports={facebook:"13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h5V9H6V7h2V5c0-2 2-2 2-2h3v2h-3v2h3l-.5 2H10v7h3c2 0 3-1 3-3V3c0-2-1-3-3-3",twitter:"15.96 3.42c-.04.153-.144.31-.237.414l-.118.058v.118l-.59.532-.237.295c-.05.036-.398.21-.413.237V6.49h-.06v.473h-.058v.294h-.058v.296h-.06v.235h-.06v.237h-.058c-.1.355-.197.71-.295 1.064h-.06v.116h-.06c-.02.1-.04.197-.058.296h-.06c-.04.118-.08.237-.118.355h-.06c-.038.118-.078.236-.117.353l-.118.06-.06.235-.117.06v.116l-.118.06v.12h-.06c-.02.057-.038.117-.058.175l-.118.06v.117c-.06.04-.118.08-.177.118v.118l-.237.177v.118l-.59.53-.532.592h-.117c-.06.078-.118.156-.177.236l-.177.06-.06.117h-.118l-.06.118-.176.06v.058h-.118l-.06.118-.353.12-.06.117c-.078.02-.156.04-.235.058v.06c-.118.038-.236.078-.354.118v.058H8.76v.06h-.12v.06h-.176v.058h-.118v.06H8.17v.058H7.99v.06l-.413.058v.06h-.237c-.667.22-1.455.293-2.36.293h-.886v-.058h-.53v-.06H3.27v-.06h-.295v-.06H2.68v-.057h-.177v-.06h-.236v-.058H2.09v-.06h-.177v-.058h-.177v-.06H1.56v-.058h-.12v-.06l-.294-.06v-.057c-.118-.04-.236-.08-.355-.118v-.06H.674v-.058H.555v-.06H.437v-.058H.32l-.06-.12H.142v-.058c-.13-.08-.083.026-.177-.118H1.56v-.06c.294-.04.59-.077.884-.117v-.06h.177v-.058h.237v-.06h.118v-.06h.177v-.057h.118v-.06h.177v-.058l.236-.06v-.058l.236-.06c.02-.038.04-.078.058-.117l.237-.06c.02-.04.04-.077.058-.117h.118l.06-.118h.118c.036-.025.047-.078.118-.118V12.1c-1.02-.08-1.84-.54-2.303-1.183-.08-.058-.157-.118-.236-.176v-.117l-.118-.06v-.117c-.115-.202-.268-.355-.296-.65.453.004.987.008 1.354-.06v-.06c-.254-.008-.47-.08-.65-.175v-.058H2.32v-.06c-.08-.02-.157-.04-.236-.058l-.06-.118h-.117l-.118-.178h-.12c-.077-.098-.156-.196-.235-.294l-.118-.06v-.117l-.177-.12c-.35-.502-.6-1.15-.59-2.006h.06c.204.234.948.377 1.357.415v-.06c-.257-.118-.676-.54-.827-.768V5.9l-.118-.06c-.04-.117-.08-.236-.118-.354h-.06v-.118H.787c-.04-.196-.08-.394-.118-.59-.06-.19-.206-.697-.118-1.005h.06V3.36h.058v-.177h.06v-.177h.057V2.83h.06c.04-.118.078-.236.117-.355h.118v.06c.12.097.237.196.355.295v.118l.118.058c.08.098.157.197.236.295l.176.06.354.413h.118l.177.236h.118l.06.117h.117c.04.06.08.118.118.177h.118l.06.118.235.06.06.117.356.12.06.117.53.176v.06h.118v.058l.236.06v.06c.118.02.236.04.355.058v.06h.177v.058h.177v.06h.176v.058h.236v.06l.472.057v.06l1.417.18v-.237c-.1-.112-.058-.442-.057-.65 0-.573.15-.99.354-1.358v-.117l.118-.06.06-.235.176-.118v-.118c.14-.118.276-.236.414-.355l.06-.117h.117l.12-.177.235-.06.06-.117h.117v-.058H9.7v-.058h.177v-.06h.177v-.058h.177v-.06h.296v-.058h1.063v.058h.294v.06h.177v.058h.178v.06h.177v.058h.118v.06h.118l.06.117c.08.018.158.038.236.058.04.06.08.118.118.177h.118l.06.117c.142.133.193.163.472.178.136-.12.283-.05.472-.118v-.06h.177v-.058h.177v-.06l.236-.058v-.06h.177l.59-.352v.176h-.058l-.06.295h-.058v.117h-.06v.118l-.117.06v.118l-.177.118v.117l-.118.06-.354.412h-.117l-.177.236h.06c.13-.112.402-.053.59-.117l1.063-.353",vkontakte:"13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h10c2 0 3-1 3-3V3c0-2-1-3-3-3zm.452 11.394l-1.603.022s-.345.068-.8-.243c-.598-.41-1.164-1.48-1.604-1.342-.446.144-.432 1.106-.432 1.106s.003.206-.1.315c-.11.12-.326.144-.326.144H7.87s-1.582.095-2.975-1.356c-1.52-1.583-2.862-4.723-2.862-4.723s-.078-.206.006-.305c.094-.112.35-.12.35-.12l1.716-.01s.162.026.277.11c.095.07.15.202.15.202s.276.7.643 1.335c.716 1.238 1.05 1.508 1.293 1.376.353-.193.247-1.75.247-1.75s.006-.565-.178-.817c-.145-.194-.415-.25-.534-.267-.096-.014.062-.238.267-.338.31-.15.853-.16 1.497-.153.502.004.646.035.842.083.59.143.39.694.39 2.016 0 .422-.075 1.018.23 1.215.13.085.453.013 1.256-1.352.38-.647.666-1.407.666-1.407s.062-.136.16-.194c.098-.06.232-.04.232-.04l1.804-.012s.542-.065.63.18c.092.257-.203.857-.94 1.84-1.21 1.612-1.345 1.46-.34 2.394.96.89 1.16 1.325 1.192 1.38.4.66-.44.71-.44.71",gplus:"8,6.5v3h4.291c-0.526,2.01-2.093,3.476-4.315,3.476C5.228,12.976,3,10.748,3,8c0-2.748,2.228-4.976,4.976-4.976c1.442,0,2.606,0.623,3.397,1.603L13.52,2.48C12.192,0.955,10.276,0,8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s7.5-3.582,7.5-8V6.5H8",pinterest:"7.99 0c-4.417 0-8 3.582-8 8 0 3.39 2.11 6.284 5.086 7.45-.07-.633-.133-1.604.028-2.295.145-.624.938-3.977.938-3.977s-.24-.48-.24-1.188c0-1.112.645-1.943 1.448-1.943.683 0 1.012.512 1.012 1.127 0 .686-.437 1.713-.663 2.664-.19.796.398 1.446 1.184 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.255-3.343-3.255-2.276 0-3.612 1.707-3.612 3.472 0 .688.265 1.425.595 1.826.065.08.075.15.055.23-.06.252-.195.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.835-4.84 5.287-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.74 4.976-4.152 4.976-.81 0-1.573-.42-1.834-.92l-.498 1.903c-.18.695-.668 1.566-.994 2.097.75.232 1.544.357 2.37.357 4.417 0 8-3.582 8-8s-3.583-8-8-8",odnoklassniki:"8 6.107c.888 0 1.607-.72 1.607-1.607 0-.888-.72-1.607-1.607-1.607s-1.607.72-1.607 1.607c0 .888.72 1.607 1.607 1.607zM13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h10c2 0 3-1 3-3V3c0-2-1-3-3-3zM8 .75c2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75S4.25 6.57 4.25 4.5C4.25 2.43 5.93.75 8 .75zm3.826 12.634c.42.42.42 1.097 0 1.515-.21.208-.483.313-.758.313-.274 0-.548-.105-.758-.314L8 12.59 5.69 14.9c-.42.418-1.098.418-1.516 0s-.42-1.098 0-1.516L6.357 11.2c-1.303-.386-2.288-1.073-2.337-1.11-.473-.354-.57-1.025-.214-1.5.354-.47 1.022-.567 1.496-.216.03.022 1.4.946 2.698.946 1.31 0 2.682-.934 2.693-.943.474-.355 1.146-.258 1.5.213.355.474.26 1.146-.214 1.5-.05.036-1.035.723-2.338 1.11l2.184 2.184"}},{}],17:[function(t,e){var n={yes:!0,no:!1},i={each:function(t,e){for(var n in t)t.hasOwnProperty(n)&&e(t[n],n)},toArray:function(t){return Array.prototype.slice.call(t)},merge:function(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];if(n)for(var i in n)t[i]=n[i]}return t},extend:function(t,e){for(var n in e)t[n]=e[n]},getDataset:function(t){if("object"==typeof t.dataset)return t.dataset;var e,n,i,o={},r=t.attributes,c=function(t){return t.charAt(1).toUpperCase()};for(e=r.length-1;e>=0;e--)n=r[e],n&&n.name&&/^data-\w[\w\-]*$/.test(n.name)&&(i=n.name.substr(5).replace(/-./g,c),o[i]=n.value);return o},bools:function(t){var e={},o=i.getDataset(t);for(var r in o){var c=o[r];e[r]=n[c]||c}return e},template:function(t,e){return t?t.replace(/\{([^\}]+)\}/g,function(t,n){return n in e?e[n]:t}):""},makeUrl:function(t,e){for(var n in e)e[n]=encodeURIComponent(e[n]);return i.template(t,e)},query:function(t){var e=encodeURIComponent,n=[];for(var i in t)"object"!=typeof t[i]&&n.push(e(i)+"="+e(t[i]));return n.join("&")},set:function(t,e,n){var i=e.split("."),o=null;i.forEach(function(e,n){"undefined"==typeof t[e]&&(t[e]={}),n!==i.length-1&&(t=t[e]),o=e}),t[o]=n}};e.exports=i},{}],18:[function(t,e){function n(t,e){this.container=t,this.options=e,this.countersLeft=0,this.buttons=[],this.number=0,this.init()}var i=t("./button"),o=(t("./services"),t("./config")),r=t("./utils");n.prototype={init:function(){r.toArray(this.container.children).forEach(this.addButton.bind(this)),this.options.counters?(this.timer=setTimeout(this.appear.bind(this),this.options.wait),this.timeout=setTimeout(this.ready.bind(this),this.options.timeout)):this.appear()},addButton:function(t){var e=new i(t,this,this.options);this.buttons.push(e),e.options.counterUrl&&this.countersLeft++},update:function(t){(t.forceUpdate||t.url!==this.options.url)&&(this.countersLeft=this.buttons.length,this.number=0,this.buttons.forEach(function(e){e.update(t)}))},updateCounter:function(t,e){e&&(this.number+=e),this.countersLeft--,0===this.countersLeft&&(this.appear(),this.ready())},appear:function(){this.container.classList.add(o.name+"_visible")},ready:function(){this.timeout&&(clearTimeout(this.timeout),this.container.classList.add(o.name+"_ready"))}},e.exports=n},{"./button":1,"./config":2,"./services":11,"./utils":17}]},{},[5]);



;(function( $, window, document, undefined ){
    $.fn.doubleTapToGo = function( params )
    {
        if( !( 'ontouchstart' in window ) &&
            !navigator.msMaxTouchPoints &&
            !navigator.userAgent.toLowerCase().match( /windows phone os 7/i ) ) return false;

        this.each( function()
        {
            var curItem = false;

            $( this ).on( 'click', function( e )
            {
                var item = $( this );
                if( item[ 0 ] != curItem[ 0 ] )
                {
                    e.preventDefault();
                    curItem = item;
                }
            });

            $( document ).on( 'click touchstart MSPointerDown', function( e )
            {
                var resetItem = true,
                    parents	  = $( e.target ).parents();

                for( var i = 0; i < parents.length; i++ )
                    if( parents[ i ] == curItem[ 0 ] )
                        resetItem = false;

                if( resetItem )
                    curItem = false;
            });
        });
        return this;
    };
})( jQuery, window, document );



// Object-fit polyfill
if (!$.browser.mobile && 'objectFit' in document.documentElement.style === false) {
    document.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('img[data-object-fit]'), function (image) {
            (image.runtimeStyle || image.style).background = 'url("' + image.src + '") no-repeat 50%/' + (image.currentStyle ? image.currentStyle['object-fit'] : image.getAttribute('data-object-fit'));

            image.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + image.width + '\' height=\'' + image.height + '\'%3E%3C/svg%3E';
        });
    });
}


// Tabs
$(function(){

    // a temp value to cache *what* we're about to show
    var target = null;

    // collect all the tabs
    var tabs = $('[role="tab"]').on('click', function () {
        target = $(this.hash).removeAttr('id');
        if (location.hash === this.hash) {
            setTimeout(update);
        }
    }).attr('tabindex', '0');

    // get an array of the panel ids (from the anchor hash)
    var targets = tabs.map(function () {
        return this.hash;
    }).get();

    // use those ids to get a jQuery collection of panels
    var panels = $(targets.join(',')).each(function () {
        // keep a copy of what the original el.id was
        $(this).data('old-id', this.id);
    });

    function update() {
        if (target) {
            target.attr('id', target.data('old-id'));
            target = null;
        }

        var hash = window.location.hash;
        if (targets.indexOf(hash) !== -1) {
            return show(hash);
        }

        // NOTE: this was added after the article was written
        // to fix going "back" on the browser nav to an empty state
        if (!hash) {
            show();
        }
    }

    function show(id) {
        // if no value was given, let's take the first panel
        if (!id) {
            id = targets[0];
        }
        // remove the selected class from the tabs,
        // and add it back to the one the user selected
        tabs.attr('aria-selected', 'false').filter(function () {
            return (this.hash === id);
        }).attr('aria-selected', 'true');

        // now hide all the panels, then filter to
        // the one we're interested in, and show it
        panels.attr('aria-hidden', 'true').filter(id).attr('aria-hidden', 'false');
    }

    window.addEventListener('hashchange', update);

    // initialise
    if (targets.indexOf(window.location.hash) !== -1) {
        update();
    } else {
        show();
    }

});


// Modals

function showModal(e) {
    $(e).addClass('show').removeAttr('aria-hidden');
    $('body').addClass('modal-open');

    // Create the measurement node
    var scrollDiv = document.createElement('div');
    scrollDiv.className = 'modal-scrollbar-measure';
    document.body.appendChild(scrollDiv);

    // Get the scrollbar width
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.style.paddingRight = scrollbarWidth + 'px';

    // Delete the DIV
    document.body.removeChild(scrollDiv);
}

function restoreScrollbar() {
    $('body').removeClass('modal-open');
    document.body.style.paddingRight = 0;
}

function hideModal() {
    var cssTransitionDuration = 200;
    $('.js-modal').removeClass('show').attr('aria-hidden', true);
    setTimeout(restoreScrollbar, cssTransitionDuration);
}



$(function(){
    autosize($('textarea'));


    var filterForm = (function() {
        if($('.js-filter').length>0) {
            var toggle = $('.js-filter-section-toggle'),
                selects = $('.js-select'),
                activeSection = 'b-filter-section--active',
                lockedSection = 'b-filter-section--locked';

            // Функция раскрытия/скрытия секции
            var toggleSection = function () {
                var section = $(this).parent(),
                    wrapper = section.find('.js-filter-section-wrapper');

                if (section.not('.' + lockedSection).hasClass(activeSection)) {
                    section.removeClass(activeSection);
                    wrapper.slideUp(150);
                } else {
                    section.addClass(activeSection).siblings().not('.' + lockedSection).removeClass(activeSection);
                    wrapper.slideDown(150).parent().siblings().not('.' + lockedSection).find('.js-filter-section-wrapper').slideUp(150);
                }
            };

            if (!$.browser.mobile && selects.length > 0) {
                selects.chosen({disable_search_threshold: 100});
            }

            // Прячем секции при загрузке
            $('.js-filter-section').each(function () {
                var filterChecks = $(this).find('input[type="checkbox"]:checked, select option[value!=""]:selected, input[type="text"][value!=""]:not([readonly][autocomplete="off"])');

                if (filterChecks.length == 0) {
                    $(this).find('.js-filter-section-wrapper').hide();
                } else {
                    $(this).addClass(lockedSection).addClass(activeSection);
                }
            });

            // Открываем секцию при клике на тогл
            toggle.on('click', toggleSection);

            $('.js-filter-section').each(function () {
                var inputs = $(this).find('select, input[type="text"]'),
                    checks  = $(this).find('input[type=checkbox]');

                inputs.on('change', function () {
                    if (!$(this).val() == '') {
                        $(this).parents('.js-filter-section').addClass(lockedSection);
                    } else {
                        $(this).parents('.js-filter-section').removeClass(lockedSection);
                    }
                });

                checks.on('click', function () {
                    var activeCheckboxes = checks.filter(':checked').length;

                    if (activeCheckboxes) {
                        $(this).parents('.js-filter-section').addClass(lockedSection);
                    } else {
                        $(this).parents('.js-filter-section').removeClass(lockedSection);
                    }

                });
            });
        }

        $(document).on('click', '.js-filter-show', function() {
            $(this).addClass('hidden');
            $('.js-filter').addClass('filter-expanded');
            window.location.hash = '#filter-search-show';
            $('body').addClass('hidden-scroll-mobile');
        });
        $(document).on('click', '.js-filter-hide', function() {
            $('.js-filter-show').removeClass('hidden');
            $('.js-filter').removeClass('filter-expanded');
            $('body').removeClass('hidden-scroll-mobile');
        });
        $(document).on('click', '.js-filter-showmore', function() {
            $(this).remove();
            $('.js-filter').addClass('filter-full');
            $('.js-filter-additional').removeClass('filter-additional');
        });
    })();


    // Sticky block
    function stickBlock() {
        var $side = $('.main-side:last'),
            bottom = $side.position().top + $side.outerHeight(true);

        $(window).scroll(function(e){
            var $el = $('.js-sticky');
            var isPositionFixed = ($el.css('position') == 'fixed');
            if ($(this).scrollTop() > bottom && !isPositionFixed){
                $el.css({'position': 'fixed', 'top': '10px'});
            }
            if ($(this).scrollTop() < bottom && isPositionFixed) {
                $el.css({'position': 'static'});
            }
        });
    }
    if ($('.js-sticky').length) {
        setTimeout(stickBlock, 2000);
    }


    // My List Pro
    $('.js-mylistpro').each(function(){
        var $list         = $(this),
            $listRow      = $list.find('.js-mylistpro-row'),
            $listCheck    = $listRow.find('.js-mylistpro-toggle'),
            listRowActive = 'av-mylistpro-row-selected',

            toggleRow = function () {
                $listCheck.each(function(){
                    var row = $(this).parents('.js-mylistpro-row');

                    if ($(this).is(':checked')) {
                        row.addClass(listRowActive);
                    } else {
                        row.removeClass(listRowActive);
                    }
                });
            };

        $listRow.filter('.av-mylistpro-row-top').find('.js-mylistpro-toggle').prop('disabled', true);

        toggleRow();

        $listCheck.change(function() {
            toggleRow();
        });
    });


    // Touch Events
    $('.b-nav-list-item').doubleTapToGo();


    // Fake radio
    var fakeRadio      = $('.js-fakeradio'),
        fakeRadioInput = fakeRadio.find('input');

    fakeRadioInput.each(function(){
        if ($(this).is(':checked')) {
            $(this).attr('previousvalue', 'checked');
        }

        $(this).on('click', function(){
            var previousValue = $(this).attr('previousvalue');

            if (previousValue == 'checked') {
                $(this).prop('checked', false).attr('previousvalue', false);
            } else {
                $(this)
                    .prop('checked', true)
                    .attr('previousvalue', 'checked')
                    .parent().siblings()
                    .find('input:checked').click();
            }
        });

    });


    // Modals

    $('.js-modal-close, .js-modal').on('click', function(e) {
        hideModal();
        e.preventDefault();
    });

    $(document).keydown(function(e) {
        if (e.which == 27) {
            hideModal();
            e.preventDefault();
        }
    });

    $('.js-modal-dialog').on('click', function(e){
        e.stopPropagation();
    });


    // show noauth dialog message
    $(document).on('click', '.js-show-noauth-dialog-message', function(e){
        $('.js-modal-login-title').text(textInterface.options['private_messages']);
        $('.js-modal-login-lead').text(textInterface.options['only_registered_users_allowed_private_messages']);
        reloadAfterLogin();
        showModal('.js-modal-login');
        e.preventDefault();
    });

    // show noauth dialog exchange
    $(document).on('click', '.js-show-dialog-exchange-noauth', function(e){
        $('.js-modal-login-title').text(textInterface.options['offer_exchange']);
        $('.js-modal-login-lead').text(textInterface.options['only_registered_users_allowed_exchanged']);
        reloadAfterLogin();
        showModal('.js-modal-login');
        e.preventDefault();
    });

    // show message owner dialog message
    $(document).on('click', '.js-show-message-owner-dialog-message', function(e){
        if (!$(this).hasClass('js-has-dialogs-warnings')) {
            var $messageOwnerDialogForm = $('.js-dialog-message-owner-popup:first');
            $messageOwnerDialogForm.find('.js-dialog-owner-popup-header').html(textInterface.options['ask_yourself_head']);
            $messageOwnerDialogForm.find('.js-dialog-owner-popup-text').html(textInterface.options['ask_yourself_text']);
            showModal($messageOwnerDialogForm);
        }
        e.preventDefault();
    });

    // show message owner exchange message
    $(document).on('click', '.js-show-message-owner-exchange-message', function(e){
        if (!$(this).hasClass('js-has-dialogs-warnings')) {
            var $messageOwnerDialogForm = $('.js-dialog-message-owner-popup:first');
            $messageOwnerDialogForm.find('.js-dialog-owner-popup-header').html(textInterface.options['exchange_yourself_head']);
            $messageOwnerDialogForm.find('.js-dialog-owner-popup-text').html(textInterface.options['exchange_yourself_text']);
            showModal($messageOwnerDialogForm);
        }
        e.preventDefault();
    });

    // show mute message
    $(document).on('click', '.js-show-dialog-exchange-mute, .js-show-dialog-message-mute', function(e){
        if (!$(this).hasClass('js-has-dialogs-warnings')) {
            var $messageOwnerDialogForm = $('.js-dialog-message-mute-popup:first');
            showModal($messageOwnerDialogForm);
        }
        e.preventDefault();
    });

    $('.js-has-dialogs-warnings').on('click', function(e) {
        e.preventDefault();
        var $warningPopup = $('.js-dialog-message-warnings-popup:first');
        showModal($warningPopup);
        $warningPopup.find('.js-submit-warning-accept').prop('disabled', true);
        e.preventDefault();
    });

    $('.js-dialog-delete').on('click', function(e) {
        var $target = $(this).data('target');
        var $deleteConfirm = $('.'+$target);
        showModal($deleteConfirm);
        e.preventDefault();
    });

    $('[name="readWarning"]').change(function(){
        $('.js-submit-warning-accept').prop('disabled', !this.checked);
    });

    $('.js-submit-warning-accept').on('click', function(e){
        e.preventDefault();

        if ($('[name="readWarning"]').is(':checked')){
            $('#readWarningForm').submit();
        } else {
            showModal('.js-modal');
        }
    });

    // show dialog exchange
    $('.js-show-dialog-exchange').on('click', function(e){
        if ($(this).hasClass('js-has-dialogs-warnings')) {
            return false;
        }
        var data = '&ajax_action=getMyList';
        $.ajax({
            url: '/app/ajax',
            type: 'post',
            dataType: 'json',
            data: data,
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            success: function (responce) {
                if(responce.errors){
                    var errorArray = [];
                    $.each(responce.errors, function(index, item) {
                        errorArray.push(item);
                    });
                    alert(errorArray.join("\n"));
                } else {
                    var $dialogFormPopup = $('.js-dialog-exchange-popup:first');

                    if (responce.length == 0) {
                        var $popupTemplate = $('.js-dialog-exchange-noads-popup-template:first').html();
                        $dialogFormPopup.find('.js-dialog-popup-template:first').html($popupTemplate);
                    } else {
                        var $popupTemplate = $('.js-dialog-exchange-adslist-popup-template:first').html();
                        $dialogFormPopup.find('.js-dialog-popup-template:first').html($popupTemplate);

                        $dialogFormPopup.find('.av-exselect:first').empty();
                        var checkedFirst = 'checked';

                        $.each(responce, function(index, item) {
                            var exchangeItemBlock = generateExchangeItemBlock(item, checkedFirst)
                            $dialogFormPopup.find('.av-exselect:first').append(exchangeItemBlock);
                            checkedFirst = '';
                        });
                    }

                    showModal($dialogFormPopup);
                }
            }
        });
        e.preventDefault();
    });

    function generateExchangeItemBlock(item, checkedFirst)
    {
        var exchangeItemBlock = '';

        if (item['module'] == 'boat') {
            var title = '';
            if (item['equipment_type_name'] != undefined) {
                title = item['equipment_type_name'];
            }
            if (item['sub_type'] != null) {
                title = title + ' ' + item['sub_type_name'];
            }
            if (item['brand'] != null) {
                title = title +  ' ' + item['brand'];
            }
            if (item['modification'] != '') {
                title = title + ' ' + item['modification'];
            }
            exchangeItemBlock = '' +
                '<li class="av-exselect-item">' +
                '<label class="av-exselect-label">' +
                '<input type="radio" name="from_ids_id" value="' + item['ids_id'] + '" ' + checkedFirst + '>' +
                '<div class="av-exselect-data">' +
                '<img src="' + item['main_image_preview'] + '" alt="" data-object-fit="cover">' +
                '<h4>' + title + '</h4>' +
                '<small>' + item['year'] + ' ' + textInterface.options['year'] + ', ' + formatMoney(item['price']) + '</small>' +
                '</div>' +
                '</label>' +
                '</li>';
        } else if (item['module'] == 'trailer'){
            exchangeItemBlock = '' +
                '<li class="av-exselect-item">' +
                '<label class="av-exselect-label">' +
                '<input type="radio" name="from_ids_id" value="' + item['ids_id'] + '" ' + checkedFirst + '>' +
                '<div class="av-exselect-data">' +
                '<img src="' + item['main_image_preview'] + '" alt="" data-object-fit="cover">' +
                '<h4>' + item['equipment_type_name'] + ' ' + item['category_name'] + ' ' + item['modification'] + '</h4>' +
                '<small>' + item['year'] + ' ' + textInterface.options['year'] + ', ' + formatMoney(item['price']) + '</small>' +
                '</div>' +
                '</label>' +
                '</li>';
        } else if (item['module'] == 'agro'){
            exchangeItemBlock = '' +
            '<li class="av-exselect-item">' +
            '<label class="av-exselect-label">' +
            '<input type="radio" name="from_ids_id" value="' + item['ids_id'] + '" ' + checkedFirst + '>' +
            '<div class="av-exselect-data">' +
            '<img src="' + item['main_image_preview'] + '" alt="" data-object-fit="cover">' +
            '<h4>' + item['category_name'] + ' ' + item['modification'] + '</h4>' +
            '<small>' + item['year'] + ' ' + textInterface.options['year'] + ', ' + formatMoney(item['price']) + '</small>' +
            '</div>' +
            '</label>' +
            '</li>';
        } else if (item['module'] == 'spec'){
            exchangeItemBlock = '' +
            '<li class="av-exselect-item">' +
            '<label class="av-exselect-label">' +
            '<input type="radio" name="from_ids_id" value="' + item['ids_id'] + '" ' + checkedFirst + '>' +
            '<div class="av-exselect-data">' +
            '<img src="' + item['main_image_preview'] + '" alt="" data-object-fit="cover">' +
            '<h4>' + ' ' + item['category_name'] + ' ' + item['modification'] + '</h4>' +
            '<small>' + item['year'] + ' ' + textInterface.options['year'] + ', ' + formatMoney(item['price']) + '</small>' +
            '</div>' +
            '</label>' +
            '</li>';
        } else {
            var volume='';
            if (item.engine_id != '') {
                if (item.engine_id != 3) {
                    volume = item.engine_volume + ' ' + textInterface.options['cubic_centimeters'];
                } else {
                    volume = item.power + ' ' + textInterface.options['kWt'];
                }
            } else {
                volume = item.engine_volume + ' ' + textInterface.options['cubic_centimeters'];
            }

            exchangeItemBlock = '' +
                '<li class="av-exselect-item">' +
                '<label class="av-exselect-label">' +
                '<input type="radio" name="from_ids_id" value="' + item.ids_id + '" ' + checkedFirst + '>' +
                '<div class="av-exselect-data">' +
                '<img src="' + item.main_image_preview + '" alt="" data-object-fit="cover">' +
                '<h4>' + item.brand_name + ' ' + item.model_name + '</h4>' +
                '<small>' + item.year + ' ' + textInterface.options['year'] + ', ' + volume + ', ' + formatMoney(item.price) + '</small>' +
                '</div>' +
                '</label>' +
                '</li>';
        }

        return exchangeItemBlock;
    }

    // Send claims popup
    $('.js-show-send-claim-popup').on('click', function (e) {
        var $claimPopup = $('.js-modal-send-claim');
        showModal($claimPopup);
        if ($('.js-modal-send-claim.modal-success').length == 0) {
            document.getElementById("sendClaim").reset();
        }
        if ($claimPopup.find('[name="g-recaptcha-response"]').length == 0) {
            var $submitBtn = $claimPopup.find('input[type=submit]');
            $submitBtn.prop("disabled", false);
        }
        e.preventDefault();
    });

    //check if try send dialog comment with empty body
    $("#Dialogs").on('submit', function(){
        var $commentBody = $('textarea[name="comment_body"]');
        if ($commentBody.length){
            if ($commentBody.val().replace(/\s+/g, '') == ''){
                return false;
            }
        }
    });

    $('#sendClaim').on('submit', function (e) {
        e.preventDefault();
        //var host = window.location.host.split('.').slice(-2);
        var data = $('#sendClaim').serialize();
        var errors_block_class= 'error';
        data += '&ajax_action=sendClaim';
        $.ajax({
            url: settingsInterface.options['send_claim_url'],
            type: 'post',
            dataType: 'json',
            data: data,
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            success: function (responce) {
                if (responce.errors){
                    if ($('.'+errors_block_class).length==0) {
                        $('<div class="'+errors_block_class+'"></div>').insertAfter('input[name="captcha[input]"]');
                    }

                    $('.'+errors_block_class).html('');

                    if (typeof responce.errors.captcha != 'undefined') {
                        if (responce.errors.captcha.badCaptcha) {
                            $('.' + errors_block_class).html(responce.errors.captcha.badCaptcha);
                        }

                        if (responce.errors.captcha.missingValue) {
                            $('.' + errors_block_class).html(responce.errors.captcha.missingValue);
                        }
                    }

                    if (typeof responce.errors.claim != 'undefined') {
                        if (responce.errors.claim.notInArray) {
                            $('.' + errors_block_class).html(responce.errors.claim.notInArray);
                        }
                    }

                    if (typeof responce.errors.message_not_exist != 'undefined') {
                        $('.' + errors_block_class).html(responce.errors.message_not_exist);
                    }
                } else {
                    $('.js-modal-send-claim').addClass('modal-success');
                    $('form').remove('#sendClaim');
                    $('.js-modal-claim-form').addClass('modal-dialog-hidden');
                    $('.js-modal-claim-form-success').removeClass('modal-dialog-hidden');
                }
            }
        });
    });

    // confirm delete personal message
    $('.js-ask-delete').on('click', function(e) {
        showModal('.js-confirm-delete-message-popup');
        var href = $(this).attr('href');
        var target = $('.js-confirm-delete-message');
        $.each(target, function (k, v) {
            var query = '';
            if ($(v).attr('data-reason-id') !== undefined) {
                query = '?reason=' + $(v).attr('data-reason-id');
            }
            $(v).attr('href', href + query);
        });
        e.preventDefault();
    });

    // show noauth bookmark message
    $('.js-show-noauth-bookmark-message').on('click', function(e) {
        $('.js-modal-login-title').text(textInterface.options['bookmarks']);
        $('.js-modal-login-lead').text(textInterface.options['only_registered_users_allowed_bookmarks']);
        reloadAfterLogin();
        showModal('.js-modal-login');
        e.preventDefault();
    });


    var sendBookmark = function(e) {
        var $el = $(this);
        var activeClass = 'bookmark--active';
        $el.unbind('click', sendBookmark);

        var action = 'add';
        if ($el.hasClass(activeClass)) {
            action = 'remove';
        }

        $.ajax({
            url: $el.data('bookmark-action'),
            type: 'post',
            dataType: 'json',
            data: {
                'action': action,
                'user_id': $el.data('user-id'),
                'id_ids': $el.data('id-ids'),
                'module': $el.data('module'),
                'category': $el.data('category')
                , 'message_status': $el.data('message-status')
            },
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            success: function (jsonResponse) {
                if (jsonResponse == true) {
                    var $userCounter = $('.js-user-counter');
                    var counter = $userCounter.text().trim();
                    if (counter != '') {
                        counter = counter.replace('(', '');
                        counter = counter.replace(')', '');
                        counter = counter.replace(' ', '');
                        counter = parseInt(counter);
                    } else {
                        counter = 0;
                    }

                    var textSuccess = textInterface.options['bookmarks_success_add'];

                    if (action == 'remove') {
                        counter = counter - 1;
                        $el.removeClass(activeClass);
                        textSuccess = textInterface.options['bookmarks_success_remove'];
                    } else {
                        counter = counter + 1;
                        $el.addClass(activeClass);
                    }

                    showNotification(textSuccess);

                    if (counter > 0) {
                        $userCounter.text('('+ counter + ')');
                    } else {
                        $userCounter.text('');
                    }

                    $el.on('click', sendBookmark);
                } else {
                    if (jsonResponse == 'auth_error') {
                        location.reload();
                    }
                }
            }
        });
    };

    $('.js-send-bookmark').on('click', sendBookmark);

    // delete bookmark from own bookmarks list
    $('.js-bookmark-member-area-delete').on('click', function (e) {
        var $el = $(this);
        $el.off('click');
        $.ajax({
            url: $el.data('bookmark-action'),
            type: 'post',
            dataType: 'json',
            data: {
                'action': 'remove',
                'id_ids': $el.data('id-ids'),
                'user_id': $el.data('user-id'),
                'module': $el.data('module')
                , 'message_status': $el.data('message-status')
            },
            success: function (jsonResponse) {
                if ((jsonResponse == true) || (jsonResponse == 'auth_error')) {
                    location.reload();
                }

            }
        });
    });

    // show comment field for bookmark
    $('.js-bookmark-add-comment').on('click', function (e) {
        var $commentField = $('#comment-' + $(this).data('id-ids'));
        $commentField.closest('.js-bookmark-comment').show();
        $commentField.trigger('focus');
    });

    $('.js-bookmark-comment-text')
        .on('focus', function (e) {
            $(this).data('original-text', $(this).val());
        })
        .on('blur', function (e) {
            var $el = $(this);
            if ($el.val() != $el.data('original-text')) {
                $el.data('original-text', '');
                $el.val($.trim($el.val()));
                $.ajax({
                    url: $el.data('bookmark-action'),
                    type: 'post',
                    dataType: 'json',
                    data: {
                        'action': 'comment',
                        'id_ids': $el.data('id-ids'),
                        'user_id': $el.data('user-id'),
                        'module': $el.data('module'),
                        'comment': $el.val()
                    },
                    success: function (jsonResponse) {
                        if ((jsonResponse == true) || (jsonResponse == 'auth_error')) {
                            if ($el.val() == '') {
                                $el.closest('.js-bookmark-comment').hide();
                            }
                        }
                    }
                });
            } else {
                if ($el.val() == '') {
                    $el.closest('.js-bookmark-comment').hide();
                }
            }
        })
        .on('keydown', function (e) {
            if ((e.keyCode == 10 || e.keyCode == 13)) {
                if (e.shiftKey == false) {
                    e.preventDefault();
                    $(this).trigger('blur');
                }
            }
        });

    $('.js-show-owner-stats-full').on('click', function(e){
        var $ownerStatsPopup = $('.js-owner-stats-full:first');
        showModal($ownerStatsPopup);
        e.preventDefault();
    });

    $('.js-show-public-stats').on('click', function(e){
        var $publicStatsPopup = $('.js-public-stats:first');
        showModal($publicStatsPopup);
        e.preventDefault();
    });

    $('.js-show-competitive-stats').on('click', function(e) {
        var $el = $(this);

        var idIds = $el.data('id-ids');

        var storageValue = null;

        if (typeof(Storage) !== "undefined") {
            storageValue = window.sessionStorage.getItem('competitive_stats_data_' + idIds);
        }

        if (storageValue !== null) {
            var storageObj = JSON.parse(storageValue);
            showPopupStatsChartCompetitive(storageObj);
        } else {
            $.ajax({
                url: $el.data('action'),
                type: 'post',
                dataType: 'json',
                data: {
                    'id_ids': idIds,
                    'module': $el.data('module')
                },
                crossDomain: true,
                xhrFields: {
                    withCredentials: true
                },
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                success: function (jsonResponse) {
                    if (jsonResponse != false && jsonResponse != 'auth_error') {
                        if (typeof(Storage) !== "undefined") {
                            window.sessionStorage.setItem('competitive_stats_data_' + idIds, JSON.stringify(jsonResponse));
                        }
                        showPopupStatsChartCompetitive(jsonResponse);
                    } else {
                        if (jsonResponse == 'auth_error') {
                            location.reload();
                        }
                    }
                }
            });
        }

        return false;
    });

    function showPopupStatsChartCompetitive(jsonStatsObj){
        var $competitiveStatsPopup = $('.js-competitive-stats:first');

        showModal($competitiveStatsPopup);
        $competitiveStatsPopup.find('.js-competitive-popup-title').text(jsonStatsObj['popup_title']);
        $competitiveStatsPopup.find('.js-competitive-lifetime').text(jsonStatsObj['lifetime_message']);
        $competitiveStatsPopup.find('.js-competitive-show-total').text(jsonStatsObj['total_views_message']);
        $competitiveStatsPopup.find('.js-competitive-chart-block').html('<canvas id="competitive_stats" width="300" height="100"></canvas>');

        var $competitiveContainer = document.getElementById('competitive_stats');
        var competitiveDateLabels = $.map(jsonStatsObj['date_periods'], function(value, index) {
            return [value];
        });

        var normalDataSet = $.map(jsonStatsObj['normal_stats'], function(value, index) {
            return [value];
        });

        var paymentDataSet = $.map(jsonStatsObj['payment_stats'], function(value, index) {
            return [value];
        });

        var competitiveDataSets = [
            {
                label: textInterface.options['views'],
                data: normalDataSet,
                backgroundColor: '#3569AB'
            },
            {
                label: textInterface.options['views'],
                data: paymentDataSet,
                backgroundColor: '#FFB808'
            }
        ];

        var competitiveChart = new Chart($competitiveContainer, {
            type: 'bar',
            data: {
                labels: competitiveDateLabels,
                datasets: competitiveDataSets
            },
            options: {
                scales: {
                    yAxes: [{
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines:{
                            display: false
                        }
                    }]

                },
                legend: {
                    display: false
                }
            }
        });
    }

    $('.js-toggle-dialog-auth').on('click', function(){
        $('.js-dialog-auth').slideToggle(150);
        return false;
    });

    // Show/hide password
    $('.js-toggle-password').on('click', function(event){
        var $input = $(this).parent().find('.av-textfield'),
            value = $input.val();

        $input.detach();

        if ($input.prop('type') == 'password'){
            $(this).parent().prepend('<input type="text" class="av-textfield" placeholder="' + textInterface.options['password'] + '" value="'+value+'">');
        }
        else {
            $(this).parent().prepend('<input type="password" class="av-textfield" placeholder="' + textInterface.options['password'] + '" value="'+value+'">');
        }

        $(this).find('span').toggle();
        event.preventDefault();
    });

    // Custom file input
    $('.js-inputfile').each(function(){
        var $inputfile = $(this).find('input'),
            $textspan  = $(this).find('.js-inputfile-text');

        $inputfile.on('change', function() {
            var filename = $(this).val().split('\\').pop();
            $textspan.text(filename);
        });

        $(this).bind('dragover', function(){
            $(this).addClass('drag-over');
        });
        $(this).bind('dragleave drop', function(){
            $(this).removeClass('drag-over');
        });
    });

    //dialog claims popup
    var $modalClaim = $('.js-claim-popup'),
        resetClaim = function () {
            $('.js-claim-choice').show();
            $('.js-claim-form').hide();
        };

    $('.js-show-claimbox').on('click', function(event) {
        showModal($modalClaim);
        $('.js-claim-choice').show();
        $('.js-claim-form').hide();
        $('.js-claim-success').hide();
        $('.js-claim-fail').hide();
        $('.js-claim-popup #dialog-title').text(textInterface.options['claim_title']);
        event.preventDefault();
    });

    $('.js-show-claim-form').on('click', function(e) {
        e.preventDefault();
        $('.js-claim-choice').hide();
        $('.js-claim-form').show();
        $('#dialogClaim').val($(this).data('reason'));

    });

    // Show all brands
    $('.js-brands-show-all').on('click', function(){
        $('.brandsitem--secondary').fadeIn(333);
        $('.js-brands-show-all').parent().remove();
        return false;
    });

    $('#sendDialogClaim').on('submit', function (e) {
        if ($.inArray($('#dialogClaim').val(), ["1", "2", "3"]) < 0) {
            alert('Вы не выбрали причину жалобы');

        } else {
            $.ajax({
                url: '/dialogs/sendDialogClaims',
                type: 'POST',
                dataType: 'JSON',
                data: $(this).serialize(),
                success: function(resp){

                    $('.js-claim-choice').hide();
                    $('.js-claim-form').hide();
                    if(resp.status=='success'){
                        $('.js-claim-popup #dialog-title').text(textInterface.options['claim_success_title']);
                        $('.js-claim-success').show();
                        //$('.js-show-claimbox').remove(); //uncomment this if has need  doesn't show link after send claim
                    }else{
                        $('.js-claim-fail').show();
                    }
                    $('form#sendDialogClaim.popup-form').trigger('reset');
                }
            });
        }
        return false;
    });


    $(document).keyup(function(e) {
        if (e.which == 27) {
            $('.js-formseller-popup').fadeOut('fast');
            $('.js-okseller-popup').fadeOut('fast');
        }
    });

    var ShowDealerDescrwrap = function() {
        $('.js-dealer-description').addClass('dealer-description-full');
        if ($('.js-dealer-show-description')) {
            $('.js-dealer-show-description').remove();
        }
        return false;
    }

    if ($('.js-dealer-description p') && $('.js-dealer-description p').height() <= $('.js-dealer-description').height() ){
        ShowDealerDescrwrap();
    }

    $('.js-dealer-show-description').on('click', ShowDealerDescrwrap );


    // Toggle userarea
    $('.js-nav-toggle').on('click', function(){
        $('.js-userarea').toggleClass('userarea--visible');
        $('html, body').toggleClass('modal-open');
        return false;
    });

    $('.js-userarea').on('click', function(e){
        $('.js-userarea').removeClass('userarea--visible');
        $('html, body').removeClass('modal-open');
    });

    $('.js-userarea-container').on('click', function(e){
        e.stopPropagation();
    });



    // Card sticky box
    function stickCardAbout() {
        var $cardStickyBox = $('.js-card-sticky-box'),
            $cardSide      = $('.js-card-side');

        if ($cardSide.length) {
            var cardSideHeight    = $cardSide.height(),
                cardSideBottom    = $cardSide.offset().top + $cardSide.height(),

                headerHeight      = $('.header').outerHeight(true),

                cardSectionHeight = $('.js-card-gallery').outerHeight(true) +
                    $('.js-card-description').outerHeight(true) +
                    $('.js-card-options').outerHeight(true) +
                    $('.card-promo').outerHeight(true) +
                    $('.js-card-allphotos').outerHeight(true) +
                    $('.js-card-social').outerHeight(true),
                cardSectionBottom = $('.js-card-bottom').offset().top - 20,

                cardStickyHeight  = $cardStickyBox.height(),
                cardStickyPadding = 20,
                cardHeightDiff    = cardSectionHeight - cardSideHeight;

            if (cardHeightDiff >= cardStickyHeight && $(window).scrollTop() > cardSideBottom) {
                if (($(window).scrollTop() + cardStickyHeight) >= cardSectionBottom) {
                    $cardStickyBox.removeClass('is-sticky').addClass('is-sticked').css({
                        'top': cardSectionBottom - cardStickyHeight - headerHeight + cardStickyPadding
                    });
                } else {
                    $cardStickyBox.removeClass('is-sticked').addClass('is-sticky').css({
                        'top': cardStickyPadding + 'px'
                    });
                }
            } else {
                $cardStickyBox.removeClass('is-sticky');
            }
        }
    }

    if ($.browser.mobile) {
        $('.js-card-sticky-box').remove();
    } else {
        if ($('.js-card-sticky-box').length) {
            stickCardAbout();
            $('.js-card-price, .js-card-contacts').clone().insertAfter('.js-card-about');
            $(window).scroll(stickCardAbout);
        }
    }


    // FAQ
    (function($) {
        var allPanels = $('.js-faq > dd').hide();

        $('.js-faq > dt > div').on('click', function() {
            $this = $(this);
            $target =  $this.parent().next();

            if(!$target.hasClass('active')){
                allPanels.removeClass('active').slideUp(200);
                $target.addClass('active').slideDown(200);
            }
        });
    })(jQuery);


    // Get Phone
    $('.js-get-phone').on('click', function (e) {
        var $el = $(this);
        var data = {
            'id': $el.data("adsId"),
            'platform': $el.data("platform")
        };
        $el.off('click');

        $.ajax({
            url: $el.data("phoneAction"),
            type: 'get',
            dataType: 'json',
            data: data,
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            success: function (responce) {
                if (responce.result == true) {
                    if (responce.data && responce.data.length) {
                        var dataArray = [];
                        $.each(responce.data, function (index, item) {
                            dataArray.push(item);
                        });

                        $('.js-part-phone').remove();
                        $('.js-view-phone').html('<ul><li>' + dataArray.join("</li>\n<li>") + '</li></ul>');
                        $('.js-view-phone-description').show();

                        if ($(window).width() < 600) {
                            $el.removeClass('js-get-phone');
                            if (dataArray.length > 1){
                                showPhonesPopup();
                                $el.on('click', function(e) {
                                    showPhonesPopup();
                                    e.preventDefault();
                                });
                            } else {
                                var callPhoneNumber = $el.attr('href');
                                location.href = callPhoneNumber;
                            }
                        }
                    } else if (responce.url) {
                        $(location).attr('href', responce.url + '?redirect_to=' + location.href + '&platform=' + $el.data("platform"));
                    }
                }

                $('.js-get-phone').remove();
            }
        });

        e.stopPropagation();
        return false;
    });

    $('.js-show-phones').on('click', function(e){
        showPhonesPopup();
        e.preventDefault();
    });

    function showPhonesPopup() {
        var $phonesPopup = $('.js-phones-popup:first');
        showModal($phonesPopup);
    }

    // Send buyout request
    $('.js-send-buyout').on('click', function (e) {
        var $el = $(this);
        var idsId = $el.data('ids-id');

        var $buyoutPopup = $('.js-buyout-popup-' + idsId);

        var getData = {
            'campaign_id': $el.data('campaign-id'),
            'module': $el.data('module'),
            'ids_id': idsId,
            'ads_url': $el.data('ads-url'),
            'hash': $el.data('hash'),
            'process': $el.data('process')
        };

        if ($el.data('module') == 'passenger') {
            getData.marka = $el.data('marka');
            getData.model = $el.data('model');
            getData.year = $el.data('year');
            getData.price_sort = $el.data('price-sort');
            getData.region = $el.data('region');
            getData.city = $el.data('city');
        }

        $.ajax({
            url: $el.data("send-action"),
            type: 'get',
            dataType: 'json',
            data: getData,
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            success: function (jsonResponse) {
                $buyoutPopup.removeClass('show').attr('aria-hidden', true);

                if (jsonResponse['result'] == true) {
                    if ($el.data('process') == 1) {
                        $('.js-popup-buyout-form-success-' + idsId).addClass('show').attr('aria-hidden', false);
                    }
                    $('.js-buyout-teaser-' + idsId).remove();
                }
            }
        });

        e.preventDefault();
    });

});

function reloadAfterLogin() {
    var form = $('#popup_login_form');
    var action = form.attr('action') + '?redirect_to=' + window.location.href.toString();
    form.attr('action', action);
}

function formatMoney(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")
}

/* begin: loading */
$.fn.showLoading = function( config ) {
    var settings = {
        'loadingID': 'loading',
        'label': null,
        'class': 'loading',
        'parent': this
    };
    $.extend(settings, config);

    var container = $(this);

    if ( container && !(container.length==0) ) {
        var LoadingEffect = $('#'+settings['loadingID']);
        if (LoadingEffect.length == 0) {
            $(settings['parent']).append($('<div id="'+settings['loadingID']+'"><svg class="spinner" width="60" height="60" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg>').css({'display':'none'}));
            LoadingEffect = $('#'+settings['loadingID'])
        }
        if ( LoadingEffect ) {
            var pos = container.position();
            LoadingEffect.addClass(settings['class']);

            $('#'+settings['loadingID']).show();

            if (container.css('position')!='relative') {
                var marginLeft = parseInt(container.css('margin-left'));
                LoadingEffect.css({
                    'left':pos.left+(marginLeft<0?marginLeft:0)+'px',
                    'top':pos.top+'px'
                });
            }

            var height = container.height();
            LoadingEffect.show();

            if (settings['label']) {
                LoadingEffect.clone().attr('id', 'clone_'+settings['loadingID']).addClass('clone_'+settings['class']).appendTo(container).append('<span class="label">'+settings['label']+'</span>');
            }
        }
    }
};

$.fn.hideLoading = function( config ) {
    var settings = {
        'remove':true
    };
    $.extend(settings, config);

    var $el = $(this);

    if ($el && $el.length!=0) {
        if (settings ['remove']) {
            var $clone = $('#clone_'+$el.attr('id'));
            if ( $clone && $clone.length ) {
                $clone.remove();
            }
            $el.remove();
        } else {
            var $clone = $('#clone_'+$el.attr('id'));
            if ( $clone && $clone.length ) {
                $clone.remove();
            }
            $el.hide();
        }
    }
};
/* end: loading */


function showFieldFormError($field, message) {
    hideFieldFormError($field);
    var $errorHtml = '<div class="help-block"><ul><li>'+message+'</li></ul></div>';
    $field.parents('.js-form-item').addClass('has-error').append($errorHtml);
}

function showFieldFormErrorWithoutText($field) {
    hideFieldFormError($field);
    $field.parents('.js-form-item').addClass('has-error')
}

function hideFieldFormError($field) {
    var parentContainer = $field.parents('.js-form-item');
    if (parentContainer.hasClass('has-error')) {
        parentContainer.removeClass('has-error').find('.help-block').remove();
    }
}

function plural($number, $one, $two, $five) {
    var $result = $one;
    if (($number - $number % 10) % 100 != 10) {
        if ($number % 10 == 1) {
            $result = $one;
        } else if ($number % 10 >= 2 && $number % 10 <= 4) {
            $result = $two;
        } else {
            $result = $five;
        }
    } else {
        $result = $five;
    }
    return $result;
}

function showNotification(text) {
    if ($('.js-notifications').length == 0) {
        $('body').prepend('<div class="notifications"><div class="notifications__container js-notifications"></div></div>');
    }
    $('.js-notifications').prepend('<div class="notification notification--success js-notification">' + text + '</div>');
    setTimeout(function(){
        $('.js-notification:eq(0)').addClass('is-hidden');
    }, 1750);
    setTimeout(function(){
        $('.js-notification:eq(0)').remove();
    }, 2000);
};

function recaptcha_callback(){
    var $div = $('div.g-recaptcha');
    var $form = $($div).closest('form');
    var $submitActors = $form.find('input[type=submit]');
    $submitActors.data("g-recaptcha-selected", 1);
    submitButtonCheckEnabled($form);
}

function submitButtonCheckEnabled($form) {
    var $submitActors = $form.find('input[type=submit]');
    if ($('#is_user_agreement').length > 0) {
        var $isUserAgreementField = $('#is_user_agreement');
        if (($submitActors.data('g-recaptcha-selected') == 1) && $isUserAgreementField.is(':checked')) {
            $submitActors.prop("disabled", false);
        } else {
            $submitActors.prop("disabled", true);
        }
    } else {
        if ($submitActors.data('g-recaptcha-selected') == 1) {
            $submitActors.prop("disabled", false);
        } else {
            $submitActors.prop("disabled", true);
        }
    }
}

function captcha_callback(el, number) {
    var $form = $(el).closest('form');
    var $submitActors = $form.find('input[type=submit]');

    var $length = $(el).val().length;
    if ($length && $length == number) {
        $submitActors.prop("disabled", false);
    } else {
        $submitActors.prop("disabled", true);
    }
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
}
