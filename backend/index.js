const express = require('express');
const cors = require('cors');
const { Task } = require('./models/dbmodel')

const app = express();
app.use(express.json());
app.use(cors());

app.post('/create', async (req, res) =>{
    try {
        const newTask = req.body;

        const task = await Task.create({task: newTask.task, taskId: newTask.taskId})
        const data = await Task.find({});

        return res.status(201).json(data);

    } catch (err) {
        console.error('create error:', err)
        return res.status(401).send("error", err);
    }
})

app.put('/update/:id', async(req, res) =>{
    console.log('Update request received:', req.params.id, req.body);
    try {   
        const {id} = req.params;
        const updatedTask = req.body;
        const task = await Task.findOneAndUpdate({taskId: id}, updatedTask, { new: true });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        return res.status(201).json(task);

    } catch (err) {
        console.error('update error:', err)
        return res.status(401).send("error", err);
    }
})

app.delete('/delete/:id', async(req, res) =>{
    try {
        const { id } = req.params;
        await Task.deleteOne({taskId: id});
    } catch (err) {
        return res.status(401).send("error", err);
    }
})

app.get('/', async (req, res) =>{
    try{
        const tasks = await Task.find();
        if(!tasks){
            res.status(200).send("No Data Found");
        }
        return res.status(200).json(tasks);

    }catch(err){
        res.status(401).json({message: 'Error fetching tasks', error: err.message})
    }
    
})

app.listen(5000, ()=>{
    console.log("server is listening !!");
})