const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('eventos', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'

})
try{
    sequelize.authenticate()
    console.log('conectamos com mysql')

} catch{
    console.log('Não foi possivél conectar', err)
}
module.exports = sequelize; 
