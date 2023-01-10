!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i);var a,o,s,u=i("7pbsT"),c=i("4tSb9"),l=i("80lIJ"),d=(u=i("7pbsT"),c=i("4tSb9"),i("dIxxU")),f=document.querySelector(".loader"),h="b942b8bf626a04f48b07153a95ee51a0",v=(a=(0,u.default)((function(){var e,t,n,r,i=arguments;return(0,c.__generator)(this,(function(a){switch(a.label){case 0:e=i.length>0&&void 0!==i[0]?i[0]:"https://api.themoviedb.org/3/movie/popular",t=i.length>1&&void 0!==i[1]?i[1]:1,f.style.display="block",a.label=1;case 1:return a.trys.push([1,3,,4]),[4,d.default.get(e,{params:{api_key:"".concat(h),page:t,language:"en-US"}})];case 2:return n=a.sent(),f.style.display="none",[2,n];case 3:return r=a.sent(),f.style.display="none",console.log(r),[3,4];case 4:return[2]}}))})),function(){return a.apply(this,arguments)}),p="",g=function(e){var t,n=B();return function(e,t){p="",e.map((function(n){t.map((function(t){t.id===n&&(n!=e[e.length-1]?p=p+t.name+", ":p+=t.name)}))}))}(e.genre_ids,n.data.genres),'\n<div class="movie-card">\n  <img class="movie-card__image" alt="" src=\'https://image.tmdb.org/t/p/w500/'.concat(e.poster_path,'\'}>\n  <div class="movie-card__label">\n    <p class="movie-card__title">').concat(e.title,'</p>\n    <p class="movie-card__genre-year">').concat(p," | ").concat((t=e.release_date,t.substring(0,4)),'</p> \n    <p class="movie-card__id">').concat(e.id,"</p> \n  </div>\n</div>\n")},m=document.getElementById("pagination__numbers"),y=document.getElementById("next-button"),_=document.getElementById("prev-button"),b=function(e){if(e==o){var t=document.createElement("span");t.className="pagination__numbers-ellipsis",t.innerHTML="&hellip;",t.classList.add("hidden-right"),m.appendChild(t)}var n=document.createElement("button");if(n.className="pagination__number",n.innerHTML=e,n.setAttribute("page-index",e),n.setAttribute("aria-label","Page "+e),1!=e&&e!=o||n.classList.add("hidden-mobile"),m.appendChild(n),1==e){var r=document.createElement("span");r.className="pagination__numbers-ellipsis",r.innerHTML="&hellip;",r.classList.add("hidden-left"),m.appendChild(r)}},k=function(e){m.innerHTML="",o=e;for(var t=1;t<=e;t++)b(t)},I=function(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)},w=function(e){e.classList.remove("disabled"),e.removeAttribute("disabled")},T=function(e){(function(e){var t=document.querySelectorAll(".pagination__numbers-ellipsis");console.log(t),document.querySelectorAll(".pagination__number").forEach((function(n){var r=Number(n.getAttribute("page-index"));o<=7?(n.classList.remove("hidden"),t[0].classList.add("hidden-left"),t[1].classList.add("hidden-right")):e<=4?(t[0].classList.add("hidden-left"),t[1].classList.remove("hidden-right")):e>=o-3?(t[0].classList.remove("hidden-left"),t[1].classList.add("hidden-right")):(t[0].classList.remove("hidden-left"),t[1].classList.remove("hidden-right")),e<=3?(1==r&&n.classList.remove("hidden-mobile"),r==o&&n.classList.add("hidden-mobile"),r<=5||r==o?n.classList.remove("hidden"):n.classList.add("hidden")):e>=o-2?(1==r&&n.classList.add("hidden-mobile"),r==o&&n.classList.remove("hidden-mobile"),r>=o-4||1==r?n.classList.remove("hidden"):n.classList.add("hidden")):o<=7?(n.classList.remove("hidden"),t[0].classList.add("hidden-left"),t[1].classList.add("hidden-right"),1!=r&&r!=o||n.classList.remove("hidden-mobile")):1==r||r==o?(n.classList.remove("hidden"),n.classList.add("hidden-mobile")):r>=e-2&&r<=e+2?n.classList.remove("hidden"):n.classList.add("hidden")}))})(s=e),document.querySelectorAll(".pagination__number").forEach((function(e){e.classList.remove("active"),Number(e.getAttribute("page-index"))==s&&e.classList.add("active")})),1===s?I(_):w(_),o===s?I(y):w(y)},E=(u=i("7pbsT"),c=i("4tSb9"),u=i("7pbsT"),c=i("4tSb9"),d=i("dIxxU"),"b942b8bf626a04f48b07153a95ee51a0"),S="https://api.themoviedb.org/3/search/movie",O=document.querySelector(".loader");function R(e){return A.apply(this,arguments)}function A(){return A=(0,u.default)((function(e){var t,n,r,i=arguments;return(0,c.__generator)(this,(function(a){switch(a.label){case 0:t=i.length>1&&void 0!==i[1]?i[1]:1,O.style.display="block",a.label=1;case 1:return a.trys.push([1,3,,4]),[4,d.default.get(S,{params:{api_key:"".concat(E),query:"".concat(e),page:t}})];case 2:return n=a.sent(),O.style.display="none",[2,n.data];case 3:return r=a.sent(),O.style.display="none",console.error(r),[3,4];case 4:return[2]}}))})),A.apply(this,arguments)}var C=document.querySelector(".header__no-movies"),N=document.querySelector(".main-box"),L=document.querySelector("input[name='searchQuery']"),P=document.querySelector(".header__search-form-btn"),D=document.querySelector(".to-top"),M=1;function U(){return(U=(0,u.default)((function(e){var t,n;return(0,c.__generator)(this,(function(r){switch(r.label){case 0:return e.preventDefault(),C.innerHTML="",M=1,(t=L.value)?[3,1]:(alert("Enter movie title"),[3,3]);case 1:return[4,R(t,M)];case 2:(n=r.sent()).results.length?(N.innerHTML="",console.log(n),n.results.map((function(e){N.insertAdjacentHTML("beforeend",g(e))})),n.total_pages<500?k(n.total_pages):k(500),T(M),_.addEventListener("click",(0,u.default)((function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return T(M-1),[4,R(t,--M)];case 1:return n=e.sent(),N.innerHTML="",console.log(n),n.results.map((function(e){N.insertAdjacentHTML("beforeend",g(e))})),x(),[2]}}))}))),y.addEventListener("click",(0,u.default)((function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return T(M+1),[4,R(t,++M)];case 1:return n=e.sent(),N.innerHTML="",console.log(n),n.results.map((function(e){N.insertAdjacentHTML("beforeend",g(e))})),x(),[2]}}))}))),document.querySelectorAll(".pagination__number").forEach((function(e){var r=Number(e.getAttribute("page-index"));r&&e.addEventListener("click",(0,u.default)((function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return T(r),[4,R(t,M=r)];case 1:return n=e.sent(),N.innerHTML="",console.log(n),n.results.map((function(e){N.insertAdjacentHTML("beforeend",g(e))})),x(),[2]}}))})))}))):C.innerHTML="Search result not successful. Enter the correct movie name.",r.label=3;case 3:return[2]}}))}))).apply(this,arguments)}function x(){window.scrollTo({top:0,behavior:"smooth"})}P.addEventListener("click",(function(e){return U.apply(this,arguments)})),D.addEventListener("click",x),window.addEventListener("scroll",(function(){window.pageYOffset>100?D.classList.remove("is-hidden"):D.classList.add("is-hidden")}));var j,F=document.querySelector(".main-box"),H=1,V=function(){var e=(0,u.default)((function(e,t){var n,r,i,a;return(0,c.__generator)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),(n=[]).push(v(e,H)),n.push((0,l.getGenresList)()),[4,Promise.all(n)];case 1:return r=t.sent(),i=r[0],j=r[1],F.innerHTML="",i.data.results.map((function(e){F.insertAdjacentHTML("beforeend",g(e))})),i.data.total_pages<500?k(i.data.total_pages):k(500),T(H),_.addEventListener("click",(0,u.default)((function(){return(0,c.__generator)(this,(function(t){switch(t.label){case 0:return T(H-1),[4,v(e,--H)];case 1:return i=t.sent(),F.innerHTML="",i.data.results.map((function(e){F.insertAdjacentHTML("beforeend",g(e))})),x(),[2]}}))}))),y.addEventListener("click",(0,u.default)((function(){return(0,c.__generator)(this,(function(t){switch(t.label){case 0:return T(H+1),[4,v(e,++H)];case 1:return i=t.sent(),F.innerHTML="",i.data.results.map((function(e){F.insertAdjacentHTML("beforeend",g(e))})),x(),[2]}}))}))),document.querySelectorAll(".pagination__number").forEach((function(t){var n=Number(t.getAttribute("page-index"));n&&t.addEventListener("click",(0,u.default)((function(){return(0,c.__generator)(this,(function(t){switch(t.label){case 0:return T(n),[4,v(e,H=n)];case 1:return i=t.sent(),F.innerHTML="",i.data.results.map((function(e){F.insertAdjacentHTML("beforeend",g(e))})),x(),[2]}}))})))})),[3,3];case 2:return a=t.sent(),console.log("err ",a),[3,3];case 3:return[2]}}))}));return function(t,n){return e.apply(this,arguments)}}(),B=function(){return j},q=(l=i("80lIJ"),document.querySelector(".genres-menu__select")),z=document.querySelector(".genres-menu__clear"),W="https://api.themoviedb.org/3/movie/popular",G=[];z.addEventListener("click",(function(e){G.forEach((function(e){return document.getElementById(e).classList.remove("focused-genre")})),G=[],V(W="https://api.themoviedb.org/3/movie/popular")})),(0,l.getGenresList)().then((function(e){for(var t=function(t){var n=document.createElement("button");n.classList.add("genre"),n.id=e.data.genres[t].id,n.innerText=e.data.genres[t].name,n.addEventListener("click",(function(){n.classList.add("focused-genre"),0===G?G.push(e.data.genres[t].id):G.includes(e.data.genres[t].id)?G.forEach((function(r,i){r==e.data.genres[t].id&&(console.log(e.data.genres[t].id),G.splice(i,1),n.classList.remove("focused-genre"))})):G.push(e.data.genres[t].id),W=G!==[]?"https://api.themoviedb.org/3/discover/movie?&with_genres="+encodeURI(G.join(",")):"https://api.themoviedb.org/3/movie/popular",V(W)})),q.append(n)},n=0;n<e.data.genres.length;n++)t(n)}));var K=i("iU1Pc"),J=document.querySelector(".queue-btn"),X=document.querySelector(".watched-btn"),Y=(document.querySelector(".modal"),document.querySelector(".modal__id")),$=[],Q=[],Z=[];addEventListener("click",(function(e){if("movie-card__image"===e.target.className){Z=e.target.parentNode.children[1].children[2].textContent;var t=localStorage.getItem("added-to-queue",JSON.stringify($)),n=localStorage.getItem("added-to-watched",JSON.stringify(Q));t.includes(Z)?J.textContent="removed form queue":J.textContent="add to queue",n.includes(Z)?X.textContent="removed form watched":X.textContent="add to watched"}})),J.addEventListener("click",(function(t){var n=Y.textContent;if($.includes(n)){var r=$.indexOf(n);if(r>-1)return $.splice(r,1),localStorage.setItem("added-to-queue",JSON.stringify($)),J.textContent="add to queue",e(K).Notify.info("Movie removed from queue")}else $.push(n),localStorage.setItem("added-to-queue",JSON.stringify($));return J.textContent="removed form queue",e(K).Notify.success("Movie added to queue")})),X.addEventListener("click",(function(t){var n=Y.textContent;if(Q.includes(n)){var r=Q.indexOf(n);if(r>-1)return Q.splice(r,1),localStorage.setItem("added-to-watched",JSON.stringify(Q)),X.textContent="add to watched",e(K).Notify.info("Movie removed from watched")}else Q.push(n),localStorage.setItem("added-to-watched",JSON.stringify(Q));return X.textContent="removed form watched",e(K).Notify.success("Movie added to watched")})),i("5h39L");var ee=document.querySelector(".footer__authors"),te=document.querySelector(".students-modal__close-btn"),ne=document.querySelector(".data-modal");function re(){ne.classList.toggle("is-hidden")}ee.addEventListener("click",re),te.addEventListener("click",re);K=i("iU1Pc"),u=i("7pbsT");var ie=i("8IFEP"),ae=i("lwwVW");function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var se=i("gNe9t"),ue=(c=i("4tSb9"),u=i("7pbsT"),ie=i("8IFEP"),ae=i("lwwVW"),i("1QZ0q"));se=i("gNe9t"),c=i("4tSb9");
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
function ce(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}ie=i("8IFEP"),ae=i("lwwVW");function le(e,t){return le=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},le(e,t)}function de(e,t){return le(e,t)}function fe(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&de(e,t)}ue=i("1QZ0q"),se=i("gNe9t");function he(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function ve(e,t,n){return ve=he()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&de(i,n.prototype),i},ve.apply(null,arguments)}function pe(e,t,n){return ve.apply(null,arguments)}function ge(e){return ge=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ge(e)}function me(e){return ge(e)}function ye(e){var t="function"==typeof Map?new Map:void 0;return ye=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return pe(e,arguments,me(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),de(r,e)},ye(e)}function _e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var be=i("fv5it");function ke(e,t){return!t||"object"!==(0,be.default)(t)&&"function"!=typeof t?ce(e):t}function Ie(e){var t=_e();return function(){var n,r=me(e);if(t){var i=me(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return ke(this,n)}}var we,Te,Ee,Se=we={};function Oe(){throw new Error("setTimeout has not been defined")}function Re(){throw new Error("clearTimeout has not been defined")}function Ae(e){if(Te===setTimeout)return setTimeout(e,0);if((Te===Oe||!Te)&&setTimeout)return Te=setTimeout,setTimeout(e,0);try{return Te(e,0)}catch(t){try{return Te.call(null,e,0)}catch(t){return Te.call(this,e,0)}}}!function(){try{Te="function"==typeof setTimeout?setTimeout:Oe}catch(e){Te=Oe}try{Ee="function"==typeof clearTimeout?clearTimeout:Re}catch(e){Ee=Re}}();var Ce,Ne=[],Le=!1,Pe=-1;function De(){Le&&Ce&&(Le=!1,Ce.length?Ne=Ce.concat(Ne):Pe=-1,Ne.length&&Me())}function Me(){if(!Le){var e=Ae(De);Le=!0;for(var t=Ne.length;t;){for(Ce=Ne,Ne=[];++Pe<t;)Ce&&Ce[Pe].run();Pe=-1,t=Ne.length}Ce=null,Le=!1,function(e){if(Ee===clearTimeout)return clearTimeout(e);if((Ee===Re||!Ee)&&clearTimeout)return Ee=clearTimeout,clearTimeout(e);try{Ee(e)}catch(t){try{return Ee.call(null,e)}catch(t){return Ee.call(this,e)}}}(e)}}function Ue(e,t){this.fun=e,this.array=t}function xe(){}Se.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Ne.push(new Ue(e,t)),1!==Ne.length||Le||Ae(Me)},Ue.prototype.run=function(){this.fun.apply(null,this.array)},Se.title="browser",Se.browser=!0,Se.env={},Se.argv=[],Se.version="",Se.versions={},Se.on=xe,Se.addListener=xe,Se.once=xe,Se.off=xe,Se.removeListener=xe,Se.removeAllListeners=xe,Se.emit=xe,Se.prependListener=xe,Se.prependOnceListener=xe,Se.listeners=function(e){return[]},Se.binding=function(e){throw new Error("process.binding is not supported")},Se.cwd=function(){return"/"},Se.chdir=function(e){throw new Error("process.chdir is not supported")},Se.umask=function(){return 0};var je=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Fe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,d=(3&a)<<4|s>>4,f=(15&s)<<2|c>>6,h=63&c;u||(h=64,o||(f=64)),r.push(n[l],n[d],n[f],n[h])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(je(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var d=s<<6&192|u;r.push(d)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},He=function(e){return function(e){var t=je(e);return Fe.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Ve=function(e){try{return Fe.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function Be(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function qe(){try{return"object"==typeof indexedDB}catch(e){return!1}}
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
var ze=function(){return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},We=function(){try{return ze()||function(){if(void 0!==we&&void 0!==we.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&Ve(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},Ge=function(e){var t,n;return null===(n=null===(t=We())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Ke=function(){var e;return null===(e=We())||void 0===e?void 0:e.config},Je=function(e){var t;return null===(t=We())||void 0===t?void 0:t["_".concat(e)]},Xe=function(){"use strict";function e(){var t=this;(0,ie.default)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return(0,ae.default)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
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
var Ye=function(e){"use strict";fe(n,e);var t=Ie(n);function n(e,r,i){var a;return(0,ie.default)(this,n),(a=t.call(this,r)).code=e,a.customData=i,a.name="FirebaseError",Object.setPrototypeOf(ce(a),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(ce(a),$e.prototype.create),a}return n}(ye(Error)),$e=function(){"use strict";function e(t,n,r){(0,ie.default)(this,e),this.service=t,this.serviceName=n,this.errors=r}return(0,ae.default)(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?Qe(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new Ye(a,u,i);return c}}]),e}();function Qe(e,t){return e.replace(Ze,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var Ze=/\{\$([^}]+)}/g;
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
 */function et(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function tt(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],d=t[c];if(nt(l)&&nt(d)){if(!tt(l,d))return!1}else if(l!==d)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var f=!0,h=!1,v=void 0;try{for(var p,g=r[Symbol.iterator]();!(f=(p=g.next()).done);f=!0){var m=p.value;if(!n.includes(m))return!1}}catch(e){h=!0,v=e}finally{try{f||null==g.return||g.return()}finally{if(h)throw v}}return!0}function nt(e){return null!==e&&"object"==typeof e}
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
function rt(e){var t=[],n=!0,r=!1,i=void 0;try{for(var a,o=function(){var e=(0,ue.default)(a.value,2),n=e[0],r=e[1];Array.isArray(r)?r.forEach((function(e){t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))},s=Object.entries(e)[Symbol.iterator]();!(n=(a=s.next()).done);n=!0)o()}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return t.length?"&"+t.join("&"):""}function it(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=(0,ue.default)(e.split("="),2),r=n[0],i=n[1];t[decodeURIComponent(r)]=decodeURIComponent(i)}})),t}function at(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */var ot=function(){"use strict";function e(t,n){var r=this;(0,ie.default)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){t(r)})).catch((function(e){r.error(e)}))}return(0,ae.default)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=st),void 0===r.error&&(r.error=st),void 0===r.complete&&(r.complete=st);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function st(){}
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
function ut(e){return e&&e._delegate?e._delegate:e}var ct=function(){"use strict";function e(t,n,r){(0,ie.default)(this,e),this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return(0,ae.default)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),lt="[DEFAULT]",dt=function(){"use strict";function e(t,n){(0,ie.default)(this,e),this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return(0,ae.default)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new Xe;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:lt})}catch(e){}var t=!0,n=!1,r=void 0;try{for(var i,a=this.instancesDeferred.entries()[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=(0,ue.default)(i.value,2),s=o[0],u=o[1],c=this.normalizeInstanceIdentifier(s);try{var l=this.getOrInitializeService({instanceIdentifier:c});u.resolve(l)}catch(e){}}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return(0,u.default)((function(){var t;return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return t=Array.from(e.instances.values()),[4,Promise.all((0,se.default)(t.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat((0,se.default)(t.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return n.sent(),[2]}}))}))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,n=void 0===t?{}:t,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error("".concat(this.name,"(").concat(r,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var i=this.getOrInitializeService({instanceIdentifier:r,options:n}),a=!0,o=!1,s=void 0;try{for(var u,c=this.instancesDeferred.entries()[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=(0,ue.default)(u.value,2),d=l[0],f=l[1],h=this.normalizeInstanceIdentifier(d);r===h&&f.resolve(i)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return i}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===lt?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt;return this.component?this.component.multipleInstances?e:lt:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();
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
 */var ft,ht,vt=function(){"use strict";function e(t){(0,ie.default)(this,e),this.name=t,this.providers=new Map}return(0,ae.default)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new dt(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}(),pt=(ie=i("8IFEP"),ae=i("lwwVW"),se=i("gNe9t"),[]);
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
 */(ht=ft||(ft={}))[ht.DEBUG=0]="DEBUG",ht[ht.VERBOSE=1]="VERBOSE",ht[ht.INFO=2]="INFO",ht[ht.WARN=3]="WARN",ht[ht.ERROR=4]="ERROR",ht[ht.SILENT=5]="SILENT";var gt,mt={debug:ft.DEBUG,verbose:ft.VERBOSE,info:ft.INFO,warn:ft.WARN,error:ft.ERROR,silent:ft.SILENT},yt=ft.INFO,_t=(oe(gt={},ft.DEBUG,"log"),oe(gt,ft.VERBOSE,"log"),oe(gt,ft.INFO,"info"),oe(gt,ft.WARN,"warn"),oe(gt,ft.ERROR,"error"),gt),bt=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a;if(!(t<e.logLevel)){var o=(new Date).toISOString(),s=_t[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"));(a=console)[s].apply(a,["[".concat(o,"]  ").concat(e.name,":")].concat((0,se.default)(r)))}},kt=function(){"use strict";function e(t){(0,ie.default)(this,e),this.name=t,this._logLevel=yt,this._logHandler=bt,this._userLogHandler=null,pt.push(this)}return(0,ae.default)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in ft))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?mt[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ft.DEBUG].concat((0,se.default)(t))),this._logHandler.apply(this,[this,ft.DEBUG].concat((0,se.default)(t)))}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ft.VERBOSE].concat((0,se.default)(t))),this._logHandler.apply(this,[this,ft.VERBOSE].concat((0,se.default)(t)))}},{key:"info",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ft.INFO].concat((0,se.default)(t))),this._logHandler.apply(this,[this,ft.INFO].concat((0,se.default)(t)))}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ft.WARN].concat((0,se.default)(t))),this._logHandler.apply(this,[this,ft.WARN].concat((0,se.default)(t)))}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ft.ERROR].concat((0,se.default)(t))),this._logHandler.apply(this,[this,ft.ERROR].concat((0,se.default)(t)))}}]),e}();u=i("7pbsT");function It(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}var wt,Tt;se=i("gNe9t"),c=i("4tSb9"),se=i("gNe9t");var Et=new WeakMap,St=new WeakMap,Ot=new WeakMap,Rt=new WeakMap,At=new WeakMap;var Ct={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return St.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ot.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Nt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Tt||(Tt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(Dt(this),n),Pt(Et.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Pt(e.apply(Dt(this),n))}:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a,o=(a=e).call.apply(a,[Dt(this),t].concat((0,se.default)(r)));return Ot.set(o,t.sort?t.sort():[t]),Pt(o)}}function Lt(e){return"function"==typeof e?Nt(e):(e instanceof IDBTransaction&&function(e){if(!St.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));St.set(e,t)}}(e),t=e,(wt||(wt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Ct):e);var t}function Pt(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(Pt(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&Et.set(e,t)})).catch((function(){})),At.set(n,t),n;var t,n;if(Rt.has(e))return Rt.get(e);var r=Lt(e);return r!==e&&(Rt.set(e,r),At.set(r,e)),r}var Dt=function(e){return At.get(e)};function Mt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=Pt(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(Pt(s.result),e.oldVersion,e.newVersion,Pt(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var Ut,xt=["get","getKey","getAll","getAllKeys","count"],jt=["put","add","delete","clear"],Ft=new Map;function Ht(e,t){if(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t){if(Ft.get(t))return Ft.get(t);var n=t.replace(/FromIndex$/,""),r=t!==n,i=jt.includes(n);if(n in(r?IDBIndex:IDBObjectStore).prototype&&(i||xt.includes(n))){var a=function(){var e=(0,u.default)((function(e){var t,a,o,s,u,l,d=arguments;return(0,c.__generator)(this,(function(c){switch(c.label){case 0:for(t=d.length,a=new Array(t>1?t-1:0),o=1;o<t;o++)a[o-1]=d[o];return u=this.transaction(e,i?"readwrite":"readonly"),l=u.store,r&&(l=l.index(a.shift())),[4,Promise.all([(s=l)[n].apply(s,(0,se.default)(a)),i&&u.done])];case 1:return[2,c.sent()[0]]}}))}));return function(t){return e.apply(this,arguments)}}();return Ft.set(t,a),a}}}Ut=function(e){return It(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){oe(e,t,n[t])}))}return e}({},e),{get:function(t,n,r){return Ht(t,n)||e.get(t,n,r)},has:function(t,n){return!!Ht(t,n)||e.has(t,n)}})},Ct=Ut(Ct);
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
var Vt=function(){"use strict";function e(t){(0,ie.default)(this,e),this.container=t}return(0,ae.default)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}();var Bt,qt,zt="@firebase/app",Wt="0.9.0",Gt=new kt("@firebase/app"),Kt="[DEFAULT]",Jt=(oe(Bt={},zt,"fire-core"),oe(Bt,"@firebase/app-compat","fire-core-compat"),oe(Bt,"@firebase/analytics","fire-analytics"),oe(Bt,"@firebase/analytics-compat","fire-analytics-compat"),oe(Bt,"@firebase/app-check","fire-app-check"),oe(Bt,"@firebase/app-check-compat","fire-app-check-compat"),oe(Bt,"@firebase/auth","fire-auth"),oe(Bt,"@firebase/auth-compat","fire-auth-compat"),oe(Bt,"@firebase/database","fire-rtdb"),oe(Bt,"@firebase/database-compat","fire-rtdb-compat"),oe(Bt,"@firebase/functions","fire-fn"),oe(Bt,"@firebase/functions-compat","fire-fn-compat"),oe(Bt,"@firebase/installations","fire-iid"),oe(Bt,"@firebase/installations-compat","fire-iid-compat"),oe(Bt,"@firebase/messaging","fire-fcm"),oe(Bt,"@firebase/messaging-compat","fire-fcm-compat"),oe(Bt,"@firebase/performance","fire-perf"),oe(Bt,"@firebase/performance-compat","fire-perf-compat"),oe(Bt,"@firebase/remote-config","fire-rc"),oe(Bt,"@firebase/remote-config-compat","fire-rc-compat"),oe(Bt,"@firebase/storage","fire-gcs"),oe(Bt,"@firebase/storage-compat","fire-gcs-compat"),oe(Bt,"@firebase/firestore","fire-fst"),oe(Bt,"@firebase/firestore-compat","fire-fst-compat"),oe(Bt,"fire-js","fire-js"),oe(Bt,"firebase","fire-js-all"),Bt),Xt=new Map,Yt=new Map;function $t(e,t){try{e.container.addComponent(t)}catch(n){Gt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function Qt(e){var t=e.name;if(Yt.has(t))return Gt.debug("There were multiple attempts to register component ".concat(t,".")),!1;Yt.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=Xt.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){$t(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function Zt(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
var en=(oe(qt={},"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),oe(qt,"bad-app-name","Illegal App name: '{$appName}"),oe(qt,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),oe(qt,"app-deleted","Firebase App named '{$appName}' already deleted"),oe(qt,"no-options","Need to provide options, when not being deployed to hosting via source."),oe(qt,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),oe(qt,"invalid-log-argument","First argument to `onLog` must be null or a function."),oe(qt,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),oe(qt,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),oe(qt,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),oe(qt,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),qt),tn=new $e("app","Firebase",en),nn=function(){"use strict";function e(t,n,r){var i=this;(0,ie.default)(this,e),this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ct("app",(function(){return i}),"PUBLIC"))}return(0,ae.default)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw tn.create("app-deleted",{appName:this._name})}}]),e}(),rn="9.15.0";function an(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:Kt,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw tn.create("bad-app-name",{appName:String(a)});if(n||(n=Ke()),!n)throw tn.create("no-options");var o=Xt.get(a);if(o){if(tt(n,o.options)&&tt(i,o.config))return o;throw tn.create("duplicate-app",{appName:a})}var s=new vt(a),u=!0,c=!1,l=void 0;try{for(var d,f=Yt.values()[Symbol.iterator]();!(u=(d=f.next()).done);u=!0){var h=d.value;s.addComponent(h)}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}var v=new nn(n,i,s);return Xt.set(a,v),v}function on(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Kt,t=Xt.get(e);if(!t&&e===Kt)return an();if(!t)throw tn.create("no-app",{appName:e});return t}function sn(e,t,n){var r,i=null!==(r=Jt[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void Gt.warn(s.join(" "))}Qt(new ct("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
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
var un="firebase-heartbeat-store",cn=null;function ln(){return cn||(cn=Mt("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(un)}}).catch((function(e){throw tn.create("idb-open",{originalErrorMessage:e.message})}))),cn}function dn(e){return fn.apply(this,arguments)}function fn(){return(fn=(0,u.default)((function(e){var t,n;return(0,c.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,ln()];case 1:return[2,r.sent().transaction(un).objectStore(un).get(pn(e))];case 2:return(t=r.sent())instanceof Ye?Gt.warn(t.message):(n=tn.create("idb-get",{originalErrorMessage:null==t?void 0:t.message}),Gt.warn(n.message)),[3,3];case 3:return[2]}}))}))).apply(this,arguments)}function hn(e,t){return vn.apply(this,arguments)}function vn(){return(vn=(0,u.default)((function(e,t){var n,r,i,a;return(0,c.__generator)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),[4,ln()];case 1:return n=o.sent(),r=n.transaction(un,"readwrite"),[4,r.objectStore(un).put(t,pn(e))];case 2:return o.sent(),[2,r.done];case 3:return(i=o.sent())instanceof Ye?Gt.warn(i.message):(a=tn.create("idb-set",{originalErrorMessage:null==i?void 0:i.message}),Gt.warn(a.message)),[3,4];case 4:return[2]}}))}))).apply(this,arguments)}function pn(e){return"".concat(e.name,"!").concat(e.options.appId)}
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
 */var gn=1024,mn=function(){"use strict";function e(t){var n=this;(0,ie.default)(this,e),this.container=t,this._heartbeatsCache=null;var r=this.container.getProvider("app").getImmediate();this._storage=new bn(r),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return(0,ae.default)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return(0,u.default)((function(){var t,n,r;return(0,c.__generator)(this,(function(i){switch(i.label){case 0:return t=e.container.getProvider("platform-logger").getImmediate(),n=t.getPlatformInfoString(),r=yn(),null!==e._heartbeatsCache?[3,2]:[4,e._heartbeatsCachePromise];case 1:e._heartbeatsCache=i.sent(),i.label=2;case 2:return e._heartbeatsCache.lastSentHeartbeatDate===r||e._heartbeatsCache.heartbeats.some((function(e){return e.date===r}))?[2]:(e._heartbeatsCache.heartbeats.push({date:r,agent:n}),e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),[2,e._storage.overwrite(e._heartbeatsCache)])}}))}))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return(0,u.default)((function(){var t,n,r,i,a;return(0,c.__generator)(this,(function(o){switch(o.label){case 0:return null!==e._heartbeatsCache?[3,2]:[4,e._heartbeatsCachePromise];case 1:o.sent(),o.label=2;case 2:return null===e._heartbeatsCache||0===e._heartbeatsCache.heartbeats.length?[2,""]:(t=yn(),n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:gn,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(){var e=s.value,i=n.find((function(t){return t.agent===e.agent}));if(i){if(i.dates.push(e.date),kn(n)>t)return i.dates.pop(),"break"}else if(n.push({agent:e.agent,dates:[e.date]}),kn(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){if("break"===u())break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}(e._heartbeatsCache.heartbeats),r=n.heartbeatsToSend,i=n.unsentEntries,a=He(JSON.stringify({version:2,heartbeats:r})),e._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(e._heartbeatsCache.heartbeats=i,[4,e._storage.overwrite(e._heartbeatsCache)]):[3,4]);case 3:return o.sent(),[3,5];case 4:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache),o.label=5;case 5:return[2,a]}}))}))()}}]),e}();function yn(){return(new Date).toISOString().substring(0,10)}var _n,bn=function(){"use strict";function e(t){(0,ie.default)(this,e),this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return(0,ae.default)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return(0,u.default)((function(){return(0,c.__generator)(this,(function(e){return qe()?[2,new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1}))]:[2,!1]}))}))()}},{key:"read",value:function(){var e=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(t){switch(t.label){case 0:return[4,e._canUseIndexedDBPromise];case 1:return t.sent()?[3,2]:[2,{heartbeats:[]}];case 2:return[4,dn(e.app)];case 3:return[2,t.sent()||{heartbeats:[]}];case 4:return[2]}}))}))()}},{key:"overwrite",value:function(e){var t=this;return(0,u.default)((function(){var n,r;return(0,c.__generator)(this,(function(i){switch(i.label){case 0:return[4,t._canUseIndexedDBPromise];case 1:return i.sent()?[3,2]:[2];case 2:return[4,t.read()];case 3:return r=i.sent(),[2,hn(t.app,{lastSentHeartbeatDate:null!==(n=e.lastSentHeartbeatDate)&&void 0!==n?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})];case 4:return[2]}}))}))()}},{key:"add",value:function(e){var t=this;return(0,u.default)((function(){var n,r;return(0,c.__generator)(this,(function(i){switch(i.label){case 0:return[4,t._canUseIndexedDBPromise];case 1:return i.sent()?[3,2]:[2];case 2:return[4,t.read()];case 3:return r=i.sent(),[2,hn(t.app,{lastSentHeartbeatDate:null!==(n=e.lastSentHeartbeatDate)&&void 0!==n?n:r.lastSentHeartbeatDate,heartbeats:(0,se.default)(r.heartbeats).concat((0,se.default)(e.heartbeats))})];case 4:return[2]}}))}))()}}]),e}();function kn(e){return He(JSON.stringify({version:2,heartbeats:e})).length}
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
 */_n="",Qt(new ct("platform-logger",(function(e){return new Vt(e)}),"PRIVATE")),Qt(new ct("heartbeat",(function(e){return new mn(e)}),"PRIVATE")),sn(zt,Wt,_n),sn(zt,Wt,"esm2017"),sn("fire-js","");
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
sn("firebase","9.15.0","app");u=i("7pbsT"),ie=i("8IFEP"),ae=i("lwwVW");function In(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=me(e)););return e}function wn(e,t,n){return wn="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=In(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}},wn(e,t,n)}function Tn(e,t,n){return wn(e,t,n)}ue=i("1QZ0q"),se=i("gNe9t"),c=i("4tSb9"),c=i("4tSb9");function En(){return oe({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var Sn=En,On=new $e("auth","Firebase",En()),Rn=new kt("@firebase/auth");function An(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i;Rn.logLevel<=ft.ERROR&&(i=Rn).error.apply(i,["Auth (".concat(rn,"): ").concat(e)].concat((0,se.default)(n)))}
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
 */function Cn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Dn.apply(void 0,[e].concat((0,se.default)(n)))}function Nn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Dn.apply(void 0,[e].concat((0,se.default)(n)))}function Ln(e,t,n){var r=Object.assign(Object.assign({},Sn()),oe({},t,n));return new $e("auth","Firebase",r).create(t,{appName:e.name})}function Pn(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Cn(e,"argument-error"),Ln(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function Dn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i;if("string"!=typeof e){var a,o=n[0],s=(0,se.default)(n.slice(1));return s[0]&&(s[0].appName=e.name),(a=e._errorFactory).create.apply(a,[o].concat((0,se.default)(s)))}return(i=On).create.apply(i,[e].concat((0,se.default)(n)))}function Mn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(!e)throw Dn.apply(void 0,[t].concat((0,se.default)(r)))}function Un(e){var t="INTERNAL ASSERTION FAILED: "+e;throw An(t),new Error(t)}function xn(e,t){e||Un(t)}
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
 */var jn=new Map;function Fn(e){xn(e instanceof Function,"Expected a class definition");var t=jn.get(e);return t?(xn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,jn.set(e,t),t)}
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
 */function Hn(e,t){var n=Zt(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(tt(n.getOptions(),null!=t?t:{}))return r;Cn(r,"already-initialized")}return n.initialize({options:t})}
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
function Vn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Bn(){return"http:"===qn()||"https:"===qn()}function qn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function zn(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!Bn()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
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
var Wn=function(){"use strict";function e(t,n){(0,ie.default)(this,e),this.shortDelay=t,this.longDelay=n,xn(n>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())||"object"==typeof navigator&&"ReactNative"===navigator.product}return(0,ae.default)(e,[{key:"get",value:function(){return zn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),e}();
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
 */function Gn(e,t){xn(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
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
 */var Kn,Jn=function(){"use strict";function e(){(0,ie.default)(this,e)}return(0,ae.default)(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),Xn=(oe(Kn={},"CREDENTIAL_MISMATCH","custom-token-mismatch"),oe(Kn,"MISSING_CUSTOM_TOKEN","internal-error"),oe(Kn,"INVALID_IDENTIFIER","invalid-email"),oe(Kn,"MISSING_CONTINUE_URI","internal-error"),oe(Kn,"INVALID_PASSWORD","wrong-password"),oe(Kn,"MISSING_PASSWORD","internal-error"),oe(Kn,"EMAIL_EXISTS","email-already-in-use"),oe(Kn,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),oe(Kn,"INVALID_IDP_RESPONSE","invalid-credential"),oe(Kn,"INVALID_PENDING_TOKEN","invalid-credential"),oe(Kn,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),oe(Kn,"MISSING_REQ_TYPE","internal-error"),oe(Kn,"EMAIL_NOT_FOUND","user-not-found"),oe(Kn,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),oe(Kn,"EXPIRED_OOB_CODE","expired-action-code"),oe(Kn,"INVALID_OOB_CODE","invalid-action-code"),oe(Kn,"MISSING_OOB_CODE","internal-error"),oe(Kn,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),oe(Kn,"INVALID_ID_TOKEN","invalid-user-token"),oe(Kn,"TOKEN_EXPIRED","user-token-expired"),oe(Kn,"USER_NOT_FOUND","user-token-expired"),oe(Kn,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),oe(Kn,"INVALID_CODE","invalid-verification-code"),oe(Kn,"INVALID_SESSION_INFO","invalid-verification-id"),oe(Kn,"INVALID_TEMPORARY_PROOF","invalid-credential"),oe(Kn,"MISSING_SESSION_INFO","missing-verification-id"),oe(Kn,"SESSION_EXPIRED","code-expired"),oe(Kn,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),oe(Kn,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),oe(Kn,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),oe(Kn,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),oe(Kn,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),oe(Kn,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),oe(Kn,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),oe(Kn,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),oe(Kn,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),oe(Kn,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),oe(Kn,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),Kn),Yn=new Wn(3e4,6e4);function $n(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Qn(e,t,n,r){return Zn.apply(this,arguments)}function Zn(){return Zn=(0,u.default)((function(e,t,n,r){var i,a=arguments;return(0,c.__generator)(this,(function(o){return i=a.length>4&&void 0!==a[4]?a[4]:{},[2,er(e,i,(0,u.default)((function(){var i,a,o,s;return(0,c.__generator)(this,(function(u){switch(u.label){case 0:return i={},a={},r&&("GET"===t?a=r:i={body:JSON.stringify(r)}),o=rt(Object.assign({key:e.config.apiKey},a)).slice(1),[4,e._getAdditionalHeaders()];case 1:return(s=u.sent())["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode),[2,Jn.fetch()(ir(e,e.config.apiHost,n,o),Object.assign({method:t,headers:s,referrerPolicy:"no-referrer"},i))]}}))})))]}))})),Zn.apply(this,arguments)}function er(e,t,n){return tr.apply(this,arguments)}function tr(){return(tr=(0,u.default)((function(e,t,n){var r,i,a,o,s,u,l,d,f,h;return(0,c.__generator)(this,(function(c){switch(c.label){case 0:e._canInitEmulator=!1,r=Object.assign(Object.assign({},Xn),t),c.label=1;case 1:return c.trys.push([1,4,,5]),i=new ar(e),[4,Promise.race([n(),i.promise])];case 2:return a=c.sent(),i.clearNetworkTimeout(),[4,a.json()];case 3:if("needConfirmation"in(o=c.sent()))throw or(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return[2,o];if(s=a.ok?o.errorMessage:o.error.message,u=(0,ue.default)(s.split(" : "),2),l=u[0],d=u[1],"FEDERATED_USER_ID_ALREADY_LINKED"===l)throw or(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===l)throw or(e,"email-already-in-use",o);if("USER_DISABLED"===l)throw or(e,"user-disabled",o);if(f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-"),d)throw Ln(e,f,d);return Cn(e,f),[3,5];case 4:if((h=c.sent())instanceof Ye)throw h;return Cn(e,"network-request-failed"),[3,5];case 5:return[2]}}))}))).apply(this,arguments)}function nr(e,t,n,r){return rr.apply(this,arguments)}function rr(){return rr=(0,u.default)((function(e,t,n,r){var i,a,o=arguments;return(0,c.__generator)(this,(function(s){switch(s.label){case 0:return i=o.length>4&&void 0!==o[4]?o[4]:{},[4,Qn(e,t,n,r,i)];case 1:return"mfaPendingCredential"in(a=s.sent())&&Cn(e,"multi-factor-auth-required",{_serverResponse:a}),[2,a]}}))})),rr.apply(this,arguments)}function ir(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?Gn(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var ar=function(){"use strict";function e(t){var n=this;(0,ie.default)(this,e),this.auth=t,this.timer=null,this.promise=new Promise((function(e,t){n.timer=setTimeout((function(){return t(Nn(n.auth,"network-request-failed"))}),Yn.get())}))}return(0,ae.default)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function or(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=Nn(e,t,r);return i.customData._tokenResponse=n,i}function sr(e,t){return ur.apply(this,arguments)}function ur(){return(ur=
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
(0,u.default)((function(e,t){return(0,c.__generator)(this,(function(n){return[2,Qn(e,"POST","/v1/accounts:delete",t)]}))}))).apply(this,arguments)}function cr(e,t){return lr.apply(this,arguments)}function lr(){return(lr=(0,u.default)((function(e,t){return(0,c.__generator)(this,(function(n){return[2,Qn(e,"POST","/v1/accounts:lookup",t)]}))}))).apply(this,arguments)}
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
 */function dr(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function fr(){return fr=(0,u.default)((function(e){var t,n,r,i,a,o,s=arguments;return(0,c.__generator)(this,(function(u){switch(u.label){case 0:return t=s.length>1&&void 0!==s[1]&&s[1],[4,(n=ut(e)).getIdToken(t)];case 1:return r=u.sent(),Mn((i=vr(r))&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error"),a="object"==typeof i.firebase?i.firebase:void 0,o=null==a?void 0:a.sign_in_provider,[2,{claims:i,token:r,authTime:dr(hr(i.auth_time)),issuedAtTime:dr(hr(i.iat)),expirationTime:dr(hr(i.exp)),signInProvider:o||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}]}}))})),fr.apply(this,arguments)}function hr(e){return 1e3*Number(e)}function vr(e){var t=(0,ue.default)(e.split("."),3),n=t[0],r=t[1],i=t[2];if(void 0===n||void 0===r||void 0===i)return An("JWT malformed, contained fewer than 3 sections"),null;try{var a=Ve(r);return a?JSON.parse(a):(An("Failed to decode base64 JWT payload"),null)}catch(e){return An("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function pr(e,t){return gr.apply(this,arguments)}function gr(){return gr=
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
(0,u.default)((function(e,t){var n,r=arguments;return(0,c.__generator)(this,(function(i){switch(i.label){case 0:if(r.length>2&&void 0!==r[2]&&r[2])return[2,t];i.label=1;case 1:return i.trys.push([1,3,,6]),[4,t];case 2:return[2,i.sent()];case 3:return(n=i.sent())instanceof Ye&&mr(n)?e.auth.currentUser!==e?[3,5]:[4,e.auth.signOut()]:[3,5];case 4:i.sent(),i.label=5;case 5:throw n;case 6:return[2]}}))})),gr.apply(this,arguments)}function mr(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */var yr=function(){"use strict";function e(t){(0,ie.default)(this,e),this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return(0,ae.default)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var t=this.getInterval(e),n=this;this.timerId=setTimeout((0,u.default)((function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return[4,n.iteration()];case 1:return e.sent(),[2]}}))})),t)}}},{key:"iteration",value:function(){var e=this;return(0,u.default)((function(){var t;return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,e.user.getIdToken(!0)];case 1:return n.sent(),[3,3];case 2:return"auth/network-request-failed"===(null==(t=n.sent())?void 0:t.code)&&e.schedule(!0),[2];case 3:return e.schedule(),[2]}}))}))()}}]),e}(),_r=function(){"use strict";function e(t,n){(0,ie.default)(this,e),this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}return(0,ae.default)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=dr(this.lastLoginAt),this.creationTime=dr(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
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
 */function br(e){return kr.apply(this,arguments)}function kr(){return(kr=
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
(0,u.default)((function(e){var t,n,r,i,a,o,s,u,l,d,f;return(0,c.__generator)(this,(function(c){switch(c.label){case 0:return n=e.auth,[4,e.getIdToken()];case 1:return r=c.sent(),[4,pr(e,cr(n,{idToken:r}))];case 2:return Mn(null==(i=c.sent())?void 0:i.users.length,n,"internal-error"),a=i.users[0],e._notifyReloadListener(a),o=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?Tr(a.providerUserInfo):[],s=wr(e.providerData,o),u=e.isAnonymous,l=!(e.email&&a.passwordHash||(null==s?void 0:s.length)),d=!!u&&l,f={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new _r(a.createdAt,a.lastLoginAt),isAnonymous:d},Object.assign(e,f),[2]}}))}))).apply(this,arguments)}function Ir(){return(Ir=(0,u.default)((function(e){var t;return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return[4,br(t=ut(e))];case 1:return n.sent(),[4,t.auth._persistUserIfCurrent(t)];case 2:return n.sent(),t.auth._notifyListenersIfCurrent(t),[2]}}))}))).apply(this,arguments)}function wr(e,t){var n=e.filter((function(e){return!t.some((function(t){return t.providerId===e.providerId}))}));return(0,se.default)(n).concat((0,se.default)(t))}function Tr(e){return e.map((function(e){var t=e.providerId,n=(0,c.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function Er(e,t){return Sr.apply(this,arguments)}function Sr(){return(Sr=
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
(0,u.default)((function(e,t){var n;return(0,c.__generator)(this,(function(r){switch(r.label){case 0:return[4,er(e,{},(0,u.default)((function(){var n,r,i,a,o,s;return(0,c.__generator)(this,(function(u){switch(u.label){case 0:return n=rt({grant_type:"refresh_token",refresh_token:t}).slice(1),r=e.config,i=r.tokenApiHost,a=r.apiKey,o=ir(e,i,"/v1/token","key=".concat(a)),[4,e._getAdditionalHeaders()];case 1:return(s=u.sent())["Content-Type"]="application/x-www-form-urlencoded",[2,Jn.fetch()(o,{method:"POST",headers:s,body:n})]}}))})))];case 1:return[2,{accessToken:(n=r.sent()).access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}]}}))}))).apply(this,arguments)}
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
 */var Or=function(){"use strict";function e(){(0,ie.default)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return(0,ae.default)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){Mn(e.idToken,"internal-error"),Mn(void 0!==e.idToken,"internal-error"),Mn(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,Mn(n=vr(t),"internal-error"),Mn(void 0!==n.exp,"internal-error"),Mn(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(r){switch(r.label){case 0:return Mn(!n.accessToken||n.refreshToken,e,"user-token-expired"),t||!n.accessToken||n.isExpired?n.refreshToken?[4,n.refresh(e,n.refreshToken)]:[3,2]:[2,n.accessToken];case 1:return r.sent(),[2,n.accessToken];case 2:return[2,null]}}))}))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,t){var n=this;return(0,u.default)((function(){var r,i,a,o;return(0,c.__generator)(this,(function(s){switch(s.label){case 0:return[4,Er(e,t)];case 1:return r=s.sent(),i=r.accessToken,a=r.refreshToken,o=r.expiresIn,n.updateTokensAndExpiration(i,a,Number(o)),[2]}}))}))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return Un("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new e;return r&&(Mn("string"==typeof r,"internal-error",{appName:t}),o.refreshToken=r),i&&(Mn("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),a&&(Mn("number"==typeof a,"internal-error",{appName:t}),o.expirationTime=a),o}}]),e}();
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
 */function Rr(e,t){Mn("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Ar=function(){"use strict";function e(t){(0,ie.default)(this,e);var n=t.uid,r=t.auth,i=t.stsTokenManager,a=(0,c.__rest)(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?(0,se.default)(a.providerData):[],this.metadata=new _r(a.createdAt||void 0,a.lastLoginAt||void 0)}return(0,ae.default)(e,[{key:"getIdToken",value:function(e){var t=this;return(0,u.default)((function(){var n;return(0,c.__generator)(this,(function(r){switch(r.label){case 0:return[4,pr(t,t.stsTokenManager.getToken(t.auth,e))];case 1:return Mn(n=r.sent(),t.auth,"internal-error"),t.accessToken===n?[3,3]:(t.accessToken=n,[4,t.auth._persistUserIfCurrent(t)]);case 2:r.sent(),t.auth._notifyListenersIfCurrent(t),r.label=3;case 3:return[2,n]}}))}))()}},{key:"getIdTokenResult",value:function(e){return function(e){return fr.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Ir.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(Mn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){Mn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return(0,u.default)((function(){var r;return(0,c.__generator)(this,(function(i){switch(i.label){case 0:return r=!1,e.idToken&&e.idToken!==n.stsTokenManager.accessToken&&(n.stsTokenManager.updateFromServerResponse(e),r=!0),t?[4,br(n)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[4,n.auth._persistUserIfCurrent(n)];case 3:return i.sent(),r&&n.auth._notifyListenersIfCurrent(n),[2]}}))}))()}},{key:"delete",value:function(){var e=this;return(0,u.default)((function(){var t;return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return[4,e.getIdToken()];case 1:return t=n.sent(),[4,pr(e,sr(e.auth,{idToken:t}))];case 2:return n.sent(),e.stsTokenManager.clearRefreshToken(),[2,e.auth.signOut()]}}))}))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,a,o,s,u,c,l,d=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,h=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,v=null!==(o=n.photoURL)&&void 0!==o?o:void 0,p=null!==(s=n.tenantId)&&void 0!==s?s:void 0,g=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,m=null!==(c=n.createdAt)&&void 0!==c?c:void 0,y=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,_=n.uid,b=n.emailVerified,k=n.isAnonymous,I=n.providerData,w=n.stsTokenManager;Mn(_&&w,t,"internal-error");var T=Or.fromJSON(this.name,w);Mn("string"==typeof _,t,"internal-error"),Rr(d,t.name),Rr(f,t.name),Mn("boolean"==typeof b,t,"internal-error"),Mn("boolean"==typeof k,t,"internal-error"),Rr(h,t.name),Rr(v,t.name),Rr(p,t.name),Rr(g,t.name),Rr(m,t.name),Rr(y,t.name);var E=new e({uid:_,auth:t,email:f,emailVerified:b,displayName:d,isAnonymous:k,photoURL:v,phoneNumber:h,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return I&&Array.isArray(I)&&(E.providerData=I.map((function(e){return Object.assign({},e)}))),g&&(E._redirectEventId=g),E}},{key:"_fromIdTokenResponse",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,u.default)((function(){var i,a;return(0,c.__generator)(this,(function(o){switch(o.label){case 0:return(i=new Or).updateFromServerResponse(n),[4,br(a=new e({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r}))];case 1:return o.sent(),[2,a]}}))}))()}}]),e}(),Cr=function(){"use strict";function e(){(0,ie.default)(this,e),this.type="NONE",this.storage={}}return(0,ae.default)(e,[{key:"_isAvailable",value:function(){return(0,u.default)((function(){return(0,c.__generator)(this,(function(e){return[2,!0]}))}))()}},{key:"_set",value:function(e,t){var n=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(r){return n.storage[e]=t,[2]}))}))()}},{key:"_get",value:function(e){var t=this;return(0,u.default)((function(){var n;return(0,c.__generator)(this,(function(r){return[2,void 0===(n=t.storage[e])?null:n]}))}))()}},{key:"_remove",value:function(e){var t=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(n){return delete t.storage[e],[2]}))}))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
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
 */Cr.type="NONE";var Nr=Cr;
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
 */function Lr(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Pr=function(){"use strict";function e(t,n,r){(0,ie.default)(this,e),this.persistence=t,this.auth=n,this.userKey=r;var i=this.auth,a=i.config,o=i.name;this.fullUserKey=Lr(this.userKey,a.apiKey,o),this.fullPersistenceKey=Lr("persistence",a.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return(0,ae.default)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return(0,u.default)((function(){var t;return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return[4,e.persistence._get(e.fullUserKey)];case 1:return[2,(t=n.sent())?Ar._fromJSON(e.auth,t):null]}}))}))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var t=this;return(0,u.default)((function(){var n;return(0,c.__generator)(this,(function(r){switch(r.label){case 0:return t.persistence===e?[2]:[4,t.getCurrentUser()];case 1:return n=r.sent(),[4,t.removeCurrentUser()];case 2:return r.sent(),t.persistence=e,n?[2,t.setCurrentUser(n)]:[2]}}))}))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return(0,u.default)((function(){var i,a,o,s,l,d,f,h,v,p,g,m,y,_;return(0,c.__generator)(this,(function(b){switch(b.label){case 0:return n.length?[4,Promise.all(n.map(function(){var e=(0,u.default)((function(e){return(0,c.__generator)(this,(function(t){switch(t.label){case 0:return[4,e._isAvailable()];case 1:return t.sent()?[2,e]:[2,void 0]}}))}));return function(t){return e.apply(this,arguments)}}()))]:[2,new e(Fn(Nr),t,r)];case 1:i=b.sent().filter((function(e){return e})),a=i[0]||Fn(Nr),o=Lr(r,t.config.apiKey,t.name),s=null,l=!0,d=!1,f=void 0,b.label=2;case 2:b.trys.push([2,9,10,11]),h=n[Symbol.iterator](),b.label=3;case 3:if(l=(v=h.next()).done)return[3,8];p=v.value,b.label=4;case 4:return b.trys.push([4,6,,7]),[4,p._get(o)];case 5:return(g=b.sent())?(m=Ar._fromJSON(t,g),p!==a&&(s=m),a=p,[3,8]):[3,7];case 6:return b.sent(),[3,7];case 7:return l=!0,[3,3];case 8:return[3,11];case 9:return y=b.sent(),d=!0,f=y,[3,11];case 10:try{l||null==h.return||h.return()}finally{if(d)throw f}return[7];case 11:return _=i.filter((function(e){return e._shouldAllowMigration})),a._shouldAllowMigration&&_.length?(a=_[0],s?[4,a._set(o,s.toJSON())]:[3,13]):[2,new e(a,t,r)];case 12:b.sent(),b.label=13;case 13:return[4,Promise.all(n.map(function(){var e=(0,u.default)((function(e){return(0,c.__generator)(this,(function(t){switch(t.label){case 0:if(e===a)return[3,4];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,e._remove(o)];case 2:return t.sent(),[3,4];case 3:return t.sent(),[3,4];case 4:return[2]}}))}));return function(t){return e.apply(this,arguments)}}()))];case 14:return b.sent(),[2,new e(a,t,r)]}}))}))()}}]),e}();
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
 */function Dr(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(jr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Mr(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Hr(t))return"Blackberry";if(Vr(t))return"Webos";if(Ur(t))return"Safari";if((t.includes("chrome/")||xr(t))&&!t.includes("edge/"))return"Chrome";if(Fr(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Mr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be();return/firefox\//i.test(e)}function Ur(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function xr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be();return/crios\//i.test(e)}function jr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be();return/iemobile/i.test(e)}function Fr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be();return/android/i.test(e)}function Hr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be();return/blackberry/i.test(e)}function Vr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be();return/webos/i.test(e)}function Br(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function qr(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be();return Br(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function zr(){return((e=Be()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function Wr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be();return Br(e)||Fr(e)||Vr(e)||Hr(e)||/windows phone/i.test(e)||jr(e)}
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
function Gr(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Dr(Be());break;case"Worker":t="".concat(Dr(Be()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(rn,"/").concat(r)}
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
 */var Kr=function(){"use strict";function e(t){(0,ie.default)(this,e),this.auth=t,this.queue=[]}return(0,ae.default)(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var t=this;return(0,u.default)((function(){var n,r,i,a,o,s,u,l,d,f,h,v,p,g,m;return(0,c.__generator)(this,(function(c){switch(c.label){case 0:if(t.auth.currentUser===e)return[2];n=[],c.label=1;case 1:c.trys.push([1,10,,11]),r=!0,i=!1,a=void 0,c.label=2;case 2:c.trys.push([2,7,8,9]),o=t.queue[Symbol.iterator](),c.label=3;case 3:return(r=(s=o.next()).done)?[3,6]:[4,(u=s.value)(e)];case 4:c.sent(),u.onAbort&&n.push(u.onAbort),c.label=5;case 5:return r=!0,[3,3];case 6:return[3,9];case 7:return l=c.sent(),i=!0,a=l,[3,9];case 8:try{r||null==o.return||o.return()}finally{if(i)throw a}return[7];case 9:return[3,11];case 10:d=c.sent(),n.reverse(),f=!0,h=!1,v=void 0;try{for(p=n[Symbol.iterator]();!(f=(g=p.next()).done);f=!0){m=g.value;try{m()}catch(e){}}}catch(e){h=!0,v=e}finally{try{f||null==p.return||p.return()}finally{if(h)throw v}}throw t.auth._errorFactory.create("login-blocked",{originalMessage:null==d?void 0:d.message});case 11:return[2]}}))}))()}}]),e}(),Jr=function(){"use strict";function e(t,n,r){(0,ie.default)(this,e),this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yr(this),this.idTokenSubscription=new Yr(this),this.beforeStateQueue=new Kr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=On,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}return(0,ae.default)(e,[{key:"_initializeWithPersistence",value:function(e,t){t&&(this._popupRedirectResolver=Fn(t));var n=this;return this._initializationPromise=this.queue((0,u.default)((function(){var r,i;return(0,c.__generator)(this,(function(a){switch(a.label){case 0:return n._deleted?[2]:[4,Pr.create(n,e)];case 1:if(n.persistenceManager=a.sent(),n._deleted)return[2];if(!(null===(r=n._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively))return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,n._popupRedirectResolver._initialize(n)];case 3:return a.sent(),[3,5];case 4:return a.sent(),[3,5];case 5:return[4,n.initializeCurrentUser(t)];case 6:return a.sent(),n.lastNotifiedUid=(null===(i=n.currentUser)||void 0===i?void 0:i.uid)||null,n._deleted?[2]:(n._isInitialized=!0,[2])}}))}))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return(0,u.default)((function(){var t;return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return e._deleted?[2]:[4,e.assertedPersistence.getCurrentUser()];case 1:return t=n.sent(),e.currentUser||t?e.currentUser&&t&&e.currentUser.uid===t.uid?(e._currentUser._assign(t),[4,e.currentUser.getIdToken()]):[3,3]:[2];case 2:case 4:return n.sent(),[2];case 3:return[4,e._updateCurrentUser(t,!0)]}}))}))()}},{key:"initializeCurrentUser",value:function(e){var t=this;return(0,u.default)((function(){var n,r,i,a,o,s,u,l;return(0,c.__generator)(this,(function(c){switch(c.label){case 0:return[4,t.assertedPersistence.getCurrentUser()];case 1:return r=c.sent(),i=r,a=!1,e&&t.config.authDomain?[4,t.getOrInitRedirectPersistenceManager()]:[3,4];case 2:return c.sent(),o=null===(n=t.redirectUser)||void 0===n?void 0:n._redirectEventId,s=null==i?void 0:i._redirectEventId,[4,t.tryRedirectSignIn(e)];case 3:u=c.sent(),o&&o!==s||!(null==u?void 0:u.user)||(i=u.user,a=!0),c.label=4;case 4:if(!i)return[2,t.directlySetCurrentUser(null)];if(i._redirectEventId)return[3,9];if(!a)return[3,8];c.label=5;case 5:return c.trys.push([5,7,,8]),[4,t.beforeStateQueue.runMiddleware(i)];case 6:return c.sent(),[3,8];case 7:return l=c.sent(),i=r,t._popupRedirectResolver._overrideRedirectResult(t,(function(){return Promise.reject(l)})),[3,8];case 8:return i?[2,t.reloadAndSetCurrentUserOrClear(i)]:[2,t.directlySetCurrentUser(null)];case 9:return Mn(t._popupRedirectResolver,t,"argument-error"),[4,t.getOrInitRedirectPersistenceManager()];case 10:return c.sent(),t.redirectUser&&t.redirectUser._redirectEventId===i._redirectEventId?[2,t.directlySetCurrentUser(i)]:[2,t.reloadAndSetCurrentUserOrClear(i)]}}))}))()}},{key:"tryRedirectSignIn",value:function(e){var t=this;return(0,u.default)((function(){var n;return(0,c.__generator)(this,(function(r){switch(r.label){case 0:n=null,r.label=1;case 1:return r.trys.push([1,3,,5]),[4,t._popupRedirectResolver._completeRedirectFn(t,e,!0)];case 2:return n=r.sent(),[3,5];case 3:return r.sent(),[4,t._setRedirectUser(null)];case 4:return r.sent(),[3,5];case 5:return[2,n]}}))}))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var t=this;return(0,u.default)((function(){var n;return(0,c.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,br(e)];case 1:return r.sent(),[3,3];case 2:return"auth/network-request-failed"!==(null==(n=r.sent())?void 0:n.code)?[2,t.directlySetCurrentUser(null)]:[3,3];case 3:return[2,t.directlySetCurrentUser(e)]}}))}))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(t){return e._deleted=!0,[2]}))}))()}},{key:"updateCurrentUser",value:function(e){var t=this;return(0,u.default)((function(){var n;return(0,c.__generator)(this,(function(r){return(n=e?ut(e):null)&&Mn(n.auth.config.apiKey===t.config.apiKey,t,"invalid-user-token"),[2,t._updateCurrentUser(n&&n._clone(t))]}))}))()}},{key:"_updateCurrentUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(r){switch(r.label){case 0:return n._deleted?[2]:(e&&Mn(n.tenantId===e.tenantId,n,"tenant-id-mismatch"),t?[3,2]:[4,n.beforeStateQueue.runMiddleware(e)]);case 1:r.sent(),r.label=2;case 2:return[2,n.queue((0,u.default)((function(){return(0,c.__generator)(this,(function(t){switch(t.label){case 0:return[4,n.directlySetCurrentUser(e)];case 1:return t.sent(),n.notifyAuthListeners(),[2]}}))})))]}}))}))()}},{key:"signOut",value:function(){var e=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(t){switch(t.label){case 0:return[4,e.beforeStateQueue.runMiddleware(null)];case 1:return t.sent(),e.redirectPersistenceManager||e._popupRedirectResolver?[4,e._setRedirectUser(null)]:[3,3];case 2:t.sent(),t.label=3;case 3:return[2,e._updateCurrentUser(null,!0)]}}))}))()}},{key:"setPersistence",value:function(e){var t=this;return this.queue((0,u.default)((function(){return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return[4,t.assertedPersistence.setPersistence(Fn(e))];case 1:return n.sent(),[2]}}))})))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new $e("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,t){var n=this;return(0,u.default)((function(){var r;return(0,c.__generator)(this,(function(i){switch(i.label){case 0:return[4,n.getOrInitRedirectPersistenceManager(t)];case 1:return r=i.sent(),[2,null===e?r.removeCurrentUser():r.setCurrentUser(e)]}}))}))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var t=this;return(0,u.default)((function(){var n;return(0,c.__generator)(this,(function(r){switch(r.label){case 0:return t.redirectPersistenceManager?[3,3]:(Mn(n=e&&Fn(e)||t._popupRedirectResolver,t,"argument-error"),[4,Pr.create(t,[Fn(n._redirectPersistence)],"redirectUser")]);case 1:return t.redirectPersistenceManager=r.sent(),[4,t.redirectPersistenceManager.getCurrentUser()];case 2:t.redirectUser=r.sent(),r.label=3;case 3:return[2,t.redirectPersistenceManager]}}))}))()}},{key:"_redirectUserForId",value:function(e){var t=this;return(0,u.default)((function(){var n,r;return(0,c.__generator)(this,(function(i){switch(i.label){case 0:return t._isInitialized?[4,t.queue((0,u.default)((function(){return(0,c.__generator)(this,(function(e){return[2]}))})))]:[3,2];case 1:i.sent(),i.label=2;case 2:return(null===(n=t._currentUser)||void 0===n?void 0:n._redirectEventId)===e?[2,t._currentUser]:(null===(r=t.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?[2,t.redirectUser]:[2,null]}}))}))()}},{key:"_persistUserIfCurrent",value:function(e){var t=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(n){return e===t.currentUser?[2,t.queue((0,u.default)((function(){return(0,c.__generator)(this,(function(n){return[2,t.directlySetCurrentUser(e)]}))})))]:[2]}))}))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Mn(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var t=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return t.currentUser&&t.currentUser!==e&&t._currentUser._stopProactiveRefresh(),e&&t.isProactiveRefreshEnabled&&e._startProactiveRefresh(),t.currentUser=e,e?[4,t.assertedPersistence.setCurrentUser(e)]:[3,2];case 1:return n.sent(),[3,4];case 2:return[4,t.assertedPersistence.removeCurrentUser()];case 3:n.sent(),n.label=4;case 4:return[2]}}))}))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return Mn(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gr(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return(0,u.default)((function(){var t,n,r;return(0,c.__generator)(this,(function(i){switch(i.label){case 0:return n=oe({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(n["X-Firebase-gmpid"]=e.app.options.appId),[4,null===(t=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader()];case 1:return(r=i.sent())&&(n["X-Firebase-Client"]=r),[2,n]}}))}))()}}]),e}();
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
 */function Xr(e){return ut(e)}var Yr=function(){"use strict";function e(t){var n,r,i=this;(0,ie.default)(this,e),this.auth=t,this.observer=null,this.addObserver=(r=new ot((function(e){return i.observer=e}),n)).subscribe.bind(r)}return(0,ae.default)(e,[{key:"next",get:function(){return Mn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();function $r(e,t,n){var r=Xr(e);Mn(r._canInitEmulator,r,"emulator-config-failed"),Mn(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");var i=!!(null==n?void 0:n.disableWarnings),a=Qr(t),o=function(e){var t=Qr(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};var r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){var a=i[1];return{host:a,port:Zr(r.substr(a.length+1))}}var o=(0,ue.default)(r.split(":"),2);return{host:o[0],port:Zr(o[1])}}(t),s=o.host,u=o.port,c=null===u?"":":".concat(u);r.config.emulator={url:"".concat(a,"//").concat(s).concat(c,"/")},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:u,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Qr(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Zr(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var ei=function(){"use strict";function e(t,n){(0,ie.default)(this,e),this.providerId=t,this.signInMethod=n}return(0,ae.default)(e,[{key:"toJSON",value:function(){return Un("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return Un("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return Un("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return Un("not implemented")}}]),e}();function ti(e,t){return ni.apply(this,arguments)}function ni(){return(ni=(0,u.default)((function(e,t){return(0,c.__generator)(this,(function(n){return[2,Qn(e,"POST","/v1/accounts:update",t)]}))}))).apply(this,arguments)}function ri(e,t){return ii.apply(this,arguments)}function ii(){return(ii=
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
(0,u.default)((function(e,t){return(0,c.__generator)(this,(function(n){return[2,nr(e,"POST","/v1/accounts:signInWithPassword",$n(e,t))]}))}))).apply(this,arguments)}function ai(e,t){return oi.apply(this,arguments)}function oi(){return(oi=
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
(0,u.default)((function(e,t){return(0,c.__generator)(this,(function(n){return[2,nr(e,"POST","/v1/accounts:signInWithEmailLink",$n(e,t))]}))}))).apply(this,arguments)}function si(e,t){return ui.apply(this,arguments)}function ui(){return(ui=(0,u.default)((function(e,t){return(0,c.__generator)(this,(function(n){return[2,nr(e,"POST","/v1/accounts:signInWithEmailLink",$n(e,t))]}))}))).apply(this,arguments)}
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
 */var ci=function(e){"use strict";fe(n,e);var t=Ie(n);function n(e,r,i){var a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return(0,ie.default)(this,n),(a=t.call(this,"password",i))._email=e,a._password=r,a._tenantId=o,a}return(0,ae.default)(n,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var t=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(n){switch(t.signInMethod){case"password":return[2,ri(e,{returnSecureToken:!0,email:t._email,password:t._password})];case"emailLink":return[2,ai(e,{email:t._email,oobCode:t._password})];default:Cn(e,"internal-error")}return[2]}))}))()}},{key:"_linkToIdToken",value:function(e,t){var n=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(r){switch(n.signInMethod){case"password":return[2,ti(e,{idToken:t,returnSecureToken:!0,email:n._email,password:n._password})];case"emailLink":return[2,si(e,{idToken:t,email:n._email,oobCode:n._password})];default:Cn(e,"internal-error")}return[2]}))}))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new n(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new n(e,t,"emailLink",r)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),n}(ei);function li(e,t){return di.apply(this,arguments)}function di(){return(di=
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
(0,u.default)((function(e,t){return(0,c.__generator)(this,(function(n){return[2,nr(e,"POST","/v1/accounts:signInWithIdp",$n(e,t))]}))}))).apply(this,arguments)}
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
 */var fi=function(e){"use strict";fe(n,e);var t=Ie(n);function n(){var e;return(0,ie.default)(this,n),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return(0,ae.default)(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return li(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,li(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,li(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rt(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Cn("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,r=t.providerId,i=t.signInMethod,a=(0,c.__rest)(t,["providerId","signInMethod"]);if(!r||!i)return null;var o=new n(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),n}(ei);function hi(e,t){return vi.apply(this,arguments)}function vi(){return(vi=
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
(0,u.default)((function(e,t){return(0,c.__generator)(this,(function(n){return[2,Qn(e,"POST","/v1/accounts:sendVerificationCode",$n(e,t))]}))}))).apply(this,arguments)}function pi(){return(pi=(0,u.default)((function(e,t){return(0,c.__generator)(this,(function(n){return[2,nr(e,"POST","/v1/accounts:signInWithPhoneNumber",$n(e,t))]}))}))).apply(this,arguments)}function gi(){return(gi=(0,u.default)((function(e,t){var n;return(0,c.__generator)(this,(function(r){switch(r.label){case 0:return[4,nr(e,"POST","/v1/accounts:signInWithPhoneNumber",$n(e,t))];case 1:if((n=r.sent()).temporaryProof)throw or(e,"account-exists-with-different-credential",n);return[2,n]}}))}))).apply(this,arguments)}var mi=oe({},"USER_NOT_FOUND","user-not-found");function yi(){return(yi=(0,u.default)((function(e,t){var n;return(0,c.__generator)(this,(function(r){return n=Object.assign(Object.assign({},t),{operation:"REAUTH"}),[2,nr(e,"POST","/v1/accounts:signInWithPhoneNumber",$n(e,n),mi)]}))}))).apply(this,arguments)}
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
 */var _i=function(e){"use strict";fe(n,e);var t=Ie(n);function n(e){var r;return(0,ie.default)(this,n),(r=t.call(this,"phone","phone")).params=e,r}return(0,ae.default)(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return pi.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return gi.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return yi.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return r||t||i||a?new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:a}):null}}]),n}(ei);
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
 */var bi=function(){"use strict";function e(t){var n,r,i,a,o,s;(0,ie.default)(this,e);var u=it(at(t)),c=null!==(n=u.apiKey)&&void 0!==n?n:null,l=null!==(r=u.oobCode)&&void 0!==r?r:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=u.mode)&&void 0!==i?i:null);Mn(c&&l&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=l,this.continueUrl=null!==(a=u.continueUrl)&&void 0!==a?a:null,this.languageCode=null!==(o=u.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=u.tenantId)&&void 0!==s?s:null}return(0,ae.default)(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=it(at(e)).link,n=t?it(at(t)).deep_link_id:null,r=it(at(e)).deep_link_id;return(r?it(at(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
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
var ki=function(){"use strict";function e(){(0,ie.default)(this,e),this.providerId=e.PROVIDER_ID}return(0,ae.default)(e,null,[{key:"credential",value:function(e,t){return ci._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=bi.parseLink(t);return Mn(n,"argument-error"),ci._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();ki.PROVIDER_ID="password",ki.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ki.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
var Ii=function(){"use strict";function e(t){(0,ie.default)(this,e),this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}return(0,ae.default)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),wi=function(e){"use strict";fe(n,e);var t=Ie(n);function n(){var e;return(0,ie.default)(this,n),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return(0,ae.default)(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return(0,se.default)(this.scopes)}}]),n}(Ii),Ti=function(e){"use strict";fe(n,e);var t=Ie(n);function n(){return(0,ie.default)(this,n),t.call(this,"facebook.com")}return(0,ae.default)(n,null,[{key:"credential",value:function(e){return fi._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(wi);
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
 */Ti.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ti.PROVIDER_ID="facebook.com";
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
var Ei=function(e){"use strict";fe(n,e);var t=Ie(n);function n(){var e;return(0,ie.default)(this,n),(e=t.call(this,"google.com")).addScope("profile"),e}return(0,ae.default)(n,null,[{key:"credential",value:function(e,t){return fi._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,i=t.oauthAccessToken;if(!r&&!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(wi);Ei.GOOGLE_SIGN_IN_METHOD="google.com",Ei.PROVIDER_ID="google.com";
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
var Si=function(e){"use strict";fe(n,e);var t=Ie(n);function n(){return(0,ie.default)(this,n),t.call(this,"github.com")}return(0,ae.default)(n,null,[{key:"credential",value:function(e){return fi._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(wi);Si.GITHUB_SIGN_IN_METHOD="github.com",Si.PROVIDER_ID="github.com";
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
var Oi=function(e){"use strict";fe(n,e);var t=Ie(n);function n(){return(0,ie.default)(this,n),t.call(this,"twitter.com")}return(0,ae.default)(n,null,[{key:"credential",value:function(e,t){return fi._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,i=t.oauthTokenSecret;if(!r||!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(wi);function Ri(e,t){return Ai.apply(this,arguments)}function Ai(){return(Ai=
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
(0,u.default)((function(e,t){return(0,c.__generator)(this,(function(n){return[2,nr(e,"POST","/v1/accounts:signUp",$n(e,t))]}))}))).apply(this,arguments)}
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
 */Oi.TWITTER_SIGN_IN_METHOD="twitter.com",Oi.PROVIDER_ID="twitter.com";var Ci=function(){"use strict";function e(t){(0,ie.default)(this,e),this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}return(0,ae.default)(e,null,[{key:"_fromIdTokenResponse",value:function(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return(0,u.default)((function(){var a,o;return(0,c.__generator)(this,(function(s){switch(s.label){case 0:return[4,Ar._fromIdTokenResponse(t,r,i)];case 1:return a=s.sent(),o=Ni(r),[2,new e({user:a,providerId:o,_tokenResponse:r,operationType:n})]}}))}))()}},{key:"_forOperation",value:function(t,n,r){return(0,u.default)((function(){var i;return(0,c.__generator)(this,(function(a){switch(a.label){case 0:return[4,t._updateTokensIfNecessary(r,!0)];case 1:return a.sent(),i=Ni(r),[2,new e({user:t,providerId:i,_tokenResponse:r,operationType:n})]}}))}))()}}]),e}();function Ni(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
var Li=function(e){"use strict";fe(n,e);var t=Ie(n);function n(e,r,i,a){var o,s;return(0,ie.default)(this,n),(o=t.call(this,r.code,r.message)).operationType=i,o.user=a,Object.setPrototypeOf(ce(o),n.prototype),o.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:r.customData._serverResponse,operationType:i},o}return(0,ae.default)(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,i){return new n(e,t,r,i)}}]),n}(Ye);function Pi(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw Li._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */function Di(e,t){return Mi.apply(this,arguments)}function Mi(){return Mi=(0,u.default)((function(e,t){var n,r,i,a,o,s=arguments;return(0,c.__generator)(this,(function(u){switch(u.label){case 0:return n=s.length>2&&void 0!==s[2]&&s[2],i=[e],a=t._linkToIdToken,o=[e.auth],[4,e.getIdToken()];case 1:return[4,pr.apply(void 0,i.concat([a.apply(t,o.concat([u.sent()])),n]))];case 2:return r=u.sent(),[2,Ci._forOperation(e,"link",r)]}}))})),Mi.apply(this,arguments)}function Ui(e,t){return xi.apply(this,arguments)}function xi(){return xi=
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
(0,u.default)((function(e,t){var n,r,i,a,o,s,u,l=arguments;return(0,c.__generator)(this,(function(c){switch(c.label){case 0:n=l.length>2&&void 0!==l[2]&&l[2],r=e.auth,i="reauthenticate",c.label=1;case 1:return c.trys.push([1,3,,4]),[4,pr(e,Pi(r,i,t,e),n)];case 2:return Mn((a=c.sent()).idToken,r,"internal-error"),Mn(o=vr(a.idToken),r,"internal-error"),s=o.sub,Mn(e.uid===s,r,"user-mismatch"),[2,Ci._forOperation(e,i,a)];case 3:throw"auth/user-not-found"===(null==(u=c.sent())?void 0:u.code)&&Cn(r,"user-mismatch"),u;case 4:return[2]}}))})),xi.apply(this,arguments)}function ji(e,t){return Fi.apply(this,arguments)}function Fi(){return Fi=
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
(0,u.default)((function(e,t){var n,r,i,a,o=arguments;return(0,c.__generator)(this,(function(s){switch(s.label){case 0:return n=o.length>2&&void 0!==o[2]&&o[2],[4,Pi(e,r="signIn",t)];case 1:return i=s.sent(),[4,Ci._fromIdTokenResponse(e,r,i)];case 2:return a=s.sent(),n?[3,4]:[4,e._updateCurrentUser(a.user)];case 3:s.sent(),s.label=4;case 4:return[2,a]}}))})),Fi.apply(this,arguments)}function Hi(e,t){return Vi.apply(this,arguments)}function Vi(){return(Vi=(0,u.default)((function(e,t){return(0,c.__generator)(this,(function(n){return[2,ji(Xr(e),t)]}))}))).apply(this,arguments)}function Bi(e,t,n){return qi.apply(this,arguments)}function qi(){return(qi=(0,u.default)((function(e,t,n){var r,i,a;return(0,c.__generator)(this,(function(o){switch(o.label){case 0:return[4,Ri(r=Xr(e),{returnSecureToken:!0,email:t,password:n})];case 1:return i=o.sent(),[4,Ci._fromIdTokenResponse(r,"signIn",i)];case 2:return a=o.sent(),[4,r._updateCurrentUser(a.user)];case 3:return o.sent(),[2,a]}}))}))).apply(this,arguments)}function zi(e,t,n){return Hi(ut(e),ki.credential(t,n))}function Wi(e,t,n,r){return ut(e).onIdTokenChanged(t,n,r)}function Gi(e,t,n){return ut(e).beforeAuthStateChanged(t,n)}function Ki(e){return ut(e).signOut()}
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
function Ji(e,t){return Qn(e,"POST","/v2/accounts/mfaEnrollment:start",$n(e,t))}new WeakMap;var Xi="__sak",Yi=function(){"use strict";function e(t,n){(0,ie.default)(this,e),this.storageRetriever=t,this.type=n}return(0,ae.default)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Xi,"1"),this.storage.removeItem(Xi),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
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
 */var $i=function(e){"use strict";fe(n,e);var t=Ie(n);function n(){var e,r;return(0,ie.default)(this,n),(e=t.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(Ur(r=Be())||Br(r))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=Wr(),e._shouldAllowMigration=!0,e}return(0,ae.default)(n,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);zr()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else this.forAllChangedKeys((function(e,t,r){n.notifyListeners(e,r)}))}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){e.forAllChangedKeys((function(t,n,r){e.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,t){var r=this,i=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(a){switch(a.label){case 0:return[4,Tn(me(n.prototype),"_set",r).call(i,e,t)];case 1:return a.sent(),i.localCache[e]=JSON.stringify(t),[2]}}))}))()}},{key:"_get",value:function(e){var t=this,r=this;return(0,u.default)((function(){var i;return(0,c.__generator)(this,(function(a){switch(a.label){case 0:return[4,Tn(me(n.prototype),"_get",t).call(r,e)];case 1:return i=a.sent(),r.localCache[e]=JSON.stringify(i),[2,i]}}))}))()}},{key:"_remove",value:function(e){var t=this,r=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(i){switch(i.label){case 0:return[4,Tn(me(n.prototype),"_remove",t).call(r,e)];case 1:return i.sent(),delete r.localCache[e],[2]}}))}))()}}]),n}(Yi);$i.type="LOCAL";var Qi=$i,Zi=function(e){"use strict";fe(n,e);var t=Ie(n);function n(){return(0,ie.default)(this,n),t.call(this,(function(){return window.sessionStorage}),"SESSION")}return(0,ae.default)(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(Yi);
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
 */Zi.type="SESSION";var ea=Zi;
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
 */function ta(e){return Promise.all(e.map(function(){var e=(0,u.default)((function(e){return(0,c.__generator)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,e];case 1:return[2,{fulfilled:!0,value:t.sent()}];case 2:return[2,{fulfilled:!1,reason:t.sent()}];case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}()))}
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
 */var na=function(){"use strict";function e(t){(0,ie.default)(this,e),this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return(0,ae.default)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var t=this;return(0,u.default)((function(){var n,r,i,a,o,s,l,d;return(0,c.__generator)(this,(function(f){switch(f.label){case 0:return r=(n=e).data,i=r.eventId,a=r.eventType,o=r.data,(null==(s=t.handlersMap[a])?void 0:s.size)?(n.ports[0].postMessage({status:"ack",eventId:i,eventType:a}),l=Array.from(s).map(function(){var e=(0,u.default)((function(e){return(0,c.__generator)(this,(function(t){return[2,e(n.origin,o)]}))}));return function(t){return e.apply(this,arguments)}}()),[4,ta(l)]):[2];case 1:return d=f.sent(),n.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:d}),[2]}}))}))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
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
function ra(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */na.receivers=[];var ia=function(){"use strict";function e(t){(0,ie.default)(this,e),this.target=t,this.handlers=new Set}return(0,ae.default)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,r=this;return(0,u.default)((function(){var i,a,o;return(0,c.__generator)(this,(function(s){if(!(i="undefined"!=typeof MessageChannel?new MessageChannel:null))throw new Error("connection_unavailable");return[2,new Promise((function(s,u){var c=ra("",20);i.port1.start();var l=setTimeout((function(){u(new Error("unsupported_event"))}),n);o={messageChannel:i,onMessage:function(e){var t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),a=setTimeout((function(){u(new Error("timeout"))}),3e3);break;case"done":clearTimeout(a),s(t.data.response);break;default:clearTimeout(l),clearTimeout(a),u(new Error("invalid_response"))}}},r.handlers.add(o),i.port1.addEventListener("message",o.onMessage),r.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((function(){o&&r.removeMessageHandler(o)}))]}))}))()}}]),e}();
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
 */function aa(){return window}
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
function oa(){return void 0!==aa().WorkerGlobalScope&&"function"==typeof aa().importScripts}function sa(){return ua.apply(this,arguments)}function ua(){return(ua=(0,u.default)((function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return[2,null];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,navigator.serviceWorker.ready];case 2:return[2,e.sent().active];case 3:return e.sent(),[2,null];case 4:return[2]}}))}))).apply(this,arguments)}
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
var ca="firebaseLocalStorageDb",la="firebaseLocalStorage",da="fbase_key",fa=function(){"use strict";function e(t){(0,ie.default)(this,e),this.request=t}return(0,ae.default)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){e.request.addEventListener("success",(function(){t(e.request.result)})),e.request.addEventListener("error",(function(){n(e.request.error)}))}))}}]),e}();function ha(e,t){return e.transaction([la],t?"readwrite":"readonly").objectStore(la)}function va(){var e=indexedDB.deleteDatabase(ca);return new fa(e).toPromise()}function pa(){var e=indexedDB.open(ca,1);return new Promise((function(t,n){e.addEventListener("error",(function(){n(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(la,{keyPath:da})}catch(e){n(e)}})),e.addEventListener("success",(0,u.default)((function(){var n;return(0,c.__generator)(this,(function(r){switch(r.label){case 0:return(n=e.result).objectStoreNames.contains(la)?[3,3]:(n.close(),[4,va()]);case 1:return r.sent(),[4,pa()];case 2:return t.apply(void 0,[r.sent()]),[3,4];case 3:t(n),r.label=4;case 4:return[2]}}))})))}))}function ga(e,t,n){return ma.apply(this,arguments)}function ma(){return(ma=(0,u.default)((function(e,t,n){var r,i;return(0,c.__generator)(this,(function(a){return i=ha(e,!0).put((oe(r={},da,t),oe(r,"value",n),r)),[2,new fa(i).toPromise()]}))}))).apply(this,arguments)}function ya(){return(ya=(0,u.default)((function(e,t){var n,r;return(0,c.__generator)(this,(function(i){switch(i.label){case 0:return n=ha(e,!1).get(t),[4,new fa(n).toPromise()];case 1:return[2,void 0===(r=i.sent())?null:r.value]}}))}))).apply(this,arguments)}function _a(e,t){var n=ha(e,!0).delete(t);return new fa(n).toPromise()}var ba=function(){"use strict";function e(){(0,ie.default)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return(0,ae.default)(e,[{key:"_openDb",value:function(){var e=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(t){switch(t.label){case 0:return e.db?[2,e.db]:[4,pa()];case 1:return e.db=t.sent(),[2,e.db]}}))}))()}},{key:"_withRetries",value:function(e){var t=this;return(0,u.default)((function(){var n,r,i;return(0,c.__generator)(this,(function(a){switch(a.label){case 0:n=0,a.label=1;case 1:0,a.label=2;case 2:return a.trys.push([2,5,,6]),[4,t._openDb()];case 3:return r=a.sent(),[4,e(r)];case 4:return[2,a.sent()];case 5:if(i=a.sent(),n++>3)throw i;return t.db&&(t.db.close(),t.db=void 0),[3,6];case 6:return[3,1];case 7:return[2]}}))}))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(t){return[2,oa()?e.initializeReceiver():e.initializeSender()]}))}))()}},{key:"initializeReceiver",value:function(){var e=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(t){return e.receiver=na._getInstance(oa()?self:null),e.receiver._subscribe("keyChanged",function(){var t=(0,u.default)((function(t,n){return(0,c.__generator)(this,(function(t){switch(t.label){case 0:return[4,e._poll()];case 1:return[2,{keyProcessed:t.sent().includes(n.key)}]}}))}));return function(e,n){return t.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=(0,u.default)((function(e,t){return(0,c.__generator)(this,(function(e){return[2,["keyChanged"]]}))}));return function(t,n){return e.apply(this,arguments)}}()),[2]}))}))()}},{key:"initializeSender",value:function(){var e=this;return(0,u.default)((function(){var t,n,r;return(0,c.__generator)(this,(function(i){switch(i.label){case 0:return[4,sa()];case 1:return e.activeServiceWorker=i.sent(),e.activeServiceWorker?(e.sender=new ia(e.activeServiceWorker),[4,e.sender._send("ping",{},800)]):[2];case 2:return(r=i.sent())?((null===(t=r[0])||void 0===t?void 0:t.fulfilled)&&(null===(n=r[0])||void 0===n?void 0:n.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0),[2]):[2]}}))}))()}},{key:"notifyServiceWorker",value:function(e){var t=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(n){switch(n.label){case 0:if(!t.sender||!t.activeServiceWorker||function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()!==t.activeServiceWorker)return[2];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,t.sender._send("keyChanged",{key:e},t.serviceWorkerReceiverAvailable?800:50)];case 2:return n.sent(),[3,4];case 3:return n.sent(),[3,4];case 4:return[2]}}))}))()}},{key:"_isAvailable",value:function(){return(0,u.default)((function(){var e;return(0,c.__generator)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,4,,5]),indexedDB?[4,pa()]:[2,!1];case 1:return[4,ga(e=t.sent(),Xi,"1")];case 2:return t.sent(),[4,_a(e,Xi)];case 3:return t.sent(),[2,!0];case 4:return t.sent(),[3,5];case 5:return[2,!1]}}))}))()}},{key:"_withPendingWrite",value:function(e){var t=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(n){switch(n.label){case 0:t.pendingWrites++,n.label=1;case 1:return n.trys.push([1,,3,4]),[4,e()];case 2:return n.sent(),[3,4];case 3:return t.pendingWrites--,[7];case 4:return[2]}}))}))()}},{key:"_set",value:function(e,t){var n=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(r){return[2,n._withPendingWrite((0,u.default)((function(){return(0,c.__generator)(this,(function(r){switch(r.label){case 0:return[4,n._withRetries((function(n){return ga(n,e,t)}))];case 1:return r.sent(),n.localCache[e]=t,[2,n.notifyServiceWorker(e)]}}))})))]}))}))()}},{key:"_get",value:function(e){var t=this;return(0,u.default)((function(){var n;return(0,c.__generator)(this,(function(r){switch(r.label){case 0:return[4,t._withRetries((function(t){return function(e,t){return ya.apply(this,arguments)}(t,e)}))];case 1:return n=r.sent(),t.localCache[e]=n,[2,n]}}))}))()}},{key:"_remove",value:function(e){var t=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(n){return[2,t._withPendingWrite((0,u.default)((function(){return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return[4,t._withRetries((function(t){return _a(t,e)}))];case 1:return n.sent(),delete t.localCache[e],[2,t.notifyServiceWorker(e)]}}))})))]}))}))()}},{key:"_poll",value:function(){var e=this;return(0,u.default)((function(){var t,n,r,i,a,o,s,u,l,d,f,h,v,p,g,m,y;return(0,c.__generator)(this,(function(c){switch(c.label){case 0:return[4,e._withRetries((function(e){var t=ha(e,!1).getAll();return new fa(t).toPromise()}))];case 1:if(!(t=c.sent()))return[2,[]];if(0!==e.pendingWrites)return[2,[]];n=[],r=new Set,i=!0,a=!1,o=void 0;try{for(s=t[Symbol.iterator]();!(i=(u=s.next()).done);i=!0)l=u.value,d=l.fbase_key,f=l.value,r.add(d),JSON.stringify(e.localCache[d])!==JSON.stringify(f)&&(e.notifyListeners(d,f),n.push(d))}catch(e){a=!0,o=e}finally{try{i||null==s.return||s.return()}finally{if(a)throw o}}h=!0,v=!1,p=void 0;try{for(g=Object.keys(e.localCache)[Symbol.iterator]();!(h=(m=g.next()).done);h=!0)y=m.value,e.localCache[y]&&!r.has(y)&&(e.notifyListeners(y,null),n.push(y))}catch(e){v=!0,p=e}finally{try{h||null==g.return||g.return()}finally{if(v)throw p}}return[2,n]}}))}))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval((0,u.default)((function(){return(0,c.__generator)(this,(function(t){return[2,e._poll()]}))})),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();ba.type="LOCAL";var ka=ba;
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
 */function Ia(e,t){return Qn(e,"POST","/v2/accounts/mfaSignIn:start",$n(e,t))}function wa(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=Nn("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function Ta(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
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
Ta("rcb"),new Wn(3e4,6e4);var Ea="recaptcha";
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
 */function Sa(e,t,n){return Oa.apply(this,arguments)}function Oa(){return(Oa=(0,u.default)((function(e,t,n){var r,i,a,o,s;return(0,c.__generator)(this,(function(u){switch(u.label){case 0:return[4,n.verify()];case 1:i=u.sent(),u.label=2;case 2:return u.trys.push([2,,10,11]),Mn("string"==typeof i,e,"argument-error"),Mn(n.type===Ea,e,"argument-error"),"session"in(a="string"==typeof t?{phoneNumber:t}:t)?(o=a.session,"phoneNumber"in a?(Mn("enroll"===o.type,e,"internal-error"),[4,Ji(e,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:i}})]):[3,4]):[3,7];case 3:return[2,u.sent().phoneSessionInfo.sessionInfo];case 4:return Mn("signin"===o.type,e,"internal-error"),Mn(s=(null===(r=a.multiFactorHint)||void 0===r?void 0:r.uid)||a.multiFactorUid,e,"missing-multi-factor-info"),[4,Ia(e,{mfaPendingCredential:o.credential,mfaEnrollmentId:s,phoneSignInInfo:{recaptchaToken:i}})];case 5:return[2,u.sent().phoneResponseInfo.sessionInfo];case 6:return[3,9];case 7:return[4,hi(e,{phoneNumber:a.phoneNumber,recaptchaToken:i})];case 8:return[2,u.sent().sessionInfo];case 9:return[3,11];case 10:return n._reset(),[7];case 11:return[2]}}))}))).apply(this,arguments)}
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
var Ra=function(){"use strict";function e(t){(0,ie.default)(this,e),this.providerId=e.PROVIDER_ID,this.auth=Xr(t)}return(0,ae.default)(e,[{key:"verifyPhoneNumber",value:function(e,t){return Sa(this.auth,e,ut(t))}}],[{key:"credential",value:function(e,t){return _i._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?_i._fromTokenResponse(n,r):null}}]),e}();
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
function Aa(e,t){return t?Fn(t):(Mn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Ra.PROVIDER_ID="phone",Ra.PHONE_SIGN_IN_METHOD="phone";var Ca=function(e){"use strict";fe(n,e);var t=Ie(n);function n(e){var r;return(0,ie.default)(this,n),(r=t.call(this,"custom","custom")).params=e,r}return(0,ae.default)(n,[{key:"_getIdTokenResponse",value:function(e){return li(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return li(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return li(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(ei);function Na(e){return ji(e.auth,new Ca(e),e.bypassAuthState)}function La(e){var t=e.auth,n=e.user;return Mn(n,t,"internal-error"),Ui(n,new Ca(e),e.bypassAuthState)}function Pa(e){return Da.apply(this,arguments)}function Da(){return(Da=(0,u.default)((function(e){var t,n;return(0,c.__generator)(this,(function(r){return t=e.auth,Mn(n=e.user,t,"internal-error"),[2,Di(n,new Ca(e),e.bypassAuthState)]}))}))).apply(this,arguments)}
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
 */var Ma=function(){"use strict";function e(t,n,r,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];(0,ie.default)(this,e),this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return(0,ae.default)(e,[{key:"execute",value:function(){var e=this;return new Promise(function(){var t=(0,u.default)((function(t,n){var r;return(0,c.__generator)(this,(function(i){switch(i.label){case 0:e.pendingPromise={resolve:t,reject:n},i.label=1;case 1:return i.trys.push([1,4,,5]),[4,e.resolver._initialize(e.auth)];case 2:return e.eventManager=i.sent(),[4,e.onExecution()];case 3:return i.sent(),e.eventManager.registerConsumer(e),[3,5];case 4:return r=i.sent(),e.reject(r),[3,5];case 5:return[2]}}))}));return function(e,n){return t.apply(this,arguments)}}())}},{key:"onAuthEvent",value:function(e){var t=this;return(0,u.default)((function(){var n,r,i,a,o,s,u,l,d;return(0,c.__generator)(this,(function(c){switch(c.label){case 0:if(n=e.urlResponse,r=e.sessionId,i=e.postBody,a=e.tenantId,o=e.error,s=e.type,o)return t.reject(o),[2];u={auth:t.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:t.user,bypassAuthState:t.bypassAuthState},c.label=1;case 1:return c.trys.push([1,3,,4]),l=t.resolve,[4,t.getIdpTask(s)(u)];case 2:return l.apply(t,[c.sent()]),[3,4];case 3:return d=c.sent(),t.reject(d),[3,4];case 4:return[2]}}))}))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Na;case"linkViaPopup":case"linkViaRedirect":return Pa;case"reauthViaPopup":case"reauthViaRedirect":return La;default:Cn(this.auth,"internal-error")}}},{key:"resolve",value:function(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),Ua=new Wn(2e3,1e4);
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
 */function xa(e,t,n){return ja.apply(this,arguments)}function ja(){return(ja=(0,u.default)((function(e,t,n){var r,i;return(0,c.__generator)(this,(function(a){return r=Xr(e),Pn(e,t,Ii),i=Aa(r,n),[2,new Fa(r,"signInViaPopup",t,i).executeNotNull()]}))}))).apply(this,arguments)}var Fa=function(e){"use strict";fe(n,e);var t=Ie(n);function n(e,r,i,a,o){var s;return(0,ie.default)(this,n),(s=t.call(this,e,r,a,o)).provider=i,s.authWindow=null,s.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=ce(s),s}return(0,ae.default)(n,[{key:"executeNotNull",value:function(){var e=this;return(0,u.default)((function(){var t;return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return[4,e.execute()];case 1:return Mn(t=n.sent(),e.auth,"internal-error"),[2,t]}}))}))()}},{key:"onExecution",value:function(){var e=this;return(0,u.default)((function(){var t;return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return xn(1===e.filter.length,"Popup operations only handle one event"),t=ra(),[4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],t)];case 1:return e.authWindow=n.sent(),e.authWindow.associatedEvent=t,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(Nn(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation(),[2]}}))}))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(Nn(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed)?e.pollId=window.setTimeout((function(){e.pollId=null,e.reject(Nn(e.auth,"popup-closed-by-user"))}),2e3):e.pollId=window.setTimeout(t,Ua.get())};t()}}]),n}(Ma);Fa.currentPopupAction=null;
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
var Ha=new Map,Va=function(e){"use strict";fe(n,e);var t=Ie(n);function n(e,r){var i,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,ie.default)(this,n),(i=t.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,a)).eventId=null,i}return(0,ae.default)(n,[{key:"execute",value:function(){var e=this,t=this;return(0,u.default)((function(){var r,i,a,o;return(0,c.__generator)(this,(function(s){switch(s.label){case 0:if(r=Ha.get(t.auth._key()))return[3,8];s.label=1;case 1:return s.trys.push([1,6,,7]),[4,Ba(t.resolver,t.auth)];case 2:return s.sent()?[4,Tn(me(n.prototype),"execute",e).call(t)]:[3,4];case 3:return a=s.sent(),[3,5];case 4:a=null,s.label=5;case 5:return i=a,r=function(){return Promise.resolve(i)},[3,7];case 6:return o=s.sent(),r=function(){return Promise.reject(o)},[3,7];case 7:Ha.set(t.auth._key(),r),s.label=8;case 8:return t.bypassAuthState||Ha.set(t.auth._key(),(function(){return Promise.resolve(null)})),[2,r()]}}))}))()}},{key:"onAuthEvent",value:function(e){var t=this,r=this,i=function(){return Tn(me(n.prototype),"onAuthEvent",t)};return(0,u.default)((function(){var t;return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return"signInViaRedirect"===e.type?[2,i().call(r,e)]:"unknown"===e.type?(r.resolve(null),[2]):e.eventId?[4,r.auth._redirectUserForId(e.eventId)]:[3,2];case 1:if(t=n.sent())return r.user=t,[2,i().call(r,e)];r.resolve(null),n.label=2;case 2:return[2]}}))}))()}},{key:"onExecution",value:function(){return(0,u.default)((function(){return(0,c.__generator)(this,(function(e){return[2]}))}))()}},{key:"cleanUp",value:function(){}}]),n}(Ma);function Ba(e,t){return qa.apply(this,arguments)}function qa(){return(qa=(0,u.default)((function(e,t){var n,r,i;return(0,c.__generator)(this,(function(a){switch(a.label){case 0:return n=Ga(t),[4,(r=Wa(e))._isAvailable()];case 1:return a.sent()?[4,r._get(n)]:[2,!1];case 2:return i="true"===a.sent(),[4,r._remove(n)];case 3:return a.sent(),[2,i]}}))}))).apply(this,arguments)}function za(e,t){Ha.set(e._key(),t)}function Wa(e){return Fn(e._redirectPersistence)}function Ga(e){return Lr("pendingRedirect",e.config.apiKey,e.name)}
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
 */function Ka(e,t){return Ja.apply(this,arguments)}function Ja(){return Ja=(0,u.default)((function(e,t){var n,r,i,a,o=arguments;return(0,c.__generator)(this,(function(s){switch(s.label){case 0:return n=o.length>2&&void 0!==o[2]&&o[2],r=Xr(e),i=Aa(r,t),[4,new Va(r,i,n).execute()];case 1:return!(a=s.sent())||n?[3,4]:(delete a.user._redirectEventId,[4,r._persistUserIfCurrent(a.user)]);case 2:return s.sent(),[4,r._setRedirectUser(null,t)];case 3:s.sent(),s.label=4;case 4:return[2,a]}}))})),Ja.apply(this,arguments)}
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
var Xa=function(){"use strict";function e(t){(0,ie.default)(this,e),this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return(0,ae.default)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $a(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!$a(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Nn(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ya(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Ya(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function Ya(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function $a(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function Qa(e){return Za.apply(this,arguments)}function Za(){return Za=
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
(0,u.default)((function(e){var t,n=arguments;return(0,c.__generator)(this,(function(r){return t=n.length>1&&void 0!==n[1]?n[1]:{},[2,Qn(e,"GET","/v1/projects",t)]}))})),Za.apply(this,arguments)}
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
 */var eo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,to=/^https?/;function no(){return(no=(0,u.default)((function(e){var t,n,r,i,a,o,s;return(0,c.__generator)(this,(function(u){switch(u.label){case 0:return e.config.emulator?[2]:[4,Qa(e)];case 1:t=u.sent().authorizedDomains,n=!0,r=!1,i=void 0;try{for(a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){s=o.value;try{if(ro(s))return[2]}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return Cn(e,"unauthorized-domain"),[2]}}))}))).apply(this,arguments)}function ro(e){var t=Vn(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!to.test(r))return!1;if(eo.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
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
 */var io=new Wn(3e4,6e4);function ao(){var e=aa().___jsl,t=!0,n=!1,r=void 0;if(null==e?void 0:e.H)try{for(var i,a=Object.keys(e.H)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(e.H[o].r=e.H[o].r||[],e.H[o].L=e.H[o].L||[],e.H[o].r=(0,se.default)(e.H[o].L),e.CP)for(var s=0;s<e.CP.length;s++)e.CP[s]=null}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}var oo=null;function so(e){return oo=oo||function(e){return new Promise((function(t,n){var r,i,a;function o(){ao(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){ao(),n(Nn(e,"network-request-failed"))},timeout:io.get()})}if(null===(i=null===(r=aa().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=aa().gapi)||void 0===a?void 0:a.load)){var s=Ta("iframefcb");return aa()[s]=function(){gapi.load?o():n(Nn(e,"network-request-failed"))},wa("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw oo=null,e}))}(e),oo}
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
 */var uo=new Wn(5e3,15e3),co={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fo(e){var t=e.config;Mn(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?Gn(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:rn},i=lo.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(rt(r).slice(1))}function ho(e){return vo.apply(this,arguments)}function vo(){return vo=(0,u.default)((function(e){var t,n;return(0,c.__generator)(this,(function(r){switch(r.label){case 0:return[4,so(e)];case 1:return t=r.sent(),Mn(n=aa().gapi,e,"internal-error"),[2,t.open({where:document.body,url:fo(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:co,dontclear:!0},(function(t){return new Promise(function(){var n=(0,u.default)((function(n,r){var i,a;function o(){aa().clearTimeout(a),n(t)}return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return[4,t.restyle({setHideOnLeave:!1})];case 1:return n.sent(),i=Nn(e,"network-request-failed"),a=aa().setTimeout((function(){r(i)}),uo.get()),t.ping(o).then(o,(function(){r(i)})),[2]}}))}));return function(e,t){return n.apply(this,arguments)}}())}))]}}))})),vo.apply(this,arguments)}
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
 */var po={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},go="_blank",mo="http://localhost",yo=function(){"use strict";function e(t){(0,ie.default)(this,e),this.window=t,this.associatedEvent=null}return(0,ae.default)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function _o(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),s="",u=Object.assign(Object.assign({},po),{width:r.toString(),height:i.toString(),top:a,left:o}),c=Be().toLowerCase();n&&(s=xr(c)?go:n),Mr(c)&&(t=t||mo,u.scrollbars="yes");var l=Object.entries(u).reduce((function(e,t){var n=(0,ue.default)(t,2),r=n[0],i=n[1];return"".concat(e).concat(r,"=").concat(i,",")}),"");if(qr(c)&&"_self"!==s)return bo(t||"",s),new yo(null);var d=window.open(t||"",s,l);Mn(d,e,"popup-blocked");try{d.focus()}catch(e){}return new yo(d)}function bo(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */var ko="__/auth/handler",Io="emulator/auth/handler";function wo(e,t,n,r,i,a){Mn(e.config.authDomain,e,"auth-domain-config-required"),Mn(e.config.apiKey,e,"invalid-api-key");var o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:rn,eventId:i};if(t instanceof Ii){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",et(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));var s=!0,u=!1,c=void 0;try{for(var l,d=Object.entries(a||{})[Symbol.iterator]();!(s=(l=d.next()).done);s=!0){var f=(0,ue.default)(l.value,2),h=f[0],v=f[1];o[h]=v}}catch(e){u=!0,c=e}finally{try{s||null==d.return||d.return()}finally{if(u)throw c}}}if(t instanceof wi){var p=t.getScopes().filter((function(e){return""!==e}));p.length>0&&(o.scopes=p.join(","))}e.tenantId&&(o.tid=e.tenantId);var g,m,y=o,_=!0,b=!1,k=void 0;try{for(var I,w=Object.keys(y)[Symbol.iterator]();!(_=(I=w.next()).done);_=!0){var T=I.value;void 0===y[T]&&delete y[T]}}catch(e){b=!0,k=e}finally{try{_||null==w.return||w.return()}finally{if(b)throw k}}return"".concat((g=e,m=g.config,m.emulator?Gn(m,Io):"https://".concat(m.authDomain,"/").concat(ko)),"?").concat(rt(y).slice(1))}
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
var To="webStorageSupport",Eo=function(){"use strict";function e(){(0,ie.default)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ea,this._completeRedirectFn=Ka,this._overrideRedirectResult=za}return(0,ae.default)(e,[{key:"_openPopup",value:function(e,t,n,r){var i=this;return(0,u.default)((function(){var a,o;return(0,c.__generator)(this,(function(s){return xn(null===(a=i.eventManagers[e._key()])||void 0===a?void 0:a.manager,"_initialize() not called before _openPopup()"),o=wo(e,t,n,Vn(),r),[2,_o(e,o,ra())]}))}))()}},{key:"_openRedirect",value:function(e,t,n,r){var i=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(a){switch(a.label){case 0:return[4,i._originValidation(e)];case 1:return a.sent(),o=wo(e,t,n,Vn(),r),aa().location.href=o,[2,new Promise((function(){}))]}var o}))}))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(xn(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(e){var t=this;return(0,u.default)((function(){var n,r;return(0,c.__generator)(this,(function(i){switch(i.label){case 0:return[4,ho(e)];case 1:return n=i.sent(),r=new Xa(e),n.register("authEvent",(function(t){return Mn(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),t.eventManagers[e._key()]={manager:r},t.iframes[e._key()]=n,[2,r]}}))}))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(To,{type:To},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[To];void 0!==i&&t(!!i),Cn(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return no.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Wr()||Ur()||Br()}}]),e}(),So=Eo,Oo=function(){"use strict";function e(t){(0,ie.default)(this,e),this.factorId=t}return(0,ae.default)(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Un("unexpected MultiFactorSessionType")}}}]),e}(),Ro=function(e){"use strict";fe(n,e);var t=Ie(n);function n(e){var r;return(0,ie.default)(this,n),(r=t.call(this,"phone")).credential=e,r}return(0,ae.default)(n,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return Qn(e,"POST","/v2/accounts/mfaEnrollment:finalize",$n(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Qn(e,"POST","/v2/accounts/mfaSignIn:finalize",$n(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(Oo);(function(){"use strict";function e(){(0,ie.default)(this,e)}return(0,ae.default)(e,null,[{key:"assertion",value:function(e){return Ro._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var Ao="@firebase/auth",Co="0.21.0",No=function(){"use strict";function e(t){(0,ie.default)(this,e),this.auth=t,this.internalListeners=new Map}return(0,ae.default)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var t=this;return(0,u.default)((function(){return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return t.assertAuthConfigured(),[4,t.auth._initializationPromise];case 1:return n.sent(),t.auth.currentUser?[4,t.auth.currentUser.getIdToken(e)]:[2,null];case 2:return[2,{accessToken:n.sent()}]}}))}))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){Mn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
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
var Lo,Po=Je("authIdTokenMaxAge")||300,Do=null,Mo=function(e){return function(){var t=(0,u.default)((function(t){var n,r,i,a;return(0,c.__generator)(this,(function(o){switch(o.label){case 0:return(r=t)?[4,t.getIdTokenResult()]:[3,2];case 1:r=o.sent(),o.label=2;case 2:return(i=(n=r)&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3)&&i>Po?[2]:(a=null==n?void 0:n.token,Do===a?[2]:(Do=a,[4,fetch(e,{method:a?"POST":"DELETE",headers:a?{Authorization:"Bearer ".concat(a)}:{}})]));case 3:return o.sent(),[2]}}))}));return function(e){return t.apply(this,arguments)}}()};Lo="Browser",Qt(new ct("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,o=a.apiKey,s=a.authDomain;return function(e,t){Mn(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),Mn(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:Lo,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gr(Lo)},i=new Jr(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),Qt(new ct("auth-internal",(function(e){return function(e){return new No(e)}(Xr(e.getProvider("auth").getImmediate()))}),"PRIVATE").setInstantiationMode("EXPLICIT")),sn(Ao,Co,
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
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Lo)),sn(Ao,Co,"esm2017");an({apiKey:"AIzaSyD_aK9Samiq36GmoUl35P_5NzpxQkwfvY8",authDomain:"filmoteka-75759.firebaseapp.com",projectId:"filmoteka-75759",storageBucket:"filmoteka-75759.appspot.com",messagingSenderId:"84456311588",appId:"1:84456311588:web:6fd62d962f70da880801b1",measurementId:"G-YF4EWZTT7X",databaseURL:"https://filmoteka-75759-default-rtdb.europe-west1.firebasedatabase.app/"});var Uo,xo,jo,Fo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:on(),t=Zt(e,"auth");if(t.isInitialized())return t.getImmediate();var n=Hn(e,{popupRedirectResolver:So,persistence:[ka,Qi,ea]}),r=Je("authTokenSyncURL");if(r){var i=Mo(r);Gi(n,i,(function(){return i(n.currentUser)})),Wi(n,(function(e){return i(e)}))}var a=Ge("auth");return a&&$r(n,"http://".concat(a)),n}(),Ho=new Ei,Vo=document.querySelector("#sign-in-google"),Bo=document.querySelector("#sign-in-form"),qo=document.querySelector(".logIn-modal"),zo=document.querySelector("#sign-out-btn"),Wo=document.querySelector("#logIn"),Go=document.querySelector("#form-modal-close"),Ko=document.querySelector(".js-form-auth__type-switch"),Jo=document.querySelector(".js-form__submit"),Xo=document.querySelector(".js-form-auth__title"),Yo="authorization";Uo=function(e){e?(Bo.style.display="none",Vo.style.display="none",zo.classList.remove("is-hidden"),Wo.classList.add("is-hidden"),qo.classList.add("is-hidden")):(Bo.style.display="block",Vo.style.display="block",zo.classList.add("is-hidden"),Wo.classList.remove("is-hidden"))},ut(Fo).onAuthStateChanged(Uo,xo,jo);var $o=function(){qo.classList.add("is-hidden"),Wo.classList.remove("is-hidden")},Qo=function(t,n){Bi(Fo,t.value,n.value).then((function(t){var n=t.user;console.log("New user: "+n.email),e(K).Notify.success("New user account logged in")})).catch((function(t){var n=t.code,r=t.message;console.log({errorCode:n,errorMessage:r}),e(K).Notify.failure(r)}))},Zo=function(t,n){zi(Fo,t.value,n.value).then((function(t){var n=t.user;console.log("user: "+n.email),e(K).Notify.success("You are log in")})).catch((function(t){var n=t.code,r=t.message;console.log({errorCode:n,errorMessage:r}),e(K).Notify.failure(r)}))},es=function(){xa(Fo,Ho).then((function(t){Ei.credentialFromResult(t).accessToken;var n=t.user;e(K).Notify.success("Hello ".concat(n.displayName)),console.log("user: "+n.email)})).catch((function(t){var n=t.code,r=t.message,i=t.customData.email,a=Ei.credentialFromError(t);console.log({errorCode:n,errorMessage:r,email:i,credential:a}),e(K).Notify.failure(r)}))},ts=function(){var e=document.querySelector(".js-conditions");"authorization"===Yo?(Yo="registration",e.removeAttribute("hidden")):(Yo="authorization",e.setAttribute("hidden",""));var t="authorization"===Yo?"Registration":"Sign In",n="authorization"===Yo?"Sign In":"Register now",r="authorization"===Yo?"Sign In":"Registration";Ko.textContent=t,Jo.textContent=n,Xo.textContent=r,Bo.reset()},ns=function(e){e.preventDefault();var t=e.target.elements,n=t.email,r=t.password;"registration"===Yo?(Qo(n,r),ts()):"authorization"===Yo&&Zo(n,r)};zo.addEventListener("click",(function(){Ki(Fo).then((function(){Bo.reset()}))})),Wo.addEventListener("click",(function(){qo.classList.remove("is-hidden"),Wo.classList.add("is-hidden"),Go.addEventListener("click",$o),Ko.addEventListener("click",ts),Bo.addEventListener("submit",ns),Vo.addEventListener("click",es)})),V()}();
//# sourceMappingURL=index.55fa8208.js.map
