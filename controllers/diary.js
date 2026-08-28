import Diary from "../models/Diary.js";

const index = async (req, res)=>{
    try{
        const entries = await Diary.getAll()
        res.status(200).json(entries)

    }catch(err){
        res.status(500).json({error : err.message})
    }
}


export default {index}