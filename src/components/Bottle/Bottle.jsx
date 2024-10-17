import "./Bottle.css"
const Bottle = ({bottle}) => {

    const {name,img,price} = bottle;
    return (
        <div className="bottle">
            <h3>Name : {name}</h3>
            <img src={img} alt="" />
            <h5>Price : ${price}</h5>
        </div>
    );
};

export default Bottle;