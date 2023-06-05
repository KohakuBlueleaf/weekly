const { Client } = require('pg');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json')[env];

[host, port] = config.host.split(':');
let connection = {
  host: host,
  user: config.username,
  password: config.password,
  port: port,
};
const client = new Client(connection);


const createDatabase = async () => {
  try {
    await client.connect();                            // gets connection
    await client.query(`CREATE DATABASE ${config.database}`); // sends queries
    return true;
  } catch (error) {
    console.error(error.stack);
    return false;
  } finally {
    await client.end();                                // closes connection
  }
};

createDatabase().then((result) => {
  if (result) {
    console.log('Database created');
  }
});
