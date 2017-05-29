const express = require('express')

module.exports = function(server){

//API Routes
const router = express.Router()
server.use('/api', router)

const consultaService =  require('../api/consulta/consultaService')
consultaService.register(router, '/consultas')

const pacienteService = require('../api/paciente/pacienteService')
pacienteService.register(router, '/pacientes')

const funcionarioService = require('../api/funcionario/funcionarioService')
funcionarioService.register(router, '/funcionarios')

}