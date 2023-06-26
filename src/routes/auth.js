const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { secret } = require('../middleware/authentication-jwt');
const userProvider = require('../providers/userProvider')

router.post('/login', async (req, res) => {
    const { user, password } = req.body;
    if (user === 'admin' && password === 'admin'){
        const token = jwt.sign({ user, role: 'admin' }, secret );
        res.json({ token });
    } else {
        const dbUser = await userProvider.validateUser(user, password);
        console.log('DB USER', dbUser);
        if (dbUser) {
            const token = jwt.sign({ user: dbUser.email }, secret);
            res.json({ token });
        } else{
            res.stats(401).json({ message: 'Authentificacion fallida' });
        }
    } 
});

module.exports = router ;