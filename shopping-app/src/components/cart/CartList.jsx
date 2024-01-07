import { useContext } from "react";
import CartContext from "../../utils/CartContext";

const CartList = ({item}) => {
  const { removeItem, increaseQuantity, decreaseQuantity, } = useContext(CartContext);

  const handleRemove = () => {
    removeItem(item.id);
  };

    return (
      <div className="m-4 p-2">
        <div className="flex">
        <img className="w-20 h-[3%] " src={item.imageUrl} alt='product'/>
        <h1 className='p-2 mx-2'>{item.title}</h1>
        <h1 className="p-2">₹ {item.price}</h1>
        <div className="mx-10">
          <button className="my-2" onClick={() => decreaseQuantity(item.id)}>➖</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQuantity(item.id)}>➕</button>
        </div>
        <span className="p-2 cursor-pointer" onClick={handleRemove}>❌</span>
        </div>
      </div>
      
    );
  };
  
  export default CartList;