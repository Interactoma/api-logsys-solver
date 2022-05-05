const { Sequelize } = require("sequelize");

async function asignacion(){
    const [result, metadata] = await Sequelize.query("SELECT * FROM Vehicles.DieselAssignments WHERE AssigmentNumber = 30");
    return result;
}
 module.exports = { asignacion };
