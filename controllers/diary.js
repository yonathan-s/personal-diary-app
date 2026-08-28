import Diary from "../models/Diary.js";

const index = async (req, res)=>{
    try{
        const entries = await Diary.getAll()
        res.status(200).json(entries)

    }catch(err){
        res.status(500).json({error : err.message})
    }
}

const show = async (req, res) => {
    try{
        const id = parseInt(req.params.id)
        const entry = await Diary.getOneById(id)
        res.status(200).json(entry)
    } catch(err){
        res.status(404).json({error: err.message})
    }
}

const create = async (req, res) => {
    try{
        const data = req.body
        const newEntry = await Diary.create(data)
        res.status(201).json(newEntry)
    } catch(err){
        res.status(400).json({error: err.message})
    }
}

const update = async (req, res) => {
    try{
        const id = parseInt(req.params.id)
        const data = req.body
        const entry = await Diary.getOneById(id)
        const result = await entry.update(data)
        res.status(200).json(result)
    } catch(err){
        res.status(404).json({error: err.message})
    }
}

const destroy = async (req, res) => {
    try{
        const id = parseInt(req.params.id)
        const entry = await Diary.getOneById(id)
        const result = await entry.destroy()
        res.status(200).json(result)
    } catch(err){
        res.status(404).json({error: err.message})
    }
}


export default {index, show, create, update, destroy}