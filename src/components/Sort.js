import React from 'react'
import styled from 'styled-components';
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useShortcut2 } from '../context/filterContext';
const Sort = () => {
  const {grid_view,setGridView,setListView,filter_products,sorting}=useShortcut2()
  return (
    <Wrapper className='sort-section'>
      
      {/* grid or list layout buttons go here */}
      <div className='sorting-list--grid'>
        
        <button onClick={setGridView} className={grid_view?'active sort-btn':'sort-btn'}>
        <BsFillGridFill className='icon'/>
        </button>
        
        <button onClick={setListView} className={grid_view?'sort-btn':'active sort-btn'}>
        <BsList className='icon'/>
        </button>

      </div>

      {/* product stocks */}
      <div className='product-data'><p>{`${filter_products.length} PRODUCTS AVAILABLE`}</p></div>

      {/* sort by options here */}
      <div className='sort-selection'>
        <form action='#'>
          <label htmlFor='sort'></label>
          <select name='sort' id='sort' onClick={(e)=>sorting(e)}>
            <option>Sort by: </option>
            <option value='lowest'>Price(lowest)</option>
            <option value='highest'>Price(highest)</option>
            <option value='a-z'>Price(a-z)</option>
            <option value='z-a'>Price(z-a)</option>
          </select>
        </form>
      </div>

    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort