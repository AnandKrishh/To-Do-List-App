const express = require('express');
const { User } = require('./models/dbmodel')

const app = express();
app.use(express.json());


app.get('/', async (req, res) =>{
    try{
        const users = await User.find();
        if(users.length === 0){
            return res.status(200).send("Currently there are no users");
        }
        
        res.status(200).json(users);

    }catch(err){
        res.status(401).json({message: 'Error fetching users', error: err.message})
    }
    
})

app.listen(5001, ()=>{
    console.log("server is listening !!");
})