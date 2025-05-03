const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");  // Import the pagination plugin

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,  // Note: If you're storing dates, consider using `Date` type instead of `String`
    required: true,
  },
  status: {
    type: String,
    enum: ['complete', 'incomplete'],
    required: true,
  },
});

// Apply pagination plugin to the schema
taskSchema.plugin(paginate);

module.exports = mongoose.model("Task", taskSchema);
