// 'Projeto da SA sobre funcionarios de uma farmacia!'
const express = require('express')
import {routeFuncionarios} from '../src/routes/funcionarioRoutes.js'
const app = express()
const port = 3000

app.get('/', (req, res) => {
})

app.use('/funcionarios', routeFuncionarios)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})