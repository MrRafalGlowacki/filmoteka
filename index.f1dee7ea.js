var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in n){var s=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,s.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=s);var a=s("k3DwN"),i=s("2shzp");const d=document.querySelector(".loader"),r=async(e="https://api.themoviedb.org/3/movie/popular",t=1)=>{d.style.display="block";try{const n=await i.default.get(e,{params:{api_key:"b942b8bf626a04f48b07153a95ee51a0",page:t,language:"en-US"}});return d.style.display="none",n}catch(e){d.style.display="none",console.log(e)}};var o=s("4bJs7");let l="";const c=e=>{const t=A();return((e,t)=>{l="",e.map((n=>{t.map((t=>{t.id===n&&(n!=e[e.length-1]?l=l+t.name+", ":l+=t.name)}))}))})(e.genre_ids,t.data.genres),`\n<div class="movie-card">\n<img class="movie-card__image" alt="${e.title} movie" src=${(0,o.imageExists)("https://image.tmdb.org/t/p/w500",e.poster_path)}>\n  <div class="movie-card__label">\n    <p class="movie-card__title">${e.title}</p>\n    <p class="movie-card__genre-year">${l} | ${(0,o.getMovieYear)(e.release_date)}</p> \n    <p class="movie-card__id">${e.id}</p> \n  </div>\n</div>\n`},m=document.getElementById("pagination__numbers"),u=document.getElementById("next-button"),p=document.getElementById("prev-button");let h,g;const v=e=>{if(e==h){let e=document.createElement("span");e.className="pagination__numbers-ellipsis",e.innerHTML="&hellip;",e.classList.add("hidden-right"),m.appendChild(e)}const t=document.createElement("button");if(t.className="pagination__number",t.innerHTML=e,t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),1!=e&&e!=h||t.classList.add("hidden-mobile"),m.appendChild(t),1==e){let e=document.createElement("span");e.className="pagination__numbers-ellipsis",e.innerHTML="&hellip;",e.classList.add("hidden-left"),m.appendChild(e)}},L=e=>{m.innerHTML="",h=e;for(let t=1;t<=e;t++)v(t)},b=e=>{e.classList.add("disabled"),e.setAttribute("disabled",!0)},y=e=>{e.classList.remove("disabled"),e.removeAttribute("disabled")},f=e=>{g=e,(e=>{const t=document.querySelectorAll(".pagination__numbers-ellipsis");document.querySelectorAll(".pagination__number").forEach((n=>{const s=Number(n.getAttribute("page-index"));h<=7?(n.classList.remove("hidden"),t[0].classList.add("hidden-left"),t[1].classList.add("hidden-right")):e<=4?(t[0].classList.add("hidden-left"),t[1].classList.remove("hidden-right")):e>=h-3?(t[0].classList.remove("hidden-left"),t[1].classList.add("hidden-right")):(t[0].classList.remove("hidden-left"),t[1].classList.remove("hidden-right")),e<=3?(1==s&&n.classList.remove("hidden-mobile"),s==h&&n.classList.add("hidden-mobile"),s<=5||s==h?n.classList.remove("hidden"):n.classList.add("hidden"),h<=3&&n.classList.remove("hidden-mobile")):e>=h-2?(1==s&&n.classList.add("hidden-mobile"),s==h&&n.classList.remove("hidden-mobile"),s>=h-4||1==s?n.classList.remove("hidden"):n.classList.add("hidden")):h<=7?(n.classList.remove("hidden"),t[0].classList.add("hidden-left"),t[1].classList.add("hidden-right"),1!=s&&s!=h||n.classList.remove("hidden-mobile")):1==s||s==h?(n.classList.remove("hidden"),n.classList.add("hidden-mobile")):s>=e-2&&s<=e+2?n.classList.remove("hidden"):n.classList.add("hidden")}))})(g),document.querySelectorAll(".pagination__number").forEach((e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==g&&e.classList.add("active")})),1===g?b(p):y(p),h===g?b(u):y(u),h<=1&&b(u)};var _=s("hkaSy");const E=document.querySelector(".main-box");let T,S,k,w=1;const M=async(e,t=1)=>{try{w=t;let n=await r(e,w);k=await(0,a.getGenresList)(),E.innerHTML="",n.data.results.map((e=>{E.insertAdjacentHTML("beforeend",c(e))})),n.data.total_pages<500?L(n.data.total_pages):L(500),f(w),S=async()=>{f(w-1),n=await r(e,--w),E.innerHTML="",n.data.results.map((e=>{E.insertAdjacentHTML("beforeend",c(e))})),(0,_.onTopScroll)()},p.addEventListener("click",S),T=async()=>{f(w+1),n=await r(e,++w),E.innerHTML="",n.data.results.map((e=>{E.insertAdjacentHTML("beforeend",c(e))})),(0,_.onTopScroll)()},u.addEventListener("click",T),document.querySelectorAll(".pagination__number").forEach((t=>{const s=Number(t.getAttribute("page-index"));s&&t.addEventListener("click",(async()=>{f(s),w=s,n=await r(e,w),E.innerHTML="",n.data.results.map((e=>{E.insertAdjacentHTML("beforeend",c(e))})),(0,_.onTopScroll)()}))}))}catch(e){console.log("err ",e)}},H=()=>{u.removeEventListener("click",T),p.removeEventListener("click",S)},A=()=>k;a=s("k3DwN");const q=document.querySelector(".genres-menu__select"),x=document.querySelector(".genres-menu__clear");let N="https://api.themoviedb.org/3/movie/popular",j=[],C=1;x.addEventListener("click",(e=>{j.forEach((e=>document.getElementById(e).classList.remove("focused-genre"))),j=[],N="https://api.themoviedb.org/3/movie/popular",H(),M(N)})),(0,a.getGenresList)().then((e=>{for(let t=0;t<e.data.genres.length;t++){const n=document.createElement("button");n.classList.add("genre"),n.id=e.data.genres[t].id,n.innerText=e.data.genres[t].name,n.addEventListener("click",(()=>{n.classList.add("focused-genre"),0===j?j.push(e.data.genres[t].id):j.includes(e.data.genres[t].id)?j.forEach(((s,a)=>{s==e.data.genres[t].id&&(j.splice(a,1),n.classList.remove("focused-genre"))})):j.push(e.data.genres[t].id),j!==[]?(C=1,N="https://api.themoviedb.org/3/discover/movie?&with_genres="+encodeURI(j.join(","))):N="https://api.themoviedb.org/3/movie/popular",H(),M(N,C)})),q.append(n)}})),s("4VpTM"),s("1wewW");i=s("2shzp");const $=document.querySelector(".loader");async function D(e,t=1){$.style.display="block";try{const n=await i.default.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"b942b8bf626a04f48b07153a95ee51a0",query:`${e}`,page:t}});return $.style.display="none",n.data}catch(e){$.style.display="none",console.error(e)}}var I=s("eWCmQ");_=s("hkaSy");const B=document.querySelector(".header__no-movies"),U=document.querySelector(".main-box"),O=document.querySelector("input[name='searchQuery']"),R=document.querySelector(".header__search-form-btn");let z=1;R.addEventListener("click",(async function(e){e.preventDefault(),B.innerHTML="",z=1;const t=O.value;if(t){let e=await D(t,z);e.results.length?(U.innerHTML="",e.results.map((e=>{U.insertAdjacentHTML("beforeend",c(e))})),e.total_pages<500?L(e.total_pages):L(500),f(z),p.addEventListener("click",(async()=>{f(z-1),e=await D(t,--z),U.innerHTML="",console.log(e),e.results.map((e=>{U.insertAdjacentHTML("beforeend",c(e))})),(0,_.onTopScroll)()})),u.addEventListener("click",(async()=>{f(z+1),e=await D(t,++z),U.innerHTML="",console.log(e),e.results.map((e=>{U.insertAdjacentHTML("beforeend",c(e))})),(0,_.onTopScroll)()})),document.querySelectorAll(".pagination__number").forEach((n=>{const s=Number(n.getAttribute("page-index"));s&&n.addEventListener("click",(async()=>{f(s),z=s,e=await D(t,z),U.innerHTML="",console.log(e),e.results.map((e=>{U.insertAdjacentHTML("beforeend",c(e))})),(0,_.onTopScroll)()}))}))):B.innerHTML="Search result not successful. Enter the correct movie name."}else I.Notify.info("Enter movie title")})),s("hkaSy");const G=document.querySelector(".footer__authors"),Q=document.querySelector(".students-modal__close-btn"),W=document.querySelector(".data-modal"),F=()=>{W.classList.add("is-hidden"),removeEventListener("keydown",J),removeEventListener("click",P)},J=e=>{27===e.keyCode&&F()},P=e=>{e.target.classList.contains("is-hidden")||e.target.closest(".students-modal")||"footer__authors"===e.target.className||F()};G.addEventListener("click",(()=>{W.classList.remove("is-hidden"),addEventListener("keydown",J),addEventListener("click",P)})),Q.addEventListener("click",F),s("2ix2C"),M();
//# sourceMappingURL=index.f1dee7ea.js.map