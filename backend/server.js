const { appConfig, dbConfig } = require('./config/config')
const { mongoose, connectDb } = require('./config/mongoose')
const app = require('./config/express')

// starting the server
async function initApp(appConfig, dbConfig){
    try {
        mongoose.connection.on('open', () => console.log('db connected'))
        await connectDb(dbConfig)

        app.listen(appConfig.port, () => console.log(`listen on port ${appConfig.port}`))
    } catch (e) {
        console.error(e)
        process.exit(0)
    }
}

initApp(appConfig, dbConfig)