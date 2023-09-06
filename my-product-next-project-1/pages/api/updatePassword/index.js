import { verifyUserPassword, updateUserPassword, getByEmail } from "@/services/users";

export default async function handler(req, res) {
  if (req.method === "PATCH") {
    const { oldPassword, newPassword, userEmail } = req.body;
        try{
          const myUser = getByEmail(userEmail);
          const myUserPassword = myUser.password;
          const userVerifyPassword = await verifyUserPassword(oldPassword, myUserPassword, userEmail,newPassword);
          console.log(typeof(oldPassword))
          res.status(200).json(userVerifyPassword);
        }catch(err){
          res.status(400).json({message:err.message});
        }
  } 
}