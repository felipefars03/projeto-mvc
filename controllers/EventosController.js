const { raw } = require('express');
const Eventos = require('../models/Eventos');

class EventosController{

    static async mostrarEventos(req,res){
        const eventos = await Eventos.findAll({raw: true})
        res.render('eventos/home', {eventos})
    }
    static cadastrarEvento(req,res){
        res.render('eventos/cadastrar')
    }

    static async cadastrarEventoPost(req,res){
       const evento = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,   
        img: req.body.img
       }
       
    await Eventos.create(evento)
    res.redirect('/eventos')

    }
    static async verEvento(req,res){
        const id = req.params.id

        const evento = await Eventos.findOne({where: {id:id}, raw: true})
        res.render('eventos/evento', {evento, layout: false})
    }
    static async apagarevento(req,res){
        const id = req.body.id

        await Eventos.destroy({where: {id: id}})

        res.redirect('/eventos')

    }
    static async editarevento(req,res){
        const id = req.params.id
      const evento = await Eventos.findOne({where: {id:id}, raw: true})

        res.render('eventos/edit', {evento})

    }
    static async editareventopost(req,res){
        const id = req.body.id;

        const evento = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,   
            img: req.body.img
           }

        await Eventos.update(evento, {where: {id:id}})

        res.redirect('/eventos')
    }
        
    }


module.exports = EventosController;

