// 'Projeto da SA sobre funcionarios de uma farmacia!'
const funcionarios = [
  {id: 1, name: "Alexandre", age: "26", codigo: "170709"},
  {id: 2, name: "Pietra", age: "43", codigo: "050709"},
  {id: 3, name: "Joanna", age: "28", codigo: "150308"},
  {id: 4, name: "Caua", age: "35", codigo: "290918"},
  {id:5, name:"Marinho", age: "23", codigo: "280405"}
]

class FuncionariosService {
    getAll(){
        return funcionarios;
    }
    getById(id) {
        return funcionarios.find((funcionario) => funcionario.id === id)
    }
}

export const funcionariosService = new FuncionariosService();