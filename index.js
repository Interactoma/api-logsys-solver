const app = require("./source/app");
const { conn,  } = require("./source/db");

conn.sync({ force: false }).then(() => {
	app.listen(3001, async () => {
		console.log("server listening on port 3001");
	});
});

