import { verifyUserPassword, updateUserPassword, getByEmail } from "@/services/users";

export default async function handler(req, res) {
  if (req.method === "PATCH") {
    const { oldPassword, newPassword, userEmail } = req.body;

      const myUser = getByEmail(userEmail);
      const userVerifyPassword = verifyUserPassword(oldPassword, myUser.password);
     if(userVerifyPassword){
         const user =  updateUserPassword(userEmail, newPassword);
          res.status(201).json(user);
     }

    //   res.status(200).json(userVerifyPassword);
  } 
}