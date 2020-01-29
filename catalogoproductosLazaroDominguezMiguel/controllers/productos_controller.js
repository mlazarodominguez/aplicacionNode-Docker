'use strict'

const productosService = require('../services/producto')


module.exports.findAll = (req,res,next)=>{
    let resultado = productosService.findAll();
    res.status(200).json(resultado)
}
module.exports.findById = (req,res,next) =>{
    let resultado =  productosService.findById(req.params.id);
    res.status(200).json(resultado)
}
module.exports.addComentario = (req,res,next)=>{
    let resultado = productosService.addComentario(req.body,req.params.id)
    console.log(resultado)
    res.status(201).json(resultado)
}