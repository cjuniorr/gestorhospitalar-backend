const restful = require('node-restful')
const mongoose = restful.mongoose


const enderecoSchema = new mongoose.Schema({
    rua: { type: String, required: true },
    numero: { type: Number, required: true },
    bairro: { type: String, required: true },
    cidade: { type: String, required: true },
    estado: { type: String, required: true },
    cep: { type: String, required: true }
})

const pacienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    cpf: { type: String, required: true}
    // ,
    // endereco: [enderecoSchema]
})

const funcionarioSchema = new  mongoose.Schema({
    nome: { type: String, required: true },
    cpf: { type: String, required: true},
    endereco: [enderecoSchema],
    matricula: { type: Number, min: 0 },
    cargo: { type: String, uppercase: true, enum: ['MEDICO', 'ATENDENTE', 'ENFERMEIRO', 'DIRETOR', 'TECNICO'] },
    crm: { type: Number, required: false }
})

const consultaSchema = new mongoose.Schema({
    paciente: [pacienteSchema],
    medico: [funcionarioSchema],
    sala: { type: String, required: true },
    horario: { type: Date}
})

// const equipamentoSchema = new mongoose.Schema({
//     nome: { type: String, required: true },
//     codigo: { type: Number, required: true } ,
//     qtdManutencoes: { type: Number, min: 0, required: false }
// })

// const manutencaoEquipamentoSchema = new mongoose.Schema({
//     equipamento: [equipamentoSchema],
//     codigoManutencao: { type: Number, required: true },
//     tecnico: { type: Number, required: true},
//     horario: { type: Date }

// })

// const medicamentoSchema = new mongoose.Schema({
//     nome: { type: String, required: true },
//     codigo: { type: Number, required: true},
//     fornecedor: { type: String, required: false },
//     quantidade: { type: Number, min: 0 } 
// })

module.exports = restful.model('Consulta', consultaSchema)
