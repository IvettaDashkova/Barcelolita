import{a as L,i as f,S as N,N as A,K as I,M as _,b as Q,E as W}from"./assets/vendor-02c6e1eb.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();function w(t){const o=t.asset._ref.split("-");return`https://cdn.sanity.io/images/drd3cmm3/production/${o[1]}-${o[2]}.${o[3]}`}function Y(t){const o=t.asset._ref.split("-");return`https://cdn.sanity.io/files/drd3cmm3/production/${o[1]}.${o[2]}`}function y(t,o){const r={en:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ua:["Січ","Лют","Бер","Квіт","Трав","Черв","Лип","Серп","Верес","Жовт","Лист","Груд"]},a=new Date(t),e=a.getMonth(),i=a.getDate(),n=a.getFullYear();return`${r[o][e]} ${i.toString().padStart(2,"0")}, ${n}`}async function Z(){try{const{data:{result:t}}=await L.get('https://drd3cmm3.api.sanity.io/v2023-03-07/data/query/production?query=*[_type=="portfolio"]{ _id, id,nameEn,nameUa,imgURL,descriptionEn, descriptionUa, _updatedAt }|order(id asc)');return t}catch{f.error({title:"Oops...",message:"Network response was not ok",backgroundColor:"var(--accent-color)",titleColor:"var(--primary-color)",messageColor:"var(--primary-color)"});return}}async function ee(t){try{const{data:{result:o}}=await L.get(`https://drd3cmm3.api.sanity.io/v2023-03-07/data/query/production?query=*[_id=="${t}"]{ _id,id,nameEn,nameUa,imgURL,descriptionEn, descriptionUa, img, _updatedAt }|order(id asc)`);return o[0]}catch{f.error({title:"Oops...",message:"Network response was not ok",backgroundColor:"var(--accent-color)",titleColor:"var(--primary-color)",messageColor:"var(--primary-color)"});return}}async function te(){try{const{data:{result:t}}=await L.get('https://drd3cmm3.api.sanity.io/v2023-03-07/data/query/production?query=*[_type=="price"]{id,titleEn, titleUa, USD,EUR, descriptionEn,descriptionUa}|order(id asc)');return t}catch{f.error({title:"Oops...",message:"Network response was not ok",backgroundColor:"var(--accent-color)",titleColor:"var(--primary-color)",messageColor:"var(--primary-color)"});return}}async function oe(){try{const{data:{result:t}}=await L.get('https://drd3cmm3.api.sanity.io/v2023-03-07/data/query/production?query=*[_type=="video"]');return t[0].url}catch{f.error({title:"Oops...",message:"Network response was not ok",backgroundColor:"var(--accent-color)",titleColor:"var(--primary-color)",messageColor:"var(--primary-color)"});return}}const g="/Barcelolita/assets/symbol-ec0e4f42.svg";async function ae(t){const o=await Z(),r=await ne(o,t),a=document.querySelector(".portfolio-list");a.innerHTML=r}function ne(t,o){const a=[];for(let e=0;e<t.length;e+=4)a.push(t.slice(e,e+4));return a.map(e=>`
    ${e[0]?`
    <li class="portfolio-item" data-popup="${e[0]._id}">
      <button class="item-button-portfolio">
        <span class="portfolio-item-title">${o==="en"?e[0].nameEn:e[0].nameUa}
        </span>
        <span
          class="portfolio-item-description-small portfolio-item-description"
        >
          ${o==="en"?e[0].descriptionEn:e[0].descriptionUa}
        </span>
        <img
          src=${w(e[0].imgURL)}
          alt=${o==="en"?e[0].nameEn:e[0].nameUa}
          class="portfolio-item-image small"
          loading="lazy"
        />
        <span class="data-svg-container">
          <span class="portfolio-item-date">
           ${o==="en"?y(e[0]._updatedAt,"en"):y(e[0]._updatedAt,"ua")}
          </span>
          <svg  class="arrow-icon" width="24" height="24">
            <use href="${g}#icon-arrow-portfolio"></use>
          </svg>
        </span>
      </button>
    </li>`:""}
${e[1]?`    
    <li class="portfolio-item" data-popup=${e[1]._id}>
      <button class="item-button-portfolio">
        <span class="portfolio-item-title">
          ${o==="en"?e[1].nameEn:e[1].nameUa}
        </span>
        <span
          class="portfolio-item-description portfolio-item-description-medium"
        >
            ${o==="en"?e[1].descriptionEn:e[1].descriptionUa}
        </span>
        <img
           src=${w(e[1].imgURL)}
          alt=${o==="en"?e[1].nameEn:e[1].nameUa}
          class="portfolio-item-image medium"
          loading="lazy"
        />
        <span class="data-svg-container">
          <span class="portfolio-item-date">
           ${o==="en"?y(e[1]._updatedAt,"en"):y(e[1]._updatedAt,"ua")}
          </span>
          <svg  class="arrow-icon" width="24" height="24">
            <use href="${g}#icon-arrow-portfolio"></use>
          </svg>
        </span>
      </button>
    </li>`:""}
