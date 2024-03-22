function sendMessage() {
  const form = document.querySelector('#form');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const text = document.querySelector('#text').value;
    console.log(text);
  });
}

export default sendMessage;
