
// 1. Import express and axios
import express from "express";
import axios  from "axios";
const app = express();
//Create an express app and set the port number.
const port  = 3000;
app.use(express.static("public"));
// Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

const api_url = "https://secrets-api.appbrewery.com/random"
app.get("/", (req,res)=>{ // here i'm gonna use then,catch instead of async!
    axios.get(api_url)
    .then((response)=>{
        const result = response.data;
        res.render("index.ejs",{
            secret:result.secret,
            user:result.username
        })
    })
    .catch((err)=>{
        console.log(err.message);
        res.render("index.ejs",{error:err.message});
    })
})

//  Listen on your predefined port and start the server.
app.listen(port,()=>{
    console.log(`Server is running on ${port}!`);
})