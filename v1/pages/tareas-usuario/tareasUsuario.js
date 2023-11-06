console.log('tareas usuario script');
console.log(document.cookie);

// aplicar un if
// si tenemos una cookie con un jwt --> fetch
// y imprimir sus  tareas 
// de lo contrario en el header cargar login y registrar

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