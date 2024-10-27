import "./Cart.css"

const Cart = ({cart}) => {
    return (
        <div>
            <h2> My Cart: {cart.length} </h2>

           <div className="cart-container">
           {
                cart.map(bottle => <img  key={bottle.id} src={bottle.img} alt="" /> )
            }
           </div>
        </div>
    );
};

export default Cart;