// export class User {
//   constructor(id, fullName, email) {
//     this.id = id; // string o número único
//     this.fullName = fullName; // nombre completo
//     this.email = email; // dirección de correo
//   }
// }

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: { type: String, require: true, maxlength: 100, trim: true },
		email: {
			type: String,
			require: true,
			maxlength: 100,
			unique: true,
			lowercase: true,
			trim: true,
		},
	},
	{
		timestamps: true,
	},
);

export const UserModel = mongoose.model("User", userSchema);