${e[2]?`
    <li class="portfolio-item position-top" data-popup="${e[2]._id}">
      <button class="item-button-portfolio">
        <span class="portfolio-item-title">${o==="en"?e[2].nameEn:e[2].nameUa}</span>
        <span class="portfolio-item-description portfolio-item-description-large"
        >
          ${o==="en"?e[2].descriptionEn:e[2].descriptionUa}
        </span>
        <img
          src=${w(e[2].imgURL)}
          alt=${o==="en"?e[2].nameEn:e[2].nameUa}
          class="portfolio-item-image large"
          loading="lazy"
        />
        <span class="data-svg-container">
         <span class="portfolio-item-date"  >
           ${o==="en"?y(e[2]._updatedAt,"en"):y(e[2]._updatedAt,"ua")}
          </span>
          <svg  class="arrow-icon" width="24" height="24">
            <use href="${g}#icon-arrow-portfolio"></use>
          </svg>
        </span>
      </button>
    </li>`:""}
   ${e[3]?`
    <li class="portfolio-item" data-popup="${e[3]._id}">
      <button class="item-button-portfolio position-down-container">
        <span class="portfolio-item-title" >${o==="en"?e[3].nameEn:e[3].nameUa}</span>
        <span
          class="portfolio-item-description-small portfolio-item-description"
        >${o==="en"?e[3].descriptionEn:e[3].descriptionUa}
        </span>
        <img
          src=${w(e[3].imgURL)}
          alt=${o==="en"?e[3].nameEn:e[3].nameUa}
          class="portfolio-item-image small"
          loading="lazy"
        />
        <span class="data-svg-container">
          <span class="portfolio-item-date">
           ${o==="en"?y(e[3]._updatedAt,"en"):y(e[3]._updatedAt,"ua")}
          </span>
          <svg  class="arrow-icon" width="24" height="24">
            <use href="${g}#icon-arrow-portfolio"></use>
          </svg>
        </span>
      </button>
    </li>`:""}
     `).join("")}const ie=[{url:"https://www.linkedin.com/in/ivettadashkova/",small:"ivetta-dashkova1x.webp",large:"ivetta-dashkova@2x.webp",imgPng:"ivetta-dashkova1x.png",userNameEn:"Ivetta Dashkova",userNameUa:"Іветта Дашкова",developer:"team lead",ariaLabel:"link to linkedin Ivetta Dashkova"},{url:"http://linkedin.com/in/ilona-ratushniak-3a678624b",small:"ilona-ratushniak1x.webp",large:"ilona-ratushniak@2x.webp",imgPng:"ilona-ratushniak1x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer",ariaLabel:"link to linkedin Ilona Ratushniak"},{url:"https://www.linkedin.com/in/maksym-nagornyi-19b84431/",small:"maksym-nahornyi1x.webp",large:"maksym-nahornyi@2x.webp",imgPng:"maksym-nahornyi1x.png",userNameEn:"Maksym Nahornyi",userNameUa:"Максим Нагорний",developer:"PM",ariaLabel:"link to linkedin Maksym Nahornyi"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"danulo-yanishevskiy1x.webp",large:"danulo-yanishevskiy@2x.webp",imgPng:"danulo-yanishevskiy1x.png",userNameEn:"Yanishevskiy Danulo",userNameUa:"Янішевський Данило",developer:"frontend",ariaLabel:"link to linkedin Yanishevskiy Danulo"},{url:"http://linkedin.com/in/vladyslav-hnatok-671a092b4",small:"vladyslav-hnatok1x.webp",large:"vladyslav-hnatok@2x.webp",imgPng:"vladyslav-hnatok1x.png",userNameEn:"Vladyslav Hnatok",userNameUa:"Владислав Гнаток",developer:"frontend",ariaLabel:"link to linkedin Vladyslav Hnatok"},{url:"https://www.linkedin.com/in/sofiia-koval-19151b296/",small:"sofiia-koval1x.webp",large:"sofiia-koval@2x.webp",imgPng:"sofiia-koval1x.png",userNameEn:"Sofiia Koval",userNameUa:"Софія Коваль",developer:"frontend",ariaLabel:"link to linkedin Sofiia Koval"},{url:"https://www.linkedin.com/in/sergiy-myronenko-5668b9292/",small:"sergiy-myronenko1x.webp",large:"sergiy-myronenko@2x.webp",imgPng:"sergiy-myronenko1x.png",userNameEn:"Sergiy Myronenko",userNameUa:"Сергій Мироненко",developer:"frontend",ariaLabel:"link to linkedin Sergiy Myronenko"},{url:"https://www.linkedin.com/in/oleksandr-horobiy/",small:"oleksandr-horobiy1x.webp",large:"oleksandr-horobiy@2x.webp",imgPng:"oleksandr-horobiy1x.png",userNameEn:"Oleksandr Horobiy",userNameUa:"Олександр Горобій",developer:"frontend",ariaLabel:"link to linkedin Oleksandr Horobiy"},{url:"https://www.linkedin.com/in/oleksandra-shevchuk-8270b62a0/",small:"oleksandra-shevchuk1x.webp",large:"oleksandra-shevchuk@2x.webp",imgPng:"oleksandra-shevchuk1x.png",userNameEn:"Oleksandra Shevchuk",userNameUa:"Олександра Шевчук",developer:"frontend",ariaLabel:"link to linkedin Oleksandra Shevchuk"},{url:"https://www.linkedin.com/in/mykyta-poddubnyi-3897032bb/",small:"mykyta-poddubnyi1x.webp",large:"mykyta-poddubnyi@2x.webp",imgPng:"mykyta-poddubnyi1x.png",userNameEn:"Mykyta Poddubnyi",userNameUa:"Микита Поддубний",developer:"frontend",ariaLabel:"link to linkedin Mykyta Poddubnyi"},{url:"https://www.linkedin.com/in/olenaishchenko/",small:"olena-ishchenko1x.webp",large:"olena-ishchenko@2x.webp",imgPng:"olena-ishchenko1x.png",userNameEn:"Olena Ishchenko",userNameUa:"Олена Іщенко",developer:"frontend",ariaLabel:"link to linkedin Olena Ishchenko"},{url:"https://www.linkedin.com/in/-svitlana-klymenko/",small:"svitlana-klymenko1x.webp",large:"svitlana-klymenko@2x.webp",imgPng:"svitlana-klymenko1x.png",userNameEn:"Svitlana Klymenko",userNameUa:"Світлана Клименко",developer:"frontend",ariaLabel:"link to linkedin Svitlana Klymenko"},{url:"https://www.linkedin.com/in/alla-sopinska-92a5532b1/",small:"alla-sopinska1x.webp",large:"alla-sopinska_2x.webp",imgPng:"alla-sopinska1x.png",userNameEn:"Alla Sopinska",userNameUa:"Алла Сопінська",developer:"frontend",ariaLabel:"link to linkedin Alla Sopinska"},{url:"https://www.linkedin.com/in/nataliia-boicheniuk-155327297/",small:"nataliia-boicheniuk1x.webp",large:"nataliia-boicheniuk@2x.webp",imgPng:"nataliia-boicheniuk1x.png",userNameEn:"Nataliia Boicheniuk",userNameUa:"Наталія Бойченюк",developer:"QA",ariaLabel:"link to linkedin Nataliia Boicheniuk"},{url:"https://www.linkedin.com/in/svetlana-starling-7735ab223/",small:"svetlana-skvortsova1x.webp",large:"svetlana-skvortsova@2x.webp",imgPng:"svetlana-skvortsova1x.png",userNameEn:"Svetlana Skvortsova",userNameUa:"Світлана Скворцова",developer:"QA",ariaLabel:"link to linkedin Svetlana Skvortsova"},{url:"https://www.linkedin.com/in/alyona-maslianyk-a83433211/",small:"alyona-maslianyk1x.webp",large:"alyona-maslianyk_2x.webp",imgPng:"alyona-maslianyk1x.png",userNameEn:"Alyona Maslianyk",userNameUa:"Альона Маслянюк",developer:"QA",ariaLabel:"link to linkedin Alyona Maslianyk"},{url:"https://www.linkedin.com/in/oleh-khimchenko-4a25aa296/  ",small:"oleh-khimchenko1x.webp",large:"oleh-khimchenko@2x.webp",imgPng:"oleh-khimchenko1x.png",userNameEn:"Oleh Khimchenko",userNameUa:"Олег Хімченко",developer:"QA",ariaLabel:"link to linkedin Oleh Khimchenko"},{url:"https://www.linkedin.com/in/vlad1slav-marchenk0/",small:"vladyslav-marchenko1x.webp",large:"vladyslav-marchenko@2x.webp",imgPng:"vladyslav-marchenko1x.png",userNameEn:"Vladyslav Marchenko",userNameUa:"Владислав Марченко",developer:"QA",ariaLabel:"link to linkedin Vladyslav Marchenko"},{url:"https://www.linkedin.com/in/viktotiabayrak/",small:"viktoria-bairak1x.webp",large:"viktoria-bairak@2x.webp",imgPng:"viktoria-bairak1x.png",userNameEn:"Viktoria Bairak",userNameUa:"Вікторія Байрак",developer:"QA",ariaLabel:"link to linkedin Viktoria Bairak"}];let b;const re={modules:[A,I],breakpoints:{375:{slidesPerView:2,spaceBetween:35},768:{slidesPerView:3,spaceBetween:50},1e3:{slidesPerView:4,spaceBetween:50},1440:{slidesPerView:6,spaceBetween:50}},navigation:{nextEl:".swiper-button-next-section-team",prevEl:".swiper-button-prev-section-team"},slidesOffsetAfter:25,slidesOffsetBefore:10,keyboard:{enabled:!0}},se=t=>{const o=t;return b=new N(`[data-id="${o}"]`,re),document.addEventListener("keydown",function(r){r.key==="Tab"&&b.slideNext()}),b},le=document.getElementById("team-section-wrapper"),k=document.querySelector(".developer-section"),ce=document.querySelector(".btn-close"),de=document.querySelector(".team-button"),O=document.querySelector("body");function pe(){history.pushState(null,null,window.top.location.pathname+window.top.location.search),k.style.display="block",setTimeout(()=>{O.classList.add("noscroll"),k.classList.add("is-open")},300),me(),se("gallery-photo-team")}function q(){if(O.classList.remove("noscroll"),k.classList.remove("is-open"),setTimeout(()=>{k.style.display="none"},1e3),b)b.destroy(!0,!0);else return}history.pushState(null,null,window.top.location.pathname+window.top.location.search);window.addEventListener("popstate",t=>{t.preventDefault(),q(),history.pushState(null,null,window.top.location.pathname+window.top.location.search)});window.addEventListener("keydown",t=>{t.code==="Escape"&&q()});ce.addEventListener("click",q);de.addEventListener("click",pe);const me=()=>{const t=ie.map(({small:o,large:r,userNameEn:a,developer:e,url:i,userNameUa:n,ariaLabel:l,imgPng:s})=>`<div class="swiper-slide swipe-slide-js">
      <div class="developer-container">
  <div class="container-img">
    <div class="box-img-team">
      
      <a href="${i}"  target="_blank" aria-label="${l}"
        >
        <div  class="link-linkedin-team">
        <svg class="linkedin" width="16" height="16">
          <use href="${g}#icon-linkedin"></use>
        </svg>
        </div>
        
      
      
