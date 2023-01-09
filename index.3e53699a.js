!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i);var a,o,s=i("7pbsT"),u=i("4tSb9"),c=(s=i("7pbsT"),u=i("4tSb9"),i("dIxxU")),l=(a=(0,s.default)((function(){var e;return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,c.default.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:"".concat("b942b8bf626a04f48b07153a95ee51a0")}})];case 1:return[2,t.sent()];case 2:return e=t.sent(),console.log(e),[3,3];case 3:return[2]}}))})),function(){return a.apply(this,arguments)}),f=(s=i("7pbsT"),u=i("4tSb9"),c=i("dIxxU"),document.querySelector(".loader")),d="b942b8bf626a04f48b07153a95ee51a0",h=function(){var e=(0,s.default)((function(){var e,t,n,r,i=arguments;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:e=i.length>0&&void 0!==i[0]?i[0]:"https://api.themoviedb.org/3/movie/popular",t=i.length>1&&void 0!==i[1]?i[1]:1,f.style.display="block",a.label=1;case 1:return a.trys.push([1,3,,4]),[4,c.default.get(e,{params:{api_key:"".concat(d),page:t,language:"en-US"}})];case 2:return n=a.sent(),f.style.display="none",[2,n];case 3:return r=a.sent(),f.style.display="none",console.log(r),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),v="",p=function(e){var t,n=y();return function(e,t){v="",e.map((function(n){t.map((function(t){t.id===n&&(n!=e[e.length-1]?v=v+t.name+", ":v+=t.name)}))}))}(e.genre_ids,n.data.genres),'\n<div class="movie-card">\n  <img class="movie-card__image" alt="" src=\'https://image.tmdb.org/t/p/w500/'.concat(e.poster_path,'\'}>\n  <div class="movie-card__label">\n    <p class="movie-card__title">').concat(e.original_title,'</p>\n    <p class="movie-card__genre-year">').concat(v," | ").concat((t=e.release_date,t.substring(0,4)),'</p> \n    <p class="movie-card__id">').concat(e.id,"</p> \n  </div>\n</div>\n")},g=document.querySelector(".main-box"),m=function(){var e=(0,s.default)((function(e){var t,n,r,i;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),(t=[]).push(h(e)),t.push(l()),[4,Promise.all(t)];case 1:return n=a.sent(),r=n[0],o=n[1],g.innerHTML="",r.data.results.map((function(e){g.insertAdjacentHTML("beforeend",p(e))})),[3,3];case 2:return i=a.sent(),console.log("err ",i),[3,3];case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),y=function(){return o},_=document.getElementById("select-genres");console.log(_);var b="https://api.themoviedb.org/3/movie/popular",k=[];l().then((function(e){for(var t=function(t){var n=document.createElement("button");n.classList.add("genre"),n.id=e.data.genres[t].id,n.innerText=e.data.genres[t].name,n.addEventListener("click",(function(){n.classList.add("focused-genre"),0===k?k.push(e.data.genres[t].id):k.includes(e.data.genres[t].id)?k.forEach((function(r,i){r==e.data.genres[t].id&&(k.splice(i,1),n.classList.remove("focused-genre"))})):k.push(e.data.genres[t].id),b="https://api.themoviedb.org/3/discover/movie?&with_genres="+encodeURI(k.join(",")),m(b),console.log(k)})),_.append(n)},n=0;n<e.data.genres.length;n++)t(n)}));var I=i("iU1Pc"),w=document.querySelector(".queue-btn"),T=document.querySelector(".watched-btn"),E=document.querySelector(".modal__id"),S=[],O=[];w.addEventListener("click",(function(t){var n=E.textContent;if(S.includes(n))return e(I).Notify.failure("Movie already in queue");S.push(n),localStorage.setItem("added-to-queue",JSON.stringify(S));var r=O.indexOf(n);return r>-1?(O.splice(r,1),localStorage.setItem("added-to-watched",JSON.stringify(O)),e(I).Notify.info("Movie remove from watched and added to queue")):e(I).Notify.success("Movie added to queue")})),T.addEventListener("click",(function(t){var n=E.textContent;if(O.includes(n))return e(I).Notify.failure("Movie already in watched");O.push(n),localStorage.setItem("added-to-watched",JSON.stringify(O));var r=S.indexOf(n);return r>-1?(S.splice(r,1),localStorage.setItem("added-to-queue",JSON.stringify(S)),e(I).Notify.info("Movie remove from queue and added to watched")):e(I).Notify.success("Movie added to watched")})),i("5h39L");s=i("7pbsT"),u=i("4tSb9"),s=i("7pbsT"),u=i("4tSb9"),c=i("dIxxU");var R="b942b8bf626a04f48b07153a95ee51a0",A="https://api.themoviedb.org/3/search/movie",N=document.querySelector(".loader");function C(e){return P.apply(this,arguments)}function P(){return P=(0,s.default)((function(e){var t,n,r,i=arguments;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:t=i.length>1&&void 0!==i[1]?i[1]:1,N.style.display="block",a.label=1;case 1:return a.trys.push([1,3,,4]),[4,c.default.get(A,{params:{api_key:"".concat(R),query:"".concat(e),page:t}})];case 2:return n=a.sent(),N.style.display="none",[2,n.data];case 3:return r=a.sent(),N.style.display="none",console.error(r),[3,4];case 4:return[2]}}))})),P.apply(this,arguments)}document.querySelector(".pagination");var L,D,M=document.getElementById("pagination-numbers"),U=document.getElementById("next-button"),x=document.getElementById("prev-button"),j=function(e){M.innerHTML="",L=e;for(var t=1;t<=e;t++)n=t,r=void 0,(r=document.createElement("button")).className="pagination-number",r.innerHTML=n,r.setAttribute("page-index",n),r.setAttribute("aria-label","Page "+n),1!=n&&n!=L||r.classList.add("hidden-mobile"),M.appendChild(r);var n,r},F=function(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)},V=function(e){e.classList.remove("disabled"),e.removeAttribute("disabled")},H=function(e){(function(e){document.querySelectorAll(".pagination-number").forEach((function(t){var n=Number(t.getAttribute("page-index"));e<=3?(1==n&&t.classList.remove("hidden-mobile"),n==L&&t.classList.add("hidden-mobile"),n<=5||n==L?t.classList.remove("hidden"):t.classList.add("hidden")):e>=L-2?(1==n&&t.classList.add("hidden-mobile"),n==L&&t.classList.remove("hidden-mobile"),n>=L-4||1==n?t.classList.remove("hidden"):t.classList.add("hidden")):L<=7?(t.classList.remove("hidden"),1!=n&&n!=L||t.classList.remove("hidden-mobile")):1==n||n==L?(t.classList.remove("hidden"),t.classList.add("hidden-mobile")):n>=e-2&&n<=e+2?t.classList.remove("hidden"):t.classList.add("hidden")}))})(D=e),document.querySelectorAll(".pagination-number").forEach((function(e){e.classList.remove("active"),Number(e.getAttribute("page-index"))==D&&e.classList.add("active")})),1===D?F(x):V(x),L===D?F(U):V(U)},B=document.querySelector(".header__no-movies"),q=document.querySelector(".main-box"),W=document.querySelector("input[name='searchQuery']"),z=document.querySelector(".header__search-form-btn"),G=document.querySelector(".to-top"),K=1;function J(){return(J=(0,s.default)((function(e){var t,n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return e.preventDefault(),B.innerHTML="",K=1,(t=W.value)?[3,1]:(alert("Enter movie title"),[3,3]);case 1:return[4,C(t,K)];case 2:(n=r.sent()).results.length?(q.innerHTML="",console.log(n),n.results.map((function(e){q.insertAdjacentHTML("beforeend",p(e))})),j(n.total_pages),H(K),x.addEventListener("click",(0,s.default)((function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return H(K-1),[4,C(t,--K)];case 1:return n=e.sent(),q.innerHTML="",console.log(n),n.results.map((function(e){q.insertAdjacentHTML("beforeend",p(e))})),X(),[2]}}))}))),U.addEventListener("click",(0,s.default)((function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return H(K+1),[4,C(t,++K)];case 1:return n=e.sent(),q.innerHTML="",console.log(n),n.results.map((function(e){q.insertAdjacentHTML("beforeend",p(e))})),X(),[2]}}))}))),document.querySelectorAll(".pagination-number").forEach((function(e){var r=Number(e.getAttribute("page-index"));r&&e.addEventListener("click",(0,s.default)((function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return H(r),[4,C(t,K=r)];case 1:return n=e.sent(),q.innerHTML="",console.log(n),n.results.map((function(e){q.insertAdjacentHTML("beforeend",p(e))})),X(),[2]}}))})))}))):B.innerHTML="Search result not successful. Enter the correct movie name.",r.label=3;case 3:return[2]}}))}))).apply(this,arguments)}function X(){window.scrollTo({top:0,behavior:"smooth"})}z.addEventListener("click",(function(e){return J.apply(this,arguments)})),G.addEventListener("click",X),window.addEventListener("scroll",(function(){window.pageYOffset>100?G.classList.remove("is-hidden"):G.classList.add("is-hidden")}));var Y=document.querySelector(".footer__authors"),$=document.querySelector(".students-modal__close-btn"),Q=document.querySelector(".data-modal");function Z(){Q.classList.toggle("is-hidden")}Y.addEventListener("click",Z),$.addEventListener("click",Z);I=i("iU1Pc"),s=i("7pbsT");var ee=i("8IFEP"),te=i("lwwVW");function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var re=i("gNe9t"),ie=(u=i("4tSb9"),s=i("7pbsT"),ee=i("8IFEP"),te=i("lwwVW"),i("1QZ0q"));re=i("gNe9t"),u=i("4tSb9");
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
function ae(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}ee=i("8IFEP"),te=i("lwwVW");function oe(e,t){return oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},oe(e,t)}function se(e,t){return oe(e,t)}function ue(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&se(e,t)}ie=i("1QZ0q"),re=i("gNe9t");function ce(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function le(e,t,n){return le=ce()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&se(i,n.prototype),i},le.apply(null,arguments)}function fe(e,t,n){return le.apply(null,arguments)}function de(e){return de=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},de(e)}function he(e){return de(e)}function ve(e){var t="function"==typeof Map?new Map:void 0;return ve=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return fe(e,arguments,he(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),se(r,e)},ve(e)}function pe(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var ge=i("fv5it");function me(e,t){return!t||"object"!==(0,ge.default)(t)&&"function"!=typeof t?ae(e):t}function ye(e){var t=pe();return function(){var n,r=he(e);if(t){var i=he(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return me(this,n)}}var _e,be,ke,Ie=_e={};function we(){throw new Error("setTimeout has not been defined")}function Te(){throw new Error("clearTimeout has not been defined")}function Ee(e){if(be===setTimeout)return setTimeout(e,0);if((be===we||!be)&&setTimeout)return be=setTimeout,setTimeout(e,0);try{return be(e,0)}catch(t){try{return be.call(null,e,0)}catch(t){return be.call(this,e,0)}}}!function(){try{be="function"==typeof setTimeout?setTimeout:we}catch(e){be=we}try{ke="function"==typeof clearTimeout?clearTimeout:Te}catch(e){ke=Te}}();var Se,Oe=[],Re=!1,Ae=-1;function Ne(){Re&&Se&&(Re=!1,Se.length?Oe=Se.concat(Oe):Ae=-1,Oe.length&&Ce())}function Ce(){if(!Re){var e=Ee(Ne);Re=!0;for(var t=Oe.length;t;){for(Se=Oe,Oe=[];++Ae<t;)Se&&Se[Ae].run();Ae=-1,t=Oe.length}Se=null,Re=!1,function(e){if(ke===clearTimeout)return clearTimeout(e);if((ke===Te||!ke)&&clearTimeout)return ke=clearTimeout,clearTimeout(e);try{ke(e)}catch(t){try{return ke.call(null,e)}catch(t){return ke.call(this,e)}}}(e)}}function Pe(e,t){this.fun=e,this.array=t}function Le(){}Ie.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Oe.push(new Pe(e,t)),1!==Oe.length||Re||Ee(Ce)},Pe.prototype.run=function(){this.fun.apply(null,this.array)},Ie.title="browser",Ie.browser=!0,Ie.env={},Ie.argv=[],Ie.version="",Ie.versions={},Ie.on=Le,Ie.addListener=Le,Ie.once=Le,Ie.off=Le,Ie.removeListener=Le,Ie.removeAllListeners=Le,Ie.emit=Le,Ie.prependListener=Le,Ie.prependOnceListener=Le,Ie.listeners=function(e){return[]},Ie.binding=function(e){throw new Error("process.binding is not supported")},Ie.cwd=function(){return"/"},Ie.chdir=function(e){throw new Error("process.chdir is not supported")},Ie.umask=function(){return 0};var De=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Me={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|s>>4,d=(15&s)<<2|c>>6,h=63&c;u||(h=64,o||(d=64)),r.push(n[l],n[f],n[d],n[h])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(De(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var f=s<<6&192|u;r.push(f)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ue=function(e){return function(e){var t=De(e);return Me.encodeByteArray(t,!0)}(e).replace(/\./g,"")},xe=function(e){try{return Me.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function je(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Fe(){try{return"object"==typeof indexedDB}catch(e){return!1}}
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
var Ve=function(){return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},He=function(){try{return Ve()||function(){if(void 0!==_e&&void 0!==_e.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&xe(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},Be=function(e){var t,n;return null===(n=null===(t=He())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},qe=function(){var e;return null===(e=He())||void 0===e?void 0:e.config},We=function(e){var t;return null===(t=He())||void 0===t?void 0:t["_".concat(e)]},ze=function(){"use strict";function e(){var t=this;(0,ee.default)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return(0,te.default)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
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
var Ge=function(e){"use strict";ue(n,e);var t=ye(n);function n(e,r,i){var a;return(0,ee.default)(this,n),(a=t.call(this,r)).code=e,a.customData=i,a.name="FirebaseError",Object.setPrototypeOf(ae(a),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(ae(a),Ke.prototype.create),a}return n}(ve(Error)),Ke=function(){"use strict";function e(t,n,r){(0,ee.default)(this,e),this.service=t,this.serviceName=n,this.errors=r}return(0,te.default)(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?Je(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new Ge(a,u,i);return c}}]),e}();function Je(e,t){return e.replace(Xe,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var Xe=/\{\$([^}]+)}/g;
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
 */function Ye(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function $e(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],f=t[c];if(Qe(l)&&Qe(f)){if(!$e(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var d=!0,h=!1,v=void 0;try{for(var p,g=r[Symbol.iterator]();!(d=(p=g.next()).done);d=!0){var m=p.value;if(!n.includes(m))return!1}}catch(e){h=!0,v=e}finally{try{d||null==g.return||g.return()}finally{if(h)throw v}}return!0}function Qe(e){return null!==e&&"object"==typeof e}
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
function Ze(e){var t=[],n=!0,r=!1,i=void 0;try{for(var a,o=function(){var e=(0,ie.default)(a.value,2),n=e[0],r=e[1];Array.isArray(r)?r.forEach((function(e){t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))},s=Object.entries(e)[Symbol.iterator]();!(n=(a=s.next()).done);n=!0)o()}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return t.length?"&"+t.join("&"):""}function et(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=(0,ie.default)(e.split("="),2),r=n[0],i=n[1];t[decodeURIComponent(r)]=decodeURIComponent(i)}})),t}function tt(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */var nt=function(){"use strict";function e(t,n){var r=this;(0,ee.default)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){t(r)})).catch((function(e){r.error(e)}))}return(0,te.default)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=rt),void 0===r.error&&(r.error=rt),void 0===r.complete&&(r.complete=rt);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function rt(){}
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
function it(e){return e&&e._delegate?e._delegate:e}var at=function(){"use strict";function e(t,n,r){(0,ee.default)(this,e),this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return(0,te.default)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),ot="[DEFAULT]",st=function(){"use strict";function e(t,n){(0,ee.default)(this,e),this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return(0,te.default)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new ze;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:ot})}catch(e){}var t=!0,n=!1,r=void 0;try{for(var i,a=this.instancesDeferred.entries()[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=(0,ie.default)(i.value,2),s=o[0],u=o[1],c=this.normalizeInstanceIdentifier(s);try{var l=this.getOrInitializeService({instanceIdentifier:c});u.resolve(l)}catch(e){}}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return(0,s.default)((function(){var t;return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return t=Array.from(e.instances.values()),[4,Promise.all((0,re.default)(t.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat((0,re.default)(t.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return n.sent(),[2]}}))}))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,n=void 0===t?{}:t,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error("".concat(this.name,"(").concat(r,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var i=this.getOrInitializeService({instanceIdentifier:r,options:n}),a=!0,o=!1,s=void 0;try{for(var u,c=this.instancesDeferred.entries()[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=(0,ie.default)(u.value,2),f=l[0],d=l[1],h=this.normalizeInstanceIdentifier(f);r===h&&d.resolve(i)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return i}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===ot?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot;return this.component?this.component.multipleInstances?e:ot:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();
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
 */var ut,ct,lt=function(){"use strict";function e(t){(0,ee.default)(this,e),this.name=t,this.providers=new Map}return(0,te.default)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new st(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}(),ft=(ee=i("8IFEP"),te=i("lwwVW"),re=i("gNe9t"),[]);
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
 */(ct=ut||(ut={}))[ct.DEBUG=0]="DEBUG",ct[ct.VERBOSE=1]="VERBOSE",ct[ct.INFO=2]="INFO",ct[ct.WARN=3]="WARN",ct[ct.ERROR=4]="ERROR",ct[ct.SILENT=5]="SILENT";var dt,ht={debug:ut.DEBUG,verbose:ut.VERBOSE,info:ut.INFO,warn:ut.WARN,error:ut.ERROR,silent:ut.SILENT},vt=ut.INFO,pt=(ne(dt={},ut.DEBUG,"log"),ne(dt,ut.VERBOSE,"log"),ne(dt,ut.INFO,"info"),ne(dt,ut.WARN,"warn"),ne(dt,ut.ERROR,"error"),dt),gt=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a;if(!(t<e.logLevel)){var o=(new Date).toISOString(),s=pt[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"));(a=console)[s].apply(a,["[".concat(o,"]  ").concat(e.name,":")].concat((0,re.default)(r)))}},mt=function(){"use strict";function e(t){(0,ee.default)(this,e),this.name=t,this._logLevel=vt,this._logHandler=gt,this._userLogHandler=null,ft.push(this)}return(0,te.default)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in ut))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?ht[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ut.DEBUG].concat((0,re.default)(t))),this._logHandler.apply(this,[this,ut.DEBUG].concat((0,re.default)(t)))}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ut.VERBOSE].concat((0,re.default)(t))),this._logHandler.apply(this,[this,ut.VERBOSE].concat((0,re.default)(t)))}},{key:"info",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ut.INFO].concat((0,re.default)(t))),this._logHandler.apply(this,[this,ut.INFO].concat((0,re.default)(t)))}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ut.WARN].concat((0,re.default)(t))),this._logHandler.apply(this,[this,ut.WARN].concat((0,re.default)(t)))}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ut.ERROR].concat((0,re.default)(t))),this._logHandler.apply(this,[this,ut.ERROR].concat((0,re.default)(t)))}}]),e}();s=i("7pbsT");function yt(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}var _t,bt;re=i("gNe9t"),u=i("4tSb9"),re=i("gNe9t");var kt=new WeakMap,It=new WeakMap,wt=new WeakMap,Tt=new WeakMap,Et=new WeakMap;var St={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return It.get(e);if("objectStoreNames"===t)return e.objectStoreNames||wt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return At(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Ot(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(bt||(bt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(Nt(this),n),At(kt.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return At(e.apply(Nt(this),n))}:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a,o=(a=e).call.apply(a,[Nt(this),t].concat((0,re.default)(r)));return wt.set(o,t.sort?t.sort():[t]),At(o)}}function Rt(e){return"function"==typeof e?Ot(e):(e instanceof IDBTransaction&&function(e){if(!It.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));It.set(e,t)}}(e),t=e,(_t||(_t=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,St):e);var t}function At(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(At(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&kt.set(e,t)})).catch((function(){})),Et.set(n,t),n;var t,n;if(Tt.has(e))return Tt.get(e);var r=Rt(e);return r!==e&&(Tt.set(e,r),Et.set(r,e)),r}var Nt=function(e){return Et.get(e)};function Ct(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=At(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(At(s.result),e.oldVersion,e.newVersion,At(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var Pt,Lt=["get","getKey","getAll","getAllKeys","count"],Dt=["put","add","delete","clear"],Mt=new Map;function Ut(e,t){if(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t){if(Mt.get(t))return Mt.get(t);var n=t.replace(/FromIndex$/,""),r=t!==n,i=Dt.includes(n);if(n in(r?IDBIndex:IDBObjectStore).prototype&&(i||Lt.includes(n))){var a=function(){var e=(0,s.default)((function(e){var t,a,o,s,c,l,f=arguments;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:for(t=f.length,a=new Array(t>1?t-1:0),o=1;o<t;o++)a[o-1]=f[o];return c=this.transaction(e,i?"readwrite":"readonly"),l=c.store,r&&(l=l.index(a.shift())),[4,Promise.all([(s=l)[n].apply(s,(0,re.default)(a)),i&&c.done])];case 1:return[2,u.sent()[0]]}}))}));return function(t){return e.apply(this,arguments)}}();return Mt.set(t,a),a}}}Pt=function(e){return yt(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ne(e,t,n[t])}))}return e}({},e),{get:function(t,n,r){return Ut(t,n)||e.get(t,n,r)},has:function(t,n){return!!Ut(t,n)||e.has(t,n)}})},St=Pt(St);
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
var xt=function(){"use strict";function e(t){(0,ee.default)(this,e),this.container=t}return(0,te.default)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}();var jt,Ft,Vt="@firebase/app",Ht="0.9.0",Bt=new mt("@firebase/app"),qt="[DEFAULT]",Wt=(ne(jt={},Vt,"fire-core"),ne(jt,"@firebase/app-compat","fire-core-compat"),ne(jt,"@firebase/analytics","fire-analytics"),ne(jt,"@firebase/analytics-compat","fire-analytics-compat"),ne(jt,"@firebase/app-check","fire-app-check"),ne(jt,"@firebase/app-check-compat","fire-app-check-compat"),ne(jt,"@firebase/auth","fire-auth"),ne(jt,"@firebase/auth-compat","fire-auth-compat"),ne(jt,"@firebase/database","fire-rtdb"),ne(jt,"@firebase/database-compat","fire-rtdb-compat"),ne(jt,"@firebase/functions","fire-fn"),ne(jt,"@firebase/functions-compat","fire-fn-compat"),ne(jt,"@firebase/installations","fire-iid"),ne(jt,"@firebase/installations-compat","fire-iid-compat"),ne(jt,"@firebase/messaging","fire-fcm"),ne(jt,"@firebase/messaging-compat","fire-fcm-compat"),ne(jt,"@firebase/performance","fire-perf"),ne(jt,"@firebase/performance-compat","fire-perf-compat"),ne(jt,"@firebase/remote-config","fire-rc"),ne(jt,"@firebase/remote-config-compat","fire-rc-compat"),ne(jt,"@firebase/storage","fire-gcs"),ne(jt,"@firebase/storage-compat","fire-gcs-compat"),ne(jt,"@firebase/firestore","fire-fst"),ne(jt,"@firebase/firestore-compat","fire-fst-compat"),ne(jt,"fire-js","fire-js"),ne(jt,"firebase","fire-js-all"),jt),zt=new Map,Gt=new Map;function Kt(e,t){try{e.container.addComponent(t)}catch(n){Bt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function Jt(e){var t=e.name;if(Gt.has(t))return Bt.debug("There were multiple attempts to register component ".concat(t,".")),!1;Gt.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=zt.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){Kt(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function Xt(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
var Yt=(ne(Ft={},"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),ne(Ft,"bad-app-name","Illegal App name: '{$appName}"),ne(Ft,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),ne(Ft,"app-deleted","Firebase App named '{$appName}' already deleted"),ne(Ft,"no-options","Need to provide options, when not being deployed to hosting via source."),ne(Ft,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),ne(Ft,"invalid-log-argument","First argument to `onLog` must be null or a function."),ne(Ft,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),ne(Ft,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),ne(Ft,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),ne(Ft,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),Ft),$t=new Ke("app","Firebase",Yt),Qt=function(){"use strict";function e(t,n,r){var i=this;(0,ee.default)(this,e),this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new at("app",(function(){return i}),"PUBLIC"))}return(0,te.default)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}]),e}(),Zt="9.15.0";function en(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:qt,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw $t.create("bad-app-name",{appName:String(a)});if(n||(n=qe()),!n)throw $t.create("no-options");var o=zt.get(a);if(o){if($e(n,o.options)&&$e(i,o.config))return o;throw $t.create("duplicate-app",{appName:a})}var s=new lt(a),u=!0,c=!1,l=void 0;try{for(var f,d=Gt.values()[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var h=f.value;s.addComponent(h)}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}var v=new Qt(n,i,s);return zt.set(a,v),v}function tn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qt,t=zt.get(e);if(!t&&e===qt)return en();if(!t)throw $t.create("no-app",{appName:e});return t}function nn(e,t,n){var r,i=null!==(r=Wt[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void Bt.warn(s.join(" "))}Jt(new at("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
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
var rn="firebase-heartbeat-store",an=null;function on(){return an||(an=Ct("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(rn)}}).catch((function(e){throw $t.create("idb-open",{originalErrorMessage:e.message})}))),an}function sn(e){return un.apply(this,arguments)}function un(){return(un=(0,s.default)((function(e){var t,n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,on()];case 1:return[2,r.sent().transaction(rn).objectStore(rn).get(fn(e))];case 2:return(t=r.sent())instanceof Ge?Bt.warn(t.message):(n=$t.create("idb-get",{originalErrorMessage:null==t?void 0:t.message}),Bt.warn(n.message)),[3,3];case 3:return[2]}}))}))).apply(this,arguments)}function cn(e,t){return ln.apply(this,arguments)}function ln(){return(ln=(0,s.default)((function(e,t){var n,r,i,a;return(0,u.__generator)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),[4,on()];case 1:return n=o.sent(),r=n.transaction(rn,"readwrite"),[4,r.objectStore(rn).put(t,fn(e))];case 2:return o.sent(),[2,r.done];case 3:return(i=o.sent())instanceof Ge?Bt.warn(i.message):(a=$t.create("idb-set",{originalErrorMessage:null==i?void 0:i.message}),Bt.warn(a.message)),[3,4];case 4:return[2]}}))}))).apply(this,arguments)}function fn(e){return"".concat(e.name,"!").concat(e.options.appId)}
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
 */var dn=1024,hn=function(){"use strict";function e(t){var n=this;(0,ee.default)(this,e),this.container=t,this._heartbeatsCache=null;var r=this.container.getProvider("app").getImmediate();this._storage=new gn(r),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return(0,te.default)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return(0,s.default)((function(){var t,n,r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return t=e.container.getProvider("platform-logger").getImmediate(),n=t.getPlatformInfoString(),r=vn(),null!==e._heartbeatsCache?[3,2]:[4,e._heartbeatsCachePromise];case 1:e._heartbeatsCache=i.sent(),i.label=2;case 2:return e._heartbeatsCache.lastSentHeartbeatDate===r||e._heartbeatsCache.heartbeats.some((function(e){return e.date===r}))?[2]:(e._heartbeatsCache.heartbeats.push({date:r,agent:n}),e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),[2,e._storage.overwrite(e._heartbeatsCache)])}}))}))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return(0,s.default)((function(){var t,n,r,i,a;return(0,u.__generator)(this,(function(o){switch(o.label){case 0:return null!==e._heartbeatsCache?[3,2]:[4,e._heartbeatsCachePromise];case 1:o.sent(),o.label=2;case 2:return null===e._heartbeatsCache||0===e._heartbeatsCache.heartbeats.length?[2,""]:(t=vn(),n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:dn,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(){var e=s.value,i=n.find((function(t){return t.agent===e.agent}));if(i){if(i.dates.push(e.date),mn(n)>t)return i.dates.pop(),"break"}else if(n.push({agent:e.agent,dates:[e.date]}),mn(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){if("break"===u())break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}(e._heartbeatsCache.heartbeats),r=n.heartbeatsToSend,i=n.unsentEntries,a=Ue(JSON.stringify({version:2,heartbeats:r})),e._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(e._heartbeatsCache.heartbeats=i,[4,e._storage.overwrite(e._heartbeatsCache)]):[3,4]);case 3:return o.sent(),[3,5];case 4:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache),o.label=5;case 5:return[2,a]}}))}))()}}]),e}();function vn(){return(new Date).toISOString().substring(0,10)}var pn,gn=function(){"use strict";function e(t){(0,ee.default)(this,e),this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return(0,te.default)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return(0,s.default)((function(){return(0,u.__generator)(this,(function(e){return Fe()?[2,new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1}))]:[2,!1]}))}))()}},{key:"read",value:function(){var e=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return[4,e._canUseIndexedDBPromise];case 1:return t.sent()?[3,2]:[2,{heartbeats:[]}];case 2:return[4,sn(e.app)];case 3:return[2,t.sent()||{heartbeats:[]}];case 4:return[2]}}))}))()}},{key:"overwrite",value:function(e){var t=this;return(0,s.default)((function(){var n,r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return[4,t._canUseIndexedDBPromise];case 1:return i.sent()?[3,2]:[2];case 2:return[4,t.read()];case 3:return r=i.sent(),[2,cn(t.app,{lastSentHeartbeatDate:null!==(n=e.lastSentHeartbeatDate)&&void 0!==n?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})];case 4:return[2]}}))}))()}},{key:"add",value:function(e){var t=this;return(0,s.default)((function(){var n,r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return[4,t._canUseIndexedDBPromise];case 1:return i.sent()?[3,2]:[2];case 2:return[4,t.read()];case 3:return r=i.sent(),[2,cn(t.app,{lastSentHeartbeatDate:null!==(n=e.lastSentHeartbeatDate)&&void 0!==n?n:r.lastSentHeartbeatDate,heartbeats:(0,re.default)(r.heartbeats).concat((0,re.default)(e.heartbeats))})];case 4:return[2]}}))}))()}}]),e}();function mn(e){return Ue(JSON.stringify({version:2,heartbeats:e})).length}
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
 */pn="",Jt(new at("platform-logger",(function(e){return new xt(e)}),"PRIVATE")),Jt(new at("heartbeat",(function(e){return new hn(e)}),"PRIVATE")),nn(Vt,Ht,pn),nn(Vt,Ht,"esm2017"),nn("fire-js","");
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
nn("firebase","9.15.0","app");s=i("7pbsT"),ee=i("8IFEP"),te=i("lwwVW");function yn(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=he(e)););return e}function _n(e,t,n){return _n="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=yn(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}},_n(e,t,n)}function bn(e,t,n){return _n(e,t,n)}ie=i("1QZ0q"),re=i("gNe9t"),u=i("4tSb9"),u=i("4tSb9");function kn(){return ne({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var In=kn,wn=new Ke("auth","Firebase",kn()),Tn=new mt("@firebase/auth");function En(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i;Tn.logLevel<=ut.ERROR&&(i=Tn).error.apply(i,["Auth (".concat(Zt,"): ").concat(e)].concat((0,re.default)(n)))}
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
 */function Sn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Nn.apply(void 0,[e].concat((0,re.default)(n)))}function On(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Nn.apply(void 0,[e].concat((0,re.default)(n)))}function Rn(e,t,n){var r=Object.assign(Object.assign({},In()),ne({},t,n));return new Ke("auth","Firebase",r).create(t,{appName:e.name})}function An(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Sn(e,"argument-error"),Rn(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function Nn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i;if("string"!=typeof e){var a,o=n[0],s=(0,re.default)(n.slice(1));return s[0]&&(s[0].appName=e.name),(a=e._errorFactory).create.apply(a,[o].concat((0,re.default)(s)))}return(i=wn).create.apply(i,[e].concat((0,re.default)(n)))}function Cn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(!e)throw Nn.apply(void 0,[t].concat((0,re.default)(r)))}function Pn(e){var t="INTERNAL ASSERTION FAILED: "+e;throw En(t),new Error(t)}function Ln(e,t){e||Pn(t)}
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
 */var Dn=new Map;function Mn(e){Ln(e instanceof Function,"Expected a class definition");var t=Dn.get(e);return t?(Ln(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Dn.set(e,t),t)}
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
 */function Un(e,t){var n=Xt(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if($e(n.getOptions(),null!=t?t:{}))return r;Sn(r,"already-initialized")}return n.initialize({options:t})}
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
function xn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function jn(){return"http:"===Fn()||"https:"===Fn()}function Fn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function Vn(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!jn()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
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
var Hn=function(){"use strict";function e(t,n){(0,ee.default)(this,e),this.shortDelay=t,this.longDelay=n,Ln(n>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())||"object"==typeof navigator&&"ReactNative"===navigator.product}return(0,te.default)(e,[{key:"get",value:function(){return Vn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),e}();
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
 */function Bn(e,t){Ln(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
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
 */var qn,Wn=function(){"use strict";function e(){(0,ee.default)(this,e)}return(0,te.default)(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),zn=(ne(qn={},"CREDENTIAL_MISMATCH","custom-token-mismatch"),ne(qn,"MISSING_CUSTOM_TOKEN","internal-error"),ne(qn,"INVALID_IDENTIFIER","invalid-email"),ne(qn,"MISSING_CONTINUE_URI","internal-error"),ne(qn,"INVALID_PASSWORD","wrong-password"),ne(qn,"MISSING_PASSWORD","internal-error"),ne(qn,"EMAIL_EXISTS","email-already-in-use"),ne(qn,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),ne(qn,"INVALID_IDP_RESPONSE","invalid-credential"),ne(qn,"INVALID_PENDING_TOKEN","invalid-credential"),ne(qn,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),ne(qn,"MISSING_REQ_TYPE","internal-error"),ne(qn,"EMAIL_NOT_FOUND","user-not-found"),ne(qn,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),ne(qn,"EXPIRED_OOB_CODE","expired-action-code"),ne(qn,"INVALID_OOB_CODE","invalid-action-code"),ne(qn,"MISSING_OOB_CODE","internal-error"),ne(qn,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),ne(qn,"INVALID_ID_TOKEN","invalid-user-token"),ne(qn,"TOKEN_EXPIRED","user-token-expired"),ne(qn,"USER_NOT_FOUND","user-token-expired"),ne(qn,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),ne(qn,"INVALID_CODE","invalid-verification-code"),ne(qn,"INVALID_SESSION_INFO","invalid-verification-id"),ne(qn,"INVALID_TEMPORARY_PROOF","invalid-credential"),ne(qn,"MISSING_SESSION_INFO","missing-verification-id"),ne(qn,"SESSION_EXPIRED","code-expired"),ne(qn,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),ne(qn,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),ne(qn,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),ne(qn,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),ne(qn,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),ne(qn,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),ne(qn,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),ne(qn,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),ne(qn,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),ne(qn,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),ne(qn,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),qn),Gn=new Hn(3e4,6e4);function Kn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Jn(e,t,n,r){return Xn.apply(this,arguments)}function Xn(){return Xn=(0,s.default)((function(e,t,n,r){var i,a=arguments;return(0,u.__generator)(this,(function(o){return i=a.length>4&&void 0!==a[4]?a[4]:{},[2,Yn(e,i,(0,s.default)((function(){var i,a,o,s;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return i={},a={},r&&("GET"===t?a=r:i={body:JSON.stringify(r)}),o=Ze(Object.assign({key:e.config.apiKey},a)).slice(1),[4,e._getAdditionalHeaders()];case 1:return(s=u.sent())["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode),[2,Wn.fetch()(er(e,e.config.apiHost,n,o),Object.assign({method:t,headers:s,referrerPolicy:"no-referrer"},i))]}}))})))]}))})),Xn.apply(this,arguments)}function Yn(e,t,n){return $n.apply(this,arguments)}function $n(){return($n=(0,s.default)((function(e,t,n){var r,i,a,o,s,c,l,f,d,h;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:e._canInitEmulator=!1,r=Object.assign(Object.assign({},zn),t),u.label=1;case 1:return u.trys.push([1,4,,5]),i=new tr(e),[4,Promise.race([n(),i.promise])];case 2:return a=u.sent(),i.clearNetworkTimeout(),[4,a.json()];case 3:if("needConfirmation"in(o=u.sent()))throw nr(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return[2,o];if(s=a.ok?o.errorMessage:o.error.message,c=(0,ie.default)(s.split(" : "),2),l=c[0],f=c[1],"FEDERATED_USER_ID_ALREADY_LINKED"===l)throw nr(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===l)throw nr(e,"email-already-in-use",o);if("USER_DISABLED"===l)throw nr(e,"user-disabled",o);if(d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-"),f)throw Rn(e,d,f);return Sn(e,d),[3,5];case 4:if((h=u.sent())instanceof Ge)throw h;return Sn(e,"network-request-failed"),[3,5];case 5:return[2]}}))}))).apply(this,arguments)}function Qn(e,t,n,r){return Zn.apply(this,arguments)}function Zn(){return Zn=(0,s.default)((function(e,t,n,r){var i,a,o=arguments;return(0,u.__generator)(this,(function(s){switch(s.label){case 0:return i=o.length>4&&void 0!==o[4]?o[4]:{},[4,Jn(e,t,n,r,i)];case 1:return"mfaPendingCredential"in(a=s.sent())&&Sn(e,"multi-factor-auth-required",{_serverResponse:a}),[2,a]}}))})),Zn.apply(this,arguments)}function er(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?Bn(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var tr=function(){"use strict";function e(t){var n=this;(0,ee.default)(this,e),this.auth=t,this.timer=null,this.promise=new Promise((function(e,t){n.timer=setTimeout((function(){return t(On(n.auth,"network-request-failed"))}),Gn.get())}))}return(0,te.default)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function nr(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=On(e,t,r);return i.customData._tokenResponse=n,i}function rr(e,t){return ir.apply(this,arguments)}function ir(){return(ir=
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
(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,Jn(e,"POST","/v1/accounts:delete",t)]}))}))).apply(this,arguments)}function ar(e,t){return or.apply(this,arguments)}function or(){return(or=(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,Jn(e,"POST","/v1/accounts:lookup",t)]}))}))).apply(this,arguments)}
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
 */function sr(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function ur(){return ur=(0,s.default)((function(e){var t,n,r,i,a,o,s=arguments;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return t=s.length>1&&void 0!==s[1]&&s[1],[4,(n=it(e)).getIdToken(t)];case 1:return r=u.sent(),Cn((i=lr(r))&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error"),a="object"==typeof i.firebase?i.firebase:void 0,o=null==a?void 0:a.sign_in_provider,[2,{claims:i,token:r,authTime:sr(cr(i.auth_time)),issuedAtTime:sr(cr(i.iat)),expirationTime:sr(cr(i.exp)),signInProvider:o||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}]}}))})),ur.apply(this,arguments)}function cr(e){return 1e3*Number(e)}function lr(e){var t=(0,ie.default)(e.split("."),3),n=t[0],r=t[1],i=t[2];if(void 0===n||void 0===r||void 0===i)return En("JWT malformed, contained fewer than 3 sections"),null;try{var a=xe(r);return a?JSON.parse(a):(En("Failed to decode base64 JWT payload"),null)}catch(e){return En("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function fr(e,t){return dr.apply(this,arguments)}function dr(){return dr=
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
(0,s.default)((function(e,t){var n,r=arguments;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:if(r.length>2&&void 0!==r[2]&&r[2])return[2,t];i.label=1;case 1:return i.trys.push([1,3,,6]),[4,t];case 2:return[2,i.sent()];case 3:return(n=i.sent())instanceof Ge&&hr(n)?e.auth.currentUser!==e?[3,5]:[4,e.auth.signOut()]:[3,5];case 4:i.sent(),i.label=5;case 5:throw n;case 6:return[2]}}))})),dr.apply(this,arguments)}function hr(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */var vr=function(){"use strict";function e(t){(0,ee.default)(this,e),this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return(0,te.default)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var t=this.getInterval(e),n=this;this.timerId=setTimeout((0,s.default)((function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return[4,n.iteration()];case 1:return e.sent(),[2]}}))})),t)}}},{key:"iteration",value:function(){var e=this;return(0,s.default)((function(){var t;return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,e.user.getIdToken(!0)];case 1:return n.sent(),[3,3];case 2:return"auth/network-request-failed"===(null==(t=n.sent())?void 0:t.code)&&e.schedule(!0),[2];case 3:return e.schedule(),[2]}}))}))()}}]),e}(),pr=function(){"use strict";function e(t,n){(0,ee.default)(this,e),this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}return(0,te.default)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=sr(this.lastLoginAt),this.creationTime=sr(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
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
 */function gr(e){return mr.apply(this,arguments)}function mr(){return(mr=
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
(0,s.default)((function(e){var t,n,r,i,a,o,s,c,l,f,d;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return n=e.auth,[4,e.getIdToken()];case 1:return r=u.sent(),[4,fr(e,ar(n,{idToken:r}))];case 2:return Cn(null==(i=u.sent())?void 0:i.users.length,n,"internal-error"),a=i.users[0],e._notifyReloadListener(a),o=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?br(a.providerUserInfo):[],s=_r(e.providerData,o),c=e.isAnonymous,l=!(e.email&&a.passwordHash||(null==s?void 0:s.length)),f=!!c&&l,d={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new pr(a.createdAt,a.lastLoginAt),isAnonymous:f},Object.assign(e,d),[2]}}))}))).apply(this,arguments)}function yr(){return(yr=(0,s.default)((function(e){var t;return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,gr(t=it(e))];case 1:return n.sent(),[4,t.auth._persistUserIfCurrent(t)];case 2:return n.sent(),t.auth._notifyListenersIfCurrent(t),[2]}}))}))).apply(this,arguments)}function _r(e,t){var n=e.filter((function(e){return!t.some((function(t){return t.providerId===e.providerId}))}));return(0,re.default)(n).concat((0,re.default)(t))}function br(e){return e.map((function(e){var t=e.providerId,n=(0,u.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function kr(e,t){return Ir.apply(this,arguments)}function Ir(){return(Ir=
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
(0,s.default)((function(e,t){var n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return[4,Yn(e,{},(0,s.default)((function(){var n,r,i,a,o,s;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return n=Ze({grant_type:"refresh_token",refresh_token:t}).slice(1),r=e.config,i=r.tokenApiHost,a=r.apiKey,o=er(e,i,"/v1/token","key=".concat(a)),[4,e._getAdditionalHeaders()];case 1:return(s=u.sent())["Content-Type"]="application/x-www-form-urlencoded",[2,Wn.fetch()(o,{method:"POST",headers:s,body:n})]}}))})))];case 1:return[2,{accessToken:(n=r.sent()).access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}]}}))}))).apply(this,arguments)}
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
 */var wr=function(){"use strict";function e(){(0,ee.default)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return(0,te.default)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){Cn(e.idToken,"internal-error"),Cn(void 0!==e.idToken,"internal-error"),Cn(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,Cn(n=lr(t),"internal-error"),Cn(void 0!==n.exp,"internal-error"),Cn(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return Cn(!n.accessToken||n.refreshToken,e,"user-token-expired"),t||!n.accessToken||n.isExpired?n.refreshToken?[4,n.refresh(e,n.refreshToken)]:[3,2]:[2,n.accessToken];case 1:return r.sent(),[2,n.accessToken];case 2:return[2,null]}}))}))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,t){var n=this;return(0,s.default)((function(){var r,i,a,o;return(0,u.__generator)(this,(function(s){switch(s.label){case 0:return[4,kr(e,t)];case 1:return r=s.sent(),i=r.accessToken,a=r.refreshToken,o=r.expiresIn,n.updateTokensAndExpiration(i,a,Number(o)),[2]}}))}))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return Pn("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new e;return r&&(Cn("string"==typeof r,"internal-error",{appName:t}),o.refreshToken=r),i&&(Cn("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),a&&(Cn("number"==typeof a,"internal-error",{appName:t}),o.expirationTime=a),o}}]),e}();
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
 */function Tr(e,t){Cn("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Er=function(){"use strict";function e(t){(0,ee.default)(this,e);var n=t.uid,r=t.auth,i=t.stsTokenManager,a=(0,u.__rest)(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?(0,re.default)(a.providerData):[],this.metadata=new pr(a.createdAt||void 0,a.lastLoginAt||void 0)}return(0,te.default)(e,[{key:"getIdToken",value:function(e){var t=this;return(0,s.default)((function(){var n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return[4,fr(t,t.stsTokenManager.getToken(t.auth,e))];case 1:return Cn(n=r.sent(),t.auth,"internal-error"),t.accessToken===n?[3,3]:(t.accessToken=n,[4,t.auth._persistUserIfCurrent(t)]);case 2:r.sent(),t.auth._notifyListenersIfCurrent(t),r.label=3;case 3:return[2,n]}}))}))()}},{key:"getIdTokenResult",value:function(e){return function(e){return ur.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return yr.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(Cn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){Cn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return(0,s.default)((function(){var r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return r=!1,e.idToken&&e.idToken!==n.stsTokenManager.accessToken&&(n.stsTokenManager.updateFromServerResponse(e),r=!0),t?[4,gr(n)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[4,n.auth._persistUserIfCurrent(n)];case 3:return i.sent(),r&&n.auth._notifyListenersIfCurrent(n),[2]}}))}))()}},{key:"delete",value:function(){var e=this;return(0,s.default)((function(){var t;return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,e.getIdToken()];case 1:return t=n.sent(),[4,fr(e,rr(e.auth,{idToken:t}))];case 2:return n.sent(),e.stsTokenManager.clearRefreshToken(),[2,e.auth.signOut()]}}))}))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,a,o,s,u,c,l,f=null!==(r=n.displayName)&&void 0!==r?r:void 0,d=null!==(i=n.email)&&void 0!==i?i:void 0,h=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,v=null!==(o=n.photoURL)&&void 0!==o?o:void 0,p=null!==(s=n.tenantId)&&void 0!==s?s:void 0,g=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,m=null!==(c=n.createdAt)&&void 0!==c?c:void 0,y=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,_=n.uid,b=n.emailVerified,k=n.isAnonymous,I=n.providerData,w=n.stsTokenManager;Cn(_&&w,t,"internal-error");var T=wr.fromJSON(this.name,w);Cn("string"==typeof _,t,"internal-error"),Tr(f,t.name),Tr(d,t.name),Cn("boolean"==typeof b,t,"internal-error"),Cn("boolean"==typeof k,t,"internal-error"),Tr(h,t.name),Tr(v,t.name),Tr(p,t.name),Tr(g,t.name),Tr(m,t.name),Tr(y,t.name);var E=new e({uid:_,auth:t,email:d,emailVerified:b,displayName:f,isAnonymous:k,photoURL:v,phoneNumber:h,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return I&&Array.isArray(I)&&(E.providerData=I.map((function(e){return Object.assign({},e)}))),g&&(E._redirectEventId=g),E}},{key:"_fromIdTokenResponse",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,s.default)((function(){var i,a;return(0,u.__generator)(this,(function(o){switch(o.label){case 0:return(i=new wr).updateFromServerResponse(n),[4,gr(a=new e({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r}))];case 1:return o.sent(),[2,a]}}))}))()}}]),e}(),Sr=function(){"use strict";function e(){(0,ee.default)(this,e),this.type="NONE",this.storage={}}return(0,te.default)(e,[{key:"_isAvailable",value:function(){return(0,s.default)((function(){return(0,u.__generator)(this,(function(e){return[2,!0]}))}))()}},{key:"_set",value:function(e,t){var n=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(r){return n.storage[e]=t,[2]}))}))()}},{key:"_get",value:function(e){var t=this;return(0,s.default)((function(){var n;return(0,u.__generator)(this,(function(r){return[2,void 0===(n=t.storage[e])?null:n]}))}))()}},{key:"_remove",value:function(e){var t=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(n){return delete t.storage[e],[2]}))}))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
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
 */Sr.type="NONE";var Or=Sr;
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
 */function Rr(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Ar=function(){"use strict";function e(t,n,r){(0,ee.default)(this,e),this.persistence=t,this.auth=n,this.userKey=r;var i=this.auth,a=i.config,o=i.name;this.fullUserKey=Rr(this.userKey,a.apiKey,o),this.fullPersistenceKey=Rr("persistence",a.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return(0,te.default)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return(0,s.default)((function(){var t;return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,e.persistence._get(e.fullUserKey)];case 1:return[2,(t=n.sent())?Er._fromJSON(e.auth,t):null]}}))}))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var t=this;return(0,s.default)((function(){var n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return t.persistence===e?[2]:[4,t.getCurrentUser()];case 1:return n=r.sent(),[4,t.removeCurrentUser()];case 2:return r.sent(),t.persistence=e,n?[2,t.setCurrentUser(n)]:[2]}}))}))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return(0,s.default)((function(){var i,a,o,c,l,f,d,h,v,p,g,m,y,_;return(0,u.__generator)(this,(function(b){switch(b.label){case 0:return n.length?[4,Promise.all(n.map(function(){var e=(0,s.default)((function(e){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return[4,e._isAvailable()];case 1:return t.sent()?[2,e]:[2,void 0]}}))}));return function(t){return e.apply(this,arguments)}}()))]:[2,new e(Mn(Or),t,r)];case 1:i=b.sent().filter((function(e){return e})),a=i[0]||Mn(Or),o=Rr(r,t.config.apiKey,t.name),c=null,l=!0,f=!1,d=void 0,b.label=2;case 2:b.trys.push([2,9,10,11]),h=n[Symbol.iterator](),b.label=3;case 3:if(l=(v=h.next()).done)return[3,8];p=v.value,b.label=4;case 4:return b.trys.push([4,6,,7]),[4,p._get(o)];case 5:return(g=b.sent())?(m=Er._fromJSON(t,g),p!==a&&(c=m),a=p,[3,8]):[3,7];case 6:return b.sent(),[3,7];case 7:return l=!0,[3,3];case 8:return[3,11];case 9:return y=b.sent(),f=!0,d=y,[3,11];case 10:try{l||null==h.return||h.return()}finally{if(f)throw d}return[7];case 11:return _=i.filter((function(e){return e._shouldAllowMigration})),a._shouldAllowMigration&&_.length?(a=_[0],c?[4,a._set(o,c.toJSON())]:[3,13]):[2,new e(a,t,r)];case 12:b.sent(),b.label=13;case 13:return[4,Promise.all(n.map(function(){var e=(0,s.default)((function(e){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:if(e===a)return[3,4];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,e._remove(o)];case 2:return t.sent(),[3,4];case 3:return t.sent(),[3,4];case 4:return[2]}}))}));return function(t){return e.apply(this,arguments)}}()))];case 14:return b.sent(),[2,new e(a,t,r)]}}))}))()}}]),e}();
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
 */function Nr(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Dr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Cr(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ur(t))return"Blackberry";if(xr(t))return"Webos";if(Pr(t))return"Safari";if((t.includes("chrome/")||Lr(t))&&!t.includes("edge/"))return"Chrome";if(Mr(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Cr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je();return/firefox\//i.test(e)}function Pr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Lr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je();return/crios\//i.test(e)}function Dr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je();return/iemobile/i.test(e)}function Mr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je();return/android/i.test(e)}function Ur(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je();return/blackberry/i.test(e)}function xr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je();return/webos/i.test(e)}function jr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Fr(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je();return jr(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Vr(){return((e=je()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function Hr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je();return jr(e)||Mr(e)||xr(e)||Ur(e)||/windows phone/i.test(e)||Dr(e)}
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
function Br(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Nr(je());break;case"Worker":t="".concat(Nr(je()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(Zt,"/").concat(r)}
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
 */var qr=function(){"use strict";function e(t){(0,ee.default)(this,e),this.auth=t,this.queue=[]}return(0,te.default)(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var t=this;return(0,s.default)((function(){var n,r,i,a,o,s,c,l,f,d,h,v,p,g,m;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:if(t.auth.currentUser===e)return[2];n=[],u.label=1;case 1:u.trys.push([1,10,,11]),r=!0,i=!1,a=void 0,u.label=2;case 2:u.trys.push([2,7,8,9]),o=t.queue[Symbol.iterator](),u.label=3;case 3:return(r=(s=o.next()).done)?[3,6]:[4,(c=s.value)(e)];case 4:u.sent(),c.onAbort&&n.push(c.onAbort),u.label=5;case 5:return r=!0,[3,3];case 6:return[3,9];case 7:return l=u.sent(),i=!0,a=l,[3,9];case 8:try{r||null==o.return||o.return()}finally{if(i)throw a}return[7];case 9:return[3,11];case 10:f=u.sent(),n.reverse(),d=!0,h=!1,v=void 0;try{for(p=n[Symbol.iterator]();!(d=(g=p.next()).done);d=!0){m=g.value;try{m()}catch(e){}}}catch(e){h=!0,v=e}finally{try{d||null==p.return||p.return()}finally{if(h)throw v}}throw t.auth._errorFactory.create("login-blocked",{originalMessage:null==f?void 0:f.message});case 11:return[2]}}))}))()}}]),e}(),Wr=function(){"use strict";function e(t,n,r){(0,ee.default)(this,e),this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gr(this),this.idTokenSubscription=new Gr(this),this.beforeStateQueue=new qr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}return(0,te.default)(e,[{key:"_initializeWithPersistence",value:function(e,t){t&&(this._popupRedirectResolver=Mn(t));var n=this;return this._initializationPromise=this.queue((0,s.default)((function(){var r,i;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:return n._deleted?[2]:[4,Ar.create(n,e)];case 1:if(n.persistenceManager=a.sent(),n._deleted)return[2];if(!(null===(r=n._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively))return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,n._popupRedirectResolver._initialize(n)];case 3:return a.sent(),[3,5];case 4:return a.sent(),[3,5];case 5:return[4,n.initializeCurrentUser(t)];case 6:return a.sent(),n.lastNotifiedUid=(null===(i=n.currentUser)||void 0===i?void 0:i.uid)||null,n._deleted?[2]:(n._isInitialized=!0,[2])}}))}))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return(0,s.default)((function(){var t;return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return e._deleted?[2]:[4,e.assertedPersistence.getCurrentUser()];case 1:return t=n.sent(),e.currentUser||t?e.currentUser&&t&&e.currentUser.uid===t.uid?(e._currentUser._assign(t),[4,e.currentUser.getIdToken()]):[3,3]:[2];case 2:case 4:return n.sent(),[2];case 3:return[4,e._updateCurrentUser(t,!0)]}}))}))()}},{key:"initializeCurrentUser",value:function(e){var t=this;return(0,s.default)((function(){var n,r,i,a,o,s,c,l;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return[4,t.assertedPersistence.getCurrentUser()];case 1:return r=u.sent(),i=r,a=!1,e&&t.config.authDomain?[4,t.getOrInitRedirectPersistenceManager()]:[3,4];case 2:return u.sent(),o=null===(n=t.redirectUser)||void 0===n?void 0:n._redirectEventId,s=null==i?void 0:i._redirectEventId,[4,t.tryRedirectSignIn(e)];case 3:c=u.sent(),o&&o!==s||!(null==c?void 0:c.user)||(i=c.user,a=!0),u.label=4;case 4:if(!i)return[2,t.directlySetCurrentUser(null)];if(i._redirectEventId)return[3,9];if(!a)return[3,8];u.label=5;case 5:return u.trys.push([5,7,,8]),[4,t.beforeStateQueue.runMiddleware(i)];case 6:return u.sent(),[3,8];case 7:return l=u.sent(),i=r,t._popupRedirectResolver._overrideRedirectResult(t,(function(){return Promise.reject(l)})),[3,8];case 8:return i?[2,t.reloadAndSetCurrentUserOrClear(i)]:[2,t.directlySetCurrentUser(null)];case 9:return Cn(t._popupRedirectResolver,t,"argument-error"),[4,t.getOrInitRedirectPersistenceManager()];case 10:return u.sent(),t.redirectUser&&t.redirectUser._redirectEventId===i._redirectEventId?[2,t.directlySetCurrentUser(i)]:[2,t.reloadAndSetCurrentUserOrClear(i)]}}))}))()}},{key:"tryRedirectSignIn",value:function(e){var t=this;return(0,s.default)((function(){var n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:n=null,r.label=1;case 1:return r.trys.push([1,3,,5]),[4,t._popupRedirectResolver._completeRedirectFn(t,e,!0)];case 2:return n=r.sent(),[3,5];case 3:return r.sent(),[4,t._setRedirectUser(null)];case 4:return r.sent(),[3,5];case 5:return[2,n]}}))}))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var t=this;return(0,s.default)((function(){var n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,gr(e)];case 1:return r.sent(),[3,3];case 2:return"auth/network-request-failed"!==(null==(n=r.sent())?void 0:n.code)?[2,t.directlySetCurrentUser(null)]:[3,3];case 3:return[2,t.directlySetCurrentUser(e)]}}))}))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(t){return e._deleted=!0,[2]}))}))()}},{key:"updateCurrentUser",value:function(e){var t=this;return(0,s.default)((function(){var n;return(0,u.__generator)(this,(function(r){return(n=e?it(e):null)&&Cn(n.auth.config.apiKey===t.config.apiKey,t,"invalid-user-token"),[2,t._updateCurrentUser(n&&n._clone(t))]}))}))()}},{key:"_updateCurrentUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return n._deleted?[2]:(e&&Cn(n.tenantId===e.tenantId,n,"tenant-id-mismatch"),t?[3,2]:[4,n.beforeStateQueue.runMiddleware(e)]);case 1:r.sent(),r.label=2;case 2:return[2,n.queue((0,s.default)((function(){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return[4,n.directlySetCurrentUser(e)];case 1:return t.sent(),n.notifyAuthListeners(),[2]}}))})))]}}))}))()}},{key:"signOut",value:function(){var e=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return[4,e.beforeStateQueue.runMiddleware(null)];case 1:return t.sent(),e.redirectPersistenceManager||e._popupRedirectResolver?[4,e._setRedirectUser(null)]:[3,3];case 2:t.sent(),t.label=3;case 3:return[2,e._updateCurrentUser(null,!0)]}}))}))()}},{key:"setPersistence",value:function(e){var t=this;return this.queue((0,s.default)((function(){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,t.assertedPersistence.setPersistence(Mn(e))];case 1:return n.sent(),[2]}}))})))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new Ke("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,t){var n=this;return(0,s.default)((function(){var r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return[4,n.getOrInitRedirectPersistenceManager(t)];case 1:return r=i.sent(),[2,null===e?r.removeCurrentUser():r.setCurrentUser(e)]}}))}))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var t=this;return(0,s.default)((function(){var n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return t.redirectPersistenceManager?[3,3]:(Cn(n=e&&Mn(e)||t._popupRedirectResolver,t,"argument-error"),[4,Ar.create(t,[Mn(n._redirectPersistence)],"redirectUser")]);case 1:return t.redirectPersistenceManager=r.sent(),[4,t.redirectPersistenceManager.getCurrentUser()];case 2:t.redirectUser=r.sent(),r.label=3;case 3:return[2,t.redirectPersistenceManager]}}))}))()}},{key:"_redirectUserForId",value:function(e){var t=this;return(0,s.default)((function(){var n,r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return t._isInitialized?[4,t.queue((0,s.default)((function(){return(0,u.__generator)(this,(function(e){return[2]}))})))]:[3,2];case 1:i.sent(),i.label=2;case 2:return(null===(n=t._currentUser)||void 0===n?void 0:n._redirectEventId)===e?[2,t._currentUser]:(null===(r=t.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?[2,t.redirectUser]:[2,null]}}))}))()}},{key:"_persistUserIfCurrent",value:function(e){var t=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(n){return e===t.currentUser?[2,t.queue((0,s.default)((function(){return(0,u.__generator)(this,(function(n){return[2,t.directlySetCurrentUser(e)]}))})))]:[2]}))}))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Cn(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var t=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return t.currentUser&&t.currentUser!==e&&t._currentUser._stopProactiveRefresh(),e&&t.isProactiveRefreshEnabled&&e._startProactiveRefresh(),t.currentUser=e,e?[4,t.assertedPersistence.setCurrentUser(e)]:[3,2];case 1:return n.sent(),[3,4];case 2:return[4,t.assertedPersistence.removeCurrentUser()];case 3:n.sent(),n.label=4;case 4:return[2]}}))}))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return Cn(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Br(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return(0,s.default)((function(){var t,n,r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return n=ne({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(n["X-Firebase-gmpid"]=e.app.options.appId),[4,null===(t=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader()];case 1:return(r=i.sent())&&(n["X-Firebase-Client"]=r),[2,n]}}))}))()}}]),e}();
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
 */function zr(e){return it(e)}var Gr=function(){"use strict";function e(t){var n,r,i=this;(0,ee.default)(this,e),this.auth=t,this.observer=null,this.addObserver=(r=new nt((function(e){return i.observer=e}),n)).subscribe.bind(r)}return(0,te.default)(e,[{key:"next",get:function(){return Cn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();function Kr(e,t,n){var r=zr(e);Cn(r._canInitEmulator,r,"emulator-config-failed"),Cn(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");var i=!!(null==n?void 0:n.disableWarnings),a=Jr(t),o=function(e){var t=Jr(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};var r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){var a=i[1];return{host:a,port:Xr(r.substr(a.length+1))}}var o=(0,ie.default)(r.split(":"),2);return{host:o[0],port:Xr(o[1])}}(t),s=o.host,u=o.port,c=null===u?"":":".concat(u);r.config.emulator={url:"".concat(a,"//").concat(s).concat(c,"/")},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:u,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Jr(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Xr(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Yr=function(){"use strict";function e(t,n){(0,ee.default)(this,e),this.providerId=t,this.signInMethod=n}return(0,te.default)(e,[{key:"toJSON",value:function(){return Pn("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return Pn("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return Pn("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return Pn("not implemented")}}]),e}();function $r(e,t){return Qr.apply(this,arguments)}function Qr(){return(Qr=(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,Jn(e,"POST","/v1/accounts:update",t)]}))}))).apply(this,arguments)}function Zr(e,t){return ei.apply(this,arguments)}function ei(){return(ei=
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
(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,Qn(e,"POST","/v1/accounts:signInWithPassword",Kn(e,t))]}))}))).apply(this,arguments)}function ti(e,t){return ni.apply(this,arguments)}function ni(){return(ni=
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
(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,Qn(e,"POST","/v1/accounts:signInWithEmailLink",Kn(e,t))]}))}))).apply(this,arguments)}function ri(e,t){return ii.apply(this,arguments)}function ii(){return(ii=(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,Qn(e,"POST","/v1/accounts:signInWithEmailLink",Kn(e,t))]}))}))).apply(this,arguments)}
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
 */var ai=function(e){"use strict";ue(n,e);var t=ye(n);function n(e,r,i){var a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return(0,ee.default)(this,n),(a=t.call(this,"password",i))._email=e,a._password=r,a._tenantId=o,a}return(0,te.default)(n,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var t=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(n){switch(t.signInMethod){case"password":return[2,Zr(e,{returnSecureToken:!0,email:t._email,password:t._password})];case"emailLink":return[2,ti(e,{email:t._email,oobCode:t._password})];default:Sn(e,"internal-error")}return[2]}))}))()}},{key:"_linkToIdToken",value:function(e,t){var n=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(r){switch(n.signInMethod){case"password":return[2,$r(e,{idToken:t,returnSecureToken:!0,email:n._email,password:n._password})];case"emailLink":return[2,ri(e,{idToken:t,email:n._email,oobCode:n._password})];default:Sn(e,"internal-error")}return[2]}))}))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new n(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new n(e,t,"emailLink",r)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),n}(Yr);function oi(e,t){return si.apply(this,arguments)}function si(){return(si=
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
(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,Qn(e,"POST","/v1/accounts:signInWithIdp",Kn(e,t))]}))}))).apply(this,arguments)}
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
 */var ui=function(e){"use strict";ue(n,e);var t=ye(n);function n(){var e;return(0,ee.default)(this,n),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return(0,te.default)(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return oi(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,oi(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,oi(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ze(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Sn("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,r=t.providerId,i=t.signInMethod,a=(0,u.__rest)(t,["providerId","signInMethod"]);if(!r||!i)return null;var o=new n(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),n}(Yr);function ci(e,t){return li.apply(this,arguments)}function li(){return(li=
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
(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,Jn(e,"POST","/v1/accounts:sendVerificationCode",Kn(e,t))]}))}))).apply(this,arguments)}function fi(){return(fi=(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,Qn(e,"POST","/v1/accounts:signInWithPhoneNumber",Kn(e,t))]}))}))).apply(this,arguments)}function di(){return(di=(0,s.default)((function(e,t){var n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return[4,Qn(e,"POST","/v1/accounts:signInWithPhoneNumber",Kn(e,t))];case 1:if((n=r.sent()).temporaryProof)throw nr(e,"account-exists-with-different-credential",n);return[2,n]}}))}))).apply(this,arguments)}var hi=ne({},"USER_NOT_FOUND","user-not-found");function vi(){return(vi=(0,s.default)((function(e,t){var n;return(0,u.__generator)(this,(function(r){return n=Object.assign(Object.assign({},t),{operation:"REAUTH"}),[2,Qn(e,"POST","/v1/accounts:signInWithPhoneNumber",Kn(e,n),hi)]}))}))).apply(this,arguments)}
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
 */var pi=function(e){"use strict";ue(n,e);var t=ye(n);function n(e){var r;return(0,ee.default)(this,n),(r=t.call(this,"phone","phone")).params=e,r}return(0,te.default)(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return fi.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return di.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return vi.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return r||t||i||a?new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:a}):null}}]),n}(Yr);
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
 */var gi=function(){"use strict";function e(t){var n,r,i,a,o,s;(0,ee.default)(this,e);var u=et(tt(t)),c=null!==(n=u.apiKey)&&void 0!==n?n:null,l=null!==(r=u.oobCode)&&void 0!==r?r:null,f=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=u.mode)&&void 0!==i?i:null);Cn(c&&l&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=l,this.continueUrl=null!==(a=u.continueUrl)&&void 0!==a?a:null,this.languageCode=null!==(o=u.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=u.tenantId)&&void 0!==s?s:null}return(0,te.default)(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=et(tt(e)).link,n=t?et(tt(t)).deep_link_id:null,r=et(tt(e)).deep_link_id;return(r?et(tt(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
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
var mi=function(){"use strict";function e(){(0,ee.default)(this,e),this.providerId=e.PROVIDER_ID}return(0,te.default)(e,null,[{key:"credential",value:function(e,t){return ai._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=gi.parseLink(t);return Cn(n,"argument-error"),ai._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();mi.PROVIDER_ID="password",mi.EMAIL_PASSWORD_SIGN_IN_METHOD="password",mi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
var yi=function(){"use strict";function e(t){(0,ee.default)(this,e),this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}return(0,te.default)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),_i=function(e){"use strict";ue(n,e);var t=ye(n);function n(){var e;return(0,ee.default)(this,n),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return(0,te.default)(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return(0,re.default)(this.scopes)}}]),n}(yi),bi=function(e){"use strict";ue(n,e);var t=ye(n);function n(){return(0,ee.default)(this,n),t.call(this,"facebook.com")}return(0,te.default)(n,null,[{key:"credential",value:function(e){return ui._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(_i);
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
 */bi.FACEBOOK_SIGN_IN_METHOD="facebook.com",bi.PROVIDER_ID="facebook.com";
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
var ki=function(e){"use strict";ue(n,e);var t=ye(n);function n(){var e;return(0,ee.default)(this,n),(e=t.call(this,"google.com")).addScope("profile"),e}return(0,te.default)(n,null,[{key:"credential",value:function(e,t){return ui._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,i=t.oauthAccessToken;if(!r&&!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(_i);ki.GOOGLE_SIGN_IN_METHOD="google.com",ki.PROVIDER_ID="google.com";
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
var Ii=function(e){"use strict";ue(n,e);var t=ye(n);function n(){return(0,ee.default)(this,n),t.call(this,"github.com")}return(0,te.default)(n,null,[{key:"credential",value:function(e){return ui._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(_i);Ii.GITHUB_SIGN_IN_METHOD="github.com",Ii.PROVIDER_ID="github.com";
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
var wi=function(e){"use strict";ue(n,e);var t=ye(n);function n(){return(0,ee.default)(this,n),t.call(this,"twitter.com")}return(0,te.default)(n,null,[{key:"credential",value:function(e,t){return ui._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,i=t.oauthTokenSecret;if(!r||!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(_i);function Ti(e,t){return Ei.apply(this,arguments)}function Ei(){return(Ei=
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
(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,Qn(e,"POST","/v1/accounts:signUp",Kn(e,t))]}))}))).apply(this,arguments)}
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
 */wi.TWITTER_SIGN_IN_METHOD="twitter.com",wi.PROVIDER_ID="twitter.com";var Si=function(){"use strict";function e(t){(0,ee.default)(this,e),this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}return(0,te.default)(e,null,[{key:"_fromIdTokenResponse",value:function(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return(0,s.default)((function(){var a,o;return(0,u.__generator)(this,(function(s){switch(s.label){case 0:return[4,Er._fromIdTokenResponse(t,r,i)];case 1:return a=s.sent(),o=Oi(r),[2,new e({user:a,providerId:o,_tokenResponse:r,operationType:n})]}}))}))()}},{key:"_forOperation",value:function(t,n,r){return(0,s.default)((function(){var i;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:return[4,t._updateTokensIfNecessary(r,!0)];case 1:return a.sent(),i=Oi(r),[2,new e({user:t,providerId:i,_tokenResponse:r,operationType:n})]}}))}))()}}]),e}();function Oi(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
var Ri=function(e){"use strict";ue(n,e);var t=ye(n);function n(e,r,i,a){var o,s;return(0,ee.default)(this,n),(o=t.call(this,r.code,r.message)).operationType=i,o.user=a,Object.setPrototypeOf(ae(o),n.prototype),o.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:r.customData._serverResponse,operationType:i},o}return(0,te.default)(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,i){return new n(e,t,r,i)}}]),n}(Ge);function Ai(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw Ri._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */function Ni(e,t){return Ci.apply(this,arguments)}function Ci(){return Ci=(0,s.default)((function(e,t){var n,r,i,a,o,s=arguments;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return n=s.length>2&&void 0!==s[2]&&s[2],i=[e],a=t._linkToIdToken,o=[e.auth],[4,e.getIdToken()];case 1:return[4,fr.apply(void 0,i.concat([a.apply(t,o.concat([u.sent()])),n]))];case 2:return r=u.sent(),[2,Si._forOperation(e,"link",r)]}}))})),Ci.apply(this,arguments)}function Pi(e,t){return Li.apply(this,arguments)}function Li(){return Li=
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
(0,s.default)((function(e,t){var n,r,i,a,o,s,c,l=arguments;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:n=l.length>2&&void 0!==l[2]&&l[2],r=e.auth,i="reauthenticate",u.label=1;case 1:return u.trys.push([1,3,,4]),[4,fr(e,Ai(r,i,t,e),n)];case 2:return Cn((a=u.sent()).idToken,r,"internal-error"),Cn(o=lr(a.idToken),r,"internal-error"),s=o.sub,Cn(e.uid===s,r,"user-mismatch"),[2,Si._forOperation(e,i,a)];case 3:throw"auth/user-not-found"===(null==(c=u.sent())?void 0:c.code)&&Sn(r,"user-mismatch"),c;case 4:return[2]}}))})),Li.apply(this,arguments)}function Di(e,t){return Mi.apply(this,arguments)}function Mi(){return Mi=
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
(0,s.default)((function(e,t){var n,r,i,a,o=arguments;return(0,u.__generator)(this,(function(s){switch(s.label){case 0:return n=o.length>2&&void 0!==o[2]&&o[2],[4,Ai(e,r="signIn",t)];case 1:return i=s.sent(),[4,Si._fromIdTokenResponse(e,r,i)];case 2:return a=s.sent(),n?[3,4]:[4,e._updateCurrentUser(a.user)];case 3:s.sent(),s.label=4;case 4:return[2,a]}}))})),Mi.apply(this,arguments)}function Ui(e,t){return xi.apply(this,arguments)}function xi(){return(xi=(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(n){return[2,Di(zr(e),t)]}))}))).apply(this,arguments)}function ji(e,t,n){return Fi.apply(this,arguments)}function Fi(){return(Fi=(0,s.default)((function(e,t,n){var r,i,a;return(0,u.__generator)(this,(function(o){switch(o.label){case 0:return[4,Ti(r=zr(e),{returnSecureToken:!0,email:t,password:n})];case 1:return i=o.sent(),[4,Si._fromIdTokenResponse(r,"signIn",i)];case 2:return a=o.sent(),[4,r._updateCurrentUser(a.user)];case 3:return o.sent(),[2,a]}}))}))).apply(this,arguments)}function Vi(e,t,n){return Ui(it(e),mi.credential(t,n))}function Hi(e,t,n,r){return it(e).onIdTokenChanged(t,n,r)}function Bi(e,t,n){return it(e).beforeAuthStateChanged(t,n)}function qi(e){return it(e).signOut()}
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
function Wi(e,t){return Jn(e,"POST","/v2/accounts/mfaEnrollment:start",Kn(e,t))}new WeakMap;var zi="__sak",Gi=function(){"use strict";function e(t,n){(0,ee.default)(this,e),this.storageRetriever=t,this.type=n}return(0,te.default)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(zi,"1"),this.storage.removeItem(zi),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
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
 */var Ki=function(e){"use strict";ue(n,e);var t=ye(n);function n(){var e,r;return(0,ee.default)(this,n),(e=t.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(Pr(r=je())||jr(r))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=Hr(),e._shouldAllowMigration=!0,e}return(0,te.default)(n,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);Vr()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else this.forAllChangedKeys((function(e,t,r){n.notifyListeners(e,r)}))}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){e.forAllChangedKeys((function(t,n,r){e.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,t){var r=this,i=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(a){switch(a.label){case 0:return[4,bn(he(n.prototype),"_set",r).call(i,e,t)];case 1:return a.sent(),i.localCache[e]=JSON.stringify(t),[2]}}))}))()}},{key:"_get",value:function(e){var t=this,r=this;return(0,s.default)((function(){var i;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:return[4,bn(he(n.prototype),"_get",t).call(r,e)];case 1:return i=a.sent(),r.localCache[e]=JSON.stringify(i),[2,i]}}))}))()}},{key:"_remove",value:function(e){var t=this,r=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return[4,bn(he(n.prototype),"_remove",t).call(r,e)];case 1:return i.sent(),delete r.localCache[e],[2]}}))}))()}}]),n}(Gi);Ki.type="LOCAL";var Ji=Ki,Xi=function(e){"use strict";ue(n,e);var t=ye(n);function n(){return(0,ee.default)(this,n),t.call(this,(function(){return window.sessionStorage}),"SESSION")}return(0,te.default)(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(Gi);
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
 */Xi.type="SESSION";var Yi=Xi;
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
 */function $i(e){return Promise.all(e.map(function(){var e=(0,s.default)((function(e){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,e];case 1:return[2,{fulfilled:!0,value:t.sent()}];case 2:return[2,{fulfilled:!1,reason:t.sent()}];case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}()))}
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
 */var Qi=function(){"use strict";function e(t){(0,ee.default)(this,e),this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return(0,te.default)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var t=this;return(0,s.default)((function(){var n,r,i,a,o,c,l,f;return(0,u.__generator)(this,(function(d){switch(d.label){case 0:return r=(n=e).data,i=r.eventId,a=r.eventType,o=r.data,(null==(c=t.handlersMap[a])?void 0:c.size)?(n.ports[0].postMessage({status:"ack",eventId:i,eventType:a}),l=Array.from(c).map(function(){var e=(0,s.default)((function(e){return(0,u.__generator)(this,(function(t){return[2,e(n.origin,o)]}))}));return function(t){return e.apply(this,arguments)}}()),[4,$i(l)]):[2];case 1:return f=d.sent(),n.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:f}),[2]}}))}))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
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
function Zi(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */Qi.receivers=[];var ea=function(){"use strict";function e(t){(0,ee.default)(this,e),this.target=t,this.handlers=new Set}return(0,te.default)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,r=this;return(0,s.default)((function(){var i,a,o;return(0,u.__generator)(this,(function(s){if(!(i="undefined"!=typeof MessageChannel?new MessageChannel:null))throw new Error("connection_unavailable");return[2,new Promise((function(s,u){var c=Zi("",20);i.port1.start();var l=setTimeout((function(){u(new Error("unsupported_event"))}),n);o={messageChannel:i,onMessage:function(e){var t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),a=setTimeout((function(){u(new Error("timeout"))}),3e3);break;case"done":clearTimeout(a),s(t.data.response);break;default:clearTimeout(l),clearTimeout(a),u(new Error("invalid_response"))}}},r.handlers.add(o),i.port1.addEventListener("message",o.onMessage),r.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((function(){o&&r.removeMessageHandler(o)}))]}))}))()}}]),e}();
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
 */function ta(){return window}
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
function na(){return void 0!==ta().WorkerGlobalScope&&"function"==typeof ta().importScripts}function ra(){return ia.apply(this,arguments)}function ia(){return(ia=(0,s.default)((function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return[2,null];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,navigator.serviceWorker.ready];case 2:return[2,e.sent().active];case 3:return e.sent(),[2,null];case 4:return[2]}}))}))).apply(this,arguments)}
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
var aa="firebaseLocalStorageDb",oa="firebaseLocalStorage",sa="fbase_key",ua=function(){"use strict";function e(t){(0,ee.default)(this,e),this.request=t}return(0,te.default)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){e.request.addEventListener("success",(function(){t(e.request.result)})),e.request.addEventListener("error",(function(){n(e.request.error)}))}))}}]),e}();function ca(e,t){return e.transaction([oa],t?"readwrite":"readonly").objectStore(oa)}function la(){var e=indexedDB.deleteDatabase(aa);return new ua(e).toPromise()}function fa(){var e=indexedDB.open(aa,1);return new Promise((function(t,n){e.addEventListener("error",(function(){n(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(oa,{keyPath:sa})}catch(e){n(e)}})),e.addEventListener("success",(0,s.default)((function(){var n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return(n=e.result).objectStoreNames.contains(oa)?[3,3]:(n.close(),[4,la()]);case 1:return r.sent(),[4,fa()];case 2:return t.apply(void 0,[r.sent()]),[3,4];case 3:t(n),r.label=4;case 4:return[2]}}))})))}))}function da(e,t,n){return ha.apply(this,arguments)}function ha(){return(ha=(0,s.default)((function(e,t,n){var r,i;return(0,u.__generator)(this,(function(a){return i=ca(e,!0).put((ne(r={},sa,t),ne(r,"value",n),r)),[2,new ua(i).toPromise()]}))}))).apply(this,arguments)}function va(){return(va=(0,s.default)((function(e,t){var n,r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return n=ca(e,!1).get(t),[4,new ua(n).toPromise()];case 1:return[2,void 0===(r=i.sent())?null:r.value]}}))}))).apply(this,arguments)}function pa(e,t){var n=ca(e,!0).delete(t);return new ua(n).toPromise()}var ga=function(){"use strict";function e(){(0,ee.default)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return(0,te.default)(e,[{key:"_openDb",value:function(){var e=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return e.db?[2,e.db]:[4,fa()];case 1:return e.db=t.sent(),[2,e.db]}}))}))()}},{key:"_withRetries",value:function(e){var t=this;return(0,s.default)((function(){var n,r,i;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:n=0,a.label=1;case 1:0,a.label=2;case 2:return a.trys.push([2,5,,6]),[4,t._openDb()];case 3:return r=a.sent(),[4,e(r)];case 4:return[2,a.sent()];case 5:if(i=a.sent(),n++>3)throw i;return t.db&&(t.db.close(),t.db=void 0),[3,6];case 6:return[3,1];case 7:return[2]}}))}))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(t){return[2,na()?e.initializeReceiver():e.initializeSender()]}))}))()}},{key:"initializeReceiver",value:function(){var e=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(t){return e.receiver=Qi._getInstance(na()?self:null),e.receiver._subscribe("keyChanged",function(){var t=(0,s.default)((function(t,n){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return[4,e._poll()];case 1:return[2,{keyProcessed:t.sent().includes(n.key)}]}}))}));return function(e,n){return t.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=(0,s.default)((function(e,t){return(0,u.__generator)(this,(function(e){return[2,["keyChanged"]]}))}));return function(t,n){return e.apply(this,arguments)}}()),[2]}))}))()}},{key:"initializeSender",value:function(){var e=this;return(0,s.default)((function(){var t,n,r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return[4,ra()];case 1:return e.activeServiceWorker=i.sent(),e.activeServiceWorker?(e.sender=new ea(e.activeServiceWorker),[4,e.sender._send("ping",{},800)]):[2];case 2:return(r=i.sent())?((null===(t=r[0])||void 0===t?void 0:t.fulfilled)&&(null===(n=r[0])||void 0===n?void 0:n.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0),[2]):[2]}}))}))()}},{key:"notifyServiceWorker",value:function(e){var t=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:if(!t.sender||!t.activeServiceWorker||function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()!==t.activeServiceWorker)return[2];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,t.sender._send("keyChanged",{key:e},t.serviceWorkerReceiverAvailable?800:50)];case 2:return n.sent(),[3,4];case 3:return n.sent(),[3,4];case 4:return[2]}}))}))()}},{key:"_isAvailable",value:function(){return(0,s.default)((function(){var e;return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,4,,5]),indexedDB?[4,fa()]:[2,!1];case 1:return[4,da(e=t.sent(),zi,"1")];case 2:return t.sent(),[4,pa(e,zi)];case 3:return t.sent(),[2,!0];case 4:return t.sent(),[3,5];case 5:return[2,!1]}}))}))()}},{key:"_withPendingWrite",value:function(e){var t=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:t.pendingWrites++,n.label=1;case 1:return n.trys.push([1,,3,4]),[4,e()];case 2:return n.sent(),[3,4];case 3:return t.pendingWrites--,[7];case 4:return[2]}}))}))()}},{key:"_set",value:function(e,t){var n=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(r){return[2,n._withPendingWrite((0,s.default)((function(){return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return[4,n._withRetries((function(n){return da(n,e,t)}))];case 1:return r.sent(),n.localCache[e]=t,[2,n.notifyServiceWorker(e)]}}))})))]}))}))()}},{key:"_get",value:function(e){var t=this;return(0,s.default)((function(){var n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return[4,t._withRetries((function(t){return function(e,t){return va.apply(this,arguments)}(t,e)}))];case 1:return n=r.sent(),t.localCache[e]=n,[2,n]}}))}))()}},{key:"_remove",value:function(e){var t=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(n){return[2,t._withPendingWrite((0,s.default)((function(){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,t._withRetries((function(t){return pa(t,e)}))];case 1:return n.sent(),delete t.localCache[e],[2,t.notifyServiceWorker(e)]}}))})))]}))}))()}},{key:"_poll",value:function(){var e=this;return(0,s.default)((function(){var t,n,r,i,a,o,s,c,l,f,d,h,v,p,g,m,y;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return[4,e._withRetries((function(e){var t=ca(e,!1).getAll();return new ua(t).toPromise()}))];case 1:if(!(t=u.sent()))return[2,[]];if(0!==e.pendingWrites)return[2,[]];n=[],r=new Set,i=!0,a=!1,o=void 0;try{for(s=t[Symbol.iterator]();!(i=(c=s.next()).done);i=!0)l=c.value,f=l.fbase_key,d=l.value,r.add(f),JSON.stringify(e.localCache[f])!==JSON.stringify(d)&&(e.notifyListeners(f,d),n.push(f))}catch(e){a=!0,o=e}finally{try{i||null==s.return||s.return()}finally{if(a)throw o}}h=!0,v=!1,p=void 0;try{for(g=Object.keys(e.localCache)[Symbol.iterator]();!(h=(m=g.next()).done);h=!0)y=m.value,e.localCache[y]&&!r.has(y)&&(e.notifyListeners(y,null),n.push(y))}catch(e){v=!0,p=e}finally{try{h||null==g.return||g.return()}finally{if(v)throw p}}return[2,n]}}))}))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval((0,s.default)((function(){return(0,u.__generator)(this,(function(t){return[2,e._poll()]}))})),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();ga.type="LOCAL";var ma=ga;
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
 */function ya(e,t){return Jn(e,"POST","/v2/accounts/mfaSignIn:start",Kn(e,t))}function _a(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=On("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function ba(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
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
ba("rcb"),new Hn(3e4,6e4);var ka="recaptcha";
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
 */function Ia(e,t,n){return wa.apply(this,arguments)}function wa(){return(wa=(0,s.default)((function(e,t,n){var r,i,a,o,s;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return[4,n.verify()];case 1:i=u.sent(),u.label=2;case 2:return u.trys.push([2,,10,11]),Cn("string"==typeof i,e,"argument-error"),Cn(n.type===ka,e,"argument-error"),"session"in(a="string"==typeof t?{phoneNumber:t}:t)?(o=a.session,"phoneNumber"in a?(Cn("enroll"===o.type,e,"internal-error"),[4,Wi(e,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:i}})]):[3,4]):[3,7];case 3:return[2,u.sent().phoneSessionInfo.sessionInfo];case 4:return Cn("signin"===o.type,e,"internal-error"),Cn(s=(null===(r=a.multiFactorHint)||void 0===r?void 0:r.uid)||a.multiFactorUid,e,"missing-multi-factor-info"),[4,ya(e,{mfaPendingCredential:o.credential,mfaEnrollmentId:s,phoneSignInInfo:{recaptchaToken:i}})];case 5:return[2,u.sent().phoneResponseInfo.sessionInfo];case 6:return[3,9];case 7:return[4,ci(e,{phoneNumber:a.phoneNumber,recaptchaToken:i})];case 8:return[2,u.sent().sessionInfo];case 9:return[3,11];case 10:return n._reset(),[7];case 11:return[2]}}))}))).apply(this,arguments)}
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
var Ta=function(){"use strict";function e(t){(0,ee.default)(this,e),this.providerId=e.PROVIDER_ID,this.auth=zr(t)}return(0,te.default)(e,[{key:"verifyPhoneNumber",value:function(e,t){return Ia(this.auth,e,it(t))}}],[{key:"credential",value:function(e,t){return pi._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?pi._fromTokenResponse(n,r):null}}]),e}();
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
function Ea(e,t){return t?Mn(t):(Cn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Ta.PROVIDER_ID="phone",Ta.PHONE_SIGN_IN_METHOD="phone";var Sa=function(e){"use strict";ue(n,e);var t=ye(n);function n(e){var r;return(0,ee.default)(this,n),(r=t.call(this,"custom","custom")).params=e,r}return(0,te.default)(n,[{key:"_getIdTokenResponse",value:function(e){return oi(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return oi(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return oi(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(Yr);function Oa(e){return Di(e.auth,new Sa(e),e.bypassAuthState)}function Ra(e){var t=e.auth,n=e.user;return Cn(n,t,"internal-error"),Pi(n,new Sa(e),e.bypassAuthState)}function Aa(e){return Na.apply(this,arguments)}function Na(){return(Na=(0,s.default)((function(e){var t,n;return(0,u.__generator)(this,(function(r){return t=e.auth,Cn(n=e.user,t,"internal-error"),[2,Ni(n,new Sa(e),e.bypassAuthState)]}))}))).apply(this,arguments)}
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
 */var Ca=function(){"use strict";function e(t,n,r,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];(0,ee.default)(this,e),this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return(0,te.default)(e,[{key:"execute",value:function(){var e=this;return new Promise(function(){var t=(0,s.default)((function(t,n){var r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:e.pendingPromise={resolve:t,reject:n},i.label=1;case 1:return i.trys.push([1,4,,5]),[4,e.resolver._initialize(e.auth)];case 2:return e.eventManager=i.sent(),[4,e.onExecution()];case 3:return i.sent(),e.eventManager.registerConsumer(e),[3,5];case 4:return r=i.sent(),e.reject(r),[3,5];case 5:return[2]}}))}));return function(e,n){return t.apply(this,arguments)}}())}},{key:"onAuthEvent",value:function(e){var t=this;return(0,s.default)((function(){var n,r,i,a,o,s,c,l,f;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:if(n=e.urlResponse,r=e.sessionId,i=e.postBody,a=e.tenantId,o=e.error,s=e.type,o)return t.reject(o),[2];c={auth:t.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:t.user,bypassAuthState:t.bypassAuthState},u.label=1;case 1:return u.trys.push([1,3,,4]),l=t.resolve,[4,t.getIdpTask(s)(c)];case 2:return l.apply(t,[u.sent()]),[3,4];case 3:return f=u.sent(),t.reject(f),[3,4];case 4:return[2]}}))}))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Oa;case"linkViaPopup":case"linkViaRedirect":return Aa;case"reauthViaPopup":case"reauthViaRedirect":return Ra;default:Sn(this.auth,"internal-error")}}},{key:"resolve",value:function(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),Pa=new Hn(2e3,1e4);
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
 */function La(e,t,n){return Da.apply(this,arguments)}function Da(){return(Da=(0,s.default)((function(e,t,n){var r,i;return(0,u.__generator)(this,(function(a){return r=zr(e),An(e,t,yi),i=Ea(r,n),[2,new Ma(r,"signInViaPopup",t,i).executeNotNull()]}))}))).apply(this,arguments)}var Ma=function(e){"use strict";ue(n,e);var t=ye(n);function n(e,r,i,a,o){var s;return(0,ee.default)(this,n),(s=t.call(this,e,r,a,o)).provider=i,s.authWindow=null,s.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=ae(s),s}return(0,te.default)(n,[{key:"executeNotNull",value:function(){var e=this;return(0,s.default)((function(){var t;return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,e.execute()];case 1:return Cn(t=n.sent(),e.auth,"internal-error"),[2,t]}}))}))()}},{key:"onExecution",value:function(){var e=this;return(0,s.default)((function(){var t;return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return Ln(1===e.filter.length,"Popup operations only handle one event"),t=Zi(),[4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],t)];case 1:return e.authWindow=n.sent(),e.authWindow.associatedEvent=t,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(On(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation(),[2]}}))}))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(On(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed)?e.pollId=window.setTimeout((function(){e.pollId=null,e.reject(On(e.auth,"popup-closed-by-user"))}),2e3):e.pollId=window.setTimeout(t,Pa.get())};t()}}]),n}(Ca);Ma.currentPopupAction=null;
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
var Ua=new Map,xa=function(e){"use strict";ue(n,e);var t=ye(n);function n(e,r){var i,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,ee.default)(this,n),(i=t.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,a)).eventId=null,i}return(0,te.default)(n,[{key:"execute",value:function(){var e=this,t=this;return(0,s.default)((function(){var r,i,a,o;return(0,u.__generator)(this,(function(s){switch(s.label){case 0:if(r=Ua.get(t.auth._key()))return[3,8];s.label=1;case 1:return s.trys.push([1,6,,7]),[4,ja(t.resolver,t.auth)];case 2:return s.sent()?[4,bn(he(n.prototype),"execute",e).call(t)]:[3,4];case 3:return a=s.sent(),[3,5];case 4:a=null,s.label=5;case 5:return i=a,r=function(){return Promise.resolve(i)},[3,7];case 6:return o=s.sent(),r=function(){return Promise.reject(o)},[3,7];case 7:Ua.set(t.auth._key(),r),s.label=8;case 8:return t.bypassAuthState||Ua.set(t.auth._key(),(function(){return Promise.resolve(null)})),[2,r()]}}))}))()}},{key:"onAuthEvent",value:function(e){var t=this,r=this,i=function(){return bn(he(n.prototype),"onAuthEvent",t)};return(0,s.default)((function(){var t;return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return"signInViaRedirect"===e.type?[2,i().call(r,e)]:"unknown"===e.type?(r.resolve(null),[2]):e.eventId?[4,r.auth._redirectUserForId(e.eventId)]:[3,2];case 1:if(t=n.sent())return r.user=t,[2,i().call(r,e)];r.resolve(null),n.label=2;case 2:return[2]}}))}))()}},{key:"onExecution",value:function(){return(0,s.default)((function(){return(0,u.__generator)(this,(function(e){return[2]}))}))()}},{key:"cleanUp",value:function(){}}]),n}(Ca);function ja(e,t){return Fa.apply(this,arguments)}function Fa(){return(Fa=(0,s.default)((function(e,t){var n,r,i;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:return n=Ba(t),[4,(r=Ha(e))._isAvailable()];case 1:return a.sent()?[4,r._get(n)]:[2,!1];case 2:return i="true"===a.sent(),[4,r._remove(n)];case 3:return a.sent(),[2,i]}}))}))).apply(this,arguments)}function Va(e,t){Ua.set(e._key(),t)}function Ha(e){return Mn(e._redirectPersistence)}function Ba(e){return Rr("pendingRedirect",e.config.apiKey,e.name)}
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
 */function qa(e,t){return Wa.apply(this,arguments)}function Wa(){return Wa=(0,s.default)((function(e,t){var n,r,i,a,o=arguments;return(0,u.__generator)(this,(function(s){switch(s.label){case 0:return n=o.length>2&&void 0!==o[2]&&o[2],r=zr(e),i=Ea(r,t),[4,new xa(r,i,n).execute()];case 1:return!(a=s.sent())||n?[3,4]:(delete a.user._redirectEventId,[4,r._persistUserIfCurrent(a.user)]);case 2:return s.sent(),[4,r._setRedirectUser(null,t)];case 3:s.sent(),s.label=4;case 4:return[2,a]}}))})),Wa.apply(this,arguments)}
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
var za=function(){"use strict";function e(t){(0,ee.default)(this,e),this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return(0,te.default)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ka(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!Ka(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(On(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ga(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Ga(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function Ga(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Ka(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function Ja(e){return Xa.apply(this,arguments)}function Xa(){return Xa=
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
(0,s.default)((function(e){var t,n=arguments;return(0,u.__generator)(this,(function(r){return t=n.length>1&&void 0!==n[1]?n[1]:{},[2,Jn(e,"GET","/v1/projects",t)]}))})),Xa.apply(this,arguments)}
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
 */var Ya=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$a=/^https?/;function Qa(){return(Qa=(0,s.default)((function(e){var t,n,r,i,a,o,s;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return e.config.emulator?[2]:[4,Ja(e)];case 1:t=u.sent().authorizedDomains,n=!0,r=!1,i=void 0;try{for(a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){s=o.value;try{if(Za(s))return[2]}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return Sn(e,"unauthorized-domain"),[2]}}))}))).apply(this,arguments)}function Za(e){var t=xn(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!$a.test(r))return!1;if(Ya.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
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
 */var eo=new Hn(3e4,6e4);function to(){var e=ta().___jsl,t=!0,n=!1,r=void 0;if(null==e?void 0:e.H)try{for(var i,a=Object.keys(e.H)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(e.H[o].r=e.H[o].r||[],e.H[o].L=e.H[o].L||[],e.H[o].r=(0,re.default)(e.H[o].L),e.CP)for(var s=0;s<e.CP.length;s++)e.CP[s]=null}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}var no=null;function ro(e){return no=no||function(e){return new Promise((function(t,n){var r,i,a;function o(){to(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){to(),n(On(e,"network-request-failed"))},timeout:eo.get()})}if(null===(i=null===(r=ta().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=ta().gapi)||void 0===a?void 0:a.load)){var s=ba("iframefcb");return ta()[s]=function(){gapi.load?o():n(On(e,"network-request-failed"))},_a("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw no=null,e}))}(e),no}
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
 */var io=new Hn(5e3,15e3),ao={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function so(e){var t=e.config;Cn(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?Bn(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:Zt},i=oo.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(Ze(r).slice(1))}function uo(e){return co.apply(this,arguments)}function co(){return co=(0,s.default)((function(e){var t,n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return[4,ro(e)];case 1:return t=r.sent(),Cn(n=ta().gapi,e,"internal-error"),[2,t.open({where:document.body,url:so(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ao,dontclear:!0},(function(t){return new Promise(function(){var n=(0,s.default)((function(n,r){var i,a;function o(){ta().clearTimeout(a),n(t)}return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,t.restyle({setHideOnLeave:!1})];case 1:return n.sent(),i=On(e,"network-request-failed"),a=ta().setTimeout((function(){r(i)}),io.get()),t.ping(o).then(o,(function(){r(i)})),[2]}}))}));return function(e,t){return n.apply(this,arguments)}}())}))]}}))})),co.apply(this,arguments)}
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
 */var lo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fo="_blank",ho="http://localhost",vo=function(){"use strict";function e(t){(0,ee.default)(this,e),this.window=t,this.associatedEvent=null}return(0,te.default)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function po(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),s="",u=Object.assign(Object.assign({},lo),{width:r.toString(),height:i.toString(),top:a,left:o}),c=je().toLowerCase();n&&(s=Lr(c)?fo:n),Cr(c)&&(t=t||ho,u.scrollbars="yes");var l=Object.entries(u).reduce((function(e,t){var n=(0,ie.default)(t,2),r=n[0],i=n[1];return"".concat(e).concat(r,"=").concat(i,",")}),"");if(Fr(c)&&"_self"!==s)return go(t||"",s),new vo(null);var f=window.open(t||"",s,l);Cn(f,e,"popup-blocked");try{f.focus()}catch(e){}return new vo(f)}function go(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */var mo="__/auth/handler",yo="emulator/auth/handler";function _o(e,t,n,r,i,a){Cn(e.config.authDomain,e,"auth-domain-config-required"),Cn(e.config.apiKey,e,"invalid-api-key");var o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Zt,eventId:i};if(t instanceof yi){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Ye(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));var s=!0,u=!1,c=void 0;try{for(var l,f=Object.entries(a||{})[Symbol.iterator]();!(s=(l=f.next()).done);s=!0){var d=(0,ie.default)(l.value,2),h=d[0],v=d[1];o[h]=v}}catch(e){u=!0,c=e}finally{try{s||null==f.return||f.return()}finally{if(u)throw c}}}if(t instanceof _i){var p=t.getScopes().filter((function(e){return""!==e}));p.length>0&&(o.scopes=p.join(","))}e.tenantId&&(o.tid=e.tenantId);var g,m,y=o,_=!0,b=!1,k=void 0;try{for(var I,w=Object.keys(y)[Symbol.iterator]();!(_=(I=w.next()).done);_=!0){var T=I.value;void 0===y[T]&&delete y[T]}}catch(e){b=!0,k=e}finally{try{_||null==w.return||w.return()}finally{if(b)throw k}}return"".concat((g=e,m=g.config,m.emulator?Bn(m,yo):"https://".concat(m.authDomain,"/").concat(mo)),"?").concat(Ze(y).slice(1))}
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
var bo="webStorageSupport",ko=function(){"use strict";function e(){(0,ee.default)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yi,this._completeRedirectFn=qa,this._overrideRedirectResult=Va}return(0,te.default)(e,[{key:"_openPopup",value:function(e,t,n,r){var i=this;return(0,s.default)((function(){var a,o;return(0,u.__generator)(this,(function(s){return Ln(null===(a=i.eventManagers[e._key()])||void 0===a?void 0:a.manager,"_initialize() not called before _openPopup()"),o=_o(e,t,n,xn(),r),[2,po(e,o,Zi())]}))}))()}},{key:"_openRedirect",value:function(e,t,n,r){var i=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(a){switch(a.label){case 0:return[4,i._originValidation(e)];case 1:return a.sent(),o=_o(e,t,n,xn(),r),ta().location.href=o,[2,new Promise((function(){}))]}var o}))}))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(Ln(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(e){var t=this;return(0,s.default)((function(){var n,r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return[4,uo(e)];case 1:return n=i.sent(),r=new za(e),n.register("authEvent",(function(t){return Cn(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),t.eventManagers[e._key()]={manager:r},t.iframes[e._key()]=n,[2,r]}}))}))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(bo,{type:bo},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[bo];void 0!==i&&t(!!i),Sn(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Qa.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Hr()||Pr()||jr()}}]),e}(),Io=ko,wo=function(){"use strict";function e(t){(0,ee.default)(this,e),this.factorId=t}return(0,te.default)(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Pn("unexpected MultiFactorSessionType")}}}]),e}(),To=function(e){"use strict";ue(n,e);var t=ye(n);function n(e){var r;return(0,ee.default)(this,n),(r=t.call(this,"phone")).credential=e,r}return(0,te.default)(n,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return Jn(e,"POST","/v2/accounts/mfaEnrollment:finalize",Kn(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Jn(e,"POST","/v2/accounts/mfaSignIn:finalize",Kn(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(wo);(function(){"use strict";function e(){(0,ee.default)(this,e)}return(0,te.default)(e,null,[{key:"assertion",value:function(e){return To._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var Eo="@firebase/auth",So="0.21.0",Oo=function(){"use strict";function e(t){(0,ee.default)(this,e),this.auth=t,this.internalListeners=new Map}return(0,te.default)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var t=this;return(0,s.default)((function(){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return t.assertAuthConfigured(),[4,t.auth._initializationPromise];case 1:return n.sent(),t.auth.currentUser?[4,t.auth.currentUser.getIdToken(e)]:[2,null];case 2:return[2,{accessToken:n.sent()}]}}))}))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){Cn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
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
var Ro,Ao=We("authIdTokenMaxAge")||300,No=null,Co=function(e){return function(){var t=(0,s.default)((function(t){var n,r,i,a;return(0,u.__generator)(this,(function(o){switch(o.label){case 0:return(r=t)?[4,t.getIdTokenResult()]:[3,2];case 1:r=o.sent(),o.label=2;case 2:return(i=(n=r)&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3)&&i>Ao?[2]:(a=null==n?void 0:n.token,No===a?[2]:(No=a,[4,fetch(e,{method:a?"POST":"DELETE",headers:a?{Authorization:"Bearer ".concat(a)}:{}})]));case 3:return o.sent(),[2]}}))}));return function(e){return t.apply(this,arguments)}}()};Ro="Browser",Jt(new at("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,o=a.apiKey,s=a.authDomain;return function(e,t){Cn(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),Cn(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:Ro,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Br(Ro)},i=new Wr(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),Jt(new at("auth-internal",(function(e){return function(e){return new Oo(e)}(zr(e.getProvider("auth").getImmediate()))}),"PRIVATE").setInstantiationMode("EXPLICIT")),nn(Eo,So,
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
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ro)),nn(Eo,So,"esm2017");en({apiKey:"AIzaSyD_aK9Samiq36GmoUl35P_5NzpxQkwfvY8",authDomain:"filmoteka-75759.firebaseapp.com",projectId:"filmoteka-75759",storageBucket:"filmoteka-75759.appspot.com",messagingSenderId:"84456311588",appId:"1:84456311588:web:6fd62d962f70da880801b1",measurementId:"G-YF4EWZTT7X",databaseURL:"https://filmoteka-75759-default-rtdb.europe-west1.firebasedatabase.app/"});var Po,Lo,Do,Mo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tn(),t=Xt(e,"auth");if(t.isInitialized())return t.getImmediate();var n=Un(e,{popupRedirectResolver:Io,persistence:[ma,Ji,Yi]}),r=We("authTokenSyncURL");if(r){var i=Co(r);Bi(n,i,(function(){return i(n.currentUser)})),Hi(n,(function(e){return i(e)}))}var a=Be("auth");return a&&Kr(n,"http://".concat(a)),n}(),Uo=new ki,xo=document.querySelector("#sign-in-google"),jo=document.querySelector("#sign-up-form"),Fo=document.querySelector("#sign-in-form"),Vo=document.querySelector(".logIn-modal"),Ho=document.querySelector("#sign-out-btn"),Bo=document.querySelector("#logIn"),qo=document.querySelector("#form-modal-close");Po=function(e){e?(Fo.style.display="none",jo.style.display="none",xo.style.display="none",Ho.classList.remove("is-hidden"),Bo.classList.add("is-hidden"),Vo.classList.add("is-hidden")):(Fo.style.display="block",jo.style.display="block",xo.style.display="block",Ho.classList.add("is-hidden"),Bo.classList.remove("is-hidden"))},it(Mo).onAuthStateChanged(Po,Lo,Do);var Wo=function(){Vo.classList.add("is-hidden"),Bo.classList.remove("is-hidden")};function zo(t){t.preventDefault();var n=t.target.elements,r=n.email,i=n.password;ji(Mo,r.value,i.value).then((function(t){var n=t.user;console.log(n),e(I).Notify.success("New user account logged in")})).catch((function(t){var n=t.code,r=t.message;console.log({errorCode:n,errorMessage:r}),e(I).Notify.failure(r)}))}var Go=function(t){t.preventDefault();var n=t.target.elements,r=n.email,i=n.password;Vi(Mo,r.value,i.value).then((function(t){var n=t.user;console.log(n),e(I).Notify.success("You are log in")})).catch((function(t){var n=t.code,r=t.message;console.log({errorCode:n,errorMessage:r}),e(I).Notify.failure(r)}))},Ko=function(){La(Mo,Uo).then((function(t){ki.credentialFromResult(t).accessToken;var n=t.user;e(I).Notify.success("Hello ".concat(n.displayName)),console.log(n)})).catch((function(t){var n=t.code,r=t.message,i=t.customData.email,a=ki.credentialFromError(t);console.log({errorCode:n,errorMessage:r,email:i,credential:a}),e(I).Notify.failure(r)}))};Ho.addEventListener("click",(function(){qi(Mo).then((function(){jo.reset(),Fo.reset()}))})),Bo.addEventListener("click",(function(){Vo.classList.remove("is-hidden"),Bo.classList.add("is-hidden"),qo.addEventListener("click",Wo),Fo.addEventListener("submit",Go),jo.addEventListener("submit",zo),xo.addEventListener("click",Ko)})),m()}();
//# sourceMappingURL=index.3e53699a.js.map
