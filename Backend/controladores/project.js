'use strict'
var Project = require('../modelos/project');

var fs = require('fs');
var path = require('path');

var controller = {
    home: function(req, res){
        return res.status(200).send({
            message:"Soy Home"
        });

    },

    test: function(req, res){
        return res.status(200).send({
            message:"Soy el test del controlador de porject"
        })
    },

    saveProject: function(req, res){
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.descripcion= params.descripcion,
        project.categoria= params.categoria,
        project.fecha= params.fecha

        project.save((err, projectStored) => {
            if(err) return res.status(500).send({message: 'Error al guardar el documento'});
            if(!projectStored) return res.status(404).send({message: 'No se a podido guardar el documento'});
            return res.status(200).send({project:projectStored });
        });

        /*return res.status(200).send({
            params: params,
            project: project,
            message: "Metodo saveProject"
        })*/
    },

    getProject: function(req, res){
        var projectId = req.params.id;
        if(projectId == null) return res.status(404).send({message: 'El proyecto no existe.'});

        Project.findById(projectId, (err, project) => {
            if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
            if(!project) return res.status(404).send({message: 'El proyecto no existe.'});
            return res.status(200).send({
                project
            });
        });
    },

    getProjects: function(req, res){
        Project.find({}).sort('-fecha').exec((err, projects) => {
            if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
            if(!projects) return res.status(404).send({message: 'El proyecto no existe.'});
            return res.status(200).send({projects});
        });
    },

    updateProject: function(req, res){
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdated) => {
            if(err) return res.status(500).send({message: 'Error al actualizar los datos.'});
            if(!projectUpdated) return res.status(404).send({message: 'El proyecto no existe.'});
            return res.status(200).send({
                project:projectUpdated
            });
        });
    },

    deleteProject: function(req, res){
        var projectId = req.params.id;

        if(projectId == null) return res.status(404).send({message: 'El proyecto no existe.'});

        Project.findByIdAndRemove(projectId, (err, projectRemoved) => {
            if(err) return res.status(500).send({message: 'No se han podido eliminar los datos.'});
            if(!projectRemoved) return res.status(404).send({message: 'El proyecto no existe.'});
            return res.status(200).send({
                project:projectRemoved
            });
        });
    },

    uploadImage: function(req, res){
        var projectId = req.params.id;
        var fileName = 'Imagen no subida...';

        if(req.files){
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

                if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){
                Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (err, projectUpdated) => {
                    if(err) return res.status(500).send({message:'La imagen no se ha subido'});

                    if(!projectUpdated) return res.status(404).send({message: 'El proyecto no existe por lo que no hay imagen asignada'});
            
                    return res.status(200).send({
                        project: projectUpdated,
                        files: fileName
                    });
                });
            }else{
                fs.unlink(filePath, (err) => {
                    return res.status(200).send({message: 'La extensión no es válida'});
                });
            }
        }else{
            return res.status(200).send({
                message: fileName
            });
        }
    },

    getImageFile: function(req, res) {
        var file = req.params.image;
        var path_file = './uploads/'+file;
        
        fs.existsSync(path_file, (exists) => {
            if (exists) {
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(200).send({
                    message:"No existe esa imagen..."
                });
            }
        });
    }
    
};

module.exports = controller;