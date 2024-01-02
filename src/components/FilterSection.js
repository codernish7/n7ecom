import React from 'react'
import styled from 'styled-components';
import { useShortcut2 } from '../context/filterContext';
import {Button} from '../styles/Button'
const FilterSection = () => {
  const{handleSearch,searchNfilter:{searchbar},all_products,clearFilters}=useShortcut2()

  //getting categories and removing duplicates
  const uniqueCat=(x,y)=>{
    let newCat= x.map((items)=>items[y])
    newCat=['All',...new Set(newCat)]
    console.log(newCat)
    return newCat
  }

  //need categories to filter items, so first making a common function
  const getUniqueCategory=uniqueCat(all_products,'category')
  const getUniqueCompany=uniqueCat(all_products,'company')
  return <Wrapper>
     <div className='filter-search'>
      <form onSubmit={(e)=>e.preventDefault(e)}>
        <input placeholder='SEARCH' name='searchbar' value={searchbar} onChange={(e)=>handleSearch(e)} />
      </form>
    </div>
    <div className='filter-category'>
      <h3>Category</h3>
      <div>
      {getUniqueCategory.map((items,index)=><button
                          key={index} 
                          name='categoryFilter' 
                          type='button'
                          value={items} 
                          onClick={(e)=>handleSearch(e)}>
                          {items}
                          </button>)}
      </div>
    </div>
    <div className='className=filter-company'>
      <form action='#'>
        <select className='filter-company--select' name='companyFilter' onClick={(e)=>handleSearch(e)} >
          {getUniqueCompany.map((items,index)=><option name='company' key={index} value={items}>{items}</option>)}
        </select>

      </form>

    </div>
    <div className='filter-clear'>
      <Button className='btn' onClick={clearFilters}>
        CLEAR FILTERS
      </Button>
    </div>
  </Wrapper>
}
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection