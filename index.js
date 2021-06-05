const express=require('express');
const todoRouter=require('./route/todo.router')
const morgan = require('morgan');
const app=express()
const fs=require('fs')
// const parse=require('csv-parser')
// const path=require('path')

// const result=[]

app.use(express.json())

app.use(morgan('combined'))


// function loadPlanetData(){
//     fs.createReadStream(path.join(__dirname,'kepler_data.csv'))
//         .pipe(parse({
//             comment:'#',
//             columns:true
//         }))
//         .on('data',async (data)=>{
//             const keplerData=await data
//             result.push(keplerData)
//         })
//         .on('error',(err)=>{
//             console.log(err)
//         })
//         .on('end',async ()=>{
//             console.log(`Found ${result.length} Habitable Planet.`)
//         })
// }

// app.get('/planets',(req,res)=>res.json({status:200,data:result}))


app.use(todoRouter)

app.listen(3000,async ()=>{
    // await loadPlanetData()
    console.log(`Listening on Port 3000`)
})