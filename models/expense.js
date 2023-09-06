const {Sequelize} = require('sequelize');

const sequelize = require('../util/database');

const Expense = sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    UserName:Sequelize.STRING, 
    Expenditure:Sequelize.INTEGER,
    Description:Sequelize.STRING,
    Category:Sequelize.STRING
})

module.exports=Expense;