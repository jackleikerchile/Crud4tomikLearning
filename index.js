// The DOMContentLoaded means that all the javascript is not executed until the html is fully loaded, and taht the elements are not null

document.addEventListener('DOMContentLoaded', function() {
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const table = document.getElementById('table');
  const alert = document.getElementById('alert');
  const btn = document.getElementById('add');

  // Show values integer by console
  // btn.onclick = function() {
  //   console.log('Title:', title.value);
  //   console.log('Description:', description.value);
  // }

  function addTodo() {
    if (title.value === '' || description.value === '') {
      //console.error('Title and description are required');
      alert.classList.remove('d-none');
      alert.innerText = 'Title and description are required';
      return;
    }
    // else {
    //   console.log('ok')
    // }
    // Si todo tiene exito
    // if everything is successful
    alert.classList.add('d-none');
  }

  btn.onclick = addTodo;
});

// const btn = document.getElementById('add');
// btn.addEventListener('click', function() {
//   console.log('click');
// })