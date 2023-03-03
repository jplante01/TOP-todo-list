const Task = (description, dueDate = null) => {
  const notes = [];

  const addNote = (note) => {
    notes.push(note);
  };

  // add spread operator to return copy of array for safety
  const getNotes = () => [...notes];

  const editDescription = (newDescrip) => {
    description = newDescrip;
  };

  const editDueDate = (newDate) => {
    dueDate = newDate;
  };

  return {
    description,
    dueDate,
    editDescription,
    editDueDate,
    addNote,
    getNotes,
  };
};

export default Task;
