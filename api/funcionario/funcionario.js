const restful = require('node-restful')
const mongoose = restful.mongoose

const funcionarioSchema = new  mongoose.Schema({
    nome: { type: String, required: true },
    cpf: { type: String, required: true},
    // endereco: [enderecoSchema],
    matricula: { type: Number, min: 0, required: true },
    cargo: { type: String, uppercase: true, enum: ['MEDICO', 'ATENDENTE', 'ENFERMEIRO', 'DIRETOR', 'TECNICO'] },
    crm: { type: Number, required: false }
})

module.exports = restful.model('Funcionario', funcionarioSchema)