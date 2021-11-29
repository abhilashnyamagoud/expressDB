const mongoose=require('mongoose')

const Schema=mongoose.Schema

const taskSchema=new Schema({
    title:{
        type:String,
        required:[true,'title is requred']
    },
    description:{
        type:String
    },      
    completed:{
        type:Boolean
    },
    dueDate:{
        type:Date
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    category: {
        type:Schema.Types.ObjectId,
        ref:'Category',
        required:true
    }
})

//modal
const Task=mongoose.model('Task',taskSchema)

module.exports=Task