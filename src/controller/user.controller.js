import { UserService } from "../services/user.service.js"

export const UserController = {
    userValidation : async (req, res) => {
        const {id} = req.params
        const userFoundById = await UserService.serviceUserValidation(id)

        if (!userFoundById) {
            res.status(404).json({
                payload: null,
                message: "El usuario no fue hallado",
                ok: false
            })   
            return null
        }
        else{
            res.status(200).json({
                message: "Success --> El usuario fue hallado",
                payload: {userFoundById},
                ok: true
            })
        }
    },

    userCreateOne : async (req, res) => {
        const {user} = req.body

        try {
            const userResponse = await UserService.serviceUserCreation(user)
          
            res.status(200).json({
                message: "Success --> El usuario ha sido creado",
                payload: {...userResponse,
                    usuario: userResponse.fullname
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
                message: "No se pudo crear el usuario",
                ok: false
            })
            return
        }
    },

    userDeleteOne: async (req, res) => {
        const { id } = req.params
        const userDeleted = await UserService.serviceUserDelete(id)

        if (!userDeleted) {
            res.status(404).json({
                payload: null,
                message: `No se pudo eliminar el usuario con el id: ${id}`,
                ok: false
            })
            return
        }

        res.status(200).json({
            message: `Success: El usuario "${userDeleted.fullname}" fue eliminado`,
            payload: { userDeleted },
            ok: true
        })
        return
    },

    userUpdateOne: async (req, res) => {
        const { id } = req.params
        const { fullname, email } = req.body

        const userUpdated = await UserService.serviceUserUpdate(
            id,
            fullname,
            email
        )

        if(!userUpdated){
            res.status(404).json({
                payload: null,
                message: `No se puede actualizar el usuario con el id: ${id}`,
                ok: false
            })
            return
        }

        res.status(200).json({
            message: "Usuario Actualizado",
            payload: userUpdated,
            ok: true
        })
        return
    }
}