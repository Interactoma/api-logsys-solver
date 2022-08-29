require("dotenv").config();
const { Sequelize } = require("sequelize");

const { DB_USER, DB_PASSWORD, DB_HOST1,DB_NAME1 } = process.env;

const tms = new Sequelize(
	`mssql://${DB_USER}:${DB_PASSWORD}@${DB_HOST1}/${DB_NAME1}`,
);

const erp = new Sequelize(
	`mssql://${DB_USER}:${DB_PASSWORD}@${DB_HOST1}/${DB_NAME1}`,
);



async function name() {
    try {
        await tms.authenticate();
        console.log('Connection tms has been established successfully.');
        
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
name();


module.exports = {
	conn: tms,
  conn2: erp,
};