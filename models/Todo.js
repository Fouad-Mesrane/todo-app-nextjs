import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema);

export default Todo;
