const _= require('lodash')
const comentarios = [
    {
        id:1,
        autor:1,
        cuerpo: "Lore ipsum y no sque mas esta to flama el producto le doy un tréh",
        fecha: new Date()
    },
    {
        id:2,
        autor:2,
        cuerpo: "Lore ipsum y no sque mas esta to flama el producto le doy un tréh",
        fecha: new Date()
    },
    {
        id:3,
        autor:3,
        cuerpo: "Lore ipsum y no sque mas esta to flama el producto le doy un tréh",
        fecha: new Date()
    },
    {
        id:4,
        autor:1,
        cuerpo: "Lore ipsum y no sque mas esta to flama el producto le doy un tréh",
        fecha: new Date()
    },

    module.exports.findByid = (id) =>{
        return _.find(comentarios, com => com.id ==id)
    }
]