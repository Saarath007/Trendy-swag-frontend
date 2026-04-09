import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, updateQuantity, } from '../store/cartslice/Cartslice';

const Cart = () => {

    const cartProducts =useSelector((state)=> state.cart.cartItems);
    const dispatch = useDispatch();

    const deleteCart = (item) =>{
        dispatch(deleteFromCart(item))
    }
    const incrementCart =(id,quantity) =>{
        dispatch(updateQuantity({id, quantity: quantity +1}))
    }

    const decrementCart = (id,quantity) =>{
        if(quantity > 1){
             dispatch(updateQuantity({id,quantity:quantity -1}))
        }
    }

    let cartCount =0;

  const countIcon =() =>{
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
  }
  return (
    <>
      

           <div className="row  mb-5  row-cols-lg-4 row-cols-md-2 row-cols-sm-2  row-cols-2">
                      {cartProducts.map((item)=>(

                           <div className="col">
				                    	<div className="card-cart">
						                    <img src={item.img} className="card-img-top"/>
				                    		 <div className="card-body text-center mb-3">
				             		        	<h5 className="card-title">{item.Sname}</h5>
				             		        	<h5 className="card-title">{item.TSname}</h5>
				             		        	<h5 className="card-title">{item.Jname}</h5>
				             		        	<h5 className="card-title">{item.FPname}</h5>
					                     		<h5>Rs:{item.Price}</h5>
						                      <p className="text-decoration-line-through">Rs:{item.oldPrice}</p>
					                      	</div>
                                             <button onClick={()=>{decrementCart(item.id, item.quantity)}}>-</button>
                                                {item.quantity}
                                                <button onClick={()=>{incrementCart(item.id, item.quantity)}}>+</button>
					                      </div>
                                         <div className="details2">
                                            <button className='btn btn-danger' onClick={() =>{deleteCart(item)}}>Delete</button>
                                        </div>
			                      </div>
                              
						
                         ))}
                     </div>

        
                            {/* <div className="details">
                                  {cartProducts.map((item)=> (
                                    <div className="card-id" key={item.id}>
                                        <div className="details1">
                                            <img src={item.img} alt="" />
                                            <div className="card-body">
                                                <div className="card-title">{item.Sname}</div>
                                                <div className="card-title">{item.TSname}</div>
                                                <div className="card-title">{item.Jname}</div>
                                                <div className="card-title">{item.FPname}</div>
                                                <div className="card-text">{item.oldPrice}</div>
                                                <div className="card-price">{item.Price}</div>
                                                <button onClick={()=>{decrementCart(item.id, item.quantity)}}>-</button>
                                                {item.quantity}
                                                <button onClick={()=>{incrementCart(item.id, item.quantity)}}>+</button>
                                            </div>
                                        </div>
                                        <div className="details2">
                                            <button className='btn btn-danger' onClick={() =>{deleteCart(item)}}>Delete</button>
                                        </div>
                                                

                                    </div>

                                  )
                                )}
                            </div> */}
                        
             


    </>
  )
}

export default Cart