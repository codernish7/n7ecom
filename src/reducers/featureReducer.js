const reducer1=(state,action)=>{
    switch (action.type) {
        case 'loading':
            return {
                ...state,
                isLoading:true
            }
        case 'getdata':
            return {
                ...state,
                isLoading:false,
                products:action.payload,
                featuredProd:action.payload.filter((items)=>items.featured===true)
            }
        case 'error':
            return {
                ...state,
                isLoading:false,
                isError:true
            }
            
        case 'single_loading':
            return {
                ...state,
                isSingleLoading:true,
            }
        
        case 'get_single_prod':
            return {
                ...state,
                isSingleLoading:false,
                singleProduct:action.payload
            }
        case 'single_error':
            return{
                ...state,
                isSingleLoading:false,
                isError:true
            }   
    
        default:
            return state;
    }
    

}

export {reducer1}