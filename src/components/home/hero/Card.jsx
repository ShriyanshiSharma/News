import React from "react";
import { Link } from "react-router-dom";

const Card = ({item : {id,catego,heading,img,discription,detail}}) => {
    return(
        <>
        <div className="box">
            <div className="img">
                <img src={img}/>
            </div>
            <div className="text">
                <Link to={`/${catego}`}>
                <span className="category">{catego}</span>
                </Link>
                <Link to={`/Single/${id}`}>
                <h1 className="titleBg">{heading}</h1>
                </Link>
            </div>
        </div>
        </>
    );
}

export default Card;