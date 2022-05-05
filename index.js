const app = require("./source/app");
const { conn, conn2 } = require("./source/db");

conn.sync({ force: false }).then(() => {
	app.listen(3001, async () => {
		console.log("server listening on port 3001");
	});
});

conn2.sync({ force: false }).then(() => {
	app.listen(3002, async () => {
		console.log("server listening on port 3002");
	});
});