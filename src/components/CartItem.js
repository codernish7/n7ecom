import React from 'react'
import FeatureCost from './FeatureCost'
import CartToggle from './CartToggle'
import { FaTrash } from "react-icons/fa";
import { useShortcut3 } from '../context/cartContext';

const CartItem = ({items}) => {
    const{handleDelete,setIncrease,setDecrease}=useShortcut3()

   const{id,name,color,amount,price,max,image}=items
    
   
  return (
    <div className='cart_heading grid grid-five-column'>
        <div className='cart-image--name'>
            <div>
            <figure>
                <img src={image}/>
            </figure>
            </div>
            <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}></div>
            </div>
          </div>
          
        </div>
        <div className="cart-hide">
            <p>
                <FeatureCost price={price} />
            </p>
        </div>
        <CartToggle
        amount={amount} 
        setDecrease={()=>setDecrease(id)} 
        setIncrease={()=>setIncrease(id)}
        />
        <div className='cart-hide'>
            <p>
                <FeatureCost price={price*amount}/>
            </p>
        </div>
        <div>
        <FaTrash className="remove_icon" onClick={()=>handleDelete(id)} />
        </div>

    </div>
  )
}


export default CartItem