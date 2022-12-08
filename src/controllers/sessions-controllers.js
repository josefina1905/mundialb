import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'
const prisma = new PrismaClient()


const loginController = async ({body}, res) => {
    const { email, password } = body;
    
    const userFound = await prisma.user.findUnique({
        where : {
            email : email
        }
    });
    console.log(userFound);

    if (userFound && userFound.contra==password){
           const token = jwt.sign({email});
           res.json({token : token})
    
        
    }else {
        //res.sendStatus(401)
        return res.json({code : 401})
};
}
const logoutController  = async (req, res) => {}

app.get('/logout',auth,function(req,res){
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200);
    });

}); 

export {loginController,logoutController };