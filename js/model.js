// A function that have a object
// Una function que tiene un objecto contructor
export default class Model {
  constructor() {
    this.view = null;
    // vamos almacenar los todo
    // let's store everything 
    this.todos = [];
    this.currentId = 1; 
  }

  setView(view) {
    this.view = view;
  }

  getTodos() {
    return this.todos;
  }

  addTodo(title, description) {
    //console.log(title, description);
    const todo = {
      id: this.currentId++,
      title,
      description,
      completed: false,
    }
    //console.log(todo);
    this.todos.push(todo);
    console.log(this.todos);

    // Esto va asignar un clon de mi objecto me va a devolver un clo de mi objeto
    //return Object.assign({}, todo);
    // Devolviendo el objecto de una forma mas corta
    return {...todo}
    //return todo;
  }
}