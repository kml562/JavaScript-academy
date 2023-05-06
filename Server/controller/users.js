export const userController= async(req,res)=>{
    try {
res.status(200).json({messsage:req.answer})
        
    } catch (error) {
        console.log(error.messsage);
    }
}