<picture>
  <source
    media="(min-width: 768px )"
    srcset="
      team_img/${o}    1x,
      team_img/${r} 2x
    "
    type="image/webp"
  />
  <source
    media="(max-width: 767.98px)"
    srcset="
      team_img/${o}    1x,
      team_img/${r} 2x
    "
    type="image/webp"
  />
  <img
    class="dev-photo"
    src="team_img/${s}"
    alt="${a}"
  />
</picture>
       </a>
    </div>
  </div>
  <h3 class="dev-name" data-ua="${n}" data-en="${a}">${a}</h3>
  <p class="dev-desription" >${e}</p>
  </div>
</div>`).join("");le.innerHTML=t};function ue(){const t=document.querySelector(".header-burger"),o=document.querySelector(".mobmenu-backdrop");t.addEventListener("click",i);const r=document.querySelector(".mobmenu-close-button"),a=document.querySelector("body"),e=document.querySelectorAll(".mobmenu-menu-link");history.pushState(null,null,window.top.location.pathname+window.top.location.search),window.addEventListener("popstate",l=>{l.preventDefault(),n(),history.pushState(null,null,window.top.location.pathname+window.top.location.search)});function i(){history.pushState(null,null,window.top.location.pathname+window.top.location.search),o.style.display="block",setTimeout(()=>{a.classList.add("noscroll"),o.classList.add("is-open")},300),r.addEventListener("click",n),e.forEach(l=>{l.addEventListener("click",n)})}function n(){a.classList.remove("noscroll"),o.classList.remove("is-open"),setTimeout(()=>{o.style.display="none"},1e3),r.removeEventListener("click",n),e.forEach(l=>{l.removeEventListener("click",n)})}}const ye={about:"about",portfolio:"portfolio",price:"price",contacts:"contacts",menu:"menu","about-description-1":"Hello! I am Barcelolita and I am your photographer. Close people call me Lola. The inspiration to do photography found me when I lived in Barcelona and every day contemplated the beauty through the lens of my camera. That's how Barcelolita was born - my alter ego in photography. All that drives me is the passion for what I do, the inspiration to capture moments, live them with you and tell your stories.","about-description-2":"Sensual, incredible, sometimes bold — each of us has a special story. My inspiration is life in the moment, people, the elements, those that rage and make the heart beat faster. I create shoots for people, about people and about everything that once was or is someone's passion. I work with different styles, offering variable shooting models. My specialization is fashion photography, personal, brand photography, lookbooks, couple photography and business photos for your personal brand.","portfolio-description-1":"(Portfolio)","portfolio-data-1":"Jun 02 , 2023","portfolio-data-2":"Jun 02 , 2023","portfolio-data-3":"Jun 02 , 2023","portfolio-data-4":"Jun 02 , 2023","portfolio-data-5":"Jun 02 , 2023","portfolio-data-6":"Jun 02 , 2023","portfolio-data-7":"Jun 02 , 2023","portfolio-title-1":"Portrait photo","portfolio-title-2":"Fashion photo","portfolio-title-3":"Brand photo","portfolio-title-4":"Genre photo","portfolio-title-5":"Studio photo","portfolio-title-6":"Couple photo","portfolio-title-7":"Lookbook","portfolio-text-1":"Images with an emphasis on faces, facial expressions and character.","portfolio-text-2":"The art of creating expressive and stylish images that emphasize fashion and style.","portfolio-text-3":"Reflects the uniqueness of the brand, its values, style and character through visual elements.","portfolio-text-4":"A variety of categories and styles covering different themes, moods.","portfolio-text-5":"Shooting in a studio format with an emphasis on a personal idea, mood.","portfolio-text-6":"Images of people, emphasizing their individuality.","portfolio-text-7":"Used to reinforce and build the brand's visual identity.","follow-me":"follow me",phone:"phone",email:"email",message:"If you like what you see on here just say hello and drop me a message. I'd love to work with you!","message-contacts":"If you like what you see on here just say hello and drop me a message. I'd love to work with you!","contact-me":"Contact me",location:"Location:",ukraine:"Ukraine",spain:"Spain",france:"France",contact:"Contact:","contact-me-follow-me":"Follow me:",send:"Send","price-desc":"Photo sessions are specially designed to remember and convey your story, your emotions and your style.I guarantee a unique experience and quality images.","price-1":"shooting up to 1 hour up to 25 edited photos editing time 5-10 days","price-2":"shooting up to 2 hours up to 50 edited photos editing time 10-14 days","price-3":"shooting up to 4 hours up to 100 edited photos editing time 14-21 days"},fe={about:"про мене",portfolio:"портфоліо",price:"прайс",contacts:"контакти",menu:"меню","about-description-1":"Привіт! Я – Барселоліта і я фотограф. Близькі називають мене Лола. Натхнення до фотографії знайшло мене, коли я жила в Барселоні, і кожен день розглядала красу через об'єктив своєї камери. Так і народилася Барселоліта – моє альтер-его в фотографії. Все, що драйвить мене – це пристрасть до того, що я роблю, бажання зловити моменти, прожити їх разом з вами і розповісти ваші історії.","about-description-2":"Чуттєві, неймовірні, іноді сміливі — у кожного з нас вони свої і особливі. Моє натхнення — це життя в моменті, люди та ті елементи нашого життя, що змушують серце битися частіше. Створюю зйомки для людей, про людей і про все, що колись було або є чиєюсь пристрастю. Я працюю з різними стилями, пропонуючи різноманітні типи зйомок. Моя особлива любов — це fashion фотографія, особисті зйомки, зйомки для брендів, лукбуки, зйомки пар, а також бізнес фотографія для персонального бренду.","portfolio-description-1":"(Портфоліо)","portfolio-data-1":"2 Черв , 2023","portfolio-data-2":"2 Черв , 2023","portfolio-data-3":"2 Черв , 2023","portfolio-data-4":"2 Черв , 2023","portfolio-data-5":"2 Черв , 2023","portfolio-data-6":"2 Черв , 2023","portfolio-data-7":"2 Черв , 2023","portfolio-title-1":"Особиста зйомка","portfolio-title-2":"Fashion зйомка","portfolio-title-3":"Зйомка для брендів","portfolio-title-4":"Жанрова зйомка","portfolio-title-5":"Студійна зйомка","portfolio-title-6":"Зйомка пари","portfolio-title-7":"Лукбук","portfolio-text-1":"Зйомка з акцентом на обличчя, міміку та характер.","portfolio-text-2":"Зйомка стильних образів, які підкреслюють моду і трендовість.","portfolio-text-3":"Відображає унікальність бренду, його цінності, стиль і характер через візуальні елементи.","portfolio-text-4":"Різноманітність категорій і стилів, що охоплюють різні теми, настрої.","portfolio-text-5":"Зйомка в студійному форматі з акцентом на особисту задумку і настрій.","portfolio-text-6":"Романтична зйомка пари, що підкреслює їх індивідуальність","portfolio-text-7":"Зйомка моделей для підсилення та створення візуальної ідентичності бренду.","follow-me":"зв'язатися зі мною",phone:"телефон",email:"електронна пошта",message:"Якщо вам подобається те, що ви тут бачите, просто привітайтеся та надішліть мені повідомлення. Я хотіла би працювати з вами!","message-contacts":"Якщо вам подобається моє бачення, стиль та айдентика, ви можете надіслати мені повідомлення і ваш запит у будь-який зручний спосіб. Я буду рада попрацювати з вами!","contact-me":"Зв'яжіться зі мною",location:"Розташування:",ukraine:"Україна",spain:"Іспанія",france:"Франція",contact:"Kонтакти:","contact-me-follow-me":"Підписатися:",send:"Відправити","price-desc":"Фотосесії спеціально розроблені, щоб запам'ятати та передати вашу історію, ваші емоції та ваш стиль. Я гарантую унікальний досвід і якісні зображення.","price-1":"Зйомка до 1 години, до 25 оброблених фото, час обробки 5-10 днів","price-2":"Зйомка до 2 годин, до 50 оброблених фото, час обробки 10-14 днів","price-3":"Зйомка до 4 годин, до 100 оброблених фото, час обробки 14-21 день"},B={en:ye,uk:fe},h=document.querySelector(".icon-arrow-prev"),v=document.querySelector(".icon-arrow-next"),he={modules:[A,I,_],breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:3,spaceBetween:16}},navigation:{nextEl:v,prevEl:h},grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1,eventsTarget:".swiper"},speed:700,on:{slideChange:function(){const t=this.activeIndex;window.innerWidth<=767?t===2?(h.style.fill="#f9f9f9",v.style.fill="rgba(249, 249, 249, 0.226)"):t===1?(h.style.fill="#f9f9f9",v.style.fill="#f9f9f9"):(h.style.fill="rgba(249, 249, 249, 0.226)",v.style.fill="#f9f9f9"):t===1||t===2?(h.style.fill="#f9f9f9",v.style.fill="rgba(249, 249, 249, 0.226)"):(h.style.fill="rgba(249, 249, 249, 0.226)",v.style.fill="#f9f9f9")}}},ve=async t=>{const o=await te(),r=await we(o,t),a=document.querySelector(".price-list");a.innerHTML=r;const e="price-gallery";new N(`[data-id="${e}"]`,he);const i=document.querySelectorAll(".swiper-slide.price");if(i.forEach(function(p){window.innerWidth<=1440&&(p.addEventListener("click",function(){p.classList.toggle("hovered")}),p.addEventListener("mouseleave",function(){p.classList.remove("hovered")}))}),window.innerWidth>=1440){let K=function(c){d.forEach((T,J)=>{J===c?T.classList.add("hovered"):T.classList.remove("hovered")})},j=function(c){(c.key==="ArrowLeft"||c.key==="ArrowRight")&&(u===null?u=0:c.key==="ArrowRight"&&u<d.length-1?u+=1:c.key==="ArrowLeft"&&u>0?u-=1:c.key==="ArrowRight"&&u===d.length-1?(d.length-1,u=0):c.key==="ArrowLeft"&&u===0&&(u=d.length-1),K(u))},G=function(){d.forEach(c=>c.classList.remove("hovered"))};const p=document.querySelector(".swiper-wrapper.price-list"),d=Array.from(p.children);let u=null;i.forEach(function(c){c.addEventListener("mouseenter",function(){c.classList.add("hovered")}),c.addEventListener("mouseleave",function(){c.classList.remove("hovered")}),c.addEventListener("click",function(){c.classList.remove("hovered")})}),window.addEventListener("keydown",j),window.addEventListener("click",function(){G()})}const n=document.querySelector(".swiper-container-price");function l(p){p[0].isIntersecting||i.forEach(d=>d.classList.remove("hovered"))}new IntersectionObserver(l).observe(n)};function we(t,o){const a=[];for(let e=0;e<t.length;e+=3)a.push(t.slice(e,e+3));return a.map(e=>`
    ${e[0]?`
  <div tabindex="0" class="swiper-slide price first">
          <div class="name-first">${o==="en"?e[0].titleEn:e[0].titleUa}</div>
          <div class="number-first number">${e[0].id<10?`0${e[0].id}`:e[0].id}</div>
          <div class="overlay-dark">
            <p class="text">${o==="en"?e[0].descriptionEn:e[0].descriptionUa}</p>
            <p class="price-first">${e[0].USD} $ / ${e[0].EUR} €</p>
          </div>
        </div>`:""}
