var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name is required"
  },
  completed: {
    type: Boolean,
    dafault: false
  },
  created_data: {
    type: Date,
    default: Date.now
  }
});

var Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
