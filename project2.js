function Task(description, dueDate, priorityLevel) {  //constructor function 
    this.description = description;
    this.dueDate = dueDate;
    this.priorityLevel = priorityLevel;
    this.completed=false;
}
//=========================================

const arr = []; // array to store task objects
Task.prototype.create = function() { // create object and add a new task to array
    const var1 = prompt("Enter task description");
    const var2 = prompt("Enter task due date");
    const var3 = prompt("Enter task priority level");
    
    arr.push(new Task(var1, var2, var3));
};

//===================================
function listAllTasks() { //print all tasks by foreach
    console.log("All Tasks:");
    arr.forEach(function(task) {
      console.log("Description:", task.description);
      console.log("Due Date:", task.dueDate);
      console.log("Priority:", task.priorityLevel);
      console.log("Completed:", task.completed ? "Yes" : "No");
      console.log("------------------------");
    });
  }

//===================================




function CompletedTasks(){ //function print all  Completed Tasks
    console.log("All Completed Tasks:");
    arr.forEach(function(task){
        if(task.completed){ console.log("Description:", task.description);
        console.log("Due Date:", task.dueDate);
        console.log("Priority:", task.priorityLevel);
        console.log("Completed:", task.completed ? "Yes" : "No");
        console.log("------------------------");}
       
    });

}

//=====================================
function  MarkTasks(){
    const EnterDescription=prompt("Enter task description:"); //user enter task description
    arr.forEach(function(task){ 
if(EnterDescription==task.description)
task.completed=true;  //Task marked as completed
    })



};

//====================================
function deleteTask() {
    const enterDescription = prompt("Enter task description:"); // User enters task description
  
    const taskIndex = arr.findIndex(function(task) {
      return enterDescription === task.description;
    });
  
    if (taskIndex !== -1) {
      arr.splice(taskIndex, 1);
      console.log("Task deleted successfully.");
    } else {
      console.log("Task not found.");
    }
  }
  
//==================================
function sortDueDate(){arr.sort(function(d1,d2){ //sort tasks by the due date
    if(d1.dueDate<d2.dueDate) return -1;
    if(d1.dueDate>d2.dueDate) return 1;
    else return 0;
});}

//===============================
function sortByProarity(){arr.sort(function(p1,p2){// Sort tasks by priority
    if(p1.priorityLevel<p2.priorityLevel) return -1;
    if(p1.priorityLevel>p2.priorityLevel) return 1;
    else return 0;
});}

//===============================
function clearAllTasks() { //clear all tasks in array
    arr.splice(0, arr.length);

  }
  
//=============================

console.log("***************************");
console.log("Welcome to JS TODO-APP");
console.log("***************************");

let choice;  //we will reassighned it so we use let better than var
  
while (choice !== "0") {
  console.log("Select an action:");
  console.log("1) Add a new task");
  console.log("2) List all tasks");
  console.log("3) List completed tasks");
  console.log("4) Mark a task as completed");
  console.log("5) Delete a task");
  console.log("6) Sort tasks by due date");
  console.log("7) Sort tasks by priority");
  console.log("8) Clear all tasks");
  console.log("0) Exit");
  console.log("***************************");
  choice = prompt("What's your choice?");
  switch (choice) {
    case "1":
        Task.prototype.create();
      break;
    case "2":
        listAllTasks();
      break;
    case "3":
        CompletedTasks();
      break;
    case "4":
        MarkTasks();
      break;
    case "5":
        deleteTask();
      break;
    case "6":
        sortDueDate();
      break;
    case "7":
        sortByProarity();
      break;
    case "8":
        clearAllTasks();
      break;
    case "0":
      break;
    default:
      console.log("Invalid choice. Please try again.");
      break;
  }
}

