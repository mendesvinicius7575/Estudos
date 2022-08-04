const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())


app.get('/', (req, res) => {
    return res.json(
        [
            {name: 'jeff'},
            {name: 'vini'},
            {name: 'joseph'}
        ])
})



app.listen('4567')