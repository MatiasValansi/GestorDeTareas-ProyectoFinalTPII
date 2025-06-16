import express from "express";
import { config } from "./config/config.js";
import mongoConnectionInstance from "./database/mongoose.database.js";
//a modificar
//import { MongoRepository } from "./database/mongoose.cnx.js";
import { statusRouter } from "./routes/statusRouter.js";
import { taskRouter } from "./routes/taskRouter.js";
import { userRouter } from "./routes/userRouter.js";

const app = express();
app.use(express.json());

//a modificar
app.get("/", async (req, res) => {
	//const { data } = await MongoRepository.getAll();
	return req.json({ data });
});

app.use("/api", statusRouter);
app.use("/tasks", taskRouter);
app.use("/users", userRouter);

const startServer = async () => {
	try {
		await mongoConnectionInstance.connect();
		app.listen(config.PORT, () => {
			console.log(
				`🫶🏻⚽🍕 Server is Running in http://${config.HOST}:${config.PORT} 😎🍔💪🏻`,
			);
		});
	} catch (e) {
		console.error("Server is not running properly.");
		console.error(e);
		console.log("URI:", config.MONGODB_URI);
	console.log("Tipo:", typeof config.MONGODB_URI);
	}
};

startServer();