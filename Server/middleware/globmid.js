import moment from "moment";

export const globalmid=async(req,res,next)=>{
try {
    let date= new Date();
    let dateformat= moment(date).format('YYYY-MM-DD HH:mm:ss')
    let ipadd= req.ip;
    let route= req.route.path;
    let ans= {dateformat,ipadd,route};  // it will understand and make key value pairs;
    req.answer=ans;    // it will make key name answer as a object;
    next();
} catch (err) {
    console.log(err);
    res.status(500).json({message:err.message});
}
}

