!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("80lIJ"),r("5PK8J");var a=r("7pbsT"),o=r("4tSb9"),l=r("dIxxU"),i=r("e4Itz"),c=r("jcFG7"),s=r("dEmTs"),u=document.querySelector(".loader"),d=document.querySelector(".watched-list-btn"),g=document.querySelector(".queue-list-btn"),p=document.querySelector(".main-box"),f=document.querySelector(".queue-btn"),b=document.querySelector(".watched-btn");d.style.backgroundColor=" #ff6b01";var v,h=20,m=(v=(0,a.default)((function(e){var t,n,r;return(0,o.__generator)(this,(function(a){switch(a.label){case 0:u.style.display="block",a.label=1;case 1:return a.trys.push([1,3,,4]),t="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("b942b8bf626a04f48b07153a95ee51a0","&language=en-US"),[4,l.default.get(t)];case 2:return n=a.sent(),u.style.display="none",u.style.overflow="hidden",[2,n.data];case 3:return r=a.sent(),u.style.display="none",u.style.overflow="hidden",console.error(r),[3,4];case 4:return[2]}}))})),function(e){return v.apply(this,arguments)}),y=[];function _(){return T.apply(this,arguments)}function T(){return(T=(0,a.default)((function(){var e,t,n,r,l,i,f,b;return(0,o.__generator)(this,(function(v){switch(v.label){case 0:return g.removeAttribute("disabled"),p.innerHTML="",d.style.backgroundColor=" #ff6b01",g.style.backgroundColor=" transparent",d.style.backgroundColor=" #ff6b01",g.textContent="QUEUE",e=0,t=1,c.getPaginationNumbers(e),c.setCurrentPage(t),null===JSON.parse(localStorage.getItem("added-to-watched"))?[3,7]:(n=JSON.parse(localStorage.getItem("added-to-watched")).length,0!==JSON.parse(localStorage.getItem("added-to-watched")).length?[3,1]:(p.insertAdjacentHTML("beforeend",'<p class="alert">There are no movies in your watched list!</p>'),d.textContent="WATCHED",u.style.display="none",[3,6]));case 1:p.innerHTML="",y=JSON.parse(localStorage.getItem("added-to-watched")),r=[],i=0,v.label=2;case 2:return i<y.length?(f=y[i],[4,m(f)]):[3,5];case 3:b=v.sent(),r.push(b),v.label=4;case 4:return i++,[3,2];case 5:e=Math.ceil(r.length/h),E(l=r.slice((t-1)*h,t*h)),c.getPaginationNumbers(e),c.setCurrentPage(t),c.prevButton.addEventListener("click",(0,a.default)((function(){return(0,o.__generator)(this,(function(e){return c.setCurrentPage(--t),l=r.slice((t-1)*h,t*h),p.innerHTML="",console.log(l),E(l),(0,s.onTopScroll)(),[2]}))}))),c.nextButton.addEventListener("click",(0,a.default)((function(){return(0,o.__generator)(this,(function(e){return c.setCurrentPage(++t),l=r.slice((t-1)*h,t*h),p.innerHTML="",console.log(l),E(l),(0,s.onTopScroll)(),[2]}))}))),document.querySelectorAll(".pagination__number").forEach((function(e){var n=Number(e.getAttribute("page-index"));n&&e.addEventListener("click",(0,a.default)((function(){return(0,o.__generator)(this,(function(e){return c.setCurrentPage(n),t=n,l=r.slice((t-1)*h,t*h),p.innerHTML="",E(l),(0,s.onTopScroll)(),[2]}))})))})),d.textContent="WATCHED : ".concat(n),v.label=6;case 6:return[3,8];case 7:p.insertAdjacentHTML("beforeend",'<p class="alert">There are no movies in your watched list!</p>'),d.textContent="WATCHED",u.style.display="none",v.label=8;case 8:return d.setAttribute("disabled",!0),[2]}}))}))).apply(this,arguments)}_(),d.addEventListener("click",(function(e){e.preventDefault(),_()}));var S=[];function C(){return(C=(0,a.default)((function(){var e,t,n,r,l,i,f,b;return(0,o.__generator)(this,(function(v){switch(v.label){case 0:return d.removeAttribute("disabled"),p.innerHTML="",d.style.backgroundColor="transparent",g.style.backgroundColor=" #ff6b01",d.textContent="WATCHED",e=0,t=1,c.getPaginationNumbers(e),c.setCurrentPage(t),null===JSON.parse(localStorage.getItem("added-to-queue"))?[3,7]:(n=JSON.parse(localStorage.getItem("added-to-queue")).length,0!==JSON.parse(localStorage.getItem("added-to-queue")).length?[3,1]:(p.insertAdjacentHTML("beforeend",'<p class="alert">There are no movies in your queue!</p>'),g.textContent="QUEUE",u.style.display="none",[3,6]));case 1:p.innerHTML="",S=JSON.parse(localStorage.getItem("added-to-queue")),r=[],i=0,v.label=2;case 2:return i<S.length?(f=S[i],[4,m(f)]):[3,5];case 3:b=v.sent(),r.push(b),v.label=4;case 4:return i++,[3,2];case 5:e=Math.ceil(r.length/h),E(l=r.slice((t-1)*h,t*h)),c.getPaginationNumbers(e),c.setCurrentPage(t),c.prevButton.addEventListener("click",(0,a.default)((function(){return(0,o.__generator)(this,(function(e){return c.setCurrentPage(--t),l=r.slice((t-1)*h,t*h),p.innerHTML="",console.log(l),E(l),(0,s.onTopScroll)(),[2]}))}))),c.nextButton.addEventListener("click",(0,a.default)((function(){return(0,o.__generator)(this,(function(e){return c.setCurrentPage(++t),l=r.slice((t-1)*h,t*h),p.innerHTML="",console.log(l),E(l),(0,s.onTopScroll)(),[2]}))}))),document.querySelectorAll(".pagination__number").forEach((function(e){var n=Number(e.getAttribute("page-index"));n&&e.addEventListener("click",(0,a.default)((function(){return(0,o.__generator)(this,(function(e){return c.setCurrentPage(n),t=n,l=r.slice((t-1)*h,t*h),p.innerHTML="",E(l),(0,s.onTopScroll)(),[2]}))})))})),g.textContent="QUEUE : ".concat(n),v.label=6;case 6:return[3,8];case 7:p.insertAdjacentHTML("beforeend",'<p class="alert">There are no movies in your queue!</p>'),g.textContent="QUEUE",u.style.display="none",v.label=8;case 8:return g.setAttribute("disabled",!0),[2]}}))}))).apply(this,arguments)}function E(e){var t=e.map((function(e){return'\n<div class="movie-card">\n  <img class="movie-card__image" alt="'.concat(e.title,' movie"src=').concat((0,i.imageExists)("https://image.tmdb.org/t/p/w500",e.poster_path),'>\n  <div class="movie-card__label">\n    <p class="movie-card__title">').concat(e.original_title,'</p>\n    <div>\n    <span class="movie-card__genre-year"> ').concat((t=e.genres,n="",t.map((function(e){e!=t[t.length-1]?n=n+e.name+", ":n+=e.name})),n),"  | ").concat((0,i.getMovieYear)(e.release_date),'</span> \n    <span class="movie-card__vote">').concat(e.vote_average.toFixed(1),'</span>\n    \n    </div>\n    <p class="movie-card__id">').concat(e.id,"</p> \n  </div>\n</div>\n");var t,n})).join("");p.innerHTML+=t}g.addEventListener("click",(function(e){e.preventDefault(),function(){C.apply(this,arguments)}()}));f.addEventListener("click",(function(e){"transparent"!==g.style.backgroundColor&&(g.removeAttribute("disabled"),g.click())})),b.addEventListener("click",(function(e){"transparent"!==d.style.backgroundColor&&(d.removeAttribute("disabled"),d.click())})),r("5h39L"),r("iNWLi"),r("668Z7"),r("dEmTs"),r("iN9zG")}();
//# sourceMappingURL=library.9a2ad61d.js.map