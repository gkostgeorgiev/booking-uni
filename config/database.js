const mongoose = require('mongoose')

// TODO THE NAME OF THIS DATABASE NEEDS TO BE CHANGED ACCORDING TO THE ASSIGNMENT!!!
const CONNECTION_STRING = 'mongodb://0.0.0.0:27017/scaffoldDb'
// const CONNECTION_STRING = 'mongodb://localhost:27017/scaffoldDb'

module.exports = async function (app) {
    try {
        await mongoose.connect(CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database connected')
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}