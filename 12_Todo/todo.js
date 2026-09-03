const fs = require("fs");
const filePath = "./12_Todo/tasks.json";

const loadTask = () => {
  try {
    const dataBufferJSON = fs.readFileSync(filePath).toString();
    return JSON.parse(dataBufferJSON);
  } catch (error) {
    return [];
  }
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};

const addTask = (task) => {
  const tasks = loadTask();
  tasks.push({ task });
  saveTasks(tasks);
  console.log(`Task added : ${task}`);
};

const listTask = () => {
  const dataJSON = loadTask();
  dataJSON.forEach((task, index) => {
    console.log(`Task ${index + 1} - ${task.task}`);
  });
};

const removeTask = (task) => {
  const tasks = loadTask();
  tasks.pop({ task });
  saveTasks(tasks);
  console.log(`Task removed : ${task}`);
};

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTask();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("command not recognised");
}
