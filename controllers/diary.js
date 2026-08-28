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


export default {index, show}