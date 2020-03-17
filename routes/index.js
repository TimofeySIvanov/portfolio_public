const express = require('express');
const router = express.Router();
const data = require('../data.json');
const projects = data.projects
router.get('/', (req, res) => {
      res.render('index', { projects });

});
router.get('/about', (req, res) => {
      res.render('about');
});
router.get('/projects/:id', (req, res) => {
    const id = req.params.id
    const project = projects[id]
    res.render('project', { project });
});

module.exports = router;
