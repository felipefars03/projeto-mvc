const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Eventos = db.define('Eventos',{
title:{
    type: DataTypes.STRING,
    required: true
},
description:{
    type: DataTypes.STRING,
    required: true
},
price:{
    type: DataTypes.INTEGER,
    required: true
},
img:{
    type: DataTypes.STRING,
    required: true
}

})
module.exports = Eventos;
