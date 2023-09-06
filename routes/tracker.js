const express = require('express');

const router = express.Router();

const Manager = require('../controllers/manager');

router.get('/get-expense',Manager.getExpense);

router.post('/add-expense',Manager.addExpense);

router.get('/delete-expense/:expId',Manager.deleteExpense);

router.get('/edit-expense/:expId',Manager.editExpense);

module.exports=router;