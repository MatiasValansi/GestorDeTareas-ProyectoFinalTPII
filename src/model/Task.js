
export class Task {
  constructor(id, title, description, userId, status = "pending") {
    this.id = id; // string o número único
    this.title = title; // título de la tarea
    this.description = description; // descripción opcional
    this.userId = userId; // id del usuario asignado
    this.status = status; // estado inicial (pending, completed, etc.)
  }
}