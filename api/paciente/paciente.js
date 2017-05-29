const restful = require('node-restful')
const mongoose = restful.mongoose

const pacienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    cpf: { type: String, required: true}
})


module.exports = restful.model('Paciente', pacienteSchema)