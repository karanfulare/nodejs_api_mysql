const express = require('express');
const connection = require('../config');
const router = express.Router();

router.post('/create',(req,res,next)=>{          // defined route for creating the stores 
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

router.get('/read',(req,res,next)=>{                    // defined route for reading all the stores 
    var queryread = "select *from store";                // next can be used for a middleware
    connection.query(queryread,(err,results)=>{            // controller
        if(!err){
            return res.status(200).json(results);
        }
        else {
            return res.status(500).json(err);
        }
    })
})

router.get('/read/:id',(req,res,next)=>{                 // defined route for reading a particular store 
    const id = req.params.id;
    var queryread = "select *from store where id=?";           // mysql query 
    connection.query(queryread,[id],(err,results)=>{          
        if(!err){
            return res.status(200).json(results);
        }
        else {
            return res.status(500).json(err);
        }
    })
})

router.patch('/update/:id',(req,res,next)=>{                    // defined route for updating a particular store 
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


router.delete('/delete/:id',(req,res,next)=>{                   // defined route for deleting a particular store 
    const id = req.params.id;                                  // getting id from params
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



module.exports = router;                    // exporting our router