import React from "react";
import {Link} from 'react-router-dom'

const Display = ({item: {id,heading ,img,discription,details}}) => {
    return(
        <>
        <div className="div-main">
            <div className="div-1">
                <img  className="image" src={img}/>
                <div className="over">
                <h3 className="overlap">{heading}</h3>
                </div>
                <div className="over-1">
                <p className="overlap-des">{discription}</p>
                </div>
            </div>
            <div div-2>
                <div className="side-div">
                    <div className="side-1">
                        <h3>{heading}</h3>
                    </div>
                    <div className="side-2">
                        <p>{details.p1}</p>
                        <p>{details.p2}</p>
                    </div>
                </div>
                <Link to={`/Single/${id}`}>
                <button className="btn">Read Full</button>
                </Link>
            </div>
        </div>
        </>
    );
}
export default Display;