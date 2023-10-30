const hamburguesa = document.querySelector('.hamburguesa');
const lista = document.querySelector('.lista');

hamburguesa.addEventListener('click', function (e) {
  e.preventDefault();
  this.children[0].remove();
  console.log('click Hamburguesa');
  console.log(this.parentNode);
  console.log(this.children[0]);
  console.log(lista);
  
  const listaClases = lista.classList;
  if (listaClases.contains('ocultar') == true) {
    listaClases.remove('ocultar')
    hamburguesa.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`
  } else{
    listaClases.add('ocultar')
    hamburguesa.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><rect y="11" width="24" height="2" rx="1"/><rect y="4" width="24" height="2" rx="1"/><rect y="18" width="24" height="2" rx="1"/></svg>`
  }
  console.log(lista.classList);
})