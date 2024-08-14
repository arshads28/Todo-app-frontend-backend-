const express = require("express");
const { createTodo, updateTodo } = require("./type");
const {todo} = require("./db")
const cors = require ("cors")
const app = express();


app.use(express.json());
app.use(cors());
 


app.post("/todo" , async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg : "You send the wrong inputs"
        })
        return;
    }
    //put it in mongodb
     await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
   })
    res.json({
        msg : "todo created"
    })

})


app.get("/todos",async function(req,res){
    //const todos = await todo.find({});

    res.json({
        todos:[]
    })

})


app.put("/completed",async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "the wrong input"
        })
            return;
    }
    await todo.update({
        _id: req.body.id
    },{
        complete: true
    })
    res.json({
        msg: "todo marked as completed "
    })

})
app.listen(3000);