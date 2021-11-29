const mongoose=require('mongoose')

const configureDB=()=>{
    mongoose.connect('mongodb://localhost:27017/nov1')
    .then(()=>{
        console.log('connected to database')
    })
    .catch((err)=>{
        console.log('errors connecting to db',err)
    })
}

module.exports=configureDB