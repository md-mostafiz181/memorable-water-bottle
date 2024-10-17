import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"


const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(bottles)

    useEffect(()=>{
        fetch("Bottles.json")
        .then(res => res.json())
        .then(data => setBottles(data) )
    }, [])

    const handleAddToCart = bottle =>{
        const newCart = [...cart, bottle];
        setCart(newCart)
    }
    return (
        <div>
            <h1>This is our available bottles : {bottles.length} </h1>
            <h2>Cart selected bottle : {cart.length} </h2>

            <div className="bottle-container"> 
                {
                    bottles.map(bottle => <Bottle 
                        key={bottle.id}
                        bottle = {bottle}
                        handleAddToCart = {handleAddToCart}
                        ></Bottle> )
                }
            </div>
        </div>
    );
};

export default Bottles;