const Project = (name, dueDate = null) => {
  const tasks = [];

  const addTask = (task) => {
    tasks.push(task);
  };
  // add spread operator to return copy of array for safety
  const getTasks = () => [...tasks];

  return {
    name,
    dueDate,
    addTask,
    getTasks,
  };
};

export default Project;
