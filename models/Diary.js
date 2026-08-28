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

}


export default Diary;