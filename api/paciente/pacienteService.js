const Paciente = require('./paciente')

Paciente.methods(['get', 'post', 'put', 'delete'])
Paciente.updateOptions({ new: true, runValidators: true })

Paciente.route('count', function(req, res, next){
    Paciente.count(function(error, value){
        if(error){
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})

module.exports = Paciente