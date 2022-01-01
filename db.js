//aqui é o arquivo de coneção com o banco de dados mysql
const Sequelize = require('sequelize')
 //conexão com o banco de dados mysql
const sequelize = new Sequelize('postapp','root','gamecube6',{
host:"localhost",
dialect :'mysql'
})

module.exports = {
	Sequelize : Sequelize,
	sequelize : sequelize
}
