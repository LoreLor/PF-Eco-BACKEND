const testInput =(req,res,next)=>{
   console.log(req.files)
   console.log(req.body.name)
   res.send("uploaded")
   
}

module.exports = testInput;