${e[1]?`    
        <div tabindex="0" class="swiper-slide price second">
          <div class="name-second">${o==="en"?e[1].titleEn:e[1].titleUa}</div>
          <div class="number-second number">${e[1].id<10?`0${e[1].id}`:e[1].id}</div>
          <div class="overlay-dark">
            <p class="price-second">${e[1].USD} $ / ${e[1].EUR} €</p>
            <p class="text">${o==="en"?e[1].descriptionEn:e[1].descriptionUa}</p>
          </div>
        </div>`:""}
${e[2]?`
    <div tabindex="0" class="swiper-slide price third">
          <div class="name-third">${o==="en"?e[2].titleEn:e[2].titleUa}</div>
          <div class="number-third number">${e[2].id<10?`0${e[2].id}`:e[2].id}</div>
          <div class="overlay">
            <p class="text">${o==="en"?e[2].descriptionEn:e[2].descriptionUa}</p>
            <p class="price-third">${e[2].USD} $ / ${e[2].EUR} €</p>
          </div>
        </div>`:""}
     `).join("")}function ge(){let t="en";navigator.language=="uk-UA"&&(t="uk");const o=document.querySelectorAll(".svitcher-text");let r=document.querySelectorAll("[data-en]");o.forEach(n=>{n.addEventListener("click",a)});function a(n){e(n.target.value),localStorage.setItem("lang",n.target.value)}function e(n){for(let s in B[n]){let p="[data-id="+s+"]",d=document.querySelector(p);d&&(d.textContent=B[n][s])}document.querySelectorAll(".input-contact-me").forEach(s=>{n==="en"?(s.placeholder=s.dataset.enPlaceholder,s.title=s.dataset.enTitle):(s.placeholder=s.dataset.uaPlaceholder,s.title=s.dataset.uaTitle)}),n=="en"?(r.forEach(s=>{s.textContent=s.dataset.en}),document.querySelectorAll(".en-text").forEach(s=>{s.classList.add("svitcher-highlight")}),document.querySelectorAll(".ua-text").forEach(s=>{s.classList.remove("svitcher-highlight")})):(r.forEach(s=>{s.textContent=s.dataset.ua}),document.querySelectorAll(".ua-text").forEach(s=>{s.classList.add("svitcher-highlight")}),document.querySelectorAll(".en-text").forEach(s=>{s.classList.remove("svitcher-highlight")})),ae(n),ve(n)}let i=localStorage.getItem("lang");i&&(t=i),e(t)}const be=document.querySelector(".swiper-wrapper"),$=document.querySelector(".pop-up-gallery-close-btn"),E=document.querySelector(".pop-up-gallery-backdrop"),ke=document.querySelector(".portfolio-list"),D=document.querySelector("body");let U,P;const Ee=document.querySelector(".pop-up-gallery-swiper-btn-prev"),xe=document.querySelector(".pop-up-gallery-swiper-btn-next"),Le={modules:[A,Q,W,I,_],breakpoints:{375:{slidesPerView:1,spaceBetween:2},768:{slidesPerView:1,spaceBetween:70},1440:{slidesPerView:2.4,spaceBetween:50}},effect:"coverflow",coverflowEffect:{rotate:0,stretch:0,depth:200,modifier:1,scale:.9,slideShadows:!0},navigation:{nextEl:".pop-up-gallery-swiper-btn-next",prevEl:".pop-up-gallery-swiper-btn-prev"},loop:!0,centeredSlides:!0,centeredSlidesBounds:!0,keyboard:{enabled:!0},mousewheel:!0},Se=t=>{history.pushState(null,null,window.top.location.pathname+window.top.location.search);const o=t;U=new N(`[data-id="${o}"]`,Le)};function C(){if(E.classList.remove("is-open"),D.classList.remove("noscroll"),document.removeEventListener("keyup",V),P&&P.focus(),setTimeout(()=>{E.style.display="none"},1e3),U)U.destroy(!0,!0);else return}function $e(t){t.key==="Escape"&&C()}function V(t){if(t.key==="Tab"){if(t.target===$||t.target===xe||t.target===Ee)return;$.focus()}}history.pushState(null,null,window.top.location.pathname+window.top.location.search);window.addEventListener("popstate",t=>{t.preventDefault(),C(),history.pushState(null,null,window.top.location.pathname+window.top.location.search)});document.addEventListener("keydown",$e);$.addEventListener("click",C);ke.addEventListener("click",async function(o){if(o.target instanceof SVGElement||o.target.nodeName==="IMG"||o.target.nodeName==="SPAN"||o.target.nodeName==="BUTTON"){let r=o.target.closest(".portfolio-item").dataset.popup;P=o.target.closest(".item-button-portfolio"),E.style.display="block",setTimeout(()=>{E.classList.add("is-open"),D.classList.add("noscroll")},300),document.getElementById("photo-gallery").focus(),document.addEventListener("keyup",V),await Ue(r),Se("photo")}});async function Ue(t){const{nameEn:o,nameUa:r,descriptionEn:a,descriptionUa:e,img:i}=await ee(t),n=document.querySelector(".pop-up-gallery-title"),l=document.querySelector(".pop-up-gallery-text");localStorage.getItem("lang")==="uk"?(n.textContent=r,l.textContent=e):(n.textContent=o,l.textContent=a);const p=i.map(d=>`<div class="swiper-slide swiper-slide-layout">
       <img
        class="pop-up-photo"
        src=${w(d)}
        alt="photo"
        loading="lazy"
       />
    </div> `).join("");be.innerHTML=p}document.addEventListener("DOMContentLoaded",async function(){const t=document.querySelector(".video-container"),o=document.getElementById("video"),r=document.getElementById("video-thumbnail"),a=document.getElementById("play-button");let e=!1;const i=await oe();o.innerHTML=` <source src=${Y(i)} type="video/mp4">
                Your browser does not support the video tag or the file format of this video.`,a.addEventListener("click",function(){e||n()}),o.addEventListener("click",function(){e&&l()});function n(){o.play(),e=!0,o.style.display="block",r.style.display="none",a.style.display="none"}function l(){o.pause(),e=!1,o.currentTime=0,r.style.display="block",a.style.display="block"}new IntersectionObserver(p=>{p.forEach(d=>{d.isIntersecting||e&&l()})}).observe(t),r.style.display="block",a.style.display="block"});async function Pe(){const t=document.querySelector("#form");t.addEventListener("submit",async o=>{o.preventDefault();const r=`<b>Message from the BARCELOLITA website</b>
