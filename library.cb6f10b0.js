var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequired7c6=o),o("k3DwN"),o("4VpTM");var n=o("2shzp"),r=o("eWCmQ"),l=o("4bJs7");const i=document.querySelector(".loader"),d=document.querySelector(".watched-list-btn"),s=document.querySelector(".queue-list-btn"),c=document.querySelector(".main-box"),u=document.querySelector(".queue-btn"),p=document.querySelector(".watched-btn");d.style.backgroundColor=" #ff6b01";const f=async e=>{i.style.display="block";try{let t=`https://api.themoviedb.org/3/movie/${e}?api_key=b942b8bf626a04f48b07153a95ee51a0&language=en-US`;const a=await n.default.get(t);return i.style.display="none",a.data}catch(e){i.style.display="none",console.error(e)}};let g=[];async function m(){if(s.removeAttribute("disabled"),c.innerHTML="",s.style.backgroundColor=" transparent",d.style.backgroundColor=" #ff6b01",null!==JSON.parse(localStorage.getItem("added-to-watched"))){if(0===JSON.parse(localStorage.getItem("added-to-watched")).length)r.Notify.info("There are no movies in your watched list!"),i.style.display="none";else{g=JSON.parse(localStorage.getItem("added-to-watched"));let e=[];for(let t=0;t<g.length;t++){let a=g[t],o=await f(a);e.push(o)}b(e)}d.setAttribute("disabled",!0)}else r.Notify.info("There are no movies in your watched list!")}m(),d.addEventListener("click",(e=>{e.preventDefault(),m()}));let y=[];function b(e){const t=e.map((e=>`\n<div class="movie-card">\n  <img class="movie-card__image" alt="${e.title} movie"src=${(0,l.imageExists)("https://image.tmdb.org/t/p/w500",e.poster_path)}>\n  <div class="movie-card__label">\n    <p class="movie-card__title">${e.original_title}</p>\n    <div>\n    <span class="movie-card__genre-year"> ${(e=>{let t="";return e.map((a=>{a!=e[e.length-1]?t=t+a.name+", ":t+=a.name})),t})(e.genres)}  | ${(0,l.getMovieYear)(e.release_date)}</span> \n    <span class="movie-card__vote">${e.vote_average.toFixed(1)}</span>\n    \n    </div>\n    <p class="movie-card__id">${e.id}</p> \n  </div>\n</div>\n`)).join("");c.innerHTML+=t}s.addEventListener("click",(e=>{e.preventDefault(),async function(){if(d.removeAttribute("disabled"),c.innerHTML="",d.style.backgroundColor="transparent",s.style.backgroundColor=" #ff6b01",null!==JSON.parse(localStorage.getItem("added-to-queue"))){if(0===JSON.parse(localStorage.getItem("added-to-queue")).length)r.Notify.info("There are no movies in your queue!"),i.style.display="none";else{y=JSON.parse(localStorage.getItem("added-to-queue"));let e=[];for(let t=0;t<y.length;t++){let a=y[t],o=await f(a);e.push(o)}b(e)}s.setAttribute("disabled",!0)}else r.Notify.info("There are no movies in your queue!")}()}));u.addEventListener("click",(e=>{"transparent"!==s.style.backgroundColor&&(s.removeAttribute("disabled"),s.click())})),p.addEventListener("click",(e=>{"transparent"!==d.style.backgroundColor&&(d.removeAttribute("disabled"),d.click())})),o("1wewW"),o("2ix2C"),o("hkaSy");
//# sourceMappingURL=library.cb6f10b0.js.map
