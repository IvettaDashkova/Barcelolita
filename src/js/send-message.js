function sendMessage() {
  const form = document.querySelector('#form');

  form.addEventListener('submit', e => {
    e.preventDefault();

    let textInput = document.querySelector('#text');
    let message = textInput.value;

    const token = import.meta.env.VITE_TELEGRAM_TOKEN;
    const chat_id = import.meta.env.VITE_CHAT_ID;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;

    let api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    textInput.value = '';
  });
}

export default sendMessage;
