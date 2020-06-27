const mongoose = require('mongoose')

async function connectDb ({ host, port, dbName}) {
    const uri = `mongodb://${host}:${port}/${dbName}`
    await mongoose.connect(uri, { 
        useNewUrlParser: true ,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
}

module.exports = {
    mongoose,
    connectDb
}