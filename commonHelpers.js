import{S as d,N as u}from"./assets/vendor-69429a45.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const p=[{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"../img/team/ilona-ratushniak1x.png",large:"../img/team/ilona-ratushniak@2x.png",userName:"Ilona Ratushniak",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"../img/team/maksym-nahornyi1x.png",large:"../img/team/maksym-nahornyi@2x.png",userName:"Maksym Nahornyi",developer:"PM"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"../img/team/danulo-yanishevskiy1x.png",large:"../img/team/danulo-yanishevskiy@2x.png",userName:"Yanishevskiy Danulo",developer:"frontend"},{url:"http://linkedin.com/in/vladyslav-hnatok-671a092b4",small:"../img/team/vladyslav-marchenko1x.png",large:"../img/team/vladyslav-hnatok@2x.png",userName:"Vladyslav Hnatok",developer:"frontend"},{url:"www.linkedin.com/in/sofiia-koval-19151b296",small:"../img/team/sofiia-koval1x.png",large:"../img/team/sofiia-koval@2x.png",userName:"Sofiia Koval",developer:"frontend"},{url:"https://www.linkedin.com/in/sergiy-myronenko-5668b9292/",small:"../img/team/sergiy-myronenko1x.png",large:"../img/team/sergiy-myronenko@2x.png",userName:"Sergiy Myronenko",developer:"frontend"},{url:"https://www.linkedin.com/in/oleksandr-horobiy/",small:"../img/team/oleksandr-horobiy1x.png",large:"../img/team/oleksandr-horobiy@2x.png",userName:"Oleksandr Horobiy",developer:"frontend"},{url:"https://www.linkedin.com/in/oleksandra-shevchuk-8270b62a0/",small:"../img/team/oleksandra-shevchuk1x.png",large:"../img/team/oleksandra-shevchuk@2x.png",userName:"Oleksandra Shevchuk",developer:"frontend"},{url:"https://www.linkedin.com/in/mykyta-poddubnyi-3897032bb/",small:"../img/team/mykyta-poddubnyi1x.png",large:"../img/team/mykyta-poddubnyi@2x.png",userName:"Mykyta Poddubnyi",developer:"frontend"},{url:"https://www.linkedin.com/in/olenaishchenko/",small:"../img/team/olena-ishchenko1x.png",large:"../img/team/olena-ishchenko@2x.png",userName:"Olena Ishchenko",developer:"frontend"},{url:"https://www.linkedin.com/in/-svitlana-klymenko/",small:"../img/team/svitlana-klymenko1x.png",large:"../img/team/svitlana-klymenko@2x.png",userName:"Svitlana Klymenko",developer:"frontend"},{url:"https://www.linkedin.com/in/alla-sopinska-92a5532b1/",small:"../img/team/alla-sopinska1x.png",large:"../img/team/alla-sopinska@2x.png",userName:"Alla Sopinska",developer:"frontend"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"../img/team/nataliia-boicheniuk1x.png",large:"../img/team/nataliia-boicheniuk@2x.png",userName:"Nataliia Boicheniuk",developer:"QA"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"../img/team/svetlana-skvortsova1x.png",large:"../img/team/svetlana-skvortsova@2x.png",userName:"Svetlana Skvortsova",developer:"QA"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"../img/team/alyona-maslianyk1x.png",large:"../img/team/alyona-maslianyk@2x.png",userName:"Alyona Maslianyk",developer:"QA"},{url:"https://www.linkedin.com/in/oleh-khimchenko-4a25aa296/  ",small:"../img/team/oleh-khimchenko1x.png",large:"../img/team/oleh-khimchenko@2x.png",userName:"Oleh Khimchenko",developer:"QA"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"../img/team/vladyslav-marchenko1x.png",large:"../img/team/vladyslav-marchenko@2x.png",userName:"Vladyslav Marchenko",developer:"QA"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"../img/team/viktoria-bairak1x.png",large:"../img/team/viktoria-bairak@2x.png",userName:"Viktoria Bairak",developer:"QA"}],g={modules:[u],breakpoints:{375:{slidesPerView:2,spaceBetween:35},768:{slidesPerView:3,spaceBetween:50},1e3:{slidesPerView:4,spaceBetween:50},1440:{slidesPerView:6,spaceBetween:50}},navigation:{nextEl:".swiper-button-next-section-team",prevEl:".swiper-button-prev-section-team"},slidesOffsetAfter:25};new d(".swiper",g);const h=document.querySelector(".swiper-wrapper"),k=document.querySelector(".developer-section"),v=document.querySelector(".icon-close-section-team"),y=document.querySelector(".team-button");function m(){const s=k.classList.toggle("is-open");document.body.style.overflow=s?"hidden":""}v.addEventListener("click",m);y.addEventListener("click",m);const w=()=>p.map(({small:t,large:o,userName:l,developer:e,url:n})=>`<div class="swiper-slide">
      <div class="developer-container">
  <div class="container-img">
    <div class="box-img-team">
      <div class="icon-linkedin-team">
      <a href="${n}" target="_blank"
        >
        <svg class="linkedin" width="16" height="16">
          <use href="../img/icons/symbol.svg#icon-linkedin"></use>
        </svg>
        </a>
      </div>
      <a href="${n}" target="_blank"
        >
<picture>
  <source
    media="(min-width: 768px )"
    srcset="
      ${t}    1x,
      ${o} 2x
    "
  />
  <source
    media="(max-width: 767.98px)"
    srcset="
      ${t}    1x,
      ${o} 2x
    "
  />
  <img
    class="dev-photo"
    src="${t}"
    alt="${l}"
  />
</picture>
        </a>
    </div>
  </div>
  <h3 class="dev-name">${l}</h3>
  <p class="dev-desription">${e}</p>
  </div>
</div>`).join("");h.innerHTML=w();function f(){const s=document.querySelector(".header-burger"),t=document.querySelector(".mobmenu-backdrop");s.addEventListener("click",l);const o=document.querySelector(".mobmenu-close-button");function l(){t.classList.add("mobmenu-visible"),setTimeout(()=>{t.classList.add("mobmenu-open")},50),o.addEventListener("click",e)}function e(){t.classList.remove("mobmenu-open"),setTimeout(()=>{t.classList.remove("mobmenu-visible")},50),o.removeEventListener("click",e)}}const b={about:"about",portfolio:"portfolio",price:"price",contacts:"contacts",menu:"menu"},x={about:"про мене",portfolio:"портфоліо",price:"ціни",contacts:"контакти",menu:"меню"},r={en:b,uk:x};function S(){let s="en";const t=document.querySelectorAll(".svitcher-fieldset");let o=document.querySelectorAll("[data-en]");t.forEach(i=>{i.addEventListener("click",l)});function l(i){e(i.target.value),localStorage.setItem("lang",i.target.value)}function e(i){for(let a in r[i]){let c="[data-id="+a+"]";document.querySelector(c).textContent=r[i][a]}i==="en"?(o.forEach(a=>{a.textContent=a.dataset.en}),document.querySelectorAll(".en-text").forEach(a=>{a.classList.add("svitcher-highlight")}),document.querySelectorAll(".ua-text").forEach(a=>{a.classList.remove("svitcher-highlight")})):(o.forEach(a=>{a.textContent=a.dataset.ua}),document.querySelectorAll(".ua-text").forEach(a=>{a.classList.add("svitcher-highlight")}),document.querySelectorAll(".en-text").forEach(a=>{a.classList.remove("svitcher-highlight")}))}let n=localStorage.getItem("lang");n&&(s=n),e(s)}f();S();
//# sourceMappingURL=commonHelpers.js.map
