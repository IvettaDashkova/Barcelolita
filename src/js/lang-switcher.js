import dict from './dict.json';

function langSwitcher() {
  let initialValue = 'en';
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

    // Add Svitlana Klymenko
    let inputFields = document.querySelectorAll('.input-contact-me');
    inputFields.forEach(input => {
      if (lang === 'en') {
        input.placeholder = input.dataset.enPlaceholder;
      } else {
        input.placeholder = input.dataset.uaPlaceholder;
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
  }

  let langCheck = localStorage.getItem('lang');

  if (langCheck) {
    initialValue = langCheck;
  }

  switchLang(initialValue);
}

export default langSwitcher;
