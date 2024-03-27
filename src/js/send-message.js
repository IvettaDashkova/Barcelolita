// import iziToast from 'izitoast';

function sendMessage() {
  const form = document.querySelector('#form');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    let textInput = document.querySelector('#text');
    let message = textInput.value;

    const token = import.meta.env.VITE_TELEGRAM_TOKEN;
    const chat_id = import.meta.env.VITE_CHAT_ID;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;

    let api = new XMLHttpRequest();

    api.open('GET', url, true);
    api.send();

    // try {
    //   await fetch(url);
    //   console.log('suc');
    //   iziToast.success({
    //     title: 'Success',
    //     message: 'Message sent successfully!',
    //   });
    // } catch (error) {
    //   iziToast.error({
    //     title: 'Error',
    //     message: 'Failed to send message. Please try again later.',
    //   });
    // }

    textInput.value = '';
    iziToast.success({
      title: 'Success',
      message: 'Message sent successfully!',
      position: 'topRight',
    });
  });
}

export default sendMessage;
