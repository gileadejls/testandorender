const express = require('express')
const path = require('path')
const app = express()


app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')


app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.listen(3000, ()=>{
    console.log('Servidor rodando')
})