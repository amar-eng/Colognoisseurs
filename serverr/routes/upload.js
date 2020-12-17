const express = require('express')
const uuid = require('uuid')
const router = express.Router() 
const fs = require('fs'); 

function readData(){
    const file = fs.readFileSync('./data/Data.json')
    return JSON.parse(file)
}

router.get('/', (req,res)=>{
   
    res.json(readData()); 
}) 

router.post('/', (req,res)=>{
   const item = {
       id: uuid.v4(), 
       title: req.body.title, 
       longevity: req.body.longevity, 
       sillage: req.body.sillage,
       notes: req.body.notes, 
       description: req.body.description,
       imageUrl:req.body.imageUrl
   }
   if(!item.title || !item.longevity || !item.sillage || !item.sillage){
    res.status(400).json ({message: `Please include all fields`})
   }


   const list = readData()
   list.push(item)
   fs.writeFileSync('./data/Data.json', JSON.stringify(list))
   res.status(201).send("added")


})

module.exports = router; 