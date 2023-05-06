import app from "./app.js";    //right full name of the file 
import * as dotenv from "dotenv"

dotenv.config();   // 
app.listen(process.env.PORT,()=>{    // process is a object 
console.log("listening on port");
})
