
const { Router } = require('express');
const { data } = require('../connection');



const router = Router();


router.get('/', data );


module.exports = router;