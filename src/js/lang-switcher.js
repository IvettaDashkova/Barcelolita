import dict from '../constants/dict.json';
import { showPortfolio } from './portfolio';

function langSwitcher() {
  let initialValue = 'en';
  if (navigator.language == 'uk-UA') {
    initialValue = 'uk';
  }
  const chekerFields = document.querySelectorAll('.svitcher-text');
  let dataLanguage = document.querySelectorAll('[data-en]');
  chekerFields.forEach(chekerField => {
    chekerField.addEventListener('click', chooseLang);
  });

  function chooseLang(e) {
    switchLang(e.target.value);
    localStorage.setItem('lang', e.target.value);
  }

  function switchLang(lang) {
    for (let key in dict[lang]) {
      let searchKey = '[data-id=' + key + ']';
      let translateEl = document.querySelector(searchKey);
      if (translateEl) {
        translateEl.textContent = dict[lang][key];
      }
    }

    // Change input placeholder & title language
    let inputFields = document.querySelectorAll('.input-contact-me');
    inputFields.forEach(input => {
      if (lang === 'en') {
        input.placeholder = input.dataset.enPlaceholder;
        input.title = input.dataset.enTitle;
      } else {
        input.placeholder = input.dataset.uaPlaceholder;
        input.title = input.dataset.uaTitle;
      }
    });
    // The end

    if (lang == 'en') {
      dataLanguage.forEach(data => {
        data.textContent = data.dataset.en;
      });
      document.querySelectorAll('.en-text').forEach(el => {
        el.classList.add('svitcher-highlight');
      });
      document.querySelectorAll('.ua-text').forEach(el => {
        el.classList.remove('svitcher-highlight');
      });
    } else {
      dataLanguage.forEach(data => {
        data.textContent = data.dataset.ua;
      });
      document.querySelectorAll('.ua-text').forEach(el => {
        el.classList.add('svitcher-highlight');
      });
      document.querySelectorAll('.en-text').forEach(el => {
        el.classList.remove('svitcher-highlight');
      });
    }
      showPortfolio(lang);
  }

  let langCheck = localStorage.getItem('lang');

  if (langCheck) {
    initialValue = langCheck;
  }

  switchLang(initialValue);
}

export default langSwitcher;
