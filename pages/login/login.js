const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('sendLogin');

submit.addEventListener('click', async function (e) {
  e.preventDefault();
  console.log(email.value);
  console.log(password.value);
  try {
    const login = await fetch('/api/v1/login', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    });

    console.log(login);
    /* login
      .then(data => data.json())
      .then(valor => console.log(valor)) */
  } catch (error) {
    console.log(error);
  }
})

console.log(document.cookie);