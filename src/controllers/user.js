const { userService } = require('../services');

const createUser = async (req, res) => {
    const user = req.body
    try {
        const newUser = await userService.createUser(user);
        if(newUser){
            res.status(201).json(newUser);
        }else{
            res.status(400).json({message: 'Error al crear el Usuario'});
        }
    } catch (error) {
        res.status(500).json({action: "Error del servidor al crear el usuario", error: error.message});
    }
};

const getUser = async (req, res) => {
    const id = req.params.userId;
    try {
        const userFound = await userService.getUser(id);
        if(userFound){
            res.status(200).json(userFound);
        } else {
            res.status(404).json({error: `No se encontro al usuario Id: ${id}`});
        }
    } catch (error) {
        res.status(500).json({action: "Error del servidor al buscar usuario", error: error.message});
    }
}

const getAllUsers = async (req, res) => {
    try {
        const usersFound = await userService.getAllUsers()
        if(usersFound.length > 0){
            res.status(200).json(usersFound);
        } else {
            res.status(404).json({error: `No se encontro a ningun usuario`});
        }
    } catch (error) {
        res.status(500).json({action: "Error del servidor al buscar usuarios", error: error.message});
    }
}



module.exports = {
    createUser,
    getUser,
    getAllUsers,
   // updateUser,
   // deleteUser,
};