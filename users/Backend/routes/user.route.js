const express = require("express");
const {UsersModel} =require("../models/User.model");
const userRouter = express.Router();

userRouter.use(express.json())


userRouter.get("/",async(req,res,next)=>{
    const user = await UsersModel.find(); 
    try{
        res.status(200).json(user)
        // res.send(user);
        // res.send("You arr getting user")
    }catch(e){
        console.log(e);
        next(e)
        res.send("Something went wrong"); 
    }
});

userRouter.post("/add",async(req,res)=>{

    const payload = req.body;

     try{
        const new_user = new UsersModel(payload);
       await new_user.save();
       res.send("User added successfully");
     }catch(e){
        console.log(e)
     }

})

// todoRouter.post("/add", async (req, res) => {
//     const payload = req.body;
//     try {
//        const new_todo = new TodoModel(payload);
//        await new_todo.save();
//        res.send("Todo added successfully");
//     }
//     catch (err) {
//         console.log("Something went wrong");
//         console.log(err);
//     }
// })




module.exports={
    userRouter
}