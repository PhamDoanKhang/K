var conn = require("../config/config")
conn.connect
const addressController = {
    getAddress : (req,res)=>{
        const id = req.params.id
        const sql = `SELECT * FROM address WHERE user_Id=${id}`
        conn.query(sql,(err,resuft)=>{
            if(err){
                res.send("Error query")
            }else{
                res.send(resuft);
            }
        })
    },
    getAnAddress : (req,res)=>{ 
       const id = req.params.id
       const sql = `SELECT * FROM address WHERE id=${id}`
       conn.query(sql,(err,resuft)=>{
            if(err){
                res.send("Error Query");
            }else{
                res.send(resuft);
            }
       })
    },
    putAddress :(req,res)=>{
        const id = req.params.id;
        console.log(req.body)
    }
}

module.exports = addressController;