const mongoose = require('mongoose');


const UsersSchema=mongoose.Schema({
    name:String,
    email:String,
    gender:String,
    phone:Number,
});

const UsersModel = mongoose.model("User",UsersSchema);

module.exports = {
    UsersModel
}