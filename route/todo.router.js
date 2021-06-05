const express=require('express')
const { addTodo,data,deleteTodo,updateTodo }= require('../controller/todo.controller')
const api=express.Router()

api.get('/todos',(req,res)=>{
    res.json({
        status:200,
        data:Array.from(data.values())
     })
})

api.post('/todo',addTodo)

api.route('/todo/:id')
    .put(updateTodo)
    .delete(deleteTodo)

module.exports=api