import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"
import { addToLS, getStoredCart } from "../../utilities/LocalStorage";
import Cart from "../Cart/Cart";





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
            const saveCart = [];

            for(const id of storedCart){
                console.log(id)
                const bottle = bottles.find(bottle =>bottle.id === id)
                if(bottle){
                    saveCart.push(bottle)
                }
            }

            console.log(saveCart)
            setCart(saveCart)
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
            <Cart cart={cart} ></Cart>
            

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