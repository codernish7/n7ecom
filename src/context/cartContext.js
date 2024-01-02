import { createContext, useContext, useEffect, useReducer } from "react";
import { reducerCart } from "../reducers/cartReducer";

const cartContxt=createContext()

export const CartProviderFn=({children})=>{

    const localCart=()=>{
        let localCartData=localStorage.getItem('n7cart')
        if(localCartData.length===0){
            return []
        }
        else{
            return JSON.parse(localCartData)
        }
    }

    const initialCart={
        cart:localCart(),
        total_items:'',
        total_price:'',
        shipping_fees:5000
    }

    const[state,dispatch]=useReducer(reducerCart,initialCart)

       const addToCart=(id,color,amount,cartItem)=>{

        dispatch({type:'add_to_cart',payload:{id,color,amount,cartItem}})

       }

       const handleDelete=(id)=>{
        dispatch({type:'remove_from_cart',payload:id})
       }

       const clearCart=()=>{
        dispatch({type:'clear_cart'})
       }

       const setIncrease=(id)=>{
        dispatch({type:'set_cartItem_plus',payload:id})
       }

       const setDecrease=(id)=>{
        dispatch({type:'set_cartItem_minus',payload:id})
       }

       useEffect(()=>{
        dispatch({type:'cart_logo_qty'})
        dispatch({type:'cart_net_value'})
        localStorage.setItem('n7cart',JSON.stringify(state.cart))
       },[state.cart])

    return <cartContxt.Provider value={{...state,addToCart,handleDelete,clearCart,setIncrease,setDecrease}}>
        {children}
    </cartContxt.Provider>
}

export const useShortcut3=()=>{
    return useContext(cartContxt)
}

