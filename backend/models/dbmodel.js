const mongoose = require('mongoose');


//defining the schema
const appData = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    tasks: {
        type: [String],
        default: [],
    }

});


//connecting to mongoDB
mongoose
    .connect('mongodb://localhost:27017/customerdb')
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err) => console.log("Mongo err", err));


//creating a model
const User = mongoose.model("user", appData);


//exporting model
module.exports = { User };
