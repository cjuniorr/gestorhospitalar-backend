const Funcionario = require('./funcionario')

Funcionario.methods(['get', 'post', 'put', 'delete'])
Funcionario.updateOptions({ new: true, runValidators: true })

Funcionario.route('count', function(req, res, next){
    Funcionario.count(function(error, value){
        if(error){
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})

module.exports = Funcionario