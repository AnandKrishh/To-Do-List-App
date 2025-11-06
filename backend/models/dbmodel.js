const mongoose = require('mongoose');


//defining the schema
const appData = new mongoose.Schema({
    task: {
        type: String,
    },
    taskId: {
        type: String
    }
});


//connecting to mongoDB
mongoose
    .connect('mongodb://localhost:27017/customerdb')
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err) => console.log("Mongo err", err));


//creating a model
const Task = mongoose.model("task", appData);


//exporting model
module.exports = { Task };
