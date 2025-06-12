import express from "express"
import { config } from "./config/config.js"
import { statusRouter } from "./routes/statusRouter.js"
import { taskRouter } from "./routes/taskRouter.js"
import { userRouter } from "./routes/userRouter.js"

const app = express()

app.use(express.json())

app.use("/api",statusRouter)
app.use("/tasks", taskRouter)
app.use("/users", userRouter)

app.listen(
    config.PORT,
    () => {console.log(`🫶🏻⚽🍕 Server is Running in http://${config.HOST}:${config.PORT} 😎🍔💪🏻`);
    }
)