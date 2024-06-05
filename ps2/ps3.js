const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        res.render('index', {
            string: 'mango'
        });
    })
    .post((req, res, next) => {
        res.render('index', {
            string2: req.body.string2,
            len: req.body.string2.length
        });
    })

router.get('/:name', (req, res, next) => {
    res.render('index', {
        string: req.params.name
    })
})

module.exports = router;