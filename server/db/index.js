const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://mohamed-mustafa:anas231@cluster0.gzjok6s.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db