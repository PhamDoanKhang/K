const conn = require("../config/config")
conn.connect()
const userController = {
    // GET ALL USER
    getAllUser : (req,res)=>{
        const sql = "SELECT * FROM user";
        conn.query(sql,(err,resuft)=>{
            if(err){
                res.send("Lỗi try vấn");
            }else{
                res.send(resuft)
            }
        })   // res.send( userModule.getAllUser)
    },
    // GET AN USER 
    getAllUserById : (req,res)=>{
        const id = req.params.id 
        const sql = `SELECT * FROM user WHERE id = ${id}`
        conn.query(sql,(err,resuft)=>{
            if(err){
                res.send("Lỗi truy vấn")
            }else{
                res.send(resuft);
            }
        })
    },

    // POST USER
    postUser : (req,res)=>{
        res.send(req.body )
    }
}



module.exports = userController;