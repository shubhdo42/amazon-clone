import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
function Checkout() {

    const[{basket},dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Sep_2021/JUPITER_21/Jupiter_GW-Editorial_1150x323._CB641713129_.jpg"
                alt=""
                />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket

                    </h2>
                    {basket.map(item=>(
                        <CheckoutProduct
                        id ={item.id}
                        title ={item.title}
                        rating={item.rating}
                        image={item.image}
                        price={item.price}
                        
                        />
                    ))}

                </div>

            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
            
        </div>
    )
}

export default Checkout 
