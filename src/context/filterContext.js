import { createContext, useContext, useEffect, useReducer } from "react";
import { useShortcut } from "./ProductContext";
import reducer2 from "../reducers/filterReducer";

const filterContext=createContext()

const initial2={filter_products:[],
    all_products:[],
    grid_view:true,
    sortingValue:'lowest',
    searchNfilter:{searchbar:'',
                  categoryFilter:'All',
                  companyFilter:'All'},
    }

export const FilterProviderFn=({children})=>{

const {products}=useShortcut()

const[state,dispatch]=useReducer(reducer2,initial2)

const setGridView=()=>{
    return dispatch({type:'grid_view'})
}

const setListView=()=>{
    return dispatch({type:'list_view'})
}
const sorting=(e)=>{
    dispatch({type:'sort_by_price',payload:e.target.value})
}

const handleSearch=(e)=>{
    
    dispatch({type:'search',payload:{name:e.target.name,value:e.target.value}})
}

const clearFilters=()=>{
    dispatch({type:'reset_filters'})
}


useEffect(()=>{
    
    dispatch({type:'searchfilter'})
    dispatch({type:'sort_type'})
},[products,state.sortingValue,state.searchNfilter])


useEffect(()=>{
    dispatch({type:'load_filter_data',payload:products})
},[products])



    

    return <filterContext.Provider value={{...state,setGridView,setListView,sorting,handleSearch,clearFilters}}>
        {children}
    </filterContext.Provider>
}

export const useShortcut2=()=>{
    return useContext(filterContext)
}

