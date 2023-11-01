const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('sendLogin');

submit.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(email.value);
  console.log(password.value);
  // enviar un fetch con los valore,
  // encriptar el password para compararlo con el password de la database
  // si coinsiden los valores generar un token con jwt
  // buscar como guardar el jwt en el seccion storage y local storage
  // pista, usar cookies
})