const mysql = require('mysql')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const path = require('path')
const express = require('express')
const app = express()

const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory))

//var error = document.getElementById("error");

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body
        //const loginError = document.getElementById('login-error')

        db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
            console.log(results)

            if(!results || !(await bcrypt.compare(password, results[0].password))) {
                //loginError.style.display = "block";
                const isValid = 0;
                module.exports = isValid
                return res.sendFile(path.join(__dirname, '../login/index.html'))
            }

        })
    }
    catch (error) {
        console.log(error)
    }
}

exports.register = (req, res) => {
    console.log(req.body)

    const {email, passwordReg, passwordConfirm} = req.body

    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
        if(error) {
            console.log(error);
        }
        if(results.length > 0) {
            console.log(results)
            return res.sendFile(path.join(__dirname, '../register/error.html'))
        }
        else{
            let hashedPassword = await bcrypt.hash(passwordReg, 8)
            console.log(hashedPassword)

            db.query('INSERT INTO users SET ?', {email: email, password: hashedPassword}, (error, results) => {
                if(error) {
                    console.log(error);
                }
                else {
                    console.log(results)
                    return res.sendFile(path.join(__dirname, '../register/success.html'))
                }
            })
        }
    })
}

