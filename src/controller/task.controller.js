import { TaskService } from "../services/task.service.js"

export const TaskController = {
    taskValidation : async (req, res) => {
        const {id} = req.params
        const taskFoundById = await TaskService.serviceTaskValidation(id)

        if(!taskFoundById){
            res.status(404).json({
                payload: null,
                message: "La tarea no fue hallada",
                ok: false
            })
            return null
        }
        else{
            res.status(200).json({
                message: "Success --> La tarea fue hallada",
                payload: {taskFoundById},
                ok:true
            })
        }
        
    },

    taskCreateOne : async (req, res) => {
        const {task} = req.body

        try {
            const taskResponse = await TaskService.serviceTaskCreation(task)
            res.status(200).json({
                message: "Success --> La tarea ha sido creada",
                payload: {...taskResponse,
                    tarea: taskResponse.title
                },
                ok: true
            })
            return
        } catch (e) {
            console.log({error: e.message,
                mensaje: "Algo salió mal"
            });
            res.status(404).json({
                payload: null,
                message: "No se pudo crear la tarea",
                ok: false
            })
            return            
        }
    },

    taskDeleteOne: async (req, res) => {
        const { id } = req.params
        const taskDeleted = await TaskService.serviceTaskDelete(id)

        if (!taskDeleted) {
            res.status(404).json({
                payload: null,
                message: `No se pudo eliminar la tarea con id: ${id}`,
                ok: false
            })
            return
        }

        res.status(200).json({
            message: `Success: La tarea "${taskDeleted.title}" fue eliminada`,
            payload: { taskDeleted },
            ok: true
        })
        return
    },

    taskUpdateOne: async (req, res) => {
        const { id } = req.params
        const { title, description } = req.body

        const taskUpdated  = await TaskService.serviceTaskUpdate(
            id, 
            title,
            description
        )

        if(!taskUpdated){
            res.status(404).json({
                payload: null,
                message: `No se puede actualizar la tarea con el id: ${id}`,
                ok: false
            })
            return
        }

        res.status(200).json({
            message: "Tarea Actualizada",
            payload: taskUpdated,
            ok: true
        })
        return
    }

    
}