const express = require("express");
const Prouter = express.Router();
const Posts = require("../models/Posts")

//Get a list of all post
Prouter.get('/', async (req,res,next) => {
    try{

        // const results = await post.find();
        
        const results = await Posts.find();
     


        res.send(results);


    }catch(error){
        console.log(error)
    }
});

//create a new Cours
Prouter.post('/', async (req,res,next) => {

    try{
        const posts = new Posts(req.body);
        const result = await posts.save();
        res.send(result);

    }catch(error){
        console.log(error.message);
       
        if(error.message === 'validationError'){
            return res.status(422).send(error.message);
        }
       


    }
})



//get a post by id
Prouter.get('/:id', async (req,res,next) => {
    const id = req.params.id;
    try{
        const posts = await Posts.findById(id)
        if (!posts){
            return res.status(404).send({msg:'posts does not exist'})
        }
        // res.send(cours);

    }catch(error){
        console.log(error.message);
        res.status(400).send({ msg: "Invalid cours id"});
        // next(error);


    }
});
//update a posts by id
Prouter.put('/:id', async (req,res,next) => {
    try{
        const id = req.params.id;
        const updates = req.body;
        const options = {new:true}
        const result = await Posts.findByIdAndUpdate(id,updates,options)
        if(!result){
            return res.status(404).send({msg: 'posts does not exist'})

        }
        // res.send(result)
    }catch(error){
        console.log(error.message);
        res.status(400).send({ msg: "Invalid posts id"});

    }
});
//delete a cours by id
Prouter.delete('/:id',async (req,res,next) => {
    const id = req.params.id;
    try{
        const result = await Posts.findByIdAndDelete(id);
        // res.send(result);
        if (!result){
            return res.status(404).send({msg: 'posts does not exist'})
        }
    }catch(error){
        console.log(error.message)
        res.status(400).send({ msg: "Invalid post id"});

    }
});


module.exports = Prouter;