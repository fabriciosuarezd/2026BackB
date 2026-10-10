const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareasModel')

const getTareas = asyncHandler(async(req,res) => {
    const tareas = await Tarea.find({})
    res.status(200).json(tareas)
})

const createTareas = asyncHandler(async(req,res) => {
    if(!req.body.descripcion) {
        res.status(400)
        throw new Error("Por favor teclea la descripcion")
    }

    const tarea = await Tarea.create({
        descripcion: req.body.descripcion
    })

    res.status(201).json({tarea})
})

const updateTareas = asyncHandler(async(req,res) => {
    res.status(200).json({message: `update tarea ${req.params.id}`})
})

const deleteTareas = asyncHandler(async(req,res) => {
    res.status(200).json({message: `delete tarea ${req.params.id}`})
})

module.exports = {getTareas,createTareas,updateTareas,deleteTareas}