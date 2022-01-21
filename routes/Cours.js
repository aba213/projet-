const express = require("express");
const router = express.Router();
const Cours = require("../models/Cours")

//Get a list of all cours
router.get('/', async (req,res,next) => {
    try{

        // const results = await Cours.find();
       
        const results = await Cours.find({}, {__v : 0});
     


        res.send(results);


    }catch(error){
        console.log(error.message)
    }
});

//create a new Cours
router.post('/', async (req,res,next) => {

    try{
        const cours = new Cours(req.body);
        const result = await cours.save();
        res.send(result);

    }catch(error){
        console.log(error.message);
       
        if(error.message === 'validationError'){
            return res.status(422).send(error.message);
        }
        


    }
})
    

//get a cours by id
router.get('/:id', async (req,res,next) => {
    const id = req.params.id;
    try{
        const cours = await Cours.findById(id)
        if (!cours){
            return res.status(404).send({msg:'cours does not exist'})
        }
        // res.send(cours);

    }catch(error){
        console.log(error.message);
        res.status(400).send({ msg: "Invalid cours id"});
        // next(error);


    }
});
//update a cours by id
router.put('/:id', async (req,res,next) => {
    try{
        const id = req.params.id;
        const updates = req.body;
        const options = {new:true}
        const result = await Cours.findByIdAndUpdate(id,updates,options)
        if(!result){
            return res.status(404).send({msg: 'cours does not exist'})

        }
        // res.send(result)
    }catch(error){
        console.log(error.message);
        res.status(400).send({ msg: "Invalid cours id"});

    }
});
//delete a cours by id
router.delete('/:id',async (req,res,next) => {
    const id = req.params.id;
    try{
        const result = await Cours.findByIdAndDelete(id);
        // res.send(result);
        if (!result){
            return res.status(404).send({msg: 'cours does not exist'})
        }
    }catch(error){
        console.log(error.message)
        res.status(400).send({ msg: "Invalid cours id"});

    }
});


module.exports = router;