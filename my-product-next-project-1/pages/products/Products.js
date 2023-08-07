import { Button, Card } from "antd";
import Link from "next/link";
import {BiLike} from "react-icons/bi"
import {AiOutlineHeart} from "react-icons/ai"
import { useState } from "react";
import {FaRegCommentDots} from "react-icons/fa"

export default function Products({title,img,myKey,stock,price, myImages}) {

    const [like, setLike] = useState(stock);
    const [love, setLove] = useState(price);

    const likeHandler = () => {
        setLike(prev => prev + 1);
    }

    const loveHandler = () => {
        setLove(prev => prev + 1);
    }


    return (
        <div className="Products">
            <Card
             style={{
                width: 330,
                height: 480,
                backgroundColor: "#e3c986",
                color: "#000",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 4px 13px #777"
              }}
              cover={
              <Link href={`productDetails/${myKey}`}> <img style={{
                    height: 260,
                    width: 250,
                }}
                  alt="example"
                  src={`${img}`}
                /></Link>
            }
            >
                <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection:"column",
                    gap: 25,
                    fontSize: 18
                }}>

                {title}
                <div style={{
                    fontSize: 30,
                    width: 230,
                    display: "flex",
                    justifyContent: "space-between",

                }}>
              <div 
              style={{
                fontSize: 20,
                width: 60,
                display: "flex",
                justifyContent: "space-between",
                alignItems:"center"
                }} ><BiLike style={{fontSize: 30}} onClick={likeHandler} />{like}</div>  
               <div
               style={{
                fontSize: 20,
                width: 70,
                display: "flex",
                justifyContent: "space-between",
                alignItems:"center"
            }}> {love} <AiOutlineHeart style={{fontSize: 30}}  onClick={loveHandler}/></div>
            <div style={{
                fontSize:30,

            }}
            >
           <FaRegCommentDots></FaRegCommentDots>
            </div>
                </div>
                </div>

             <div style={{
                textAlign: "center",
                marginTop: 10
             }}><Link href={``}><button className="seeDetailsBtn">See Details</button></Link></div>   
            </Card>
        </div>
    )
}