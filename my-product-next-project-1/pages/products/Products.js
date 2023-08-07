import { Button, Card } from "antd";
import Link from "next/link";
import {BiLike} from "react-icons/bi"
import {AiOutlineHeart} from "react-icons/ai"
import { useState } from "react";

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
                height: 450,
                backgroundColor: "#e3c986",
                color: "#000",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
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
                    width: 190,
                    display: "flex",
                    justifyContent: "space-between",
                    // alignItems:"center"

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
                </div>
                </div>
                <button className="seeDetailsBtn">See Details</button>
            </Card>
        </div>
    )
}