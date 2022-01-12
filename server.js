

import express from 'express'
import express from 'dotenv'
import express from './data/products'


dotenv.config()
const app = express()

app.get('/', (req, res) => {

    res.send('Api is running')

})

app.get('/api/products', (req, res) => {

    res.json(products)
})


app.get('/api/products/:id', (req, res) => {

    const product = products.find((p)=>p._id=== req.params.id) 
    res.json(products)
})


const PORT = process.env.PORT||500
app.listen(PORT, console.log('Server Runing on Port 500'))
