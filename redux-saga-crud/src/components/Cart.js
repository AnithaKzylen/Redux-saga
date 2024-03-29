import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Cart = () => {

    const cartData = useSelector((state)=>state.ProductReducer.cart);

    const amount = cartData.length && cartData.map(item=>item.price).reduce((prev,next)=>prev+next)
  return (
    <>
    <Link to= "/">Go to Products page</Link>    
    <h1>Cart Page</h1>
    <div className="cart-page-container">
        <table>
            <tr>
                <td>Name</td>
                <td>color</td>
                <td>price</td>
                <td>Category</td>
                </tr>
                {
                    cartData.map((item)=><tr key={item.key}>
                        <td>{item.name}</td>
                        <td>{item.color}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                    </tr>)
                }
        </table>
        <div className="price-details">
            <div className="adjust-price"><span>Amount</span><span>{amount}</span></div>
            <div className="adjust-price"><span>Discount</span><span>{amount/10}</span></div>
            <div className="adjust-price"><span>Tax</span><span>0</span></div>
            <div className="adjust-price"><span>Total</span><span>{amount-(amount/10)}</span></div>
        </div>
    </div>
    </>
  )
}
