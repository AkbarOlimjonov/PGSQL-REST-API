const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req,res)=>{
    res.send("Salom")
})

app.listen(PORT,()=>{console.log(`Server worked http://localhost:${PORT}`)})