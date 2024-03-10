var todoService = require('./../service/TodoService');

async function getAllTodos(req, res)
{
  try {
    let todos = await todoService.getAllTodos();
    if (todos) 
    {
      res.json(todos);
    }
    else 
    {
      res.status(400).json({
        error: 'Something worng!'
      });
    }
  }
  catch(e) 
  {
    res.status(400).json({
      error: 'Todo not found'
    });
  }
}

async function getTodoByID(req, res)
{
  let todoID = req.params['todoID'];
  try {
    let todo = await todoService.getTodoByID(todoID);
    if (todo) 
    {
      res.json(todo);
    } 
    else 
    {
      res.status(400).json({
        error: 'Todo not found'
      })
    }
  }
  catch(e)
  {
    res.status(400).json({
      error: 'Todo not found'
    });
  }
}

async function createTodo(req, res)
{
  let todo = req.body;
  try 
  {
    let savedTodo = await todoService.saveTodo(todo);
    if (savedTodo)
    {
      res.status(201).json(savedTodo);
    }
  }
  catch (e) 
  {
    res.status(400).json({
      error : e
    });
  }
}

async function updateTodo(req, res)
{
  let todoID = req.params['todoID'];
  let todoContent = req.body;
  try 
  {
    let updatedTodo = await todoService.updateTodo(todoID, todoContent);
    if (updatedTodo)
    {
      res.status(200).json(updatedTodo);
    }
  }
  catch (e) 
  {
    res.status(400).json({
      error : e.message
    });
  }
}

async function deleteTodo(req, res)
{
  let todoID = req.params['todoID'];
  try 
  {
    let deleteTodo = await todoService.deleteTodo(todoID);
    if (deleteTodo)
    {
      res.status(200).json({
        message : "successfully deleted!"
      });
    }
  }
  catch (e) 
  {
    res.status(400).json({
      error : e.message
    });
  }
}

module.exports = {
  getAllTodos,
  getTodoByID,
  createTodo,
  updateTodo,
  deleteTodo,
}