<b>Sender:</b> ${t.name.value}
<b>Phone:</b> ${t.number.value}
<b>Message:</b> ${t.message.value}`,n=`https://api.telegram.org/bot6402732796:AAFAOyQjeZHjLcWHVQnx4TwxtSFVwOwlbfo/sendMessage?chat_id=-4160563284&text=${encodeURIComponent(r)}&parse_mode=HTML`;try{(await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"}})).ok?f.success({title:"Thank you!",message:"Message sent successfully!",backgroundColor:"var(--primary-color)",titleColor:"var(--secondary-color)",messageColor:"var(--secondary-color)"}):f.error({title:"Oops...",message:"Something went wrong. Please try again.",backgroundColor:"var(--accent-color)",titleColor:"var(--primary-color)",messageColor:"var(--primary-color)"})}catch(l){console.error("Error:",l),f.error({title:"Oops...",message:"Something went wrong. Please try again.",backgroundColor:"var(--accent-color)",titleColor:"var(--primary-color)",messageColor:"var(--primary-color)"})}t.name.value="",t.number.value="",t.message.value=""})}const R=document.getElementById("clickMe"),x=document.querySelector(".backdrop-modal-contact-me"),Ne=document.querySelector(".close-btn-contact-me"),H=document.querySelector(".price-contact-btn"),z=document.querySelector("body");let M;history.pushState(null,null,window.top.location.pathname+window.top.location.search);window.addEventListener("popstate",t=>{t.preventDefault(),X(),history.pushState(null,null,window.top.location.pathname+window.top.location.search)});H.addEventListener("click",t=>{F(),M=t.target});R.addEventListener("click",t=>{F(),M=t.target});Ne.addEventListener("click",()=>{X(),M.focus()});window.addEventListener("keydown",t=>{t.code==="Escape"&&(X(),Ae())});function Ae(){setTimeout(()=>{R.blur(),H.blur()},1e3)}function X(){x.classList.remove("is-open"),z.classList.remove("noscroll"),setTimeout(()=>{x.style.display="none"},1e3)}function F(t){x.style.display="block",setTimeout(()=>{x.classList.add("is-open"),z.classList.add("noscroll")},300),document.getElementById("contact-me-backdrop").focus(),history.pushState(null,null,window.top.location.pathname+window.top.location.search)}const m=document.getElementById("number");let S=[];m.addEventListener("input",t=>{const o=m.value.substring(0,3);let r=localStorage.getItem("lang"),a=m.value.replace(/[^+\d]/g,"");if(t.inputType==="deleteContentBackward"||t.inputType==="deleteContentForward")return;a.indexOf("+")===0&&(a=a.substring(0,1)+a.substring(1).replace(/\D/g,"")),o.startsWith("+38")?(m.setAttribute("pattern","^\\+\\d{2}-\\d{3}-\\d{3}-\\d{2}-\\d{2}$"),m.setAttribute("data-en-title","Please, enter a valid phone number as shown in the example: +XX-XXX-XXX-XX-XX"),m.setAttribute("data-ua-title","Будь ласка, введіть дійсний номер телефону відповідно до прикладу: +XX-XXX-XXX-XX-XX")):(m.setAttribute("pattern","^\\+\\d{2}-\\d{3}-\\d{3}-\\d{3}$"),m.setAttribute("data-en-title","Please, enter a valid phone number as shown in the example: +XX-XXX-XXX-XXX"),m.setAttribute("data-ua-title","Будь ласка, введіть дійсний номер телефону відповідно до прикладу: +XX-XXX-XXX-XXX")),r==="en"?m.title=m.dataset.enTitle:m.title=m.dataset.uaTitle;let i="",n=0;o.startsWith("+38")?(S=[3,6,9,11],n=17):(S=[3,6,9,12],n=15);for(let l=0;l<a.length;l++)S.includes(l)&&(i+="-"),i+=a[l];i=i.substring(0,n),m.value=i});const Ie=document.getElementById("contact-me-backdrop"),qe=document.querySelector(".socials-contact-me-last-el"),Ce=document.querySelector(".close-btn-contact-me");Ie.addEventListener("keydown",Me);function Me(t){t.key==="Tab"&&t.target===qe&&(t.preventDefault(),Ce.focus())}ue();ge();Pe();
//# sourceMappingURL=commonHelpers.js.map
