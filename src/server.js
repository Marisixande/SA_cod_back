const express = require('express')
const app = express()
const port = 3000
let funcionarios = [
    {id:1 , nome: "Alexandre"}
]

app.get('/', (req, res) => {
res.send('Projeto da SA sobre funcionarios de uma farmacia!')
})