import { formImgURL, formatDate } from './helpers';
import { fetchPortfolio } from './API';

export async function showPortfolio() {
  const portfolio = await fetchPortfolio();
  const qwe = await renderPortfolio(portfolio);
  const portfolioList = document.querySelector('.portfolio-list');
  portfolioList.innerHTML = qwe;
}
showPortfolio();

export function renderPortfolio(portfolio) {
  const chunkSize = 4;
  const chunks = [];

  for (let i = 0; i < portfolio.length; i += chunkSize) {
    chunks.push(portfolio.slice(i, i + chunkSize));
  }

  const qwe = chunks
    .map(chunk => {
      return `
    ${
      chunk[0]
        ? `  <li class="portfolio-item" data-popup="${chunk[0].nameEn}">
      <button class="item-button-portfolio">
        <span class="portfolio-item-title"  data-en="${
          chunk[0].nameEn
        }" data-ua="${chunk[0].nameUa}">${chunk[0].nameEn}</span>
        <span
          class="portfolio-item-description-small portfolio-item-description"
          data-en=${chunk[0].descriptionEn} data-ua=${chunk[0].descriptionUa}
        >
          ${chunk[0].descriptionEn}
        </span>
        <img
          src=${formImgURL(chunk[0].imgURL)}
          alt=${chunk[0].nameEn}
          class="portfolio-item-image small"
          loading="lazy"
        />
        <span class="data-svg-container">
          <span class="portfolio-item-date"  data-en="${formatDate(
            chunk[0]._updatedAt,
            'en'
          )}" data-ua="${formatDate(chunk[0]._updatedAt, 'ua')}">
           ${formatDate(chunk[0]._updatedAt, 'en')}
          </span>
         
            //   <svg   class="arrow-icon"
            // width="24"
            // height="24">
            //         <use href="/img/icons/symbol.svg#icon-right"></use>
            //     </svg>
        </span>
      </button></li>`
        : ''
    }
${
  chunk[1]
    ? `    
       <li class="portfolio-item" data-popup=${chunk[1].nameEn}>
      <button class="item-button-portfolio">
        <span class="portfolio-item-title"  data-en=${
          chunk[1].nameEn
        } data-ua=${chunk[1].nameUa}>
          ${chunk[1].nameEn}
        </span>
        <span
          class="portfolio-item-description portfolio-item-description-medium"
         data-en=${chunk[1].descriptionEn} data-ua=${chunk[1].descriptionUa}
        >
            ${chunk[1].descriptionEn}
        </span>
        <img
           src=${formImgURL(chunk[1].imgURL)}
          alt=${chunk[1].nameEn}
          class="portfolio-item-image medium"
          loading="lazy"
        />
        <span class="data-svg-container">
          <span class="portfolio-item-date"  data-en="${formatDate(
            chunk[1]._updatedAt,
            'en'
          )}" data-ua="${formatDate(chunk[1]._updatedAt, 'ua')}">
           ${formatDate(chunk[1]._updatedAt, 'en')}
          </span>
           //   <svg   class="arrow-icon"
            // width="24"
            // height="24">
            //         <use href="/img/icons/symbol.svg#icon-right"></use>
            //     </svg>
        </span>
      </button>
    </li>`
    : ''
}
${
  chunk[2]
    ? `    <li class="portfolio-item position-top" data-popup="${
        chunk[2].nameEn
      }">
      <button class="item-button-portfolio">
           <span class="portfolio-item-title"  data-en="${
             chunk[2].nameEn
           }" data-ua="${chunk[2].nameUa}">${chunk[2].nameEn}</span>
          <span
 class="portfolio-item-description portfolio-item-description-large"
          data-en=${chunk[2].descriptionEn} data-ua=${chunk[2].descriptionUa}
        >
          ${chunk[2].descriptionEn}
        </span>
          <img
           src=${formImgURL(chunk[2].imgURL)}
          alt=${chunk[2].nameEn}
      class="portfolio-item-image large"
          loading="lazy"
        />
        <span class="data-svg-container">
         <span class="portfolio-item-date"  data-en="${formatDate(
           chunk[2]._updatedAt,
           'en'
         )}" data-ua="${formatDate(chunk[2]._updatedAt, 'ua')}">
           ${formatDate(chunk[2]._updatedAt, 'en')}
          </span>
           //   <svg   class="arrow-icon"
            // width="24"
            // height="24">
            //         <use href="/img/icons/symbol.svg#icon-right"></use>
            //     </svg>
        </span>
      </button>
    </li>`
    : ''
}
   ${
     chunk[3]
       ? ` <li class="portfolio-item" data-popup="${chunk[3].nameEn}">
      <button class="item-button-portfolio position-down-container">
        <span class="portfolio-item-title"  data-en="${
          chunk[3].nameEn
        }" data-ua="${chunk[3].nameUa}">${chunk[3].nameEn}</span>
    
            <span
          class="portfolio-item-description-small portfolio-item-description"
          data-en=${chunk[3].descriptionEn} data-ua=${chunk[3].descriptionUa}
        >
          ${chunk[3].descriptionEn}
        </span>
     
               <img
           src=${formImgURL(chunk[3].imgURL)}
          alt=${chunk[3].nameEn}
  class="portfolio-item-image small"
          loading="lazy"
        />
        <span class="data-svg-container">
             <span class="portfolio-item-date"  data-en="${formatDate(
               chunk[3]._updatedAt,
               'en'
             )}" data-ua="${formatDate(chunk[3]._updatedAt, 'ua')}">
           ${formatDate(chunk[3]._updatedAt, 'en')}
          </span>
             //   <svg   class="arrow-icon"
            // width="24"
            // height="24">
            //         <use href="/img/icons/symbol.svg#icon-right"></use>
            //     </svg>
        </span>
      </button>
    </li>`
       : ''
   }
     `;
    })
    .join('');
  console.log('qwe', qwe);
  return qwe;
}
