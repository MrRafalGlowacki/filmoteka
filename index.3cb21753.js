!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var a,s,i,o,c,d,l=r("7pbsT"),u=r("4tSb9"),m=r("80lIJ"),p=(l=r("7pbsT"),u=r("4tSb9"),r("dIxxU")),f=document.querySelector(".loader"),h="b942b8bf626a04f48b07153a95ee51a0",g=(a=(0,l.default)((function(){var e,t,n,r,a=arguments;return(0,u.__generator)(this,(function(s){switch(s.label){case 0:e=a.length>0&&void 0!==a[0]?a[0]:"https://api.themoviedb.org/3/movie/popular",t=a.length>1&&void 0!==a[1]?a[1]:1,f.style.display="block",s.label=1;case 1:return s.trys.push([1,3,,4]),[4,p.default.get(e,{params:{api_key:"".concat(h),page:t,language:"en-US"}})];case 2:return n=s.sent(),f.style.display="none",[2,n];case 3:return r=s.sent(),f.style.display="none",console.log(r),[3,4];case 4:return[2]}}))})),function(){return a.apply(this,arguments)}),v=r("e4Itz"),b="",L=function(e){var t=I();return function(e,t){b="",e.map((function(n){t.map((function(t){t.id===n&&(n!=e[e.length-1]?b=b+t.name+", ":b+=t.name)}))}))}(e.genre_ids,t.data.genres),'\n<div class="movie-card">\n<img class="movie-card__image" alt="'.concat(e.title,' movie" src=').concat((0,v.imageExists)("https://image.tmdb.org/t/p/w500",e.poster_path),'>\n  <div class="movie-card__label">\n    <p class="movie-card__title">').concat(e.title,'</p>\n    <p class="movie-card__genre-year">').concat(b," | ").concat((0,v.getMovieYear)(e.release_date),'</p> \n    <p class="movie-card__id">').concat(e.id,"</p> \n  </div>\n</div>\n")},_=document.getElementById("pagination__numbers"),y=document.getElementById("next-button"),E=document.getElementById("prev-button"),T=function(e){if(e==s){var t=document.createElement("span");t.className="pagination__numbers-ellipsis",t.innerHTML="&hellip;",t.classList.add("hidden-right"),_.appendChild(t)}var n=document.createElement("button");if(n.className="pagination__number",n.innerHTML=e,n.setAttribute("page-index",e),n.setAttribute("aria-label","Page "+e),1!=e&&e!=s||n.classList.add("hidden-mobile"),_.appendChild(n),1==e){var r=document.createElement("span");r.className="pagination__numbers-ellipsis",r.innerHTML="&hellip;",r.classList.add("hidden-left"),_.appendChild(r)}},S=function(e){_.innerHTML="",s=e;for(var t=1;t<=e;t++)T(t)},M=function(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)},k=function(e){e.classList.remove("disabled"),e.removeAttribute("disabled")},H=function(e){(function(e){var t=document.querySelectorAll(".pagination__numbers-ellipsis");console.log(t),document.querySelectorAll(".pagination__number").forEach((function(n){var r=Number(n.getAttribute("page-index"));s<=7?(n.classList.remove("hidden"),t[0].classList.add("hidden-left"),t[1].classList.add("hidden-right")):e<=4?(t[0].classList.add("hidden-left"),t[1].classList.remove("hidden-right")):e>=s-3?(t[0].classList.remove("hidden-left"),t[1].classList.add("hidden-right")):(t[0].classList.remove("hidden-left"),t[1].classList.remove("hidden-right")),e<=3?(1==r&&n.classList.remove("hidden-mobile"),r==s&&n.classList.add("hidden-mobile"),r<=5||r==s?n.classList.remove("hidden"):n.classList.add("hidden"),s<=3&&n.classList.remove("hidden-mobile")):e>=s-2?(1==r&&n.classList.add("hidden-mobile"),r==s&&n.classList.remove("hidden-mobile"),r>=s-4||1==r?n.classList.remove("hidden"):n.classList.add("hidden")):s<=7?(n.classList.remove("hidden"),t[0].classList.add("hidden-left"),t[1].classList.add("hidden-right"),1!=r&&r!=s||n.classList.remove("hidden-mobile")):1==r||r==s?(n.classList.remove("hidden"),n.classList.add("hidden-mobile")):r>=e-2&&r<=e+2?n.classList.remove("hidden"):n.classList.add("hidden")}))})(i=e),document.querySelectorAll(".pagination__number").forEach((function(e){e.classList.remove("active"),Number(e.getAttribute("page-index"))==i&&e.classList.add("active")})),1===i?M(E):k(E),s===i?M(y):k(y),s<=1?M(y):k(y)},A=r("dEmTs"),q=document.querySelector(".main-box"),w=1,x=function(){var e=(0,l.default)((function(e){var t,n,r,a=arguments;return(0,u.__generator)(this,(function(s){switch(s.label){case 0:t=a.length>1&&void 0!==a[1]?a[1]:1,s.label=1;case 1:return s.trys.push([1,4,,5]),[4,g(e,w=t)];case 2:return n=s.sent(),[4,(0,m.getGenresList)()];case 3:return d=s.sent(),q.innerHTML="",n.data.results.map((function(e){q.insertAdjacentHTML("beforeend",L(e))})),n.data.total_pages<500?S(n.data.total_pages):S(500),H(w),c=(0,l.default)((function(){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return H(w-1),[4,g(e,--w)];case 1:return n=t.sent(),q.innerHTML="",n.data.results.map((function(e){q.insertAdjacentHTML("beforeend",L(e))})),(0,A.onTopScroll)(),[2]}}))})),E.addEventListener("click",c),o=(0,l.default)((function(){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return H(w+1),[4,g(e,++w)];case 1:return n=t.sent(),q.innerHTML="",n.data.results.map((function(e){q.insertAdjacentHTML("beforeend",L(e))})),(0,A.onTopScroll)(),[2]}}))})),y.addEventListener("click",o),document.querySelectorAll(".pagination__number").forEach((function(t){var r=Number(t.getAttribute("page-index"));r&&t.addEventListener("click",(0,l.default)((function(){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return H(r),[4,g(e,w=r)];case 1:return n=t.sent(),q.innerHTML="",n.data.results.map((function(e){q.insertAdjacentHTML("beforeend",L(e))})),(0,A.onTopScroll)(),[2]}}))})))})),[3,5];case 4:return r=s.sent(),console.log("err ",r),[3,5];case 5:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),N=function(){y.removeEventListener("click",o),E.removeEventListener("click",c)},I=function(){return d},j=(m=r("80lIJ"),document.querySelector(".genres-menu__select")),U=document.querySelector(".genres-menu__clear"),C="https://api.themoviedb.org/3/movie/popular",B=[],D=1;U.addEventListener("click",(function(e){B.forEach((function(e){return document.getElementById(e).classList.remove("focused-genre")})),B=[],C="https://api.themoviedb.org/3/movie/popular",N(),x(C)})),(0,m.getGenresList)().then((function(e){for(var t=function(t){var n=document.createElement("button");n.classList.add("genre"),n.id=e.data.genres[t].id,n.innerText=e.data.genres[t].name,n.addEventListener("click",(function(){n.classList.add("focused-genre"),0===B?B.push(e.data.genres[t].id):B.includes(e.data.genres[t].id)?B.forEach((function(r,a){r==e.data.genres[t].id&&(console.log(e.data.genres[t].id),B.splice(a,1),n.classList.remove("focused-genre"))})):B.push(e.data.genres[t].id),B!==[]?(D=1,C="https://api.themoviedb.org/3/discover/movie?&with_genres="+encodeURI(B.join(","))):C="https://api.themoviedb.org/3/movie/popular",N(),x(C,D)})),j.append(n)},n=0;n<e.data.genres.length;n++)t(n)})),r("5PK8J"),r("5h39L");l=r("7pbsT"),u=r("4tSb9"),l=r("7pbsT"),u=r("4tSb9"),p=r("dIxxU");var J="b942b8bf626a04f48b07153a95ee51a0",O="https://api.themoviedb.org/3/search/movie",R=document.querySelector(".loader");function G(e){return P.apply(this,arguments)}function P(){return P=(0,l.default)((function(e){var t,n,r,a=arguments;return(0,u.__generator)(this,(function(s){switch(s.label){case 0:t=a.length>1&&void 0!==a[1]?a[1]:1,R.style.display="block",s.label=1;case 1:return s.trys.push([1,3,,4]),[4,p.default.get(O,{params:{api_key:"".concat(J),query:"".concat(e),page:t}})];case 2:return n=s.sent(),R.style.display="none",[2,n.data];case 3:return r=s.sent(),R.style.display="none",console.error(r),[3,4];case 4:return[2]}}))})),P.apply(this,arguments)}A=r("dEmTs");var z=document.querySelector(".header__no-movies"),F=document.querySelector(".main-box"),K=document.querySelector("input[name='searchQuery']"),Q=document.querySelector(".header__search-form-btn"),W=1;function Y(){return(Y=(0,l.default)((function(e){var t,n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return e.preventDefault(),z.innerHTML="",W=1,(t=K.value)?[3,1]:(alert("Enter movie title"),[3,3]);case 1:return[4,G(t,W)];case 2:(n=r.sent()).results.length?(F.innerHTML="",console.log(n),n.results.map((function(e){F.insertAdjacentHTML("beforeend",L(e))})),n.total_pages<500?S(n.total_pages):S(500),H(W),E.addEventListener("click",(0,l.default)((function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return H(W-1),[4,G(t,--W)];case 1:return n=e.sent(),F.innerHTML="",console.log(n),n.results.map((function(e){F.insertAdjacentHTML("beforeend",L(e))})),(0,A.onTopScroll)(),[2]}}))}))),y.addEventListener("click",(0,l.default)((function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return H(W+1),[4,G(t,++W)];case 1:return n=e.sent(),F.innerHTML="",console.log(n),n.results.map((function(e){F.insertAdjacentHTML("beforeend",L(e))})),(0,A.onTopScroll)(),[2]}}))}))),document.querySelectorAll(".pagination__number").forEach((function(e){var r=Number(e.getAttribute("page-index"));r&&e.addEventListener("click",(0,l.default)((function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return H(r),[4,G(t,W=r)];case 1:return n=e.sent(),F.innerHTML="",console.log(n),n.results.map((function(e){F.insertAdjacentHTML("beforeend",L(e))})),(0,A.onTopScroll)(),[2]}}))})))}))):z.innerHTML="Search result not successful. Enter the correct movie name.",r.label=3;case 3:return[2]}}))}))).apply(this,arguments)}Q.addEventListener("click",(function(e){return Y.apply(this,arguments)})),r("dEmTs");var V=document.querySelector(".footer__authors"),X=document.querySelector(".students-modal__close-btn"),Z=document.querySelector(".data-modal"),$=function(){Z.classList.add("is-hidden"),removeEventListener("keydown",ee),removeEventListener("click",te)},ee=function(e){27===e.keyCode&&$()},te=function(e){e.target.classList.contains("is-hidden")||e.target.closest(".students-modal")||"footer__authors"===e.target.className||$()};V.addEventListener("click",(function(){Z.classList.remove("is-hidden"),addEventListener("keydown",ee),addEventListener("click",te)})),X.addEventListener("click",$),r("iNWLi"),x()}();
//# sourceMappingURL=index.3cb21753.js.map
