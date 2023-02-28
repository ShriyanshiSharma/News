import React, { useState } from "react";
import {data} from "../../../data";
import Card from "./Card";

const Hero = () => {
    const [itmes,setItems] = useState(data)
    return(
        <>
        <div>
            <section className="hero">
                <div className="container">
                    {data.map((item) => {
                        console.log(item.id)
                        return <Card key={item.id} item = {item}/>
                    })}
                    {itmes}
                </div>
            </section>
        </div>
        </>
    );
}

export default Hero;