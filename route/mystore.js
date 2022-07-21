const express = require('express');
const connection = require('../config');
const router = express.Router();

router.post('/create',(req,res,next)=>{
    let store = req.body;
    console.log(store);
    var query = "insert into store (name,description,price) values(?,?,?)";
    connection.query(query,[store.name,store.description,store.price],(err,results)=>{
        if(!err){
            return res.status(200).json({message: "New Store Added Successfully"});
        }
        else {
            return res.status(500).json(err);
        }
    })
})

router.get('/read',(req,res,next)=>{
    var queryread = "select *from store";
    connection.query(queryread,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else {
            return res.status(500).json(err);
        }
    })
})

router.patch('/update/:id',(req,res,next)=>{
    const id = req.params.id;
    let store = req.body;
    console.log(id);
    var query ="update store set name=?,description=?,price=? where id=?";
    connection.query(query,[store.name,store.description,store.price,id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Store id not found"});
            }
            return res.status(200).json({message: "Store Updated Successfully"});
        }
        else {
            return res.status(500).json(err);
        }
    })
})


router.delete('/delete/:id',(req,res,next)=>{
    const id = req.params.id;
    var query ="delete from store where id=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Store id not found"});
            }
            return res.status(200).json({message: "Store Deleted Successfully"});
        }
        else {
            return res.status(500).json(err);
        }
    })
})



module.exports = router;