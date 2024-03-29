import iziToast from 'izitoast';

// const iziToastStyles = {
//   titleFont: {
//     family: 'inherit',
//     size: '20px',
//     weight: '500',
//   },
//   messageFont: {
//     family: 'inherit',
//     size: '16px',
//     weight: '500',
//   },
//   borderRadius: '12px',
// };

async function sendMessage() {
  const form = document.querySelector('#form');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const message = `<b>Message from the BARCELOLITA website</b>\n<b>Sender:</b> ${form.name.value}\n<b>Phone:</b> ${form.number.value}\n<b>Message:</b> ${form.message.value}`;

    const encodedMessage = encodeURIComponent(message);

    const token = import.meta.env.VITE_TELEGRAM_TOKEN;
    const chat_id = import.meta.env.VITE_CHAT_ID;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodedMessage}&parse_mode=HTML`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        iziToast.success({
          title: 'Thank you!',
          message: 'Message sent successfully!',
          backgroundColor: 'var(--primary-color)',
          titleColor: 'var(--secondary-color)',
          messageColor: 'var(--secondary-color)',
        });
      } else {
        iziToast.error({
          title: 'Oops...',
          message: 'Something went wrong. Please try again.',
          backgroundColor: 'var(--accent-color)',
          titleColor: 'var(--primary-color)',
          messageColor: 'var(--primary-color)',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      iziToast.error({
        title: 'Oops...',
        message: 'Something went wrong. Please try again.',
        backgroundColor: 'var(--accent-color)',
        titleColor: 'var(--primary-color)',
        messageColor: 'var(--primary-color)',
      });
    }

    form.name.value = '';
    form.number.value = '';
    form.message.value = '';
  });
}

export default sendMessage;
