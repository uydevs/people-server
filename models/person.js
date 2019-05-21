const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = new Schema({
  married: Boolean,
  name: String,
  surname: String,
  age: Number,
});

mongoose.model('person', personSchema, 'people');
