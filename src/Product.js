import React from 'react'
import "./Product.css"
function Product({title,image,price,rating}) {
    return (
        <div>
            <div className="product">
                <div className="product__info">
                    <p>
                      {title}
                    </p>
                    <p className ="product__price">
                        <small>Rs</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
                       
                    </div>
                </div>
                <img src={image}>

                </img>
                <button>Add To Basket</button>

            </div>
        </div>
    )
}

export default Product
