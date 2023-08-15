import { Avatar } from "@mui/material"
import { Link } from "heroicons-react"

export default function Profile() {
    return (
        <div>
          
        <div style={{
            display:"flex",
            justifyContent: "center",
            alignItems:"center",
            marginTop: 50
        }}> 
            <Avatar src="/broken-image.jpg" style={{
                width: 100,
                height: 100
            }} />
            <div>
                Name: {}
            </div>
    
        </div>


        </div>
    )
}