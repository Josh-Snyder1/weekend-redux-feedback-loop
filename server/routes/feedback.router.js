const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.post('/', (req, res) => {
    console.log('in router.post',req.body)
    
    const sqlQuery = `INSERT INTO "feedback" 
        ( "feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);`
    ;

    pool.query
})