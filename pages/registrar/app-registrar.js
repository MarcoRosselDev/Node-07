const enviar = document.getElementById('enviar');
const nombre = document.getElementById('usuario');
const password = document.getElementById('password');
const passwordComparativo = document.getElementById('password-comparativo');
const email = document.getElementById('email');

enviar.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('click en enviar!');
  console.log(nombre.value);
  console.log(email.value);
  console.log(password.value);
  console.log(passwordComparativo.value);
})