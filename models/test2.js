const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const test2Schema = new Schema({
  name2: { type: String },
  age2: { type: Number},
},
{ timestamps: true }
)

module.exports = mongoose.model('Test2', test2Schema);