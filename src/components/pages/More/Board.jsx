import React from "react";
import { Link } from "react-router-dom";
const Board = ({item: {id,heading ,img,discription,details}}) => {
    return<>
        <div className="board-div">
            <div className="img-detail">
                <img className="myimg" src={img}/>
            </div>
            <div className="head-detail">
                <Link to={`/Single/${id}`}>
                <p className="detail">{heading}</p>
                </Link>
            </div>
                
        </div>
    
    </>
}

export default Board