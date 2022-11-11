const conn = require("../config/config")
conn.connect()


const getAllUser = ()=>{
    const sql = "SELECT * FROM user"
    conn.query(sql,(err,resuft)=>{
        if(err) throw err; 
        return resuft;
    })
}
module.exports = { getAllUser };