const express = require('express');
const router = express.Router();
const path = require('path');

const publicPath = path.join(__dirname, "../public");
const homePath = path.join(__dirname, "../public", "home.html");
const aboutPath = path.join(__dirname, "../public", "about.html");
const contactPath = path.join(__dirname, "../public", "contact.html");

router.use(express.static(publicPath));

router.get('/', (req, res) => {
    res.sendFile(homePath);
})
router.get('/home', (req, res) => {
    res.sendFile(homePath);
})
router.get('/about', (req, res) => {
    res.sendFile(aboutPath);
})
router.get('/contact', (req, res) => {
    res.sendFile(contactPath);
})

module.exports = router;