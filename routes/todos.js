const express = require("express");
const router = express.Router();

// import Controller
const { createTodo } = require("../controller/createTodo");
const { getTodos, getTodoId } = require("../controller/getTodos");
const { updateTodo } = require("../controller/updateTodo");
const { deleteTodo } = require("../controller/deleteTodo");

// Define API routes
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos);
router.get("/getTodoId/:id", getTodoId);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

// Export Router
module.exports = router;
