import React, { useState } from "react";
import './more.css'
import {data} from "../../../data"
import Board from "./Board";

const More = () => {
    const [item,seiItem] = useState(data)
    return(
        <>
        <h1 className="heading">More News</h1>
            <div className="more">
                <div className="more-div">
                    {
                       data.map((item) => {
                        console.log(item.id)
                        return (<Board key={item.id} item = {item}/>)
                    })}

    
                </div>
            </div>
        </>
    );
}
export default More;