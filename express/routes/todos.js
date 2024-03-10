var express = require('express');
var router = express.Router();
var todos = require('./../controller/TodoController');

/* GET users listing. */
router.get('/', todos.getAllTodos);
router.get('/:todoID', todos.getTodoByID);
router.post('/', todos.createTodo);
router.put('/:todoID', todos.updateTodo);
router.delete('/:todoID', todos.deleteTodo);

module.exports = router;
