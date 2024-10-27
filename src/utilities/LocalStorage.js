const getStoredCart = ()=>{
    const getStoredCartString = localStorage.getItem("cart")
    if(getStoredCartString){
        return JSON.parse(getStoredCartString)
    }
    return [];
}


const saveCartToLS = cart =>{
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem("cart", cartStringified)
}




// when I want to keep some data to local storage
const addToLS = id =>{
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLS(cart)
}

export {addToLS , getStoredCart}