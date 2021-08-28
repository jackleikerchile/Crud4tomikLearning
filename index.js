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
    // Esto es para insertar una fila y con el innerHTML se va duplicando
    // That is to insert a row and with the innerHTML it is duplicated
    const row = table.insertRow();
    row.innerHTML = `
    <td>${title.value}</td>
    <td>${description.value}</td>
    <td class="text-center">
      <input type="checkbox">
    </td>
    <td class="text-right">
      <button class="btn btn-primary mb-1">
        <i class="fa fa-pencil"></i>
      </button>
      <button class="btn btn-danger mb-1 ml-1">
        <i class="fa fa-trash"></i>
      </button>
    </td> 
    `;
  }

  btn.onclick = addTodo;
});

// const btn = document.getElementById('add');
// btn.addEventListener('click', function() {
//   console.log('click');
// })