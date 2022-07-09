const express = require('express')
const router = express.Router();

const Checklist = require('../models/checklists')

router.get('/checklists', async (req, res) => {
   try {
       let checklists = await Checklist.find();
       res.status(200).send(checklists);
   } catch (error) {
       res.status(500).json(error)
   }
})

router.post('/checklists', async(req, res) => {
    let { name } = req.body;
    try {
        let checklist = await Checklist.create({name})
        res.status(201).send(checklist)
    } catch (e) {
        res.status(500).json(e)
    }


})

router.get('/checklists/:id', async (req, res) => {
    try {
        let checklists = await Checklist.findById(req.params.id);
        res.status(200).send(checklists);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/checklist/:id', async (req, res) => {
    try {
        let {name} = req.body;
        let checklist = await Checklist.updateOne({name});
        res.status(200).send(checklist);
    } catch (e) {
        res.status(500).json(e)
    }
})
router.delete('/checklist/:id', async (req, res) => {
    try {
        let checklist = await Checklist.findByIdAndDelete(req.params.id);
        res.status(200).send(checklist);
    } catch (e) {
        res.status(500).json(e)
    }
})

module.exports = router;