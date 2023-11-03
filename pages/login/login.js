const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('sendLogin');

submit.addEventListener('click', async function (e) {
  e.preventDefault();
  try {
    const login = await fetch('/api/v1/login', {
      method: 'POST',
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
    //console.log(login.json());
    const prom = login.json();
    prom.then(data => console.log(data))

  } catch (error) {
    console.log(error);
  }
})

console.log(document.cookie);