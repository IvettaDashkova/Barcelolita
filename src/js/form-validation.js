const numberInput = document.getElementById('number');
let separators = [];

numberInput.addEventListener('input', e => {
  const countryCode = numberInput.value.substring(0, 3);
  let lang = localStorage.getItem('lang');
  let phoneNumber = numberInput.value.replace(/[^+\d]/g, '');

  if (
    e.inputType === 'deleteContentBackward' ||
    e.inputType === 'deleteContentForward'
  ) {
    return;
  }

  const firstPlusIndex = phoneNumber.indexOf('+');

  if (firstPlusIndex === 0) {
    phoneNumber =
      phoneNumber.substring(0, 1) + phoneNumber.substring(1).replace(/\D/g, '');
  }

  if (countryCode.startsWith('+38')) {
    numberInput.setAttribute(
      'pattern',
      '^\\+\\d{2}-\\d{3}-\\d{3}-\\d{2}-\\d{2}$'
    );

    numberInput.setAttribute(
      'data-en-title',
      'Please, enter a valid phone number as shown in the example: +XX-XXX-XXX-XX-XX'
    );

    numberInput.setAttribute(
      'data-ua-title',
      'Будь ласка, введіть дійсний номер телефону відповідно до прикладу: +XX-XXX-XXX-XX-XX'
    );
  } else {
    numberInput.setAttribute('pattern', '^\\+\\d{2}-\\d{3}-\\d{3}-\\d{3}$');

    numberInput.setAttribute(
      'data-en-title',
      'Please, enter a valid phone number as shown in the example: +XX-XXX-XXX-XXX'
    );

    numberInput.setAttribute(
      'data-ua-title',
      'Будь ласка, введіть дійсний номер телефону відповідно до прикладу: +XX-XXX-XXX-XXX'
    );
  }

  if (lang === 'en') {
    numberInput.title = numberInput.dataset.enTitle;
  } else {
    numberInput.title = numberInput.dataset.uaTitle;
  }

  let formattedPhoneNumber = '';
  let numberLength = 0;

  if (countryCode.startsWith('+38')) {
    separators = [3, 6, 9, 11];
    numberLength = 17;
  } else {
    separators = [3, 6, 9, 12];
    numberLength = 15;
  }

  for (let i = 0; i < phoneNumber.length; i++) {
    if (separators.includes(i)) {
      formattedPhoneNumber += '-';
    }
    formattedPhoneNumber += phoneNumber[i];
  }

  formattedPhoneNumber = formattedPhoneNumber.substring(0, numberLength);

  numberInput.value = formattedPhoneNumber;
});
