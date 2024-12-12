import mongoose from 'mongoose';

const todoSchemas = new mongoose.Schema({

content:{
  type:String,
  require:true
},

isCompleted:{
  type:boolean,
  default:false
}

createdBy:{
  type:mongose.Schema.Types.ObjectId,
  ref:"User"
}

subTodos:{
  type:[{
    type:mongose.Schema.Types.ObjectId,
    ref:"SubTodo"
  }]
}

},{
  timestamps:true
});

export Todo = mongiise.model("Todo", todoSchemas);