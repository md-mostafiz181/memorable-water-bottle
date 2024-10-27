import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"
import { addToLS, getStoredCart } from "../../utilities/LocalStorage";





const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(bottles)

    useEffect(()=>{
        fetch("Bottles.json")
        .then(res => res.json())
        .then(data => setBottles(data) )
    }, [])

    //load data from local storage

    useEffect(()=>{
        if(bottles.length > 0){
            const storedCart = getStoredCart()
            console.log(storedCart)
        }
    }, [bottles])

    const handleAddToCart = bottle =>{
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id)
   
    }
    return (
        <div>
            <h1>Its our Memorable bottles</h1>
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