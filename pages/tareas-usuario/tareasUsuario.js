console.log('tareas usuario script');
console.log(document.cookie);

try {
  const response = fetch('/api/v1/tarea', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  console.log(response);
} catch (error) {
  console.log(error);
}