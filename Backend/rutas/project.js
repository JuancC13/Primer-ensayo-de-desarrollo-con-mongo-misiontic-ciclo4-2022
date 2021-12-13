'use strict'

var express = require('express');
var ProjectController = require('../controladores/project');

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads'});

//Rutas Get
router.get('/home', ProjectController.home);
router.get('/project/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.get('/get-image/:image', ProjectController.getImageFile);


//Rutas Post
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImage);


//Rutas Put
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.deleteProject);

module.exports = router;