const Todo = require("../model/Todo");

//Define Route handler
exports.createTodo = async (req, res) => {
  try {
    //extract title and description from requst body
    const { title, description } = req.body;
    //Create a new todo Obj and insert in DB
    const response = await Todo.create({ title, description });
    // Send a JSON  response with a success flag.
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry created successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
      error: err.message,
    });
  }
};
