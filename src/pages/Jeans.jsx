import React from 'react'
import './Jeans.css'
import Jeansdetail from '../products/Jeansdetail'
import {  useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice'

const Jeans = () => {
       const cartsProducts = useSelector((state) => state.cart.cartItems);
       const dispatch = useDispatch();

       const addCart = (jeans)=>{
        dispatch((addToCart(jeans)));
       }

       const deleteCart = (jeans) =>{
        dispatch(deleteFromCart(jeans));
       }

  return (
    <>
          <div id='products'>
             <div className="headline">
              <h1> <strong>Jeans Pant For Men</strong></h1>
             </div>
              <div className="container-fluid me-5">
                   <h4 className="text-center"><i>JEANS</i></h4>
                     <div className="row  mb-5  row-cols-lg-4 row-cols-md-2 row-cols-sm-2  row-cols-2">
                      {Jeansdetail.map((jeans)=>(

                           <div className="col">
				                    	<div className="card">
						                    <img src={jeans.img} className="card-img-top"/>
				                    		 <div className="card-body text-center mb-3">
				             		        	<h5 className="card-title">{jeans.jname}</h5>
					                     		<h5>Rs:{jeans.price}</h5>
						                      <p className="text-decoration-line-through">Rs:{jeans.oldprice}</p>
						                      {
                                    cartsProducts.find(Jeans=> Jeans.id === jeans.id)?(
                                    <button className ='cardbtn btn btn-warning' onClick={()=> {deleteCart(jeans)}}>remove</button>):(
                                      <button className = 'cardbtn btn btn-warning' onClick={()=>{addCart(jeans)}}>Add To Cart</button>
                                    )

                                  }
					                      	</div>
					                      </div>
			                      </div>
                         ))}
                     </div>
              </div>
        </div>

    </>
  )
}

export default Jeans