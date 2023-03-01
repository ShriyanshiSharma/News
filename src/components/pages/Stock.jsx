import React from "react";
import './style.css'
import Display from "./Display";
import {data } from '../../data';
import { useState } from 'react';

const Stock = () => {
 
        const [item,setItems] = useState(data)

    
return(
    <>
    <div className="common">
        <h1>Bitcoin News</h1>
        {
            data.map((item) => {
                return<>
                {
                    <div className="display-detail">
                    {((item.catego) === "Stock" ) ? <Display key={item.id} item = {item}/>:  (null)}
                    </div>
                }
                </>
            })
        }
    </div>
    </>
);
}
export default Stock;