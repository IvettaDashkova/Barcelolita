const numberInput = document.getElementById('number');

numberInput.addEventListener('input', () => {
  const countryCode = numberInput.value.substring(0, 3);
  console.dir(countryCode);
  if (countryCode.startsWith('+38')) {
    numberInput.setAttribute('pattern', `^\+\d{2}-\d{3}-\d{3}-\d{2}-\d{2}$`);
    numberInput.setAttribute(
      'title',
      'Please enter a valid number like +XX-XXX-XXX-XX-XX'
    );
  } else {
    numberInput.setAttribute('pattern', `^\+\d{2}-\d{3}-\d{3}-\d{3}$`);
    numberInput.setAttribute(
      'title',
      'Please enter a valid number like +XX-XXX-XXX-XXX'
    );
  }
});
