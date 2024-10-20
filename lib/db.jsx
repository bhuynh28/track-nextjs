import mysql from 'mysql2/promise'

let connection;
export const createConnection = async () => {
    const databaseUrl = process.env.DATABASE_URL; 
    const user = process.env.DATABASE_USER;
    const dbPass = process.env.DATABASE_PASSWORD;
    const dbName = process.env.DATABASE_NAME;

    if( !connection ) {
        connection = await mysql.createConnection({
            host: databaseUrl,
            user: user,
            password: dbPass,
            database: dbName,
        })
    }
    return connection;
}