var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in n){var s=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,s.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=s);var a=s("k3DwN"),i=s("2shzp");const d=document.querySelector(".loader"),r=async(e="https://api.themoviedb.org/3/movie/popular",t=1)=>{d.style.display="block";try{const n=await i.default.get(e,{params:{api_key:"b942b8bf626a04f48b07153a95ee51a0",page:t,language:"en-US"}});return d.style.display="none",n}catch(e){d.style.display="none",console.log(e)}};var o=s("4bJs7");let l="";const c=e=>{const t=A();return((e,t)=>{l="",e.map((n=>{t.map((t=>{t.id===n&&(n!=e[e.length-1]?l=l+t.name+", ":l+=t.name)}))}))})(e.genre_ids,t.data.genres),`\n<div class="movie-card">\n<img class="movie-card__image" alt="${e.title} movie" src=${(0,o.imageExists)("https://image.tmdb.org/t/p/w500",e.poster_path)}>\n  <div class="movie-card__label">\n    <p class="movie-card__title">${e.title}</p>\n    <p class="movie-card__genre-year">${l} | ${(0,o.getMovieYear)(e.release_date)}</p> \n    <p class="movie-card__id">${e.id}</p> \n  </div>\n</div>\n`},m=document.getElementById("pagination__numbers"),u=document.getElementById("next-button"),p=document.getElementById("prev-button");let g,h;const L=e=>{if(e==g){let e=document.createElement("span");e.className="pagination__numbers-ellipsis",e.innerHTML="&hellip;",e.classList.add("hidden-right"),m.appendChild(e)}const t=document.createElement("button");if(t.className="pagination__number",t.innerHTML=e,t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),1!=e&&e!=g||t.classList.add("hidden-mobile"),m.appendChild(t),1==e){let e=document.createElement("span");e.className="pagination__numbers-ellipsis",e.innerHTML="&hellip;",e.classList.add("hidden-left"),m.appendChild(e)}},v=e=>{m.innerHTML="",g=e;for(let t=1;t<=e;t++)L(t)},b=e=>{e.classList.add("disabled"),e.setAttribute("disabled",!0)},y=e=>{e.classList.remove("disabled"),e.removeAttribute("disabled")},f=e=>{h=e,(e=>{const t=document.querySelectorAll(".pagination__numbers-ellipsis");console.log(t),document.querySelectorAll(".pagination__number").forEach((n=>{const s=Number(n.getAttribute("page-index"));g<=7?(n.classList.remove("hidden"),t[0].classList.add("hidden-left"),t[1].classList.add("hidden-right")):e<=4?(t[0].classList.add("hidden-left"),t[1].classList.remove("hidden-right")):e>=g-3?(t[0].classList.remove("hidden-left"),t[1].classList.add("hidden-right")):(t[0].classList.remove("hidden-left"),t[1].classList.remove("hidden-right")),e<=3?(1==s&&n.classList.remove("hidden-mobile"),s==g&&n.classList.add("hidden-mobile"),s<=5||s==g?n.classList.remove("hidden"):n.classList.add("hidden")):e>=g-2?(1==s&&n.classList.add("hidden-mobile"),s==g&&n.classList.remove("hidden-mobile"),s>=g-4||1==s?n.classList.remove("hidden"):n.classList.add("hidden")):g<=7?(n.classList.remove("hidden"),t[0].classList.add("hidden-left"),t[1].classList.add("hidden-right"),1!=s&&s!=g||n.classList.remove("hidden-mobile")):1==s||s==g?(n.classList.remove("hidden"),n.classList.add("hidden-mobile")):s>=e-2&&s<=e+2?n.classList.remove("hidden"):n.classList.add("hidden")}))})(h),document.querySelectorAll(".pagination__number").forEach((e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==h&&e.classList.add("active")})),1===h?b(p):y(p),g===h?b(u):y(u)};var _=s("hkaSy");const E=document.querySelector(".main-box");let T,S,k,w=1;const M=async(e,t=1)=>{try{w=t;let n=await r(e,w);k=await(0,a.getGenresList)(),E.innerHTML="",n.data.results.map((e=>{E.insertAdjacentHTML("beforeend",c(e))})),n.data.total_pages<500?v(n.data.total_pages):v(500),f(w),S=async()=>{f(w-1),n=await r(e,--w),E.innerHTML="",n.data.results.map((e=>{E.insertAdjacentHTML("beforeend",c(e))})),(0,_.onTopScroll)()},p.addEventListener("click",S),T=async()=>{f(w+1),n=await r(e,++w),E.innerHTML="",n.data.results.map((e=>{E.insertAdjacentHTML("beforeend",c(e))})),(0,_.onTopScroll)()},u.addEventListener("click",T),document.querySelectorAll(".pagination__number").forEach((t=>{const s=Number(t.getAttribute("page-index"));s&&t.addEventListener("click",(async()=>{f(s),w=s,n=await r(e,w),E.innerHTML="",n.data.results.map((e=>{E.insertAdjacentHTML("beforeend",c(e))})),(0,_.onTopScroll)()}))}))}catch(e){console.log("err ",e)}},H=()=>{u.removeEventListener("click",T),p.removeEventListener("click",S)},A=()=>k;a=s("k3DwN");const q=document.querySelector(".genres-menu__select"),x=document.querySelector(".genres-menu__clear");let N="https://api.themoviedb.org/3/movie/popular",j=[],$=1;x.addEventListener("click",(e=>{j.forEach((e=>document.getElementById(e).classList.remove("focused-genre"))),j=[],N="https://api.themoviedb.org/3/movie/popular",H(),M(N)})),(0,a.getGenresList)().then((e=>{for(let t=0;t<e.data.genres.length;t++){const n=document.createElement("button");n.classList.add("genre"),n.id=e.data.genres[t].id,n.innerText=e.data.genres[t].name,n.addEventListener("click",(()=>{n.classList.add("focused-genre"),0===j?j.push(e.data.genres[t].id):j.includes(e.data.genres[t].id)?j.forEach(((s,a)=>{s==e.data.genres[t].id&&(console.log(e.data.genres[t].id),j.splice(a,1),n.classList.remove("focused-genre"))})):j.push(e.data.genres[t].id),j!==[]?($=1,N="https://api.themoviedb.org/3/discover/movie?&with_genres="+encodeURI(j.join(","))):N="https://api.themoviedb.org/3/movie/popular",H(),M(N,$)})),q.append(n)}})),s("4VpTM"),s("1wewW");i=s("2shzp");const C=document.querySelector(".loader");async function D(e,t=1){C.style.display="block";try{const n=await i.default.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"b942b8bf626a04f48b07153a95ee51a0",query:`${e}`,page:t}});return C.style.display="none",n.data}catch(e){C.style.display="none",console.error(e)}}_=s("hkaSy");const I=document.querySelector(".header__no-movies"),B=document.querySelector(".main-box"),U=document.querySelector("input[name='searchQuery']"),O=document.querySelector(".header__search-form-btn");let R=1;O.addEventListener("click",(async function(e){e.preventDefault(),I.innerHTML="",R=1;const t=U.value;if(t){let e=await D(t,R);e.results.length?(B.innerHTML="",console.log(e),e.results.map((e=>{B.insertAdjacentHTML("beforeend",c(e))})),e.total_pages<500?v(e.total_pages):v(500),f(R),p.addEventListener("click",(async()=>{f(R-1),e=await D(t,--R),B.innerHTML="",console.log(e),e.results.map((e=>{B.insertAdjacentHTML("beforeend",c(e))})),(0,_.onTopScroll)()})),u.addEventListener("click",(async()=>{f(R+1),e=await D(t,++R),B.innerHTML="",console.log(e),e.results.map((e=>{B.insertAdjacentHTML("beforeend",c(e))})),(0,_.onTopScroll)()})),document.querySelectorAll(".pagination__number").forEach((n=>{const s=Number(n.getAttribute("page-index"));s&&n.addEventListener("click",(async()=>{f(s),R=s,e=await D(t,R),B.innerHTML="",console.log(e),e.results.map((e=>{B.insertAdjacentHTML("beforeend",c(e))})),(0,_.onTopScroll)()}))}))):I.innerHTML="Search result not successful. Enter the correct movie name."}else alert("Enter movie title")})),s("hkaSy");const z=document.querySelector(".footer__authors"),G=document.querySelector(".students-modal__close-btn"),F=document.querySelector(".data-modal"),J=()=>{F.classList.add("is-hidden"),removeEventListener("keydown",P),removeEventListener("click",Q)},P=e=>{27===e.keyCode&&J()},Q=e=>{e.target.classList.contains("is-hidden")||e.target.closest(".students-modal")||"footer__authors"===e.target.className||J()};z.addEventListener("click",(()=>{F.classList.remove("is-hidden"),addEventListener("keydown",P),addEventListener("click",Q)})),G.addEventListener("click",J),s("2ix2C"),M();
//# sourceMappingURL=index.be687c0b.js.map