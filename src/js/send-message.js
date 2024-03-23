function sendMessage() {
  const form = document.querySelector('#form');

  form.addEventListener('submit', e => {
    e.preventDefault();

    let textInput = document.querySelector('#text');
    let message = textInput.value;

    const token = '6402732796:AAFAOyQjeZHjLcWHVQnx4TwxtSFVwOwlbfo';
    const chat_id = '-4160563284';

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;

    let api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    textInput.value = '';
  });
}

export default sendMessage;
