const numberInput = document.getElementById('number');

numberInput.addEventListener('input', () => {
  const countryCode = numberInput.value.substring(0, 3);
  console.dir(countryCode);
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
});
