import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"


const Bottles = () => {

    const [bottles, setBottles] = useState([])
    console.log(bottles)

    useEffect(()=>{
        fetch("Bottles.json")
        .then(res => res.json())
        .then(data => setBottles(data) )
    }, [])
    return (
        <div>
            <h1>This is our memorable bottles : {bottles.length} </h1>

            <div className="bottle-container"> 
                {
                    bottles.map(bottle => <Bottle 
                        key={bottle.id}
                        bottle = {bottle}
                        ></Bottle> )
                }
            </div>
        </div>
    );
};

export default Bottles;