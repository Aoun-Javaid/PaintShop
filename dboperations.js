var config = require('./dbconfig');
const sql = require('mssql');

var express = require('express');
var bodyParser = require('body-parser');


async function getOrders(){
    try{
        let pool = await sql.connect(config);
        let products =await pool.request().query("select * from Products");
        return products.recordsets;
    }
    catch(err){
    console.log(err);
    }
}


async function getOrder(orderId) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.Int, orderId)
            .query("SELECT * from Products where Id = @input_parameter");
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}


async function addOrder(order) {

    try {
        let pool = await sql.connect(config);
        let insertProduct = await pool.request()
            .input('Id', sql.Int, order.Id)
            .input('Title', sql.NVarChar, order.Title)
            .input('Quantity', sql.NVarChar, order.Quantity)
            .input('Message', sql.NVarChar, order.Message)
            .input('City', sql.NVarChar, order.City)
            .execute('insertProducts');
        return insertProduct.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}

module.exports = {
    getOrders: getOrders,
    getOrder: getOrder,
    addOrder : addOrder
}