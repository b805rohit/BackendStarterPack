let data=new Map()

data.set(1,{"userId": 1,"title": "delectus aut autem","completed": false})
data.set(2,{"userId": 1,"title": "quis ut nam facilis et officia qui","completed": false})

//@POST
// localhost:3000/todo
function addTodo(req,res){
    const { userId,title,completed } = req.body
    const maxId=Array.from(data.keys()).reduce((acc,cur)=>Math.max(acc,cur))+1
    data.set(maxId,{userId,title,completed})
    res.json({
        status:201,
        data:data.get(maxId)
    })
}

//PUT
//localhost:3000/todo/:id
function updateTodo(req, res) {
    const { id }=req.params
    const { title,completed,userId } = req.body
    
    // Upsert
    data.set(parseInt(id),{
      title,
      completed,
      userId
    })

    res.json({
        status:200,
        data:data.get(id)
    })
}

//DELETE
//localhost:3000/todo/:id
function deleteTodo(req,res){
    const { id }=req.params
    data.delete(id)
    res.json({
        status:200,
        message:`Successfully Deleted`
    })
}


module.exports ={
    addTodo,
    deleteTodo,
    updateTodo,
    data
}
