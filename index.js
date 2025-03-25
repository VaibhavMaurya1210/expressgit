require ('dotenv').config();
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req,res)=>{
    res.send("hello this is login page")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})