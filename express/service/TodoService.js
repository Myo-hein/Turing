var Todos = require('../model/Todo');

async function getAllTodos()
{
  return Todos.find();
}

async function getTodoByID(todoID)
{
  return Todos.findById(todoID);
}

async function saveTodo(todo)
{
  let newTodo = new Todos(todo);
  return newTodo.save();
}

async function updateTodo(todoID, todoContent)
{
  let todo = Todos.findById(todoID);
  if(todo)
  {
    let updatedTodo = await Todos.findByIdAndUpdate(todoID, todoContent, {new : true});
    return updatedTodo;
  }
  else
  {
    throw new Error('Invalid todoID');
  }
}

async function deleteTodo(todoID)
{
  let todo = await Todos.findById(todoID);
  if(todo)
  {
    return await Todos.findByIdAndDelete(todoID);
  }
  else
  {
    throw new Error('Invalid todoID');
  }
}

module.exports = {
  getAllTodos,
  getTodoByID,
  saveTodo,
  updateTodo,
  deleteTodo,
}