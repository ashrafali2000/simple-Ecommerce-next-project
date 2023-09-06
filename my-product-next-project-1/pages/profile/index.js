import { Avatar } from "@mui/material"
import Link from "next/link"

export default function Profile({userName,userImg}) {
    return (
        <div>
          
       <div>
       <div style={{
            display:"flex",
            justifyContent: "center",
            alignItems:"center",
            marginTop: 50
        }}> 
            <Avatar src={userImg} style={{
                width: 100,
                height: 100
            }} />
            <div>
            <h1>{userName} Profile</h1>
            </div>
    
        </div>

<Link href={"/updatePassword"}>Change Password</Link>
         {/* form */}

       </div>
    
        </div>
    )
}