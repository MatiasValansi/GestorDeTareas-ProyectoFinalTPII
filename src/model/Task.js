// export class Task {
//   constructor(id, title, description, userId, status = "pending") {
//     this.id = id; // string o número único
//     this.title = title; // título de la tarea
//     this.description = description; // descripción opcional
//     this.userId = userId; // id del usuario asignado
//     this.status = status; // estado inicial (pending, completed, etc.)
//   }
// }

import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	date: {
		type: Date,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	weather: {
		type: String,
	},
	is_holiday: {
		type: Boolean,
		default: false,
	},
	holiday_name: {
		type: String,
	},
	budget: {
		type: Number,
	},
	currency: {
		type: String,
	},
	usd_amount: {
		type: Number,
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
});

export const TaskModel = mongoose.model("Task", taskSchema);
