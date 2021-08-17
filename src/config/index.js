module.exports = {
    server: {
        host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT || 3000
    },
    database: {
        username: process.env.MYSQL_DB_USER,
        name: process.env.MYSQL_DB_NAME, 
        password: process.env.MYSQL_DB_PASS,
        options: {
            host: process.env.MYSQL_DB_HOST || process.env.MYSQL_SERVICE_HOST || 'localhost',
            port: process.env.MYSQL_DB_PORT || process.env.MYSQL_SERVICE_PORT  || 3306,
            dialect: 'mysql',
            freezeTableName: true,
            define: {
                timestamps: false
            },
            pool: {
                max: 9,
                min: 0,
                idle: 10000
            }
        }
    }
}