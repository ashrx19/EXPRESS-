const express = require('express');

const app = express()

app.listen(9999);

app.get('/',(req,res)=>{
    res.send("Hello Express!")
})