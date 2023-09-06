import fs from "fs";
import path from "path";
const filePathUsers = path.join(process.cwd(), "database", "account.json");
export const getALlUsers = () => {
    const users = fs.readFileSync(filePathUsers);
    return JSON.parse(users);
}

// check getByEmail function
export const getByEmail = (email) => {
    const {userId} = getALlUsers();
    return userId.find(user => user.email === email)
}

// Updata password Functions
export async function verifyUserPassword( oldPassword,userPassword) {

    if(+oldPassword === +userPassword) {
        return true;
   }
}

export async function updateUserPassword(userEmail, newPassword) {
  let { userId } = getALlUsers();
  const found = getByEmail(userEmail);
  let val = false;
  for (let a = 0; a < userId.length; a++) {
    if (userId[a].email === found.email) {
        userId[a].password = newPassword;
      val = true;
      break;
    }
  }
  if (val) {
    fs.writeFileSync(filePathUsers, JSON.stringify({ userId }));
 }
}