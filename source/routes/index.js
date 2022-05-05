const { Router } = require("express");
const {conn, conn2} = require("../db");
const router = Router();

router.get("/asignations", async (req, res) => {
    const { id } = req.query;
    const data = await conn.query(`SELECT * FROM Vehicles.DieselAssignments WHERE AssigmentNumber = ${id};`)
    res.json(data);
})

router.put("/asignations", async (req, res) => {
    const {id, assigment} = req.body;
    console.log(`UPDATE Vehicles.DieselAssignments SET Vehicle_Id = ${id} WHERE AssigmentNumber = ${assigment};`);
    await conn.query(`UPDATE Vehicles.DieselAssignments SET Vehicle_Id = ${id} WHERE AssigmentNumber = ${assigment};`)
    res.status(200).send("Registro actualizado");
})

router.get("/vehicle", async (req, res) => {
    const {alias} = req.query;
    const data = await conn2.query(`SELECT * FROM Vehicles.Vehicle WHERE Alias Like '%${alias}%';`)
    res.json(data);
})

module.exports = router;