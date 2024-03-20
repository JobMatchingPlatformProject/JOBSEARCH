const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(express.json());

app.use(cors({
    origin:'http://localhost:5173'          //frontend Url
}))

app.post('/input', (req,res)=>{
    let input = req.body.input;
    console.log("input recieved from frontend : ", input);
})

app.listen(8080, ()=>{
    console.log("server connected at port 8080");
})