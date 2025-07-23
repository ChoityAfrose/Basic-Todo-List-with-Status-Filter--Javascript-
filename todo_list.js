// Step 1: Create an array of todo items
const todos = [
  { title: "Do homework", done: true },
  { title: "Wash the dishes", done: false },
  { title: "Read a book", done: true },
  { title: "Exercise", done: false },
  { title: "Call mom", done: true },
  { title: "Buy groceries", done: false }
];

// Step 2: Filter todos into two categories
const completedTasks = todos.filter(todo => todo.done === true);
const ongoingTasks = todos.filter(todo => todo.done === false);

// Step 3: Display categorized tasks
console.log("Done Tasks: ");
completedTasks.forEach((task,index) => 
{ 
  console.log(`${index+1}. `+ task.title)

});

console.log("Ongoing Tasks:");
ongoingTasks.forEach((task,index) => 
{ 
  console.log(`${index+1}. `+ task.title)

});
