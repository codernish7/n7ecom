import React from 'react'
import { useShortcut2 } from '../context/filterContext'
import Gridview from './Gridview';
import Listview from './Listview';
const ProductList = () => {
    const{filter_products,grid_view}=useShortcut2();
 
    if(grid_view){
      return <Gridview gridProducts={filter_products}/>
    }
    else{
      return <Listview listProducts={filter_products}/>
    }
}

export default ProductList