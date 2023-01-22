const prompt = require("prompt-sync")({ sigint: true }); // importing a prompt package for handling prompt from users
console.log(" YOUR DAILY TODO APPLICATION");
console.log(" enter / to cancel any process \n to delete a task enter del");

// initialize an empty array for storing items on the todo list
let todoItems = [];
// a class instance for a single task
class Task {
  constructor(task) {
    this.task = task;
    this.id = todoItems.length + 1;
  }
}
// Todo list class that have different methods of modifying the todo list
class Todo {
  // this method creates a new task
  addTask(task) {
    const newTask = new Task(task);
    todoItems = [...todoItems, JSON.stringify(newTask)];
    return;
  }

  // method to delete a task status
  deleteTask(id) {
    const completed = todoItems.find((task) => task[id] === id);
    return completed;
  }
}

let input = prompt("Input Task: ");

//  while loop to keep the prompt on while still running the console app
while (input !== "/") {
  if ((input == "") | !input) {
    console.log("please enter a task");
  } else if (input.trim() === "del") {
    let id = prompt("enter Id of task you want to delete: ");
    let del = new Todo();
    // console.log(del.deleteTask(id));
    console.log("task deleted succesfully");
  } else {
    const Task = new Todo();
    Task.addTask(input);
    console.log(todoItems);
  }
  input = prompt("Input Task: ");
}
