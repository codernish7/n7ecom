const reducer2=(state,action)=>{
    switch (action.type) {
        case 'load_filter_data':
            return {

                ...state,
                filter_products:action.payload,
                all_products:action.payload
            }
        
        case 'grid_view':
            return {
                ...state,
                grid_view:true
            }

        case 'list_view':
            return {
                ...state,
                grid_view:false
            }

        case 'sort_by_price':
           
            return {
                ...state,
                sortingValue:action.payload
            }

        case 'sort_type':
            const{filter_products,sortingValue}=state
            let tempArr=[...filter_products]
            let sortedItems;
            const sortBy=(a,b)=>{
            switch (sortingValue) {
                
              case 'lowest':
                return a.price - b.price;
                
              case 'highest':
                return b.price - a.price;
                
              case 'a-z':
                return a.name.localeCompare(b.name);
                
              case 'z-a':
                return b.name.localeCompare(a.name);
                
              default:
                return 0
            }
            }
                sortedItems=tempArr.sort(sortBy)
            return {
                ...state,
                filter_products:sortedItems
            }
        case 'search':
            
            const{name,value}=action.payload
            
            return {
                ...state,
                searchNfilter:{...state.searchNfilter,[name]:value},
                
            }
        case 'searchfilter':
            let copy= [...state.all_products]
            if(state.searchNfilter.searchbar){
              copy=copy.filter((items)=>items.name.toLowerCase().includes(state.searchNfilter.searchbar))  
            }
            if(state.searchNfilter.categoryFilter && state.searchNfilter.categoryFilter !== 'All'){
                copy=copy.filter((items)=>items.category===state.searchNfilter.categoryFilter)
            }
            if(state.searchNfilter.companyFilter && state.searchNfilter.companyFilter !=='All'){
                copy=copy.filter((items)=>items.company===state.searchNfilter.companyFilter)
            }
       
            return {
                ...state,
                filter_products:copy
            }
        case 'reset_filters':
            return {
                ...state,
                searchNfilter:{
                    ...state.searchNfilter,
                    searchbar:'',
                  categoryFilter:'All',
                  companyFilter:'All'
                }
            }
        
        default:
            return state;
    }
}

export default reducer2