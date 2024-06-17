const Todo = require("../model/Todo");

// Define Route handler
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});

    res.status(200).json({
      success: true,
      data: todos,
      message: "Todos fetched successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};

exports.getTodoId = async (req, res) => {
  try {
    // extract Todo items Basis ID
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    // data forgiven is not found
    if (!todo) {
      return res.status(400).json({
        success: false,
        error: err.message,
        message: "Todo not found",
      });
    }

    //data for given if foubnd
    res.status(200).json({
      data: todo,
      message: "Todo fetched successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};
