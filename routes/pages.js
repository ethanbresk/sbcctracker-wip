const express = require('express');
const path = require('path')

const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})
router.get("/classes", (req, res) => {
    res.sendFile(path.join(__dirname, '../classes/index.html'))
})
router.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, '../about/index.html'))
})
router.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, '../contact/index.html'))
})
router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, '../login/index.html'))
})
router.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, '../register/index.html'))
})
router.get("/register/success", (req, res) => {
    res.sendFile(path.join(__dirname, '../register/success.html'))
})
router.get("/register/error", (req, res) => {
    res.sendFile(path.join(__dirname, '../register/error.html'))
})

module.exports = router