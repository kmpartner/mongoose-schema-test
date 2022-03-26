// const TestSchema = require('./models/test');

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

module.exports = mongoose.model('Test', testSchema);