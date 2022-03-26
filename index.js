const Test = require('./models/test');
const Test2 = require('./models/test2');
// const indexTest = 'index-test';
// console.log('TestSchema', TestSchema, typeof(TestSchema));
// console.log('indexTest', indexTest);


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
    name: { type: String },
    age: { type: Number},
},
{ timestamps: true }
)

const test2Schema = new Schema({
  name2: { type: String },
  age2: { type: Number},
},
{ timestamps: true }
)

// module.exports = mongoose.model('Test', testSchema);

// module.exports = {
//   Test: mongoose.model('Test', testSchema),
//   Test2: mongoose.model('Test2', test2Schema),
// }

module.exports = {
  Test: Test,
  Test2: Test2,
}