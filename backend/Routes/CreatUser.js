const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
// const { JsonWebTokenError } = require('jsonwebtoken');
const jwt = require("jsonwebtoken");

const jwtsecret = "iamSoftWareDevloperAndFreser"

router.post("/creatuser",
    body("name", "incorrect name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password", "incorrect password").isLength({ min: 5 }),
    async (req, res) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }

        const { name, email, password, location } = req.body;

        try {
            const salt = await bcrypt.genSalt(10);
            let secpassword = await bcrypt.hash(password, salt);

            await User.create({
                name,
                email,
                password: secpassword,
                location
            });

            res.json({ success: true });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ success: false });
        }
    });


router.post("/loginuser",
    body("email").isEmail(),
    body("password", "incorrect password").isLength({ min: 5 }),
    async (req, res) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }

        const { email, password } = req.body;

        try {
            let userData = await User.findOne({ email });

            if (!userData) {
                return res.status(400).json({ errors: "Enter a correct email & password" });
            }

            const pwdcompare = await bcrypt.compare(password, userData.password);

            if (!pwdcompare) {
                return res.status(401).json({ errors: "Enter a correct email & password" });
            }

            const data = {
                user: {
                    id: userData.id
                }
            };

            const authToken = jwt.sign(data, jwtsecret);

            return res.json({ success: true, authToken: authToken });




            

        } catch (error) {
            console.log(error.message);
            res.status(500).json({ success: false });
        }
    });
module.exports = router;