const dotenv = require('dotenv')

if (process.env.NODE_ENV === "production"){
  dotenv.config({ path: __dirname + '/../../.env' })
}
if (process.env.NODE_ENV === "test"){
  dotenv.config({ path: __dirname + '/../../.env.test' })
}
if (process.env.NODE_ENV === "development"){
  dotenv.config({ path: __dirname + '/../../.env.development' })
}

const config = {
  appConfig: {
    port: process.env.BACKEND_PORT || 5000,
    environment: process.env.NODE_ENV
  },
  dbConfig: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dbName: process.env.DB_NAME
  }
}

module.exports = config