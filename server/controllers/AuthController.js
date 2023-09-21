import { getPrismaClient } from "@prisma/client/runtime/library.js";
import getPrismaInstance from "../utils/PrismaClient.js";


export const checkUser = async (req, res, next) => {
    try{
        const {email} = req.body;
        if(!email){
            return res.json({msg : "email is required", status:false});
        }
        const prisma = getPrismaInstance()
        const user=await prisma.user.findUnique({where: {email}});
        if(!user){
            return res.json({msg:"user not found"});
        } else{
            return res.json({msg : "user found", status:true, data:user});
        }
    } catch(err){
        next(err);
    }
}