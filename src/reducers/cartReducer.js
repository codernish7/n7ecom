export const reducerCart=(state,action)=>{

    if(action.type==='add_to_cart'){
        const {id,color,amount,cartItem}=action.payload
        console.log(cartItem)
        console.log(cartItem.stock)

        let existingprod=state.cart.find((items)=>items.id===id+color)
        console.log(existingprod)

        if(existingprod){
            let updatedCart=state.cart.map((items)=>{
                let updatedAmount=items.amount+amount

                if(updatedAmount>=items.max){
                    updatedAmount=items.max
                }
                if(items.id===id+color){
                    return{
                        ...items,
                        amount:updatedAmount
                    }
                    
                }
               
                else{
                   
                    return items
                    
                }
            }) 
            console.log(updatedCart)
            return{
                ...state,
                cart:updatedCart
            }
        }
       
        else{
        const cartContent={
            id:id+color,
            name:cartItem.name,
            color,
            amount,
            image:cartItem.image[0].url,
            price:cartItem.price,
            max:cartItem.stock
        }

   
        return {
            ...state,
            cart:[...state.cart,cartContent]
        } 
        }
    
    }
    
    if(action.type==='remove_from_cart'){
        
        const filteredCart= state.cart.filter((items)=>items.id!==action.payload)

        return {
            ...state,
            cart:filteredCart
        }
    }

    if(action.type==='clear_cart'){

        return {
            ...state,
            cart:[]
        }
    }

    if(action.type==='set_cartItem_plus'){
       
            let updatedCart=state.cart.map((items)=>{
                if(items.id===action.payload){
                    let newAmount=items.amount+1
                    if(newAmount>=items.max){
                        newAmount=items.max
                    }
                    return {
                        ...items,
                        amount:newAmount
                    }
                }
                else{
                    return items
                }
            }) 
            
        return{
            ...state,
            cart:updatedCart
        }
            
    }

    if(action.type==='set_cartItem_minus'){
        let updatedCart=state.cart.map((items)=>{
            if(items.id===action.payload){
                let newAmount=items.amount-1
                if(newAmount<=1){
                    newAmount=1
                }
                return {
                    ...items,
                    amount:newAmount
                }
            }
            else{
                return items
            }
        })

        return {
            ...state,
            cart:updatedCart
        }
    }

    if(action.type==='cart_logo_qty'){
        let cartQty=state.cart.reduce((initial,items)=>{
            initial=initial+items.amount
            return initial
        },0)
        return {
            ...state,
            total_items:cartQty
        }
    }
    if(action.type==='cart_net_value'){
        let cartNetVal=state.cart.reduce((initial,items)=>{
            initial=initial+(items.amount*items.price)
            return initial
        },0)
        return {
            ...state,
            total_price:cartNetVal
        }
    }
    
    return state;

}