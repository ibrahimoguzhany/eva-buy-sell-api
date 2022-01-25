require('dotenv/config')
module.exports = {
    development: {
        databases: {
            evabuysell: {
                database: process.env.POSTGRES_DB,
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PW,
                host: process.env.POSTGRES_HOST,
                port: process.env.POSTGRES_PORT,
                dialect: 'postgres',
            }
        }
    },
    production: {
        databases: {
            evabuysell: {
                database: process.env.POSTGRES_DB,
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PW,
                host: process.env.POSTGRES_HOST,
                port: process.env.POSTGRES_POST,
                dialect: 'postgres',
            }
        }
    }

}