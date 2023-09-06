const Expense = require('../models/expense');

exports.getExpense=async (req,res,next)=>{
    try{
        const expenses = await Expense.findAll();
        res.status(200).json({expenses:expenses})
    }
    catch(err){
        console.log(err);
    }
    
};

exports.addExpense=async (req,res,next)=>{
    const name = req.body.name;
    const Expenditure = req.body.Expenditure;
    const Description = req.body.Description;
    const Category = req.body.Category;
    try{
        const expense = await Expense.create({
            UserName:name,
            Expenditure:Expenditure,
            Description:Description,
            Category:Category
        })
        console.log('this is from post',expense);
        res.status(201).json({expense:expense});
    }
    catch(err){
        console.log(err);
    }
    
};

exports.deleteExpense=async (req,res,next)=>{
    const id = req.params.expId;
    try{
        const result = await Expense.destroy({where:{id : id}})
        res.status(202).json({msg:'successfully deleted'});
    }
    catch(err){
        console.log(err)
    }
};

exports.editExpense=async (req,res,next)=>{
    const id = req.params.expId;
    try{
        const expense = await Expense.findByPk(id)
        const data = expense
        const result = await expense.destroy();
        res.status(200).json({expense:data})
    }
    catch(err){
        console.log(err)
    }
};