import React, { useState } from "react";
import {data} from "../../../data";
import Card from "./Card";
import './hero.css'

const Hero = () => {
    const [itmes,setItems] = useState(data)
    return(
        <>
        <div>
            <section className="hero">
                <div className="container">
                    {data.map((item) => {
                        console.log(item.id)
                        return (<Card key={item.id} item = {item}/>)
                    })}
                </div>
            </section>
        </div>
        </>
    );
}

export default Hero;