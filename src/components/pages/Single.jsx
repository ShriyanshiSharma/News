import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import {data} from '../../data'

const Single = () => {
    const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    const item = data.find((item) => item.id === parseInt(id))
    window.scrollTo(0, 0)
    if (item) {
      setItem(item)
    }
  }, [id])

    return(
        <>
        {item ?
        <main>
            <div className='container'>
               <section className='details'>
                   <h1 className='title'>{item.heading}</h1>
                   <img className="wall" src={item.img}/>
                   <p className="des">{item.discription}</p>
                   <div className="para">
                   <p>{item.details.p1}</p>
                   <p>{item.details.p2}</p>
                   <p>{item.details.p3}</p>
                   <p>{item.details.p4}</p>
                   <p>{item.details.p5}</p>
                   </div>

                </section>
            </div>
        </main>
        :(<h1>not found</h1>)}
        </>
    );
}
export default Single;