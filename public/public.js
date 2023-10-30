const hamburguesa = document.querySelector('.hamburguesa');

hamburguesa.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('click Hamburguesa');
  console.log(this.parentNode);
})