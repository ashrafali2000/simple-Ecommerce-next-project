import { Card } from "antd";
import Link from "next/link";
import { BiLike } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai"
import { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa"
import { useRef } from "react";
export default function CardsAllProduct({ title, img, myKey, stock, price }) {
    const commentRef = useRef();
    const mySubmit = (event) => {
        const comment = commentRef.current.value;
        event.preventDefault();
        const newComment = JSON.stringify({ myKey, comment });
        fetch(`/api/AllProducts/`, {
            method: "POST",
            body: newComment,
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((json) => console.log(json));
    }

    const [hideLightbox, setHideLightbox] = useState(true);

    const [like, setLike] = useState(stock);
    const [love, setLove] = useState(price);

    const likeHandler = () => {
        setLike(prev => +prev + 1);
    }

    const loveHandler = () => {
        setLove(prev => +prev + 1);
    }

    return (
        <div className="Products">
            <Card
                style={{
                    width: 320,
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
                    <img className="cardImg" style={{
                        height: 260,
                        width: 250,
                    }}
                        alt="example"
                        src={`${img}`}
                    />
                }
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "column",
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
                                alignItems: "center"
                            }} ><BiLike style={{ fontSize: 30 }} onClick={likeHandler} />{like}</div>
                        <div
                            style={{
                                fontSize: 20,
                                width: 70,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}> {love} <AiOutlineHeart style={{ fontSize: 30 }} onClick={loveHandler} /></div>
                        <div style={{
                            fontSize: 30,

                        }}
                        >
                            <form className={` lightbox ${hideLightbox ? "hide-lightbox" : ""}`} onSubmit={mySubmit} ><input autoFocus ref={commentRef} ></input> <button className="savebtn" onClick={() => setHideLightbox(true)}>Send</button> </form>
                            <FaRegCommentDots onClick={() => setHideLightbox(false)}></FaRegCommentDots>
                        </div>
                    </div>
                </div>

                <div style={{
                    display:"flex",
                    justifyContent: "space-around",
                    alignItems:"center",
                    marginTop: 15
                }}><Link href={`allProductDetails/${myKey}`}><button className="seeDetailsBtn">See Details</button></Link> <span style={{fontSize:20,color:"#00f"}}>{"$"+price}</span></div>
            </Card>
        </div>
    )
}