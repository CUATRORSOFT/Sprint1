
const { Router } = require('express');
const { data_1, data_2 } = require('../connection');



const router = Router();


router.get('/1',[], data_1 );
router.get('/2',[], data_2 );


module.exports = router;