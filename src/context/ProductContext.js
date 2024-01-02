import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios'
import { reducer1 } from "../reducers/featureReducer";

const AppContxt=createContext()

const AppContxtProvider=({children})=>{

    const API='https://api.pujakaitem.com/api/products'

    const initial={isLoading:false,isError:false,featuredProd:[],products:[],isSingleLoading:false,singleProduct:{}}

    const [state,dispatch]=useReducer(reducer1,initial)
   
//featured products and products
    useEffect(()=>{ 
        dispatch({type:'loading'})
    const getProducts=async (url)=>{
        try {
            const res= await axios.get(url)
            console.log(res)
            const products= res.data
            dispatch({type:'getdata',payload:products})
            console.log(products)
        } catch (error) {
            dispatch({type:'error'})
        }
    }
        getProducts(API)
    },[])

//single products

    const singleProd=async(url)=>{
        dispatch({type:'single_loading'})
        try {
            const res= await axios.get(url)
            
            const product= res.data
            console.log(product)
            dispatch({type:'get_single_prod',payload:product})
        } catch (error) {
            dispatch({type:'single_error'})
        }

    }

    return <AppContxt.Provider value={{...state,singleProd}}>
            {children}
        </AppContxt.Provider>
    

}

const useShortcut=()=>{
    return useContext(AppContxt)
}

export {AppContxtProvider,AppContxt,useShortcut}