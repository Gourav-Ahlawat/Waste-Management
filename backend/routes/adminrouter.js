import express from 'express';
import {Model} from '../model/export.js';

const adminRouter = express.Router();

// Home page route
adminRouter.get("/about", function (req, res) {
  res.send("admin home page");
});

// About page route
adminRouter.get("/panel", function (req, res) {
  res.send("admin panel page");
});

//Post Method
adminRouter.post('/post', async(req, res) => {
  const data = new Model({
    name: req.body.name,
    age: req.body.age})
    try {
      const dataToSave = data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
})

//Get all Method
adminRouter.get('/getAll', async(req, res) => {
  try{
    const data = await Model.find();
    res.json(data)
}
catch(error){
    res.status(500).json({message: error.message})
}
})

//Get by ID Method
adminRouter.get('/getOne/:id', async (req, res) => {
  try{
      const data = await Model.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})

//Update by ID Method
adminRouter.patch('/update/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Model.findByIdAndUpdate(
          id, updatedData, options
      )

      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

//Delete by ID Method
adminRouter.delete('/delete/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const data = await Model.findByIdAndDelete(id)
      res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

export default adminRouter;