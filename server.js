const express = require('express')
const path = require('path')
const app = express()


app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

//ROTA CSS
app.use(express.static(path.join(__dirname, 'public')));

//ROTAS

//HOME
app.get('/', (req, res)=>{
    res.render('index.ejs')
})

//LOGIN
app.get('/login', (req, res)=>{
    res.render('login')
})

app.listen(3000, ()=>{
    console.log('Servidor rodando')
})