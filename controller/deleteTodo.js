const Todo = require("../model/Todo");

// Define Route Handler
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete({ _id: id });

    res.status(200).json({
      success: true,
      data: todo,
      message: "Todo deleted successfully",
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
