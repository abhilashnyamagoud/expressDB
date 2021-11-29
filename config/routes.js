const express=require('express')

const router=express.Router()
const taskController=require('../app/controllers/taskController')
const categoryController=require('../app/controllers/categoryController')

router.get('/',(req,res)=>{
    res.send('Welcome to Website')
})
//For Task
router.get('/api/tasks',taskController.list)
router.post('/api/tasks',taskController.create)
router.get('/api/tasks/:id',taskController.show)
router.put('/api/tasks/:id',taskController.update)
router.delete('/api/tasks/:id',taskController.remove)

//for category
router.get('/api/categories',categoryController.list)
router.post('/api/categories',categoryController.create)
router.put('/api/categories/:id',categoryController.update)
router.get('/api/categories/:id',categoryController.show)
router.delete('/api/categories/:id',categoryController.remove)

module.exports=router