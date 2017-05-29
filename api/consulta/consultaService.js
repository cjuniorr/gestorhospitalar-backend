const Consulta = require('./consulta')

Consulta.methods(['get', 'post', 'put', 'delete'])
Consulta.updateOptions({ new: true, runValidators: true })

Consulta.route('count', function(req, res, next){
    Consulta.count(function(error, value){
        if(error){
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})

module.exports = Consulta