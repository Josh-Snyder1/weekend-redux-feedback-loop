const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.post('/', (req, res) => {

    const sqlText = `
        INSERT INTO "feedback"
            ("feeling", "understanding", "support", "comments")
        VALUES
            ($1, $2,$3,$4);
        `;
        console.log('in router.post', req.body)
    const sqlQuery = [
        req.body.feeling,
        req.body.understanding,
        req.body.supported,
        req.body.comments
    ]
    pool.query(sqlText, sqlQuery)
        .then((response) => {
            console.log('Added feedback to the database',response);
        })
        .catch((error) => {
            console.log('Error posting to database', error);
        })
})

module.exports = router;