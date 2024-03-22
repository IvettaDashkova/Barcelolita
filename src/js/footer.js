import dict from './dict.json';

function changeLang() {
  let initialValue = 'en';
  const getLangs = document.querySelectorAll('.svitcher-fieldset');
  let dataLang = document.querySelectorAll('[data-en]');

  getLangs.forEach(getLang => {
    getLang.addEventListener('click', chooseLang);
  });

  function chooseLang(e) {
    language(e.target.value);
    localStorage.setItem('lang', e.target.value);
  }
  const res = chooseLang();
  console.log(res);

  function language(lang) {
    for (let key in dict[lang]) {
      document.getElementById(key).textContent = dict[lang][key];
    }
    if (lang === 'en') {
      dataLang.forEach(data => {
        data.textContent = data.dataset.en;
      });
      document.querySelectorAll('.en-text').forEach(el => {
        el.classList.add('svitcher-highlight');
      });
      document.querySelectorAll('.ua-text').forEach(el => {
        el.classList.remove('svitcher-highlight');
      });
    } else {
      dataLang.forEach(data => {
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
  language(initialValue);
}

export default changeLang;
