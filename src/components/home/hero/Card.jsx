import React from "react";

const Card = ({item : {id,catego,heading,img,discription,detail}}) => {
    return(
        <>
        <div className="box">
            <div className="img">
                <img src={img}/>
            </div>
            <div className="text">
                <span className="category">{catego}</span>
                <h1 className="titleBg">{heading}</h1>
            </div>
        </div>
        </>
    );
}

export default Card;