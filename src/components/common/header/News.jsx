import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../../data";


const News = () => {
    const [item,setItem] = useState(data)
    return(
        <>
        <div className="news">
            <marquee className="marquee">
                {
                    data.map((item) => {
                        return<>
                        <Link to={`Single/${item.id}`}>
                        <span className="mar">
                        <i class="fa-sharp fa-solid fa-bell space"></i>
                        {item.heading}
                        </span>
                        </Link>
                        </>
                    })
                }
            </marquee>
        </div>
        </>
    );
}
export default News;