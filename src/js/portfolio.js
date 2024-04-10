import { formImgURL, formatDate } from './helpers';
import { fetchPortfolio } from './API';

export async function showPortfolio(lang) {
  const portfolio = await fetchPortfolio();
  const contentPortfolio = await renderPortfolio(portfolio, lang);
  const portfolioList = document.querySelector('.portfolio-list');
  portfolioList.innerHTML = contentPortfolio;
}

export function renderPortfolio(portfolio, lang) {
  const chunkSize = 4;
  const chunks = [];

  for (let i = 0; i < portfolio.length; i += chunkSize) {
    chunks.push(portfolio.slice(i, i + chunkSize));
  }

  return chunks
    .map(chunk => {
      return `
    ${
      chunk[0]
        ? `
    <li class="portfolio-item" data-popup="${chunk[0]._id}">
      <button class="item-button-portfolio">
        <span class="portfolio-item-title">${
          lang === 'en' ? chunk[0].nameEn : chunk[0].nameUa
        }
        </span>
        <span
          class="portfolio-item-description-small portfolio-item-description"
        >
          ${lang === 'en' ? chunk[0].descriptionEn : chunk[0].descriptionUa}
        </span>
        <img
          src=${formImgURL(chunk[0].imgURL)}
          alt=${lang === 'en' ? chunk[0].nameEn : chunk[0].nameUa}
          class="portfolio-item-image small"
          loading="lazy"
        />
        <span class="data-svg-container">
          <span class="portfolio-item-date">
           ${
             lang === 'en'
               ? formatDate(chunk[0]._updatedAt, 'en')
               : formatDate(chunk[0]._updatedAt, 'ua')
           }
          </span>
          <svg  class="arrow-icon" width="24" height="24">
            <use href="./img/icons/symbol.svg#icon-arrow-portfolio"></use>
          </svg>
        </span>
      </button>
    </li>`
        : ''
    }
${
  chunk[1]
    ? `    
    <li class="portfolio-item" data-popup=${chunk[1]._id}>
      <button class="item-button-portfolio">
        <span class="portfolio-item-title">
          ${lang === 'en' ? chunk[1].nameEn : chunk[1].nameUa}
        </span>
        <span
          class="portfolio-item-description portfolio-item-description-medium"
        >
            ${lang === 'en' ? chunk[1].descriptionEn : chunk[1].descriptionUa}
        </span>
        <img
           src=${formImgURL(chunk[1].imgURL)}
          alt=${lang === 'en' ? chunk[1].nameEn : chunk[1].nameUa}
          class="portfolio-item-image medium"
          loading="lazy"
        />
        <span class="data-svg-container">
          <span class="portfolio-item-date">
           ${
             lang === 'en'
               ? formatDate(chunk[1]._updatedAt, 'en')
               : formatDate(chunk[1]._updatedAt, 'ua')
           }
          </span>
          <svg  class="arrow-icon" width="24" height="24">
            <use href="./img/icons/symbol.svg#icon-arrow-portfolio"></use>
          </svg>
        </span>
      </button>
    </li>`
    : ''
}
${
  chunk[2]
        ? `
    <li class="portfolio-item position-top" data-popup="${chunk[2]._id}">
      <button class="item-button-portfolio">
        <span class="portfolio-item-title">${
             lang === 'en' ? chunk[2].nameEn : chunk[2].nameUa
        }</span>
        <span class="portfolio-item-description portfolio-item-description-large"
        >
          ${lang === 'en' ? chunk[2].descriptionEn : chunk[2].descriptionUa}
        </span>
        <img
          src=${formImgURL(chunk[2].imgURL)}
          alt=${lang === 'en' ? chunk[2].nameEn : chunk[2].nameUa}
          class="portfolio-item-image large"
          loading="lazy"
        />
        <span class="data-svg-container">
         <span class="portfolio-item-date"  >
           ${
             lang === 'en'
               ? formatDate(chunk[2]._updatedAt, 'en')
               : formatDate(chunk[2]._updatedAt, 'ua')
           }
          </span>
          <svg  class="arrow-icon" width="24" height="24">
            <use href="./img/icons/symbol.svg#icon-arrow-portfolio"></use>
          </svg>
        </span>
      </button>
    </li>`
    : ''
}
   ${
     chunk[3]
        ? `
    <li class="portfolio-item" data-popup="${chunk[3]._id}">
      <button class="item-button-portfolio position-down-container">
        <span class="portfolio-item-title" >${
          lang === 'en' ? chunk[3].nameEn : chunk[3].nameUa
        }</span>
        <span
          class="portfolio-item-description-small portfolio-item-description"
        >${lang === 'en' ? chunk[3].descriptionEn : chunk[3].descriptionUa}
        </span>
        <img
          src=${formImgURL(chunk[3].imgURL)}
          alt=${lang === 'en' ? chunk[3].nameEn : chunk[3].nameUa}
          class="portfolio-item-image small"
          loading="lazy"
        />
        <span class="data-svg-container">
          <span class="portfolio-item-date">
           ${
             lang === 'en'
               ? formatDate(chunk[3]._updatedAt, 'en')
               : formatDate(chunk[3]._updatedAt, 'ua')
           }
          </span>
          <svg  class="arrow-icon" width="24" height="24">
            <use href="./img/icons/symbol.svg#icon-arrow-portfolio"></use>
          </svg>
        </span>
      </button>
    </li>`
       : ''
   }
     `;
    })
    .join('');
}
