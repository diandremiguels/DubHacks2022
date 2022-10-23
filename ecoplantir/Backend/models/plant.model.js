const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: {type: String, required: true, trim: true},
  difficulty: {type: String, required: true, trim: true},
  state:{type: String, required:true, trim:true},
  space:{type:String, required:true, trim:true},
  lighting:{type:String, required:true, trim:true},
  instructions:{type:String, required:true, trim:true},
  link:{type:String, required:true, trim:true},
  users:{type:[String], required:true},
  sustainability:{type:String, required:true, trim:true}
},
{timestamps: true,}
);
const Plant = mongoose.model('Plant', plantSchema);
module.exports = Plant;