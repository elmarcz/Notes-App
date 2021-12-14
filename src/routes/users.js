const router = require('express').Router();

router.get('/users/signin', (req, res) => {
    res.send('signin')
})

router.get('/users/signup', (req, res) => {
    res.send('signup')
})

module.exports = router;