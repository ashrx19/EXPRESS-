 const express = require('express');
const path = require('path');

const app = express()

app.listen(9999);



app.get('/',(req,res)=>{
     res.sendFile('./home.html', {root: __dirname + '/../components'});
})

app.get('/about',(req,res)=>{
    res.sendFile('./about.html',{root: __dirname + '/../components'})
})

//REDIRECTING
app.get('/joinus', (req, res)=>{
    res.redirect('/home');})

//Error
app.use((req, res)=>{
    res.sendFile('./error.html',{root: __dirname + '/../components'})
})