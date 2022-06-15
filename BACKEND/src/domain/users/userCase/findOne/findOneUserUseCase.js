import User from "../../../models/Users.js";

export class FindOneUserUseCase{
    static async listarOne(req){
        const { id } = req.params;
        const user = await User.findByPk(id);

        return user;   
    }
}
