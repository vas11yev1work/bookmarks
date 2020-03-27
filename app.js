const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const cors = require('cors')

const app = express()
const PORT = config.get('port')

app.use(express.json({extended: true}));
app.use(cors());

app.use('/api/categories/', require('./routes/categories.routes'))

const start = async () => {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => {
            console.log(`App has benn started on port ${PORT}`)
        })
    } catch(e) {
        console.log('SERVER ERROR:', e.message)
        process.exit(1);
    }
}

start().then(() => console.log('Start...'))
