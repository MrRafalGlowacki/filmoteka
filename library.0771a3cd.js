!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var r,o=a("7pbsT"),l=a("4tSb9"),i=a("dIxxU"),c=a("iU1Pc"),s=document.querySelector(".loader"),u=document.querySelector(".watched-btn"),d=document.querySelector(".queue-btn"),p=document.querySelector(".main"),f=(r=(0,o.default)((function(e){var t,n,a;return(0,l.__generator)(this,(function(r){switch(r.label){case 0:s.style.display="block",r.label=1;case 1:return r.trys.push([1,3,,4]),t="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("b942b8bf626a04f48b07153a95ee51a0","&language=en-US"),[4,i.default.get(t)];case 2:return n=r.sent(),s.style.display="none",[2,n.data];case 3:return a=r.sent(),s.style.display="none",console.error(a),[3,4];case 4:return[2]}}))})),function(e){return r.apply(this,arguments)}),b=[];function g(){return(g=(0,o.default)((function(){var e,t,n,a;return(0,l.__generator)(this,(function(r){switch(r.label){case 0:return currentPage=1,d.removeAttribute("disabled"),p.innerHTML="",null!==localStorage.getItem("added-to-watched")?[3,1]:(c.Notify.info("There are no movies in your watched list!"),[3,6]);case 1:b=JSON.parse(localStorage.getItem("added-to-watched")),console.log(b),e=[],t=0,r.label=2;case 2:return t<b.length?(n=b[t],[4,f(n)]):[3,5];case 3:a=r.sent(),e.push(a),r.label=4;case 4:return t++,[3,2];case 5:m(e),r.label=6;case 6:return u.setAttribute("disabled",!0),[2]}}))}))).apply(this,arguments)}u.addEventListener("click",(function(e){e.preventDefault(),function(){g.apply(this,arguments)}()}));var h=[];function v(){return(v=(0,o.default)((function(){var e,t,n,a;return(0,l.__generator)(this,(function(r){switch(r.label){case 0:return u.removeAttribute("disabled"),currentPage=1,p.innerHTML="",null!==localStorage.getItem("added-to-queue")?[3,1]:(c.Notify.info("There are no movies in your queue!"),[3,6]);case 1:h=JSON.parse(localStorage.getItem("added-to-queue")),e=[],t=0,r.label=2;case 2:return t<h.length?(n=h[t],[4,f(n)]):[3,5];case 3:a=r.sent(),e.push(a),r.label=4;case 4:return t++,[3,2];case 5:m(e),r.label=6;case 6:return d.setAttribute("disabled",!0),[2]}}))}))).apply(this,arguments)}function m(e){var t=e.map((function(e){return'\n<div class="movie-card">\n  <img class="movie-card__image" alt="" src=\'https://image.tmdb.org/t/p/w500/'.concat(e.poster_path,'\'}>\n  <div class="movie-card__label">\n    <p class="movie-card__title">').concat(e.original_title,'</p>\n    \n    <p class="movie-card__id">').concat(e.id,"</p> \n  </div>\n</div>\n")})).join("");p.innerHTML+=t}console.log(h.length),d.addEventListener("click",(function(e){e.preventDefault(),function(){v.apply(this,arguments)}()}))}();
//# sourceMappingURL=library.0771a3cd.js.map
