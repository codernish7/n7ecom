import React from 'react'
import { NavLink } from 'react-router-dom'
import FeatureCost from './FeatureCost'

const Product = (items) => {
    console.log(items)
    const {id,name,price,category,image}=items
  return (
    <NavLink to = {`/singleProduct/${id}`}>
       <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FeatureCost price={price}/>}</p>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default Product