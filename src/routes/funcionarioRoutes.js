// 'Projeto da SA sobre funcionarios de uma farmacia!'
import express from 'express'
import { funcionariosService } from '../services/funcionarios.service.js'

const routeFuncionarios = express.Router()

routeFuncionarios.get("/", (req, res) => {
    res.json(funcionariosService.getAll())
})

routeFuncionarios.get("/:id", (req, res) => {
    const { id } = req.params
    const filme = funcionariosService.getById(id)

    if ((!funcionario)) {
        res.status(404).json({ message: "Funcionario não encontrado" })
    }
    res.json(funcionario)
})

export default routeFuncionarios
