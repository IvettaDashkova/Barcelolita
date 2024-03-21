import dict from './dict.json';

function langSwitcher() {
  let initialValue = 'en';
  const chekerFields = document.querySelectorAll('.svitcher-fieldset');
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
      document.getElementById(key).textContent = dict[lang][key];
    }

    if (lang === 'en') {
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

export default langSwitcher