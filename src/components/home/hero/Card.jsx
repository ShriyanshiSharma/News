import React from "react";

const Card = ({item : {id,heading,img,discription,detail}}) => {
    return(
        <>
        <div className="box">
            <div className="img">
                <img src={img}/>
            </div>
        </div>
        </>
    );
}

export default Card;