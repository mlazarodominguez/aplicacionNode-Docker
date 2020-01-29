
const _ = require('lodash')
const comentariosService = require('../services/comentario')
const producto = [
    {
        id:1,
        nombre: "Producto 1",
        descripcion: "Lore ipsum to flama esto que te soluciona la vida",
        fecha: new Date(),
        stock:62,
        categoria:3,
        comentarios:[1,2]
    },
    {
        id:2,
        nombre: "Producto 2",
        descripcion: "Lore ipsum to flama esto que te soluciona la vida",
        fecha: new Date(),
        stock:50,
        categoria:2,
        comentarios:[3]
    },
    {
        id:3,
        nombre: "Producto 3",
        descripcion: "Lore ipsum to flama esto que te soluciona la vida",
        fecha: new Date(),
        stock:40,
        categoria:4,
        comentarios:[]
    },
    {
        id:4,
        nombre: "Producto 4",
        descripcion: "Lore ipsum to flama esto que te soluciona la vida",
        fecha: new Date(),
        stock:60,
        categoria:1,
        comentarios:[4]
    },

   
]   
module.exports.findAll = () => {
    productos = producto
    let comentarios =  []
    let coment = ''
    productos.forEach((prod)=>{
        prod.comentarios.forEach(id=>{
            comentarios.push(id);
        })
        console.log(comentarios)
        prod.comentarios.splice(0,prod.comentarios.length)
        comentarios.forEach((comentario)=>{
            coment = comentariosService.findByid(comentario);
            
            prod.comentarios.push(coment)
        })
        console.log('Limpia comentarios')
        comentarios = []
        
    })
    
    return productos;
}

module.exports.findById = (id) =>{
    productos = producto
    let comentarios =  []
    let coment = ''
    productos.forEach((prod)=>{
        prod.comentarios.forEach(id=>{
            comentarios.push(id);
        })
        console.log(comentarios)
        prod.comentarios.splice(0,prod.comentarios.length)
        comentarios.forEach((comentario)=>{
            coment = comentariosService.findByid(comentario);
            
            prod.comentarios.push(coment)
        })
        console.log('Limpia comentarios')
        comentarios = []
        
    })
    return _.find(productos,prod=>prod.id = id)

}

module.exports.addComentario = (obj,id) =>{

    productos = producto
    let comentarios =  []
    let coment = ''
    productos.forEach((prod)=>{
        prod.comentarios.forEach(id=>{
            comentarios.push(id);
        })
        console.log(comentarios)
        prod.comentarios.splice(0,prod.comentarios.length)
        comentarios.forEach((comentario)=>{
            coment = comentariosService.findByid(comentario);
            
            prod.comentarios.push(coment)
        })
        console.log('Limpia comentarios')
        comentarios = []
        
    })
    let product = _.find(productos,prod=>prod.id = id)
        product.comentarios.push(obj)
    return product;
}