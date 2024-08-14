const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://arsh99188:arsh7752@cluster0.qult38w.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title : String ,
    description : String,
    completed : {
        type : Boolean,
        default : false
    }
})

const todo = mongoose.model('todos', todoSchema);

module.export = {
    todo
}