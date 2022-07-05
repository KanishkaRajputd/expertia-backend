const express = require("express");
const jobsModel = require("../models/jobs.model");
const router = express.Router();




router.post("/", async (req, res) => {
    try {
        const job = await jobsModel.create(req.body);
        res.status(201).send(job);

    } catch (err) {
        
        res.status(404).send({
            message:err.message
        })
    }


})
router.get("/", async (req, res) => {
    try {
        const job = await jobsModel.find().lean().exec();
        res.status(200).send(job);

    } catch (err) {
        
        res.status(500).send({
            message:err.message
        })
    }
})
router.get("/:id", async (req, res) => {
    try {
        const job = await jobsModel.findById({_id:req.params.id}).lean().exec();
        res.status(200).send(job);

    } catch (err) {
        
        res.status(500).send({
            message:err.message
        })
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const job = await jobsModel.findByIdAndUpdate(req.params.id,req.body).lean().exec();
        res.status(200).send(job);

    } catch (err) {
        
        res.status(400).send({
            message:err.message
        })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const job = await jobsModel.findByIdAndDelete(req.params.id);
        res.status(200).send(job);

    } catch (err) {
        
        res.status(400).send({
            message:err.message
        })
    }
})

module.exports = router
