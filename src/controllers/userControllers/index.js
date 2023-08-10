import createCnpjController from "./createCnpj.js";
import createUserController from "./createUser.js";
import getUserController from "./getUser.js";
import getCnpjController from "./getCnpj.js";
import getByIdController from "./getById.js";
import deleteUserController from "./deleteUser.js";
class userController {
    getUserController =  getUserController;
    createUserController = createUserController;
    createCnpjController = createCnpjController;
    getCnpjController = getCnpjController;
    getByIdController = getByIdController;
    deleteUserController = deleteUserController;
} 

export default userController