const enviar = document.getElementById('enviar');
const nombre = document.getElementById('usuario');
const password = document.getElementById('password');
const passwordComparativo = document.getElementById('password-comparativo');
const email = document.getElementById('email');

enviar.addEventListener('click', async function (e) {
  e.preventDefault();
  console.log('click en enviar!');
  console.log(nombre.value);
  console.log(email.value);
  console.log(password.value);
  console.log(passwordComparativo.value);

  //comprovacion de password
  if (password.value === passwordComparativo.value) {
    const respuesta = await fetch('/api/v1/registrar', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        nombre: nombre.value,
        email: email.value,
        password: password.value
      })
    })
    return respuesta.json()
  }
  console.log('Las contraseñas no coinsiden');
})