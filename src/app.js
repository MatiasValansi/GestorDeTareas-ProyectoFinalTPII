import express from "express";
import { config } from "./config/config.js";
import mongoConnectionInstance from "./database/mongoose.database.js";
import { statusRouter } from "./routes/statusRouter.js";
import { taskRouter } from "./routes/taskRouter.js";
import { userRouter } from "./routes/userRouter.js";
import { userToken } from "./utils/jwt.token.js";

const app = express();
app.use(express.json());

app.get("/login", (req, res) => {
	const ADMIN_LOCAL = {
		name: "admin",
		password: "1234",
		rol: "Owner"
	}

	const {user, pwd} = req.body

	const {name:ADMIN, password:PWD} = ADMIN_LOCAL

	const isValid = user === ADMIN && pwd === PWD

	if (!isValid) {
		return res.status(403).json({
			error:"Credentials do not match | Credenciales incorrectas"
		})
	}

	const token = userToken({...ADMIN_LOCAL, password:"*******"})

	return res.status(200).json({token})
})

app.get("/", async (req, res) => {
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