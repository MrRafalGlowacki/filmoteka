!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i);var a,o,s=i("7pbsT"),u=i("4tSb9"),c=(s=i("7pbsT"),u=i("4tSb9"),i("dIxxU")),l=(a=(0,s.default)((function(){var e;return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,c.default.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:"".concat("b942b8bf626a04f48b07153a95ee51a0")}})];case 1:return[2,t.sent()];case 2:return e=t.sent(),console.log(e),[3,3];case 3:return[2]}}))})),function(){return a.apply(this,arguments)}),d=(s=i("7pbsT"),u=i("4tSb9"),c=i("dIxxU"),document.querySelector(".loader")),f="b942b8bf626a04f48b07153a95ee51a0",h=function(){var e=(0,s.default)((function(){var e,t,n,r,i=arguments;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:e=i.length>0&&void 0!==i[0]?i[0]:"https://api.themoviedb.org/3/movie/popular",t=i.length>1&&void 0!==i[1]?i[1]:1,d.style.display="block",a.label=1;case 1:return a.trys.push([1,3,,4]),[4,c.default.get(e,{params:{api_key:"".concat(f),page:t,language:"en-US"}})];case 2:return n=a.sent(),d.style.display="none",[2,n];case 3:return r=a.sent(),d.style.display="none",console.log(r),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),v="",p=function(e){var t,n=y();return function(e,t){v="",e.map((function(n){t.map((function(t){t.id===n&&(n!=e[e.length-1]?v=v+t.name+", ":v+=t.name)}))}))}(e.genre_ids,n.data.genres),'\n<div class="movie-card">\n  <img class="movie-card__image" alt="" src=\'https://image.tmdb.org/t/p/w500/'.concat(e.poster_path,'\'}>\n  <div class="movie-card__label">\n    <p class="movie-card__title">').concat(e.original_title,'</p>\n    <p class="movie-card__genre-year">').concat(v," | ").concat((t=e.release_date,t.substring(0,4)),'</p> \n    <p class="movie-card__id">').concat(e.id,"</p> \n  </div>\n</div>\n")},g=document.querySelector(".main-box"),m=function(){var e=(0,s.default)((function(e){var t,n,r,i;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),(t=[]).push(h(e)),t.push(l()),[4,Promise.all(t)];case 1:return n=a.sent(),r=n[0],o=n[1],g.innerHTML="",r.data.results.map((function(e){g.insertAdjacentHTML("beforeend",p(e))})),[3,3];case 2:return i=a.sent(),console.log("err ",i),[3,3];case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),y=function(){return o},_=document.getElementById("genres"),b="https://api.themoviedb.org/3/movie/popular",k=[];!function(e){_.innerHTML="";l().then((function(e){for(var t=function(t){var n=document.createElement("button");n.classList.add("genre"),n.id=e.data.genres[t].id,n.innerText=e.data.genres[t].name,n.addEventListener("click",(function(){0===k?k.push(e.data.genres[t].id):k.includes(e.data.genres[t].id)?k.forEach((function(n,r){n==e.data.genres[t].id&&k.splice(r,1)})):k.push(e.data.genres[t].id),console.log(k),b="https://api.themoviedb.org/3/discover/movie?&with_genres="+encodeURI(k.join(",")),console.log(b)})),_.append(n)},n=0;n<e.data.genres.length;n++)t(n)}))}();var I=i("iU1Pc"),w=document.querySelector(".queue-btn"),T=document.querySelector(".watched-btn"),E=document.querySelector(".modal__id"),S=[],O=[];w.addEventListener("click",(function(t){var n=E.textContent;if(S.includes(n))return e(I).Notify.failure("Movie already in queue");S.push(n),localStorage.setItem("added-to-queue",JSON.stringify(S));var r=O.indexOf(n);return r>-1?(O.splice(r,1),localStorage.setItem("added-to-watched",JSON.stringify(O)),e(I).Notify.info("Movie remove from watched and added to queue")):e(I).Notify.success("Movie added to queue")})),T.addEventListener("click",(function(t){var n=E.textContent;if(O.includes(n))return e(I).Notify.failure("Movie already in watched");O.push(n),localStorage.setItem("added-to-watched",JSON.stringify(O));var r=S.indexOf(n);return r>-1?(S.splice(r,1),localStorage.setItem("added-to-queue",JSON.stringify(S)),e(I).Notify.info("Movie remove from queue and added to watched")):e(I).Notify.success("Movie added to watched")}));s=i("7pbsT"),u=i("4tSb9"),c=i("dIxxU");var R=document.querySelector(".modal"),C=document.querySelector(".modal__close"),A=document.querySelector(".modal__image"),N=document.querySelector(".modal__title"),P=document.querySelector(".modal__about-text"),L=document.querySelector(".genres"),D=document.querySelector(".orginal-title"),M=document.querySelector(".popularity"),U=document.querySelector(".rate"),x=document.querySelector(".rate__total"),j=!1,F=document.querySelector(".modal__id"),V="",H="b942b8bf626a04f48b07153a95ee51a0",B=function(){var e=(0,s.default)((function(){var e,t,n,r=arguments;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"https://api.themoviedb.org/3/movie/".concat(V,"?api_key=").concat(H,"&language=en-US"),[4,c.default.get(e)];case 1:return t=i.sent(),n=t.data.genres.map((function(e){return e.name})),L.textContent=n.join(", "),U.textContent=(Math.round(10*t.data.vote_average)/10).toFixed(1),x.textContent=t.data.vote_count,N.textContent=t.data.title,M.textContent=(Math.round(10*t.data.popularity)/10).toFixed(1),D.textContent=t.data.original_title,P.textContent=t.data.overview,F.textContent=t.data.id,[2]}}))}));return function(){return e.apply(this,arguments)}}(),q=function(){var e=(0,s.default)((function(e){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return"movie-card__image"!==e.target.className?[3,2]:(V=e.target.parentNode.children[1].children[2].textContent,[4,B()]);case 1:t.sent(),A.src=e.target.src,R.style.display="flex",j=!0,t.label=2;case 2:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),W=function(e){R.style.display="none",j=!1};addEventListener("click",q),C.addEventListener("click",W),addEventListener("keydown",(function(e){j&&27===e.keyCode&&W()})),addEventListener("click",(function(e){j&&"movie-card__image"!==e.target.className&&(e.target.closest(".modal")||W())}));s=i("7pbsT"),u=i("4tSb9"),s=i("7pbsT"),u=i("4tSb9"),c=i("dIxxU");var z="b942b8bf626a04f48b07153a95ee51a0",G="https://api.themoviedb.org/3/search/movie",K=document.querySelector(".loader");function J(e){return X.apply(this,arguments)}function X(){return X=(0,s.default)((function(e){var t,n,r,i=arguments;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:t=i.length>1&&void 0!==i[1]?i[1]:1,K.style.display="block",a.label=1;case 1:return a.trys.push([1,3,,4]),[4,c.default.get(G,{params:{api_key:"".concat(z),query:"".concat(e),page:t}})];case 2:return n=a.sent(),K.style.display="none",[2,n.data];case 3:return r=a.sent(),K.style.display="none",console.error(r),[3,4];case 4:return[2]}}))})),X.apply(this,arguments)}document.querySelector(".pagination");var Y,$,Q=document.getElementById("pagination-numbers"),Z=document.getElementById("next-button"),ee=document.getElementById("prev-button"),te=function(e){Q.innerHTML="",Y=e;for(var t=1;t<=e;t++)n=t,r=void 0,(r=document.createElement("button")).className="pagination-number",r.innerHTML=n,r.setAttribute("page-index",n),r.setAttribute("aria-label","Page "+n),1!=n&&n!=Y||r.classList.add("hidden-mobile"),Q.appendChild(r);var n,r},ne=function(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)},re=function(e){e.classList.remove("disabled"),e.removeAttribute("disabled")},ie=function(e){(function(e){document.querySelectorAll(".pagination-number").forEach((function(t){var n=Number(t.getAttribute("page-index"));e<=3?(1==n&&t.classList.remove("hidden-mobile"),n==Y&&t.classList.add("hidden-mobile"),n<=5||n==Y?t.classList.remove("hidden"):t.classList.add("hidden")):e>=Y-2?(1==n&&t.classList.add("hidden-mobile"),n==Y&&t.classList.remove("hidden-mobile"),n>=Y-4||1==n?t.classList.remove("hidden"):t.classList.add("hidden")):Y<=7?(t.classList.remove("hidden"),1!=n&&n!=Y||t.classList.remove("hidden-mobile")):1==n||n==Y?(t.classList.remove("hidden"),t.classList.add("hidden-mobile")):n>=e-2&&n<=e+2?t.classList.remove("hidden"):t.classList.add("hidden")}))})($=e),document.querySelectorAll(".pagination-number").forEach((function(e){e.classList.remove("active"),Number(e.getAttribute("page-index"))==$&&e.classList.add("active")})),1===$?ne(ee):re(ee),Y===$?ne(Z):re(Z)},ae=document.querySelector(".header__no-movies"),oe=document.querySelector(".main-box"),se=document.querySelector("input[name='searchQuery']"),ue=document.querySelector(".header__search-form-btn"),ce=document.querySelector(".to-top"),le=1;function de(){return(de=(0,s.default)((function(e){var t,n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return e.preventDefault(),ae.innerHTML="",le=1,(t=se.value)?[3,1]:(alert("Enter movie title"),[3,3]);case 1:return[4,J(t,le)];case 2:(n=r.sent()).results.length?(oe.innerHTML="",console.log(n),n.results.map((function(e){oe.insertAdjacentHTML("beforeend",p(e))})),te(n.total_pages),ie(le),ee.addEventListener("click",(0,s.default)((function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return ie(le-1),[4,J(t,--le)];case 1:return n=e.sent(),oe.innerHTML="",console.log(n),n.results.map((function(e){oe.insertAdjacentHTML("beforeend",p(e))})),fe(),[2]}}))}))),Z.addEventListener("click",(0,s.default)((function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return ie(le+1),[4,J(t,++le)];case 1:return n=e.sent(),oe.innerHTML="",console.log(n),n.results.map((function(e){oe.insertAdjacentHTML("beforeend",p(e))})),fe(),[2]}}))}))),document.querySelectorAll(".pagination-number").forEach((function(e){var r=Number(e.getAttribute("page-index"));r&&e.addEventListener("click",(0,s.default)((function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return ie(r),[4,J(t,le=r)];case 1:return n=e.sent(),oe.innerHTML="",console.log(n),n.results.map((function(e){oe.insertAdjacentHTML("beforeend",p(e))})),fe(),[2]}}))})))}))):ae.innerHTML="Search result not successful. Enter the correct movie name.",r.label=3;case 3:return[2]}}))}))).apply(this,arguments)}function fe(){window.scrollTo({top:0,behavior:"smooth"})}ue.addEventListener("click",(function(e){return de.apply(this,arguments)})),ce.addEventListener("click",fe),window.addEventListener("scroll",(function(){window.pageYOffset>100?ce.classList.remove("is-hidden"):ce.classList.add("is-hidden")}));var he=document.querySelector(".footer__authors"),ve=document.querySelector(".students-modal__close-btn"),pe=document.querySelector(".data-modal");function ge(){pe.classList.toggle("is-hidden")}he.addEventListener("click",ge),ve.addEventListener("click",ge);I=i("iU1Pc"),s=i("7pbsT");var me=i("8IFEP"),ye=i("lwwVW");function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var be=i("gNe9t"),ke=(u=i("4tSb9"),s=i("7pbsT"),me=i("8IFEP"),ye=i("lwwVW"),i("1QZ0q"));be=i("gNe9t"),u=i("4tSb9");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}me=i("8IFEP"),ye=i("lwwVW");function we(e,t){return we=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},we(e,t)}function Te(e,t){return we(e,t)}function Ee(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Te(e,t)}ke=i("1QZ0q"),be=i("gNe9t");function Se(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function Oe(e,t,n){return Oe=Se()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&Te(i,n.prototype),i},Oe.apply(null,arguments)}function Re(e,t,n){return Oe.apply(null,arguments)}function Ce(e){return Ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Ce(e)}function Ae(e){return Ce(e)}function Ne(e){var t="function"==typeof Map?new Map:void 0;return Ne=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return Re(e,arguments,Ae(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Te(r,e)},Ne(e)}function Pe(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var Le=i("fv5it");function De(e,t){return!t||"object"!==(0,Le.default)(t)&&"function"!=typeof t?Ie(e):t}function Me(e){var t=Pe();return function(){var n,r=Ae(e);if(t){var i=Ae(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return De(this,n)}}var Ue,xe,je,Fe=Ue={};function Ve(){throw new Error("setTimeout has not been defined")}function He(){throw new Error("clearTimeout has not been defined")}function Be(e){if(xe===setTimeout)return setTimeout(e,0);if((xe===Ve||!xe)&&setTimeout)return xe=setTimeout,setTimeout(e,0);try{return xe(e,0)}catch(t){try{return xe.call(null,e,0)}catch(t){return xe.call(this,e,0)}}}!function(){try{xe="function"==typeof setTimeout?setTimeout:Ve}catch(e){xe=Ve}try{je="function"==typeof clearTimeout?clearTimeout:He}catch(e){je=He}}();var qe,We=[],ze=!1,Ge=-1;function Ke(){ze&&qe&&(ze=!1,qe.length?We=qe.concat(We):Ge=-1,We.length&&Je())}function Je(){if(!ze){var e=Be(Ke);ze=!0;for(var t=We.length;t;){for(qe=We,We=[];++Ge<t;)qe&&qe[Ge].run();Ge=-1,t=We.length}qe=null,ze=!1,function(e){if(je===clearTimeout)return clearTimeout(e);if((je===He||!je)&&clearTimeout)return je=clearTimeout,clearTimeout(e);try{je(e)}catch(t){try{return je.call(null,e)}catch(t){return je.call(this,e)}}}(e)}}function Xe(e,t){this.fun=e,this.array=t}function Ye(){}Fe.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];We.push(new Xe(e,t)),1!==We.length||ze||Be(Je)},Xe.prototype.run=function(){this.fun.apply(null,this.array)},Fe.title="browser",Fe.browser=!0,Fe.env={},Fe.argv=[],Fe.version="",Fe.versions={},Fe.on=Ye,Fe.addListener=Ye,Fe.once=Ye,Fe.off=Ye,Fe.removeListener=Ye,Fe.removeAllListeners=Ye,Fe.emit=Ye,Fe.prependListener=Ye,Fe.prependOnceListener=Ye,Fe.listeners=function(e){return[]},Fe.binding=function(e){throw new Error("process.binding is not supported")},Fe.cwd=function(){return"/"},Fe.chdir=function(e){throw new Error("process.chdir is not supported")},Fe.umask=function(){return 0};var $e=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Qe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,d=(3&a)<<4|s>>4,f=(15&s)<<2|c>>6,h=63&c;u||(h=64,o||(f=64)),r.push(n[l],n[d],n[f],n[h])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray($e(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var d=s<<6&192|u;r.push(d)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ze=function(e){return function(e){var t=$e(e);return Qe.encodeByteArray(t,!0)}(e).replace(/\./g,"")},et=function(e){try{return Qe.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function nt(){try{return"object"==typeof indexedDB}catch(e){return!1}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var rt=function(){return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},it=function(){try{return rt()||function(){if(void 0!==Ue&&void 0!==Ue.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&et(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},at=function(e){var t,n;return null===(n=null===(t=it())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ot=function(){var e;return null===(e=it())||void 0===e?void 0:e.config},st=function(e){var t;return null===(t=it())||void 0===t?void 0:t["_".concat(e)]},ut=function(){"use strict";function e(){var t=this;(0,me.default)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return(0,ye.default)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ct=function(e){"use strict";Ee(n,e);var t=Me(n);function n(e,r,i){var a;return(0,me.default)(this,n),(a=t.call(this,r)).code=e,a.customData=i,a.name="FirebaseError",Object.setPrototypeOf(Ie(a),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(Ie(a),lt.prototype.create),a}return n}(Ne(Error)),lt=function(){"use strict";function e(t,n,r){(0,me.default)(this,e),this.service=t,this.serviceName=n,this.errors=r}return(0,ye.default)(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?dt(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new ct(a,u,i);return c}}]),e}();function dt(e,t){return e.replace(ft,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var ft=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function vt(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],d=t[c];if(pt(l)&&pt(d)){if(!vt(l,d))return!1}else if(l!==d)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var f=!0,h=!1,v=void 0;try{for(var p,g=r[Symbol.iterator]();!(f=(p=g.next()).done);f=!0){var m=p.value;if(!n.includes(m))return!1}}catch(e){h=!0,v=e}finally{try{f||null==g.return||g.return()}finally{if(h)throw v}}return!0}function pt(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gt(e){var t=[],n=!0,r=!1,i=void 0;try{for(var a,o=function(){var e=(0,ke.default)(a.value,2),n=e[0],r=e[1];Array.isArray(r)?r.forEach((function(e){t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))},s=Object.entries(e)[Symbol.iterator]();!(n=(a=s.next()).done);n=!0)o()}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return t.length?"&"+t.join("&"):""}function mt(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=(0,ke.default)(e.split("="),2),r=n[0],i=n[1];t[decodeURIComponent(r)]=decodeURIComponent(i)}})),t}function yt(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t=function(){"use strict";function e(t,n){var r=this;(0,me.default)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){t(r)})).catch((function(e){r.error(e)}))}return(0,ye.default)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=bt),void 0===r.error&&(r.error=bt),void 0===r.complete&&(r.complete=bt);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function bt(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kt(e){return e&&e._delegate?e._delegate:e}var It=function(){"use strict";function e(t,n,r){(0,me.default)(this,e),this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return(0,ye.default)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),wt="[DEFAULT]",Tt=function(){"use strict";function e(t,n){(0,me.default)(this,e),this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return(0,ye.default)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new ut;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:wt})}catch(e){}var t=!0,n=!1,r=void 0;try{for(var i,a=this.instancesDeferred.entries()[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=(0,ke.default)(i.value,2),s=o[0],u=o[1],c=this.normalizeInstanceIdentifier(s);try{var l=this.getOrInitializeService({instanceIdentifier:c});u.resolve(l)}catch(e){}}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return(0,s.default)((function(){var t;return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return t=Array.from(e.instances.values()),[4,Promise.all((0,be.default)(t.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat((0,be.default)(t.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return n.sent(),[2]}}))}))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,n=void 0===t?{}:t,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error("".concat(this.name,"(").concat(r,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var i=this.getOrInitializeService({instanceIdentifier:r,options:n}),a=!0,o=!1,s=void 0;try{for(var u,c=this.instancesDeferred.entries()[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=(0,ke.default)(u.value,2),d=l[0],f=l[1],h=this.normalizeInstanceIdentifier(d);r===h&&f.resolve(i)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return i}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===wt?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt;return this.component?this.component.multipleInstances?e:wt:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et,St,Ot=function(){"use strict";function e(t){(0,me.default)(this,e),this.name=t,this.providers=new Map}return(0,ye.default)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Tt(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}(),Rt=(me=i("8IFEP"),ye=i("lwwVW"),be=i("gNe9t"),[]);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(St=Et||(Et={}))[St.DEBUG=0]="DEBUG",St[St.VERBOSE=1]="VERBOSE",St[St.INFO=2]="INFO",St[St.WARN=3]="WARN",St[St.ERROR=4]="ERROR",St[St.SILENT=5]="SILENT";var Ct,At={debug:Et.DEBUG,verbose:Et.VERBOSE,info:Et.INFO,warn:Et.WARN,error:Et.ERROR,silent:Et.SILENT},Nt=Et.INFO,Pt=(_e(Ct={},Et.DEBUG,"log"),_e(Ct,Et.VERBOSE,"log"),_e(Ct,Et.INFO,"info"),_e(Ct,Et.WARN,"warn"),_e(Ct,Et.ERROR,"error"),Ct),Lt=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a;if(!(t<e.logLevel)){var o=(new Date).toISOString(),s=Pt[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"));(a=console)[s].apply(a,["[".concat(o,"]  ").concat(e.name,":")].concat((0,be.default)(r)))}},Dt=function(){"use strict";function e(t){(0,me.default)(this,e),this.name=t,this._logLevel=Nt,this._logHandler=Lt,this._userLogHandler=null,Rt.push(this)}return(0,ye.default)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in Et))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?At[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Et.DEBUG].concat((0,be.default)(t))),this._logHandler.apply(this,[this,Et.DEBUG].concat((0,be.default)(t)))}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Et.VERBOSE].concat((0,be.default)(t))),this._logHandler.apply(this,[this,Et.VERBOSE].concat((0,be.default)(t)))}},{key:"info",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Et.INFO].concat((0,be.default)(t))),this._logHandler.apply(this,[this,Et.INFO].concat((0,be.default)(t)))}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Et.WARN].concat((0,be.default)(t))),this._logHandler.apply(this,[this,Et.WARN].concat((0,be.default)(t)))}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Et.ERROR].concat((0,be.default)(t))),this._logHandler.apply(this,[this,Et.ERROR].concat((0,be.default)(t)))}}]),e}();s=i("7pbsT");function Mt(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}var Ut,xt;be=i("gNe9t"),u=i("4tSb9"),be=i("gNe9t");var jt=new WeakMap,Ft=new WeakMap,Vt=new WeakMap,Ht=new WeakMap,Bt=new WeakMap;var qt={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ft.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Vt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gt(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Wt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(xt||(xt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(Kt(this),n),Gt(jt.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Gt(e.apply(Kt(this),n))}:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a,o=(a=e).call.apply(a,[Kt(this),t].concat((0,be.default)(r)));return Vt.set(o,t.sort?t.sort():[t]),Gt(o)}}function zt(e){return"function"==typeof e?Wt(e):(e instanceof IDBTransaction&&function(e){if(!Ft.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Ft.set(e,t)}}(e),t=e,(Ut||(Ut=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,qt):e);var t}function Gt(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(Gt(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&jt.set(e,t)})).catch((function(){})),Bt.set(n,t),n;var t,n;if(Ht.has(e))return Ht.get(e);var r=zt(e);return r!==e&&(Ht.set(e,r),Bt.set(r,e)),r}var Kt=function(e){return Bt.get(e)};function Jt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=Gt(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(Gt(s.result),e.oldVersion,e.newVersion,Gt(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var Xt,Yt=["get","getKey","getAll","getAllKeys","count"],$t=["put","add","delete","clear"],Qt=new Map;function Zt(e,t){if(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t){if(Qt.get(t))return Qt.get(t);var n=t.replace(/FromIndex$/,""),r=t!==n,i=$t.includes(n);if(n in(r?IDBIndex:IDBObjectStore).prototype&&(i||Yt.includes(n))){var a=function(){var e=(0,s.default)((function(e){var t,a,o,s,c,l,d=arguments;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:for(t=d.length,a=new Array(t>1?t-1:0),o=1;o<t;o++)a[o-1]=d[o];return c=this.transaction(e,i?"readwrite":"readonly"),l=c.store,r&&(l=l.index(a.shift())),[4,Promise.all([(s=l)[n].apply(s,(0,be.default)(a)),i&&c.done])];case 1:return[2,u.sent()[0]]}}))}));return function(t){return e.apply(this,arguments)}}();return Qt.set(t,a),a}}}Xt=function(e){return Mt(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){_e(e,t,n[t])}))}return e}({},e),{get:function(t,n,r){return Zt(t,n)||e.get(t,n,r)},has:function(t,n){return!!Zt(t,n)||e.has(t,n)}})},qt=Xt(qt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var en=function(){"use strict";function e(t){(0,me.default)(this,e),this.container=t}return(0,ye.default)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}();var tn,nn,rn="@firebase/app",an="0.9.0",on=new Dt("@firebase/app"),sn="[DEFAULT]",un=(_e(tn={},rn,"fire-core"),_e(tn,"@firebase/app-compat","fire-core-compat"),_e(tn,"@firebase/analytics","fire-analytics"),_e(tn,"@firebase/analytics-compat","fire-analytics-compat"),_e(tn,"@firebase/app-check","fire-app-check"),_e(tn,"@firebase/app-check-compat","fire-app-check-compat"),_e(tn,"@firebase/auth","fire-auth"),_e(tn,"@firebase/auth-compat","fire-auth-compat"),_e(tn,"@firebase/database","fire-rtdb"),_e(tn,"@firebase/database-compat","fire-rtdb-compat"),_e(tn,"@firebase/functions","fire-fn"),_e(tn,"@firebase/functions-compat","fire-fn-compat"),_e(tn,"@firebase/installations","fire-iid"),_e(tn,"@firebase/installations-compat","fire-iid-compat"),_e(tn,"@firebase/messaging","fire-fcm"),_e(tn,"@firebase/messaging-compat","fire-fcm-compat"),_e(tn,"@firebase/performance","fire-perf"),_e(tn,"@firebase/performance-compat","fire-perf-compat"),_e(tn,"@firebase/remote-config","fire-rc"),_e(tn,"@firebase/remote-config-compat","fire-rc-compat"),_e(tn,"@firebase/storage","fire-gcs"),_e(tn,"@firebase/storage-compat","fire-gcs-compat"),_e(tn,"@firebase/firestore","fire-fst"),_e(tn,"@firebase/firestore-compat","fire-fst-compat"),_e(tn,"fire-js","fire-js"),_e(tn,"firebase","fire-js-all"),tn),cn=new Map,ln=new Map;function dn(e,t){try{e.container.addComponent(t)}catch(n){on.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function fn(e){var t=e.name;if(ln.has(t))return on.debug("There were multiple attempts to register component ".concat(t,".")),!1;ln.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=cn.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){dn(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function hn(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vn=(_e(nn={},"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),_e(nn,"bad-app-name","Illegal App name: '{$appName}"),_e(nn,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),_e(nn,"app-deleted","Firebase App named '{$appName}' already deleted"),_e(nn,"no-options","Need to provide options, when not being deployed to hosting via source."),_e(nn,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),_e(nn,"invalid-log-argument","First argument to `onLog` must be null or a function."),_e(nn,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),_e(nn,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),_e(nn,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),_e(nn,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),nn),pn=new lt("app","Firebase",vn),gn=function(){"use strict";function e(t,n,r){var i=this;(0,me.default)(this,e),this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new It("app",(function(){return i}),"PUBLIC"))}return(0,ye.default)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw pn.create("app-deleted",{appName:this._name})}}]),e}(),mn="9.15.0";function yn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:sn,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw pn.create("bad-app-name",{appName:String(a)});if(n||(n=ot()),!n)throw pn.create("no-options");var o=cn.get(a);if(o){if(vt(n,o.options)&&vt(i,o.config))return o;throw pn.create("duplicate-app",{appName:a})}var s=new Ot(a),u=!0,c=!1,l=void 0;try{for(var d,f=ln.values()[Symbol.iterator]();!(u=(d=f.next()).done);u=!0){var h=d.value;s.addComponent(h)}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}var v=new gn(n,i,s);return cn.set(a,v),v}function _n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sn,t=cn.get(e);if(!t&&e===sn)return yn();if(!t)throw pn.create("no-app",{appName:e});return t}function bn(e,t,n){var r,i=null!==(r=un[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void on.warn(s.join(" "))}fn(new It("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var kn="firebase-heartbeat-store",In=null;function wn(){return In||(In=Jt("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(kn)}}).catch((function(e){throw pn.create("idb-open",{originalErrorMessage:e.message})}))),In}function Tn(e){return En.apply(this,arguments)}function En(){return(En=(0,s.default)((function(e){var t,n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,wn()];case 1:return[2,r.sent().transaction(kn).objectStore(kn).get(Rn(e))];case 2:return(t=r.sent())instanceof ct?on.warn(t.message):(n=pn.create("idb-get",{originalErrorMessage:null==t?void 0:t.message}),on.warn(n.message)),[3,3];case 3:return[2]}}))}))).apply(this,arguments)}function Sn(e,t){return On.apply(this,arguments)}function On(){return(On=(0,s.default)((function(e,t){var n,r,i,a;return(0,u.__generator)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),[4,wn()];case 1:return n=o.sent(),r=n.transaction(kn,"readwrite"),[4,r.objectStore(kn).put(t,Rn(e))];case 2:return o.sent(),[2,r.done];case 3:return(i=o.sent())instanceof ct?on.warn(i.message):(a=pn.create("idb-set",{originalErrorMessage:null==i?void 0:i.message}),on.warn(a.message)),[3,4];case 4:return[2]}}))}))).apply(this,arguments)}function Rn(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cn=1024,An=function(){"use strict";function e(t){var n=this;(0,me.default)(this,e),this.container=t,this._heartbeatsCache=null;var r=this.container.getProvider("app").getImmediate();this._storage=new Ln(r),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return(0,ye.default)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return(0,s.default)((function(){var t,n,r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return t=e.container.getProvider("platform-logger").getImmediate(),n=t.getPlatformInfoString(),r=Nn(),null!==e._heartbeatsCache?[3,2]:[4,e._heartbeatsCachePromise];case 1:e._heartbeatsCache=i.sent(),i.label=2;case 2:return e._heartbeatsCache.lastSentHeartbeatDate===r||e._heartbeatsCache.heartbeats.some((function(e){return e.date===r}))?[2]:(e._heartbeatsCache.heartbeats.push({date:r,agent:n}),e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),[2,e._storage.overwrite(e._heartbeatsCache)])}}))}))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return(0,s.default)((function(){var t,n,r,i,a;return(0,u.__generator)(this,(function(o){switch(o.label){case 0:return null!==e._heartbeatsCache?[3,2]:[4,e._heartbeatsCachePromise];case 1:o.sent(),o.label=2;case 2:return null===e._heartbeatsCache||0===e._heartbeatsCache.heartbeats.length?[2,""]:(t=Nn(),n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Cn,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(){var e=s.value,i=n.find((function(t){return t.agent===e.agent}));if(i){if(i.dates.push(e.date),Dn(n)>t)return i.dates.pop(),"break"}else if(n.push({agent:e.agent,dates:[e.date]}),Dn(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){if("break"===u())break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}(e._heartbeatsCache.heartbeats),r=n.heartbeatsToSend,i=n.unsentEntries,a=Ze(JSON.stringify({version:2,heartbeats:r})),e._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(e._heartbeatsCache.heartbeats=i,[4,e._storage.overwrite(e._heartbeatsCache)]):[3,4]);case 3:return o.sent(),[3,5];case 4:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache),o.label=5;case 5:return[2,a]}}))}))()}}]),e}();function Nn(){return(new Date).toISOString().substring(0,10)}var Pn,Ln=function(){"use strict";function e(t){(0,me.default)(this,e),this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return(0,ye.default)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return(0,s.default)((function(){return(0,u.__generator)(this,(function(e){return nt()?[2,new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1}))]:[2,!1]}))}))()}},{key:"read",value:function(){var e=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return[4,e._canUseIndexedDBPromise];case 1:return t.sent()?[3,2]:[2,{heartbeats:[]}];case 2:return[4,Tn(e.app)];case 3:return[2,t.sent()||{heartbeats:[]}];case 4:return[2]}}))}))()}},{key:"overwrite",value:function(e){var t=this;return(0,s.default)((function(){var n,r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return[4,t._canUseIndexedDBPromise];case 1:return i.sent()?[3,2]:[2];case 2:return[4,t.read()];case 3:return r=i.sent(),[2,Sn(t.app,{lastSentHeartbeatDate:null!==(n=e.lastSentHeartbeatDate)&&void 0!==n?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})];case 4:return[2]}}))}))()}},{key:"add",value:function(e){var t=this;return(0,s.default)((function(){var n,r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return[4,t._canUseIndexedDBPromise];case 1:return i.sent()?[3,2]:[2];case 2:return[4,t.read()];case 3:return r=i.sent(),[2,Sn(t.app,{lastSentHeartbeatDate:null!==(n=e.lastSentHeartbeatDate)&&void 0!==n?n:r.lastSentHeartbeatDate,heartbeats:(0,be.default)(r.heartbeats).concat((0,be.default)(e.heartbeats))})];case 4:return[2]}}))}))()}}]),e}();function Dn(e){return Ze(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn="",fn(new It("platform-logger",(function(e){return new en(e)}),"PRIVATE")),fn(new It("heartbeat",(function(e){return new An(e)}),"PRIVATE")),bn(rn,an,Pn),bn(rn,an,"esm2017"),bn("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
bn("firebase","9.15.0","app");s=i("7pbsT"),me=i("8IFEP"),ye=i("lwwVW");function Mn(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Ae(e)););return e}function Un(e,t,n){return Un="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Mn(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}},Un(e,t,n)}function xn(e,t,n){return Un(e,t,n)}ke=i("1QZ0q"),be=i("gNe9t"),u=i("4tSb9"),u=i("4tSb9");function jn(){return _e({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var Fn=jn,Vn=new lt("auth","Firebase",jn()),Hn=new Dt("@firebase/auth");function Bn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i;Hn.logLevel<=Et.ERROR&&(i=Hn).error.apply(i,["Auth (".concat(mn,"): ").concat(e)].concat((0,be.default)(n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Kn.apply(void 0,[e].concat((0,be.default)(n)))}function Wn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Kn.apply(void 0,[e].concat((0,be.default)(n)))}function zn(e,t,n){var r=Object.assign(Object.assign({},Fn()),_e({},t,n));return new lt("auth","Firebase",r).create(t,{appName:e.name})}function Gn(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&qn(e,"argument-error"),zn(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function Kn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i;if("string"!=typeof e){var a,o=n[0],s=(0,be.default)(n.slice(1));return s[0]&&(s[0].appName=e.name),(a=e._errorFactory).create.apply(a,[o].concat((0,be.default)(s)))}return(i=Vn).create.apply(i,[e].concat((0,be.default)(n)))}function Jn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(!e)throw Kn.apply(void 0,[t].concat((0,be.default)(r)))}function Xn(e){var t="INTERNAL ASSERTION FAILED: "+e;throw Bn(t),new Error(t)}function Yn(e,t){e||Xn(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $n=new Map;function Qn(e){Yn(e instanceof Function,"Expected a class definition");var t=$n.get(e);return t?(Yn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,$n.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(e,t){var n=hn(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(vt(n.getOptions(),null!=t?t:{}))return r;qn(r,"already-initialized")}return n.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function er(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function tr(){return"http:"===nr()||"https:"===nr()}function nr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!tr()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ir=function(){"use strict";function e(t,n){(0,me.default)(this,e),this.shortDelay=t,this.longDelay=n,Yn(n>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())||"object"==typeof navigator&&"ReactNative"===navigator.product}return(0,ye.default)(e,[{key:"get",value:function(){return rr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(e,t){Yn(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var or,sr=function(){"use strict";function e(){(0,me.default)(this,e)}return(0,ye.default)(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),ur=(_e(or={},"CREDENTIAL_MISMATCH","custom-token-mismatch"),_e(or,"MISSING_CUSTOM_TOKEN","internal-error"),_e(or,"INVALID_IDENTIFIER","invalid-email"),_e(or,"MISSING_CONTINUE_URI","internal-error"),_e(or,"INVALID_PASSWORD","wrong-password"),_e(or,"MISSING_PASSWORD","internal-error"),_e(or,"EMAIL_EXISTS","email-already-in-use"),_e(or,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),_e(or,"INVALID_IDP_RESPONSE","invalid-credential"),_e(or,"INVALID_PENDING_TOKEN","invalid-credential"),_e(or,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),_e(or,"MISSING_REQ_TYPE","internal-error"),_e(or,"EMAIL_NOT_FOUND","user-not-found"),_e(or,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),_e(or,"EXPIRED_OOB_CODE","expired-action-code"),_e(or,"INVALID_OOB_CODE","invalid-action-code"),_e(or,"MISSING_OOB_CODE","internal-error"),_e(or,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),_e(or,"INVALID_ID_TOKEN","invalid-user-token"),_e(or,"TOKEN_EXPIRED","user-token-expired"),_e(or,"USER_NOT_FOUND","user-token-expired"),_e(or,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),_e(or,"INVALID_CODE","invalid-verification-code"),_e(or,"INVALID_SESSION_INFO","invalid-verification-id"),_e(or,"INVALID_TEMPORARY_PROOF","invalid-credential"),_e(or,"MISSING_SESSION_INFO","missing-verification-id"),_e(or,"SESSION_EXPIRED","code-expired"),_e(or,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),_e(or,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),_e(or,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),_e(or,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),_e(or,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),_e(or,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),_e(or,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),_e(or,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),_e(or,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),_e(or,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),_e(or,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),or),cr=new ir(3e4,6e4);function lr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function dr(e,t,n,r){return fr.apply(this,arguments)}function fr(){return fr=(0,s.default)((function(e,t,n,r){var i,a=arguments;return(0,u.__generator)(this,(function(o){return i=a.length>4&&void 0!==a[4]?a[4]:{},[2,hr(e,i,(0,s.default)((function(){var i,a,o,s;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return i={},a={},r&&("GET"===t?a=r:i={body:JSON.stringify(r)}),o=gt(Object.assign({key:e.config.apiKey},a)).slice(1),[4,e._getAdditionalHeaders()];case 1:return(s=u.sent())["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode),[2,sr.fetch()(mr(e,e.config.apiHost,n,o),Object.assign({method:t,headers:s,referrerPolicy:"no-referrer"},i))]}}))})))]}))})),fr.apply(this,arguments)}function hr(e,t,n){return vr.apply(this,arguments)}function vr(){return(vr=(0,s.default)((function(e,t,n){var r,i,a,o,s,c,l,d,f,h;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:e._canInitEmulator=!1,r=Object.assign(Object.assign({},ur),t),u.label=1;case 1:return u.trys.push([1,4,,5]),i=new yr(e),[4,Promise.race([n(),i.promise])];case 2:return a=u.sent(),i.clearNetworkTimeout(),[4,a.json()];case 3:if("needConfirmation"in(o=u.sent()))throw _r(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return[2,o];if(s=a.ok?o.errorMessage:o.error.message,c=(0,ke.default)(s.split(" : "),2),l=c[0],d=c[1],"FEDERATED_USER_ID_ALREADY_LINKED"===l)throw _r(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===l)throw _r(e,"email-already-in-use",o);if("USER_DISABLED"===l)throw _r(e,"user-disabled",o);if(f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-"),d)throw zn(e,f,d);return qn(e,f),[3,5];case 4:if((h=u.sent())instanceof ct)throw h;return qn(e,"network-request-failed"),[3,5];case 5:return[2]}}))}))).apply(this,arguments)}function pr(e,t,n,r){return gr.apply(this,arguments)}function gr(){return gr=(0,s.default)((function(e,t,n,r){var i,a,o=arguments;return(0,u.__generator)(this,(function(s){switch(s.label){case 0:return i=o.length>4&&void 0!==o[4]?o[4]:{},[4,dr(e,t,n,r,i)];case 1:return"mfaPendingCredential"in(a=s.sent())&&qn(e,"multi-factor-auth-required",{_serverResponse:a}),[2,a]}}))})),gr.apply(this,arguments)}function mr(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?ar(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var yr=function(){"use strict";function e(t){var n=this;(0,me.default)(this,e),this.auth=t,this.timer=null,this.promise=new Promise((function(e,t){n.timer=setTimeout((function(){return t(Wn(n.auth,"network-request-failed"))}),cr.get())}))}return(0,ye.default)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function _r(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=Wn(e,t,r);return i.customData._tokenResponse=n,i}function br(e,t){return kr.apply(this,arguments)}function kr(){return(kr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,dr(e,"POST","/v1/accounts:delete",t)]}))}))).apply(this,arguments)}function Ir(e,t){return wr.apply(this,arguments)}function wr(){return(wr=(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,dr(e,"POST","/v1/accounts:lookup",t)]}))}))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(){return Er=(0,s.default)((function(e){var t,n,r,i,a,o,s=arguments;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return t=s.length>1&&void 0!==s[1]&&s[1],[4,(n=kt(e)).getIdToken(t)];case 1:return r=u.sent(),Jn((i=Or(r))&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error"),a="object"==typeof i.firebase?i.firebase:void 0,o=null==a?void 0:a.sign_in_provider,[2,{claims:i,token:r,authTime:Tr(Sr(i.auth_time)),issuedAtTime:Tr(Sr(i.iat)),expirationTime:Tr(Sr(i.exp)),signInProvider:o||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}]}}))})),Er.apply(this,arguments)}function Sr(e){return 1e3*Number(e)}function Or(e){var t=(0,ke.default)(e.split("."),3),n=t[0],r=t[1],i=t[2];if(void 0===n||void 0===r||void 0===i)return Bn("JWT malformed, contained fewer than 3 sections"),null;try{var a=et(r);return a?JSON.parse(a):(Bn("Failed to decode base64 JWT payload"),null)}catch(e){return Bn("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function Rr(e,t){return Cr.apply(this,arguments)}function Cr(){return Cr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s.default)((function(e,t){var n,r=arguments;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:if(r.length>2&&void 0!==r[2]&&r[2])return[2,t];i.label=1;case 1:return i.trys.push([1,3,,6]),[4,t];case 2:return[2,i.sent()];case 3:return(n=i.sent())instanceof ct&&Ar(n)?e.auth.currentUser!==e?[3,5]:[4,e.auth.signOut()]:[3,5];case 4:i.sent(),i.label=5;case 5:throw n;case 6:return[2]}}))})),Cr.apply(this,arguments)}function Ar(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nr=function(){"use strict";function e(t){(0,me.default)(this,e),this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return(0,ye.default)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var t=this.getInterval(e),n=this;this.timerId=setTimeout((0,s.default)((function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return[4,n.iteration()];case 1:return e.sent(),[2]}}))})),t)}}},{key:"iteration",value:function(){var e=this;return(0,s.default)((function(){var t;return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,e.user.getIdToken(!0)];case 1:return n.sent(),[3,3];case 2:return"auth/network-request-failed"===(null==(t=n.sent())?void 0:t.code)&&e.schedule(!0),[2];case 3:return e.schedule(),[2]}}))}))()}}]),e}(),Pr=function(){"use strict";function e(t,n){(0,me.default)(this,e),this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}return(0,ye.default)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=Tr(this.lastLoginAt),this.creationTime=Tr(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(e){return Dr.apply(this,arguments)}function Dr(){return(Dr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s.default)((function(e){var t,n,r,i,a,o,s,c,l,d,f;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return n=e.auth,[4,e.getIdToken()];case 1:return r=u.sent(),[4,Rr(e,Ir(n,{idToken:r}))];case 2:return Jn(null==(i=u.sent())?void 0:i.users.length,n,"internal-error"),a=i.users[0],e._notifyReloadListener(a),o=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?xr(a.providerUserInfo):[],s=Ur(e.providerData,o),c=e.isAnonymous,l=!(e.email&&a.passwordHash||(null==s?void 0:s.length)),d=!!c&&l,f={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new Pr(a.createdAt,a.lastLoginAt),isAnonymous:d},Object.assign(e,f),[2]}}))}))).apply(this,arguments)}function Mr(){return(Mr=(0,s.default)((function(e){var t;return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,Lr(t=kt(e))];case 1:return n.sent(),[4,t.auth._persistUserIfCurrent(t)];case 2:return n.sent(),t.auth._notifyListenersIfCurrent(t),[2]}}))}))).apply(this,arguments)}function Ur(e,t){var n=e.filter((function(e){return!t.some((function(t){return t.providerId===e.providerId}))}));return(0,be.default)(n).concat((0,be.default)(t))}function xr(e){return e.map((function(e){var t=e.providerId,n=(0,u.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function jr(e,t){return Fr.apply(this,arguments)}function Fr(){return(Fr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s.default)((function(e,t){var n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return[4,hr(e,{},(0,s.default)((function(){var n,r,i,a,o,s;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return n=gt({grant_type:"refresh_token",refresh_token:t}).slice(1),r=e.config,i=r.tokenApiHost,a=r.apiKey,o=mr(e,i,"/v1/token","key=".concat(a)),[4,e._getAdditionalHeaders()];case 1:return(s=u.sent())["Content-Type"]="application/x-www-form-urlencoded",[2,sr.fetch()(o,{method:"POST",headers:s,body:n})]}}))})))];case 1:return[2,{accessToken:(n=r.sent()).access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}]}}))}))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vr=function(){"use strict";function e(){(0,me.default)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return(0,ye.default)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){Jn(e.idToken,"internal-error"),Jn(void 0!==e.idToken,"internal-error"),Jn(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,Jn(n=Or(t),"internal-error"),Jn(void 0!==n.exp,"internal-error"),Jn(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return Jn(!n.accessToken||n.refreshToken,e,"user-token-expired"),t||!n.accessToken||n.isExpired?n.refreshToken?[4,n.refresh(e,n.refreshToken)]:[3,2]:[2,n.accessToken];case 1:return r.sent(),[2,n.accessToken];case 2:return[2,null]}}))}))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,t){var n=this;return(0,s.default)((function(){var r,i,a,o;return(0,u.__generator)(this,(function(s){switch(s.label){case 0:return[4,jr(e,t)];case 1:return r=s.sent(),i=r.accessToken,a=r.refreshToken,o=r.expiresIn,n.updateTokensAndExpiration(i,a,Number(o)),[2]}}))}))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return Xn("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new e;return r&&(Jn("string"==typeof r,"internal-error",{appName:t}),o.refreshToken=r),i&&(Jn("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),a&&(Jn("number"==typeof a,"internal-error",{appName:t}),o.expirationTime=a),o}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(e,t){Jn("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Br=function(){"use strict";function e(t){(0,me.default)(this,e);var n=t.uid,r=t.auth,i=t.stsTokenManager,a=(0,u.__rest)(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?(0,be.default)(a.providerData):[],this.metadata=new Pr(a.createdAt||void 0,a.lastLoginAt||void 0)}return(0,ye.default)(e,[{key:"getIdToken",value:function(e){var t=this;return(0,s.default)((function(){var n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return[4,Rr(t,t.stsTokenManager.getToken(t.auth,e))];case 1:return Jn(n=r.sent(),t.auth,"internal-error"),t.accessToken===n?[3,3]:(t.accessToken=n,[4,t.auth._persistUserIfCurrent(t)]);case 2:r.sent(),t.auth._notifyListenersIfCurrent(t),r.label=3;case 3:return[2,n]}}))}))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Er.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Mr.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(Jn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){Jn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return(0,s.default)((function(){var r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return r=!1,e.idToken&&e.idToken!==n.stsTokenManager.accessToken&&(n.stsTokenManager.updateFromServerResponse(e),r=!0),t?[4,Lr(n)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[4,n.auth._persistUserIfCurrent(n)];case 3:return i.sent(),r&&n.auth._notifyListenersIfCurrent(n),[2]}}))}))()}},{key:"delete",value:function(){var e=this;return(0,s.default)((function(){var t;return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,e.getIdToken()];case 1:return t=n.sent(),[4,Rr(e,br(e.auth,{idToken:t}))];case 2:return n.sent(),e.stsTokenManager.clearRefreshToken(),[2,e.auth.signOut()]}}))}))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,a,o,s,u,c,l,d=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,h=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,v=null!==(o=n.photoURL)&&void 0!==o?o:void 0,p=null!==(s=n.tenantId)&&void 0!==s?s:void 0,g=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,m=null!==(c=n.createdAt)&&void 0!==c?c:void 0,y=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,_=n.uid,b=n.emailVerified,k=n.isAnonymous,I=n.providerData,w=n.stsTokenManager;Jn(_&&w,t,"internal-error");var T=Vr.fromJSON(this.name,w);Jn("string"==typeof _,t,"internal-error"),Hr(d,t.name),Hr(f,t.name),Jn("boolean"==typeof b,t,"internal-error"),Jn("boolean"==typeof k,t,"internal-error"),Hr(h,t.name),Hr(v,t.name),Hr(p,t.name),Hr(g,t.name),Hr(m,t.name),Hr(y,t.name);var E=new e({uid:_,auth:t,email:f,emailVerified:b,displayName:d,isAnonymous:k,photoURL:v,phoneNumber:h,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return I&&Array.isArray(I)&&(E.providerData=I.map((function(e){return Object.assign({},e)}))),g&&(E._redirectEventId=g),E}},{key:"_fromIdTokenResponse",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,s.default)((function(){var i,a;return(0,u.__generator)(this,(function(o){switch(o.label){case 0:return(i=new Vr).updateFromServerResponse(n),[4,Lr(a=new e({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r}))];case 1:return o.sent(),[2,a]}}))}))()}}]),e}(),qr=function(){"use strict";function e(){(0,me.default)(this,e),this.type="NONE",this.storage={}}return(0,ye.default)(e,[{key:"_isAvailable",value:function(){return(0,s.default)((function(){return(0,u.__generator)(this,(function(e){return[2,!0]}))}))()}},{key:"_set",value:function(e,t){var n=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(r){return n.storage[e]=t,[2]}))}))()}},{key:"_get",value:function(e){var t=this;return(0,s.default)((function(){var n;return(0,u.__generator)(this,(function(r){return[2,void 0===(n=t.storage[e])?null:n]}))}))()}},{key:"_remove",value:function(e){var t=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(n){return delete t.storage[e],[2]}))}))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qr.type="NONE";var Wr=qr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Gr=function(){"use strict";function e(t,n,r){(0,me.default)(this,e),this.persistence=t,this.auth=n,this.userKey=r;var i=this.auth,a=i.config,o=i.name;this.fullUserKey=zr(this.userKey,a.apiKey,o),this.fullPersistenceKey=zr("persistence",a.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return(0,ye.default)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return(0,s.default)((function(){var t;return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,e.persistence._get(e.fullUserKey)];case 1:return[2,(t=n.sent())?Br._fromJSON(e.auth,t):null]}}))}))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var t=this;return(0,s.default)((function(){var n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return t.persistence===e?[2]:[4,t.getCurrentUser()];case 1:return n=r.sent(),[4,t.removeCurrentUser()];case 2:return r.sent(),t.persistence=e,n?[2,t.setCurrentUser(n)]:[2]}}))}))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return(0,s.default)((function(){var i,a,o,c,l,d,f,h,v,p,g,m,y,_;return(0,u.__generator)(this,(function(b){switch(b.label){case 0:return n.length?[4,Promise.all(n.map(function(){var e=(0,s.default)((function(e){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return[4,e._isAvailable()];case 1:return t.sent()?[2,e]:[2,void 0]}}))}));return function(t){return e.apply(this,arguments)}}()))]:[2,new e(Qn(Wr),t,r)];case 1:i=b.sent().filter((function(e){return e})),a=i[0]||Qn(Wr),o=zr(r,t.config.apiKey,t.name),c=null,l=!0,d=!1,f=void 0,b.label=2;case 2:b.trys.push([2,9,10,11]),h=n[Symbol.iterator](),b.label=3;case 3:if(l=(v=h.next()).done)return[3,8];p=v.value,b.label=4;case 4:return b.trys.push([4,6,,7]),[4,p._get(o)];case 5:return(g=b.sent())?(m=Br._fromJSON(t,g),p!==a&&(c=m),a=p,[3,8]):[3,7];case 6:return b.sent(),[3,7];case 7:return l=!0,[3,3];case 8:return[3,11];case 9:return y=b.sent(),d=!0,f=y,[3,11];case 10:try{l||null==h.return||h.return()}finally{if(d)throw f}return[7];case 11:return _=i.filter((function(e){return e._shouldAllowMigration})),a._shouldAllowMigration&&_.length?(a=_[0],c?[4,a._set(o,c.toJSON())]:[3,13]):[2,new e(a,t,r)];case 12:b.sent(),b.label=13;case 13:return[4,Promise.all(n.map(function(){var e=(0,s.default)((function(e){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:if(e===a)return[3,4];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,e._remove(o)];case 2:return t.sent(),[3,4];case 3:return t.sent(),[3,4];case 4:return[2]}}))}));return function(t){return e.apply(this,arguments)}}()))];case 14:return b.sent(),[2,new e(a,t,r)]}}))}))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if($r(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Jr(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Zr(t))return"Blackberry";if(ei(t))return"Webos";if(Xr(t))return"Safari";if((t.includes("chrome/")||Yr(t))&&!t.includes("edge/"))return"Chrome";if(Qr(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Jr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt();return/firefox\//i.test(e)}function Xr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Yr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt();return/crios\//i.test(e)}function $r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt();return/iemobile/i.test(e)}function Qr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt();return/android/i.test(e)}function Zr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt();return/blackberry/i.test(e)}function ei(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt();return/webos/i.test(e)}function ti(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ni(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt();return ti(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function ri(){return((e=tt()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function ii(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt();return ti(e)||Qr(e)||ei(e)||Zr(e)||/windows phone/i.test(e)||$r(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ai(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Kr(tt());break;case"Worker":t="".concat(Kr(tt()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(mn,"/").concat(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oi=function(){"use strict";function e(t){(0,me.default)(this,e),this.auth=t,this.queue=[]}return(0,ye.default)(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var t=this;return(0,s.default)((function(){var n,r,i,a,o,s,c,l,d,f,h,v,p,g,m;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:if(t.auth.currentUser===e)return[2];n=[],u.label=1;case 1:u.trys.push([1,10,,11]),r=!0,i=!1,a=void 0,u.label=2;case 2:u.trys.push([2,7,8,9]),o=t.queue[Symbol.iterator](),u.label=3;case 3:return(r=(s=o.next()).done)?[3,6]:[4,(c=s.value)(e)];case 4:u.sent(),c.onAbort&&n.push(c.onAbort),u.label=5;case 5:return r=!0,[3,3];case 6:return[3,9];case 7:return l=u.sent(),i=!0,a=l,[3,9];case 8:try{r||null==o.return||o.return()}finally{if(i)throw a}return[7];case 9:return[3,11];case 10:d=u.sent(),n.reverse(),f=!0,h=!1,v=void 0;try{for(p=n[Symbol.iterator]();!(f=(g=p.next()).done);f=!0){m=g.value;try{m()}catch(e){}}}catch(e){h=!0,v=e}finally{try{f||null==p.return||p.return()}finally{if(h)throw v}}throw t.auth._errorFactory.create("login-blocked",{originalMessage:null==d?void 0:d.message});case 11:return[2]}}))}))()}}]),e}(),si=function(){"use strict";function e(t,n,r){(0,me.default)(this,e),this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ci(this),this.idTokenSubscription=new ci(this),this.beforeStateQueue=new oi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}return(0,ye.default)(e,[{key:"_initializeWithPersistence",value:function(e,t){t&&(this._popupRedirectResolver=Qn(t));var n=this;return this._initializationPromise=this.queue((0,s.default)((function(){var r,i;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:return n._deleted?[2]:[4,Gr.create(n,e)];case 1:if(n.persistenceManager=a.sent(),n._deleted)return[2];if(!(null===(r=n._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively))return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,n._popupRedirectResolver._initialize(n)];case 3:return a.sent(),[3,5];case 4:return a.sent(),[3,5];case 5:return[4,n.initializeCurrentUser(t)];case 6:return a.sent(),n.lastNotifiedUid=(null===(i=n.currentUser)||void 0===i?void 0:i.uid)||null,n._deleted?[2]:(n._isInitialized=!0,[2])}}))}))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return(0,s.default)((function(){var t;return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return e._deleted?[2]:[4,e.assertedPersistence.getCurrentUser()];case 1:return t=n.sent(),e.currentUser||t?e.currentUser&&t&&e.currentUser.uid===t.uid?(e._currentUser._assign(t),[4,e.currentUser.getIdToken()]):[3,3]:[2];case 2:case 4:return n.sent(),[2];case 3:return[4,e._updateCurrentUser(t,!0)]}}))}))()}},{key:"initializeCurrentUser",value:function(e){var t=this;return(0,s.default)((function(){var n,r,i,a,o,s,c,l;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return[4,t.assertedPersistence.getCurrentUser()];case 1:return r=u.sent(),i=r,a=!1,e&&t.config.authDomain?[4,t.getOrInitRedirectPersistenceManager()]:[3,4];case 2:return u.sent(),o=null===(n=t.redirectUser)||void 0===n?void 0:n._redirectEventId,s=null==i?void 0:i._redirectEventId,[4,t.tryRedirectSignIn(e)];case 3:c=u.sent(),o&&o!==s||!(null==c?void 0:c.user)||(i=c.user,a=!0),u.label=4;case 4:if(!i)return[2,t.directlySetCurrentUser(null)];if(i._redirectEventId)return[3,9];if(!a)return[3,8];u.label=5;case 5:return u.trys.push([5,7,,8]),[4,t.beforeStateQueue.runMiddleware(i)];case 6:return u.sent(),[3,8];case 7:return l=u.sent(),i=r,t._popupRedirectResolver._overrideRedirectResult(t,(function(){return Promise.reject(l)})),[3,8];case 8:return i?[2,t.reloadAndSetCurrentUserOrClear(i)]:[2,t.directlySetCurrentUser(null)];case 9:return Jn(t._popupRedirectResolver,t,"argument-error"),[4,t.getOrInitRedirectPersistenceManager()];case 10:return u.sent(),t.redirectUser&&t.redirectUser._redirectEventId===i._redirectEventId?[2,t.directlySetCurrentUser(i)]:[2,t.reloadAndSetCurrentUserOrClear(i)]}}))}))()}},{key:"tryRedirectSignIn",value:function(e){var t=this;return(0,s.default)((function(){var n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:n=null,r.label=1;case 1:return r.trys.push([1,3,,5]),[4,t._popupRedirectResolver._completeRedirectFn(t,e,!0)];case 2:return n=r.sent(),[3,5];case 3:return r.sent(),[4,t._setRedirectUser(null)];case 4:return r.sent(),[3,5];case 5:return[2,n]}}))}))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var t=this;return(0,s.default)((function(){var n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,Lr(e)];case 1:return r.sent(),[3,3];case 2:return"auth/network-request-failed"!==(null==(n=r.sent())?void 0:n.code)?[2,t.directlySetCurrentUser(null)]:[3,3];case 3:return[2,t.directlySetCurrentUser(e)]}}))}))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(t){return e._deleted=!0,[2]}))}))()}},{key:"updateCurrentUser",value:function(e){var t=this;return(0,s.default)((function(){var n;return(0,u.__generator)(this,(function(r){return(n=e?kt(e):null)&&Jn(n.auth.config.apiKey===t.config.apiKey,t,"invalid-user-token"),[2,t._updateCurrentUser(n&&n._clone(t))]}))}))()}},{key:"_updateCurrentUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return n._deleted?[2]:(e&&Jn(n.tenantId===e.tenantId,n,"tenant-id-mismatch"),t?[3,2]:[4,n.beforeStateQueue.runMiddleware(e)]);case 1:r.sent(),r.label=2;case 2:return[2,n.queue((0,s.default)((function(){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return[4,n.directlySetCurrentUser(e)];case 1:return t.sent(),n.notifyAuthListeners(),[2]}}))})))]}}))}))()}},{key:"signOut",value:function(){var e=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return[4,e.beforeStateQueue.runMiddleware(null)];case 1:return t.sent(),e.redirectPersistenceManager||e._popupRedirectResolver?[4,e._setRedirectUser(null)]:[3,3];case 2:t.sent(),t.label=3;case 3:return[2,e._updateCurrentUser(null,!0)]}}))}))()}},{key:"setPersistence",value:function(e){var t=this;return this.queue((0,s.default)((function(){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,t.assertedPersistence.setPersistence(Qn(e))];case 1:return n.sent(),[2]}}))})))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new lt("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,t){var n=this;return(0,s.default)((function(){var r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return[4,n.getOrInitRedirectPersistenceManager(t)];case 1:return r=i.sent(),[2,null===e?r.removeCurrentUser():r.setCurrentUser(e)]}}))}))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var t=this;return(0,s.default)((function(){var n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return t.redirectPersistenceManager?[3,3]:(Jn(n=e&&Qn(e)||t._popupRedirectResolver,t,"argument-error"),[4,Gr.create(t,[Qn(n._redirectPersistence)],"redirectUser")]);case 1:return t.redirectPersistenceManager=r.sent(),[4,t.redirectPersistenceManager.getCurrentUser()];case 2:t.redirectUser=r.sent(),r.label=3;case 3:return[2,t.redirectPersistenceManager]}}))}))()}},{key:"_redirectUserForId",value:function(e){var t=this;return(0,s.default)((function(){var n,r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return t._isInitialized?[4,t.queue((0,s.default)((function(){return(0,u.__generator)(this,(function(e){return[2]}))})))]:[3,2];case 1:i.sent(),i.label=2;case 2:return(null===(n=t._currentUser)||void 0===n?void 0:n._redirectEventId)===e?[2,t._currentUser]:(null===(r=t.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?[2,t.redirectUser]:[2,null]}}))}))()}},{key:"_persistUserIfCurrent",value:function(e){var t=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(n){return e===t.currentUser?[2,t.queue((0,s.default)((function(){return(0,u.__generator)(this,(function(n){return[2,t.directlySetCurrentUser(e)]}))})))]:[2]}))}))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Jn(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var t=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return t.currentUser&&t.currentUser!==e&&t._currentUser._stopProactiveRefresh(),e&&t.isProactiveRefreshEnabled&&e._startProactiveRefresh(),t.currentUser=e,e?[4,t.assertedPersistence.setCurrentUser(e)]:[3,2];case 1:return n.sent(),[3,4];case 2:return[4,t.assertedPersistence.removeCurrentUser()];case 3:n.sent(),n.label=4;case 4:return[2]}}))}))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return Jn(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ai(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return(0,s.default)((function(){var t,n,r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return n=_e({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(n["X-Firebase-gmpid"]=e.app.options.appId),[4,null===(t=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader()];case 1:return(r=i.sent())&&(n["X-Firebase-Client"]=r),[2,n]}}))}))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(e){return kt(e)}var ci=function(){"use strict";function e(t){var n,r,i=this;(0,me.default)(this,e),this.auth=t,this.observer=null,this.addObserver=(r=new _t((function(e){return i.observer=e}),n)).subscribe.bind(r)}return(0,ye.default)(e,[{key:"next",get:function(){return Jn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();function li(e,t,n){var r=ui(e);Jn(r._canInitEmulator,r,"emulator-config-failed"),Jn(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");var i=!!(null==n?void 0:n.disableWarnings),a=di(t),o=function(e){var t=di(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};var r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){var a=i[1];return{host:a,port:fi(r.substr(a.length+1))}}var o=(0,ke.default)(r.split(":"),2);return{host:o[0],port:fi(o[1])}}(t),s=o.host,u=o.port,c=null===u?"":":".concat(u);r.config.emulator={url:"".concat(a,"//").concat(s).concat(c,"/")},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:u,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function di(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function fi(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var hi=function(){"use strict";function e(t,n){(0,me.default)(this,e),this.providerId=t,this.signInMethod=n}return(0,ye.default)(e,[{key:"toJSON",value:function(){return Xn("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return Xn("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return Xn("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return Xn("not implemented")}}]),e}();function vi(e,t){return pi.apply(this,arguments)}function pi(){return(pi=(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,dr(e,"POST","/v1/accounts:update",t)]}))}))).apply(this,arguments)}function gi(e,t){return mi.apply(this,arguments)}function mi(){return(mi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,pr(e,"POST","/v1/accounts:signInWithPassword",lr(e,t))]}))}))).apply(this,arguments)}function yi(e,t){return _i.apply(this,arguments)}function _i(){return(_i=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,pr(e,"POST","/v1/accounts:signInWithEmailLink",lr(e,t))]}))}))).apply(this,arguments)}function bi(e,t){return ki.apply(this,arguments)}function ki(){return(ki=(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,pr(e,"POST","/v1/accounts:signInWithEmailLink",lr(e,t))]}))}))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ii=function(e){"use strict";Ee(n,e);var t=Me(n);function n(e,r,i){var a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return(0,me.default)(this,n),(a=t.call(this,"password",i))._email=e,a._password=r,a._tenantId=o,a}return(0,ye.default)(n,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var t=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(n){switch(t.signInMethod){case"password":return[2,gi(e,{returnSecureToken:!0,email:t._email,password:t._password})];case"emailLink":return[2,yi(e,{email:t._email,oobCode:t._password})];default:qn(e,"internal-error")}return[2]}))}))()}},{key:"_linkToIdToken",value:function(e,t){var n=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(r){switch(n.signInMethod){case"password":return[2,vi(e,{idToken:t,returnSecureToken:!0,email:n._email,password:n._password})];case"emailLink":return[2,bi(e,{idToken:t,email:n._email,oobCode:n._password})];default:qn(e,"internal-error")}return[2]}))}))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new n(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new n(e,t,"emailLink",r)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),n}(hi);function wi(e,t){return Ti.apply(this,arguments)}function Ti(){return(Ti=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,pr(e,"POST","/v1/accounts:signInWithIdp",lr(e,t))]}))}))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ei=function(e){"use strict";Ee(n,e);var t=Me(n);function n(){var e;return(0,me.default)(this,n),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return(0,ye.default)(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return wi(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,wi(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,wi(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=gt(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qn("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,r=t.providerId,i=t.signInMethod,a=(0,u.__rest)(t,["providerId","signInMethod"]);if(!r||!i)return null;var o=new n(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),n}(hi);function Si(e,t){return Oi.apply(this,arguments)}function Oi(){return(Oi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,dr(e,"POST","/v1/accounts:sendVerificationCode",lr(e,t))]}))}))).apply(this,arguments)}function Ri(){return(Ri=(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,pr(e,"POST","/v1/accounts:signInWithPhoneNumber",lr(e,t))]}))}))).apply(this,arguments)}function Ci(){return(Ci=(0,s.default)((function(e,t){var n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return[4,pr(e,"POST","/v1/accounts:signInWithPhoneNumber",lr(e,t))];case 1:if((n=r.sent()).temporaryProof)throw _r(e,"account-exists-with-different-credential",n);return[2,n]}}))}))).apply(this,arguments)}var Ai=_e({},"USER_NOT_FOUND","user-not-found");function Ni(){return(Ni=(0,s.default)((function(e,t){var n;return(0,u.__generator)(this,(function(r){return n=Object.assign(Object.assign({},t),{operation:"REAUTH"}),[2,pr(e,"POST","/v1/accounts:signInWithPhoneNumber",lr(e,n),Ai)]}))}))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pi=function(e){"use strict";Ee(n,e);var t=Me(n);function n(e){var r;return(0,me.default)(this,n),(r=t.call(this,"phone","phone")).params=e,r}return(0,ye.default)(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Ri.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Ci.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Ni.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return r||t||i||a?new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:a}):null}}]),n}(hi);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Li=function(){"use strict";function e(t){var n,r,i,a,o,s;(0,me.default)(this,e);var u=mt(yt(t)),c=null!==(n=u.apiKey)&&void 0!==n?n:null,l=null!==(r=u.oobCode)&&void 0!==r?r:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=u.mode)&&void 0!==i?i:null);Jn(c&&l&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=l,this.continueUrl=null!==(a=u.continueUrl)&&void 0!==a?a:null,this.languageCode=null!==(o=u.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=u.tenantId)&&void 0!==s?s:null}return(0,ye.default)(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=mt(yt(e)).link,n=t?mt(yt(t)).deep_link_id:null,r=mt(yt(e)).deep_link_id;return(r?mt(yt(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Di=function(){"use strict";function e(){(0,me.default)(this,e),this.providerId=e.PROVIDER_ID}return(0,ye.default)(e,null,[{key:"credential",value:function(e,t){return Ii._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=Li.parseLink(t);return Jn(n,"argument-error"),Ii._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();Di.PROVIDER_ID="password",Di.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mi=function(){"use strict";function e(t){(0,me.default)(this,e),this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}return(0,ye.default)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),Ui=function(e){"use strict";Ee(n,e);var t=Me(n);function n(){var e;return(0,me.default)(this,n),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return(0,ye.default)(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return(0,be.default)(this.scopes)}}]),n}(Mi),xi=function(e){"use strict";Ee(n,e);var t=Me(n);function n(){return(0,me.default)(this,n),t.call(this,"facebook.com")}return(0,ye.default)(n,null,[{key:"credential",value:function(e){return Ei._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(Ui);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xi.FACEBOOK_SIGN_IN_METHOD="facebook.com",xi.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ji=function(e){"use strict";Ee(n,e);var t=Me(n);function n(){var e;return(0,me.default)(this,n),(e=t.call(this,"google.com")).addScope("profile"),e}return(0,ye.default)(n,null,[{key:"credential",value:function(e,t){return Ei._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,i=t.oauthAccessToken;if(!r&&!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(Ui);ji.GOOGLE_SIGN_IN_METHOD="google.com",ji.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Fi=function(e){"use strict";Ee(n,e);var t=Me(n);function n(){return(0,me.default)(this,n),t.call(this,"github.com")}return(0,ye.default)(n,null,[{key:"credential",value:function(e){return Ei._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(Ui);Fi.GITHUB_SIGN_IN_METHOD="github.com",Fi.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Vi=function(e){"use strict";Ee(n,e);var t=Me(n);function n(){return(0,me.default)(this,n),t.call(this,"twitter.com")}return(0,ye.default)(n,null,[{key:"credential",value:function(e,t){return Ei._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,i=t.oauthTokenSecret;if(!r||!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(Ui);function Hi(e,t){return Bi.apply(this,arguments)}function Bi(){return(Bi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,pr(e,"POST","/v1/accounts:signUp",lr(e,t))]}))}))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vi.TWITTER_SIGN_IN_METHOD="twitter.com",Vi.PROVIDER_ID="twitter.com";var qi=function(){"use strict";function e(t){(0,me.default)(this,e),this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}return(0,ye.default)(e,null,[{key:"_fromIdTokenResponse",value:function(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return(0,s.default)((function(){var a,o;return(0,u.__generator)(this,(function(s){switch(s.label){case 0:return[4,Br._fromIdTokenResponse(t,r,i)];case 1:return a=s.sent(),o=Wi(r),[2,new e({user:a,providerId:o,_tokenResponse:r,operationType:n})]}}))}))()}},{key:"_forOperation",value:function(t,n,r){return(0,s.default)((function(){var i;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:return[4,t._updateTokensIfNecessary(r,!0)];case 1:return a.sent(),i=Wi(r),[2,new e({user:t,providerId:i,_tokenResponse:r,operationType:n})]}}))}))()}}]),e}();function Wi(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zi=function(e){"use strict";Ee(n,e);var t=Me(n);function n(e,r,i,a){var o,s;return(0,me.default)(this,n),(o=t.call(this,r.code,r.message)).operationType=i,o.user=a,Object.setPrototypeOf(Ie(o),n.prototype),o.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:r.customData._serverResponse,operationType:i},o}return(0,ye.default)(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,i){return new n(e,t,r,i)}}]),n}(ct);function Gi(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw zi._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(e,t){return Ji.apply(this,arguments)}function Ji(){return Ji=(0,s.default)((function(e,t){var n,r,i,a,o,s=arguments;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return n=s.length>2&&void 0!==s[2]&&s[2],i=[e],a=t._linkToIdToken,o=[e.auth],[4,e.getIdToken()];case 1:return[4,Rr.apply(void 0,i.concat([a.apply(t,o.concat([u.sent()])),n]))];case 2:return r=u.sent(),[2,qi._forOperation(e,"link",r)]}}))})),Ji.apply(this,arguments)}function Xi(e,t){return Yi.apply(this,arguments)}function Yi(){return Yi=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s.default)((function(e,t){var n,r,i,a,o,s,c,l=arguments;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:n=l.length>2&&void 0!==l[2]&&l[2],r=e.auth,i="reauthenticate",u.label=1;case 1:return u.trys.push([1,3,,4]),[4,Rr(e,Gi(r,i,t,e),n)];case 2:return Jn((a=u.sent()).idToken,r,"internal-error"),Jn(o=Or(a.idToken),r,"internal-error"),s=o.sub,Jn(e.uid===s,r,"user-mismatch"),[2,qi._forOperation(e,i,a)];case 3:throw"auth/user-not-found"===(null==(c=u.sent())?void 0:c.code)&&qn(r,"user-mismatch"),c;case 4:return[2]}}))})),Yi.apply(this,arguments)}function $i(e,t){return Qi.apply(this,arguments)}function Qi(){return Qi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s.default)((function(e,t){var n,r,i,a,o=arguments;return(0,u.__generator)(this,(function(s){switch(s.label){case 0:return n=o.length>2&&void 0!==o[2]&&o[2],[4,Gi(e,r="signIn",t)];case 1:return i=s.sent(),[4,qi._fromIdTokenResponse(e,r,i)];case 2:return a=s.sent(),n?[3,4]:[4,e._updateCurrentUser(a.user)];case 3:s.sent(),s.label=4;case 4:return[2,a]}}))})),Qi.apply(this,arguments)}function Zi(e,t){return ea.apply(this,arguments)}function ea(){return(ea=(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,$i(ui(e),t)]}))}))).apply(this,arguments)}function ta(e,t,n){return na.apply(this,arguments)}function na(){return(na=(0,s.default)((function(e,t,n){var r,i,a;return(0,u.__generator)(this,(function(o){switch(o.label){case 0:return[4,Hi(r=ui(e),{returnSecureToken:!0,email:t,password:n})];case 1:return i=o.sent(),[4,qi._fromIdTokenResponse(r,"signIn",i)];case 2:return a=o.sent(),[4,r._updateCurrentUser(a.user)];case 3:return o.sent(),[2,a]}}))}))).apply(this,arguments)}function ra(e,t,n){return Zi(kt(e),Di.credential(t,n))}function ia(e,t,n,r){return kt(e).onIdTokenChanged(t,n,r)}function aa(e,t,n){return kt(e).beforeAuthStateChanged(t,n)}function oa(e){return kt(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sa(e,t){return dr(e,"POST","/v2/accounts/mfaEnrollment:start",lr(e,t))}new WeakMap;var ua="__sak",ca=function(){"use strict";function e(t,n){(0,me.default)(this,e),this.storageRetriever=t,this.type=n}return(0,ye.default)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(ua,"1"),this.storage.removeItem(ua),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var la=function(e){"use strict";Ee(n,e);var t=Me(n);function n(){var e,r;return(0,me.default)(this,n),(e=t.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(Xr(r=tt())||ti(r))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=ii(),e._shouldAllowMigration=!0,e}return(0,ye.default)(n,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);ri()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else this.forAllChangedKeys((function(e,t,r){n.notifyListeners(e,r)}))}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){e.forAllChangedKeys((function(t,n,r){e.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,t){var r=this,i=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(a){switch(a.label){case 0:return[4,xn(Ae(n.prototype),"_set",r).call(i,e,t)];case 1:return a.sent(),i.localCache[e]=JSON.stringify(t),[2]}}))}))()}},{key:"_get",value:function(e){var t=this,r=this;return(0,s.default)((function(){var i;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:return[4,xn(Ae(n.prototype),"_get",t).call(r,e)];case 1:return i=a.sent(),r.localCache[e]=JSON.stringify(i),[2,i]}}))}))()}},{key:"_remove",value:function(e){var t=this,r=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return[4,xn(Ae(n.prototype),"_remove",t).call(r,e)];case 1:return i.sent(),delete r.localCache[e],[2]}}))}))()}}]),n}(ca);la.type="LOCAL";var da=la,fa=function(e){"use strict";Ee(n,e);var t=Me(n);function n(){return(0,me.default)(this,n),t.call(this,(function(){return window.sessionStorage}),"SESSION")}return(0,ye.default)(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(ca);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fa.type="SESSION";var ha=fa;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(e){return Promise.all(e.map(function(){var e=(0,s.default)((function(e){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,e];case 1:return[2,{fulfilled:!0,value:t.sent()}];case 2:return[2,{fulfilled:!1,reason:t.sent()}];case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}()))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pa=function(){"use strict";function e(t){(0,me.default)(this,e),this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return(0,ye.default)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var t=this;return(0,s.default)((function(){var n,r,i,a,o,c,l,d;return(0,u.__generator)(this,(function(f){switch(f.label){case 0:return r=(n=e).data,i=r.eventId,a=r.eventType,o=r.data,(null==(c=t.handlersMap[a])?void 0:c.size)?(n.ports[0].postMessage({status:"ack",eventId:i,eventType:a}),l=Array.from(c).map(function(){var e=(0,s.default)((function(e){return(0,u.__generator)(this,(function(t){return[2,e(n.origin,o)]}))}));return function(t){return e.apply(this,arguments)}}()),[4,va(l)]):[2];case 1:return d=f.sent(),n.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:d}),[2]}}))}))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ga(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pa.receivers=[];var ma=function(){"use strict";function e(t){(0,me.default)(this,e),this.target=t,this.handlers=new Set}return(0,ye.default)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,r=this;return(0,s.default)((function(){var i,a,o;return(0,u.__generator)(this,(function(s){if(!(i="undefined"!=typeof MessageChannel?new MessageChannel:null))throw new Error("connection_unavailable");return[2,new Promise((function(s,u){var c=ga("",20);i.port1.start();var l=setTimeout((function(){u(new Error("unsupported_event"))}),n);o={messageChannel:i,onMessage:function(e){var t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),a=setTimeout((function(){u(new Error("timeout"))}),3e3);break;case"done":clearTimeout(a),s(t.data.response);break;default:clearTimeout(l),clearTimeout(a),u(new Error("invalid_response"))}}},r.handlers.add(o),i.port1.addEventListener("message",o.onMessage),r.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((function(){o&&r.removeMessageHandler(o)}))]}))}))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _a(){return void 0!==ya().WorkerGlobalScope&&"function"==typeof ya().importScripts}function ba(){return ka.apply(this,arguments)}function ka(){return(ka=(0,s.default)((function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return[2,null];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,navigator.serviceWorker.ready];case 2:return[2,e.sent().active];case 3:return e.sent(),[2,null];case 4:return[2]}}))}))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ia="firebaseLocalStorageDb",wa="firebaseLocalStorage",Ta="fbase_key",Ea=function(){"use strict";function e(t){(0,me.default)(this,e),this.request=t}return(0,ye.default)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){e.request.addEventListener("success",(function(){t(e.request.result)})),e.request.addEventListener("error",(function(){n(e.request.error)}))}))}}]),e}();function Sa(e,t){return e.transaction([wa],t?"readwrite":"readonly").objectStore(wa)}function Oa(){var e=indexedDB.deleteDatabase(Ia);return new Ea(e).toPromise()}function Ra(){var e=indexedDB.open(Ia,1);return new Promise((function(t,n){e.addEventListener("error",(function(){n(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(wa,{keyPath:Ta})}catch(e){n(e)}})),e.addEventListener("success",(0,s.default)((function(){var n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return(n=e.result).objectStoreNames.contains(wa)?[3,3]:(n.close(),[4,Oa()]);case 1:return r.sent(),[4,Ra()];case 2:return t.apply(void 0,[r.sent()]),[3,4];case 3:t(n),r.label=4;case 4:return[2]}}))})))}))}function Ca(e,t,n){return Aa.apply(this,arguments)}function Aa(){return(Aa=(0,s.default)((function(e,t,n){var r,i;return(0,u.__generator)(this,(function(a){return i=Sa(e,!0).put((_e(r={},Ta,t),_e(r,"value",n),r)),[2,new Ea(i).toPromise()]}))}))).apply(this,arguments)}function Na(){return(Na=(0,s.default)((function(e,t){var n,r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return n=Sa(e,!1).get(t),[4,new Ea(n).toPromise()];case 1:return[2,void 0===(r=i.sent())?null:r.value]}}))}))).apply(this,arguments)}function Pa(e,t){var n=Sa(e,!0).delete(t);return new Ea(n).toPromise()}var La=function(){"use strict";function e(){(0,me.default)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return(0,ye.default)(e,[{key:"_openDb",value:function(){var e=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return e.db?[2,e.db]:[4,Ra()];case 1:return e.db=t.sent(),[2,e.db]}}))}))()}},{key:"_withRetries",value:function(e){var t=this;return(0,s.default)((function(){var n,r,i;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:n=0,a.label=1;case 1:0,a.label=2;case 2:return a.trys.push([2,5,,6]),[4,t._openDb()];case 3:return r=a.sent(),[4,e(r)];case 4:return[2,a.sent()];case 5:if(i=a.sent(),n++>3)throw i;return t.db&&(t.db.close(),t.db=void 0),[3,6];case 6:return[3,1];case 7:return[2]}}))}))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(t){return[2,_a()?e.initializeReceiver():e.initializeSender()]}))}))()}},{key:"initializeReceiver",value:function(){var e=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(t){return e.receiver=pa._getInstance(_a()?self:null),e.receiver._subscribe("keyChanged",function(){var t=(0,s.default)((function(t,n){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return[4,e._poll()];case 1:return[2,{keyProcessed:t.sent().includes(n.key)}]}}))}));return function(e,n){return t.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(e){return[2,["keyChanged"]]}))}));return function(t,n){return e.apply(this,arguments)}}()),[2]}))}))()}},{key:"initializeSender",value:function(){var e=this;return(0,s.default)((function(){var t,n,r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return[4,ba()];case 1:return e.activeServiceWorker=i.sent(),e.activeServiceWorker?(e.sender=new ma(e.activeServiceWorker),[4,e.sender._send("ping",{},800)]):[2];case 2:return(r=i.sent())?((null===(t=r[0])||void 0===t?void 0:t.fulfilled)&&(null===(n=r[0])||void 0===n?void 0:n.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0),[2]):[2]}}))}))()}},{key:"notifyServiceWorker",value:function(e){var t=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:if(!t.sender||!t.activeServiceWorker||function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()!==t.activeServiceWorker)return[2];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,t.sender._send("keyChanged",{key:e},t.serviceWorkerReceiverAvailable?800:50)];case 2:return n.sent(),[3,4];case 3:return n.sent(),[3,4];case 4:return[2]}}))}))()}},{key:"_isAvailable",value:function(){return(0,s.default)((function(){var e;return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,4,,5]),indexedDB?[4,Ra()]:[2,!1];case 1:return[4,Ca(e=t.sent(),ua,"1")];case 2:return t.sent(),[4,Pa(e,ua)];case 3:return t.sent(),[2,!0];case 4:return t.sent(),[3,5];case 5:return[2,!1]}}))}))()}},{key:"_withPendingWrite",value:function(e){var t=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:t.pendingWrites++,n.label=1;case 1:return n.trys.push([1,,3,4]),[4,e()];case 2:return n.sent(),[3,4];case 3:return t.pendingWrites--,[7];case 4:return[2]}}))}))()}},{key:"_set",value:function(e,t){var n=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(r){return[2,n._withPendingWrite((0,s.default)((function(){return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return[4,n._withRetries((function(n){return Ca(n,e,t)}))];case 1:return r.sent(),n.localCache[e]=t,[2,n.notifyServiceWorker(e)]}}))})))]}))}))()}},{key:"_get",value:function(e){var t=this;return(0,s.default)((function(){var n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return[4,t._withRetries((function(t){return function(e,t){return Na.apply(this,arguments)}(t,e)}))];case 1:return n=r.sent(),t.localCache[e]=n,[2,n]}}))}))()}},{key:"_remove",value:function(e){var t=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(n){return[2,t._withPendingWrite((0,s.default)((function(){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,t._withRetries((function(t){return Pa(t,e)}))];case 1:return n.sent(),delete t.localCache[e],[2,t.notifyServiceWorker(e)]}}))})))]}))}))()}},{key:"_poll",value:function(){var e=this;return(0,s.default)((function(){var t,n,r,i,a,o,s,c,l,d,f,h,v,p,g,m,y;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return[4,e._withRetries((function(e){var t=Sa(e,!1).getAll();return new Ea(t).toPromise()}))];case 1:if(!(t=u.sent()))return[2,[]];if(0!==e.pendingWrites)return[2,[]];n=[],r=new Set,i=!0,a=!1,o=void 0;try{for(s=t[Symbol.iterator]();!(i=(c=s.next()).done);i=!0)l=c.value,d=l.fbase_key,f=l.value,r.add(d),JSON.stringify(e.localCache[d])!==JSON.stringify(f)&&(e.notifyListeners(d,f),n.push(d))}catch(e){a=!0,o=e}finally{try{i||null==s.return||s.return()}finally{if(a)throw o}}h=!0,v=!1,p=void 0;try{for(g=Object.keys(e.localCache)[Symbol.iterator]();!(h=(m=g.next()).done);h=!0)y=m.value,e.localCache[y]&&!r.has(y)&&(e.notifyListeners(y,null),n.push(y))}catch(e){v=!0,p=e}finally{try{h||null==g.return||g.return()}finally{if(v)throw p}}return[2,n]}}))}))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval((0,s.default)((function(){return(0,u.__generator)(this,(function(t){return[2,e._poll()]}))})),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();La.type="LOCAL";var Da=La;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(e,t){return dr(e,"POST","/v2/accounts/mfaSignIn:start",lr(e,t))}function Ua(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=Wn("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function xa(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
xa("rcb"),new ir(3e4,6e4);var ja="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(e,t,n){return Va.apply(this,arguments)}function Va(){return(Va=(0,s.default)((function(e,t,n){var r,i,a,o,s;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return[4,n.verify()];case 1:i=u.sent(),u.label=2;case 2:return u.trys.push([2,,10,11]),Jn("string"==typeof i,e,"argument-error"),Jn(n.type===ja,e,"argument-error"),"session"in(a="string"==typeof t?{phoneNumber:t}:t)?(o=a.session,"phoneNumber"in a?(Jn("enroll"===o.type,e,"internal-error"),[4,sa(e,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:i}})]):[3,4]):[3,7];case 3:return[2,u.sent().phoneSessionInfo.sessionInfo];case 4:return Jn("signin"===o.type,e,"internal-error"),Jn(s=(null===(r=a.multiFactorHint)||void 0===r?void 0:r.uid)||a.multiFactorUid,e,"missing-multi-factor-info"),[4,Ma(e,{mfaPendingCredential:o.credential,mfaEnrollmentId:s,phoneSignInInfo:{recaptchaToken:i}})];case 5:return[2,u.sent().phoneResponseInfo.sessionInfo];case 6:return[3,9];case 7:return[4,Si(e,{phoneNumber:a.phoneNumber,recaptchaToken:i})];case 8:return[2,u.sent().sessionInfo];case 9:return[3,11];case 10:return n._reset(),[7];case 11:return[2]}}))}))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ha=function(){"use strict";function e(t){(0,me.default)(this,e),this.providerId=e.PROVIDER_ID,this.auth=ui(t)}return(0,ye.default)(e,[{key:"verifyPhoneNumber",value:function(e,t){return Fa(this.auth,e,kt(t))}}],[{key:"credential",value:function(e,t){return Pi._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?Pi._fromTokenResponse(n,r):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ba(e,t){return t?Qn(t):(Jn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ha.PROVIDER_ID="phone",Ha.PHONE_SIGN_IN_METHOD="phone";var qa=function(e){"use strict";Ee(n,e);var t=Me(n);function n(e){var r;return(0,me.default)(this,n),(r=t.call(this,"custom","custom")).params=e,r}return(0,ye.default)(n,[{key:"_getIdTokenResponse",value:function(e){return wi(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return wi(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return wi(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(hi);function Wa(e){return $i(e.auth,new qa(e),e.bypassAuthState)}function za(e){var t=e.auth,n=e.user;return Jn(n,t,"internal-error"),Xi(n,new qa(e),e.bypassAuthState)}function Ga(e){return Ka.apply(this,arguments)}function Ka(){return(Ka=(0,s.default)((function(e){var t,n;return(0,u.__generator)(this,(function(r){return t=e.auth,Jn(n=e.user,t,"internal-error"),[2,Ki(n,new qa(e),e.bypassAuthState)]}))}))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ja=function(){"use strict";function e(t,n,r,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];(0,me.default)(this,e),this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return(0,ye.default)(e,[{key:"execute",value:function(){var e=this;return new Promise(function(){var t=(0,s.default)((function(t,n){var r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:e.pendingPromise={resolve:t,reject:n},i.label=1;case 1:return i.trys.push([1,4,,5]),[4,e.resolver._initialize(e.auth)];case 2:return e.eventManager=i.sent(),[4,e.onExecution()];case 3:return i.sent(),e.eventManager.registerConsumer(e),[3,5];case 4:return r=i.sent(),e.reject(r),[3,5];case 5:return[2]}}))}));return function(e,n){return t.apply(this,arguments)}}())}},{key:"onAuthEvent",value:function(e){var t=this;return(0,s.default)((function(){var n,r,i,a,o,s,c,l,d;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:if(n=e.urlResponse,r=e.sessionId,i=e.postBody,a=e.tenantId,o=e.error,s=e.type,o)return t.reject(o),[2];c={auth:t.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:t.user,bypassAuthState:t.bypassAuthState},u.label=1;case 1:return u.trys.push([1,3,,4]),l=t.resolve,[4,t.getIdpTask(s)(c)];case 2:return l.apply(t,[u.sent()]),[3,4];case 3:return d=u.sent(),t.reject(d),[3,4];case 4:return[2]}}))}))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wa;case"linkViaPopup":case"linkViaRedirect":return Ga;case"reauthViaPopup":case"reauthViaRedirect":return za;default:qn(this.auth,"internal-error")}}},{key:"resolve",value:function(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),Xa=new ir(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(e,t,n){return $a.apply(this,arguments)}function $a(){return($a=(0,s.default)((function(e,t,n){var r,i;return(0,u.__generator)(this,(function(a){return r=ui(e),Gn(e,t,Mi),i=Ba(r,n),[2,new Qa(r,"signInViaPopup",t,i).executeNotNull()]}))}))).apply(this,arguments)}var Qa=function(e){"use strict";Ee(n,e);var t=Me(n);function n(e,r,i,a,o){var s;return(0,me.default)(this,n),(s=t.call(this,e,r,a,o)).provider=i,s.authWindow=null,s.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=Ie(s),s}return(0,ye.default)(n,[{key:"executeNotNull",value:function(){var e=this;return(0,s.default)((function(){var t;return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,e.execute()];case 1:return Jn(t=n.sent(),e.auth,"internal-error"),[2,t]}}))}))()}},{key:"onExecution",value:function(){var e=this;return(0,s.default)((function(){var t;return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return Yn(1===e.filter.length,"Popup operations only handle one event"),t=ga(),[4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],t)];case 1:return e.authWindow=n.sent(),e.authWindow.associatedEvent=t,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(Wn(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation(),[2]}}))}))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(Wn(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed)?e.pollId=window.setTimeout((function(){e.pollId=null,e.reject(Wn(e.auth,"popup-closed-by-user"))}),2e3):e.pollId=window.setTimeout(t,Xa.get())};t()}}]),n}(Ja);Qa.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Za=new Map,eo=function(e){"use strict";Ee(n,e);var t=Me(n);function n(e,r){var i,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,me.default)(this,n),(i=t.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,a)).eventId=null,i}return(0,ye.default)(n,[{key:"execute",value:function(){var e=this,t=this;return(0,s.default)((function(){var r,i,a,o;return(0,u.__generator)(this,(function(s){switch(s.label){case 0:if(r=Za.get(t.auth._key()))return[3,8];s.label=1;case 1:return s.trys.push([1,6,,7]),[4,to(t.resolver,t.auth)];case 2:return s.sent()?[4,xn(Ae(n.prototype),"execute",e).call(t)]:[3,4];case 3:return a=s.sent(),[3,5];case 4:a=null,s.label=5;case 5:return i=a,r=function(){return Promise.resolve(i)},[3,7];case 6:return o=s.sent(),r=function(){return Promise.reject(o)},[3,7];case 7:Za.set(t.auth._key(),r),s.label=8;case 8:return t.bypassAuthState||Za.set(t.auth._key(),(function(){return Promise.resolve(null)})),[2,r()]}}))}))()}},{key:"onAuthEvent",value:function(e){var t=this,r=this,i=function(){return xn(Ae(n.prototype),"onAuthEvent",t)};return(0,s.default)((function(){var t;return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return"signInViaRedirect"===e.type?[2,i().call(r,e)]:"unknown"===e.type?(r.resolve(null),[2]):e.eventId?[4,r.auth._redirectUserForId(e.eventId)]:[3,2];case 1:if(t=n.sent())return r.user=t,[2,i().call(r,e)];r.resolve(null),n.label=2;case 2:return[2]}}))}))()}},{key:"onExecution",value:function(){return(0,s.default)((function(){return(0,u.__generator)(this,(function(e){return[2]}))}))()}},{key:"cleanUp",value:function(){}}]),n}(Ja);function to(e,t){return no.apply(this,arguments)}function no(){return(no=(0,s.default)((function(e,t){var n,r,i;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:return n=ao(t),[4,(r=io(e))._isAvailable()];case 1:return a.sent()?[4,r._get(n)]:[2,!1];case 2:return i="true"===a.sent(),[4,r._remove(n)];case 3:return a.sent(),[2,i]}}))}))).apply(this,arguments)}function ro(e,t){Za.set(e._key(),t)}function io(e){return Qn(e._redirectPersistence)}function ao(e){return zr("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(e,t){return so.apply(this,arguments)}function so(){return so=(0,s.default)((function(e,t){var n,r,i,a,o=arguments;return(0,u.__generator)(this,(function(s){switch(s.label){case 0:return n=o.length>2&&void 0!==o[2]&&o[2],r=ui(e),i=Ba(r,t),[4,new eo(r,i,n).execute()];case 1:return!(a=s.sent())||n?[3,4]:(delete a.user._redirectEventId,[4,r._persistUserIfCurrent(a.user)]);case 2:return s.sent(),[4,r._setRedirectUser(null,t)];case 3:s.sent(),s.label=4;case 4:return[2,a]}}))})),so.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var uo=function(){"use strict";function e(t){(0,me.default)(this,e),this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return(0,ye.default)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lo(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!lo(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Wn(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(co(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(co(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function co(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function lo(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function fo(e){return ho.apply(this,arguments)}function ho(){return ho=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s.default)((function(e){var t,n=arguments;return(0,u.__generator)(this,(function(r){return t=n.length>1&&void 0!==n[1]?n[1]:{},[2,dr(e,"GET","/v1/projects",t)]}))})),ho.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,po=/^https?/;function go(){return(go=(0,s.default)((function(e){var t,n,r,i,a,o,s;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return e.config.emulator?[2]:[4,fo(e)];case 1:t=u.sent().authorizedDomains,n=!0,r=!1,i=void 0;try{for(a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){s=o.value;try{if(mo(s))return[2]}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return qn(e,"unauthorized-domain"),[2]}}))}))).apply(this,arguments)}function mo(e){var t=er(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!po.test(r))return!1;if(vo.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yo=new ir(3e4,6e4);function _o(){var e=ya().___jsl,t=!0,n=!1,r=void 0;if(null==e?void 0:e.H)try{for(var i,a=Object.keys(e.H)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(e.H[o].r=e.H[o].r||[],e.H[o].L=e.H[o].L||[],e.H[o].r=(0,be.default)(e.H[o].L),e.CP)for(var s=0;s<e.CP.length;s++)e.CP[s]=null}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}var bo=null;function ko(e){return bo=bo||function(e){return new Promise((function(t,n){var r,i,a;function o(){_o(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){_o(),n(Wn(e,"network-request-failed"))},timeout:yo.get()})}if(null===(i=null===(r=ya().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=ya().gapi)||void 0===a?void 0:a.load)){var s=xa("iframefcb");return ya()[s]=function(){gapi.load?o():n(Wn(e,"network-request-failed"))},Ua("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw bo=null,e}))}(e),bo}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Io=new ir(5e3,15e3),wo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},To=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Eo(e){var t=e.config;Jn(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?ar(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:mn},i=To.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(gt(r).slice(1))}function So(e){return Oo.apply(this,arguments)}function Oo(){return Oo=(0,s.default)((function(e){var t,n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return[4,ko(e)];case 1:return t=r.sent(),Jn(n=ya().gapi,e,"internal-error"),[2,t.open({where:document.body,url:Eo(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wo,dontclear:!0},(function(t){return new Promise(function(){var n=(0,s.default)((function(n,r){var i,a;function o(){ya().clearTimeout(a),n(t)}return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,t.restyle({setHideOnLeave:!1})];case 1:return n.sent(),i=Wn(e,"network-request-failed"),a=ya().setTimeout((function(){r(i)}),Io.get()),t.ping(o).then(o,(function(){r(i)})),[2]}}))}));return function(e,t){return n.apply(this,arguments)}}())}))]}}))})),Oo.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ro={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Co="_blank",Ao="http://localhost",No=function(){"use strict";function e(t){(0,me.default)(this,e),this.window=t,this.associatedEvent=null}return(0,ye.default)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function Po(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),s="",u=Object.assign(Object.assign({},Ro),{width:r.toString(),height:i.toString(),top:a,left:o}),c=tt().toLowerCase();n&&(s=Yr(c)?Co:n),Jr(c)&&(t=t||Ao,u.scrollbars="yes");var l=Object.entries(u).reduce((function(e,t){var n=(0,ke.default)(t,2),r=n[0],i=n[1];return"".concat(e).concat(r,"=").concat(i,",")}),"");if(ni(c)&&"_self"!==s)return Lo(t||"",s),new No(null);var d=window.open(t||"",s,l);Jn(d,e,"popup-blocked");try{d.focus()}catch(e){}return new No(d)}function Lo(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Do="__/auth/handler",Mo="emulator/auth/handler";function Uo(e,t,n,r,i,a){Jn(e.config.authDomain,e,"auth-domain-config-required"),Jn(e.config.apiKey,e,"invalid-api-key");var o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:mn,eventId:i};if(t instanceof Mi){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ht(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));var s=!0,u=!1,c=void 0;try{for(var l,d=Object.entries(a||{})[Symbol.iterator]();!(s=(l=d.next()).done);s=!0){var f=(0,ke.default)(l.value,2),h=f[0],v=f[1];o[h]=v}}catch(e){u=!0,c=e}finally{try{s||null==d.return||d.return()}finally{if(u)throw c}}}if(t instanceof Ui){var p=t.getScopes().filter((function(e){return""!==e}));p.length>0&&(o.scopes=p.join(","))}e.tenantId&&(o.tid=e.tenantId);var g,m,y=o,_=!0,b=!1,k=void 0;try{for(var I,w=Object.keys(y)[Symbol.iterator]();!(_=(I=w.next()).done);_=!0){var T=I.value;void 0===y[T]&&delete y[T]}}catch(e){b=!0,k=e}finally{try{_||null==w.return||w.return()}finally{if(b)throw k}}return"".concat((g=e,m=g.config,m.emulator?ar(m,Mo):"https://".concat(m.authDomain,"/").concat(Do)),"?").concat(gt(y).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xo="webStorageSupport",jo=function(){"use strict";function e(){(0,me.default)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ha,this._completeRedirectFn=oo,this._overrideRedirectResult=ro}return(0,ye.default)(e,[{key:"_openPopup",value:function(e,t,n,r){var i=this;return(0,s.default)((function(){var a,o;return(0,u.__generator)(this,(function(s){return Yn(null===(a=i.eventManagers[e._key()])||void 0===a?void 0:a.manager,"_initialize() not called before _openPopup()"),o=Uo(e,t,n,er(),r),[2,Po(e,o,ga())]}))}))()}},{key:"_openRedirect",value:function(e,t,n,r){var i=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(a){switch(a.label){case 0:return[4,i._originValidation(e)];case 1:return a.sent(),o=Uo(e,t,n,er(),r),ya().location.href=o,[2,new Promise((function(){}))]}var o}))}))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(Yn(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(e){var t=this;return(0,s.default)((function(){var n,r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return[4,So(e)];case 1:return n=i.sent(),r=new uo(e),n.register("authEvent",(function(t){return Jn(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),t.eventManagers[e._key()]={manager:r},t.iframes[e._key()]=n,[2,r]}}))}))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(xo,{type:xo},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[xo];void 0!==i&&t(!!i),qn(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return go.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return ii()||Xr()||ti()}}]),e}(),Fo=jo,Vo=function(){"use strict";function e(t){(0,me.default)(this,e),this.factorId=t}return(0,ye.default)(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Xn("unexpected MultiFactorSessionType")}}}]),e}(),Ho=function(e){"use strict";Ee(n,e);var t=Me(n);function n(e){var r;return(0,me.default)(this,n),(r=t.call(this,"phone")).credential=e,r}return(0,ye.default)(n,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return dr(e,"POST","/v2/accounts/mfaEnrollment:finalize",lr(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return dr(e,"POST","/v2/accounts/mfaSignIn:finalize",lr(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(Vo);(function(){"use strict";function e(){(0,me.default)(this,e)}return(0,ye.default)(e,null,[{key:"assertion",value:function(e){return Ho._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var Bo="@firebase/auth",qo="0.21.0",Wo=function(){"use strict";function e(t){(0,me.default)(this,e),this.auth=t,this.internalListeners=new Map}return(0,ye.default)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var t=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return t.assertAuthConfigured(),[4,t.auth._initializationPromise];case 1:return n.sent(),t.auth.currentUser?[4,t.auth.currentUser.getIdToken(e)]:[2,null];case 2:return[2,{accessToken:n.sent()}]}}))}))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){Jn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zo,Go=st("authIdTokenMaxAge")||300,Ko=null,Jo=function(e){return function(){var t=(0,s.default)((function(t){var n,r,i,a;return(0,u.__generator)(this,(function(o){switch(o.label){case 0:return(r=t)?[4,t.getIdTokenResult()]:[3,2];case 1:r=o.sent(),o.label=2;case 2:return(i=(n=r)&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3)&&i>Go?[2]:(a=null==n?void 0:n.token,Ko===a?[2]:(Ko=a,[4,fetch(e,{method:a?"POST":"DELETE",headers:a?{Authorization:"Bearer ".concat(a)}:{}})]));case 3:return o.sent(),[2]}}))}));return function(e){return t.apply(this,arguments)}}()};zo="Browser",fn(new It("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,o=a.apiKey,s=a.authDomain;return function(e,t){Jn(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),Jn(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:zo,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ai(zo)},i=new si(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Qn);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),fn(new It("auth-internal",(function(e){return function(e){return new Wo(e)}(ui(e.getProvider("auth").getImmediate()))}),"PRIVATE").setInstantiationMode("EXPLICIT")),bn(Bo,qo,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(zo)),bn(Bo,qo,"esm2017");yn({apiKey:"AIzaSyD_aK9Samiq36GmoUl35P_5NzpxQkwfvY8",authDomain:"filmoteka-75759.firebaseapp.com",projectId:"filmoteka-75759",storageBucket:"filmoteka-75759.appspot.com",messagingSenderId:"84456311588",appId:"1:84456311588:web:6fd62d962f70da880801b1",measurementId:"G-YF4EWZTT7X",databaseURL:"https://filmoteka-75759-default-rtdb.europe-west1.firebasedatabase.app/"});var Xo,Yo,$o,Qo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_n(),t=hn(e,"auth");if(t.isInitialized())return t.getImmediate();var n=Zn(e,{popupRedirectResolver:Fo,persistence:[Da,da,ha]}),r=st("authTokenSyncURL");if(r){var i=Jo(r);aa(n,i,(function(){return i(n.currentUser)})),ia(n,(function(e){return i(e)}))}var a=at("auth");return a&&li(n,"http://".concat(a)),n}(),Zo=new ji,es=document.querySelector("#sign-in-google"),ts=document.querySelector("#sign-up-form"),ns=document.querySelector("#sign-in-form"),rs=document.querySelector(".logIn-modal"),is=document.querySelector("#sign-out-btn"),as=document.querySelector("#logIn"),os=document.querySelector("#form-modal-close");Xo=function(e){e?(ns.style.display="none",ts.style.display="none",es.style.display="none",is.classList.remove("is-hidden"),as.classList.add("is-hidden"),rs.classList.add("is-hidden")):(ns.style.display="block",ts.style.display="block",es.style.display="block",is.classList.add("is-hidden"),as.classList.remove("is-hidden"))},kt(Qo).onAuthStateChanged(Xo,Yo,$o);var ss=function(){rs.classList.add("is-hidden"),as.classList.remove("is-hidden")};function us(t){t.preventDefault();var n=t.target.elements,r=n.email,i=n.password;ta(Qo,r.value,i.value).then((function(t){var n=t.user;console.log(n),e(I).Notify.success("New user account logged in")})).catch((function(t){var n=t.code,r=t.message;console.log({errorCode:n,errorMessage:r}),e(I).Notify.failure(r)}))}var cs=function(t){t.preventDefault();var n=t.target.elements,r=n.email,i=n.password;ra(Qo,r.value,i.value).then((function(t){var n=t.user;console.log(n),e(I).Notify.success("You are log in")})).catch((function(t){var n=t.code,r=t.message;console.log({errorCode:n,errorMessage:r}),e(I).Notify.failure(r)}))},ls=function(){Ya(Qo,Zo).then((function(t){ji.credentialFromResult(t).accessToken;var n=t.user;e(I).Notify.success("Hello ".concat(n.displayName)),console.log(n)})).catch((function(t){var n=t.code,r=t.message,i=t.customData.email,a=ji.credentialFromError(t);console.log({errorCode:n,errorMessage:r,email:i,credential:a}),e(I).Notify.failure(r)}))};is.addEventListener("click",(function(){oa(Qo).then((function(){ts.reset(),ns.reset()}))})),as.addEventListener("click",(function(){rs.classList.remove("is-hidden"),as.classList.add("is-hidden"),os.addEventListener("click",ss),ns.addEventListener("submit",cs),ts.addEventListener("submit",us),es.addEventListener("click",ls)})),m()}();
//# sourceMappingURL=index.6512f27f.js.map
