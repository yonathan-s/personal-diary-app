import db from '../db/connect.js'

class Diary{
    constructor({diary_id, title, description, date}){
        this.diary_id = diary_id
        this.title = title
        this.description = description
        this.date = date
    }


    static async getAll(){
        const res = await db.query('SELECT * FROM diary;')
        if(res.rows.length === 0){
            throw new Error('No entries found')
        }
        return res.rows.map(d =>new Diary(d))

        
    }

    static async getOneById(id){
        const res = await db.query('SELECT * FROM diary WHERE diary_id=$1', [id])
        if(res.rows.length != 1){
            throw new Error('No entries found')
        }
        return new Diary (res.rows[0])
    }

}


export default Diary;