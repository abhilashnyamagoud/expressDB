const express=require('express')
const app=express()
const port=3040
const router=require('./config/routes')
const configureDB=require('./config/database')


//setup DB
configureDB()
app.use(express.json())
app.use(router)
 

app.listen(port,()=>{
    console.log('server running on port',port)
})