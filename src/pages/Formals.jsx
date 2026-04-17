import React from 'react'
import './Formals.css'
import Formalsdetail from '../products/Formalsdetail'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice'

const Formals = () => {
      const cartsProducts = useSelector((state) => state.cart.cartItems);
      const dispatch = useDispatch();

      const addCart = (formals) =>{
        dispatch(addToCart(formals));
      }

      const deleteCart = (formals) =>{
        dispatch(deleteFromCart(formals));
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
                      {Formalsdetail.map((formals)=>(

                           <div className="col">
				                    	<div className="card">
						                    <img src={formals.img} className="card-img-top"/>
				                    		 <div className="card-body text-center mb-3">
				             		        	<h5 className="card-title">{formals.fpname}</h5>
					                     		<h5>Rs:{formals.price}</h5>
						                      <p className="text-decoration-line-through">Rs:{formals.oldprice}</p>
						                        {
                                    cartsProducts.find(Formals=> Formals.id === formals.id)?(
                                    <button className ='cardbtn btn btn-warning' onClick={()=> {deleteCart(formals)}}>remove</button>):(
                                      <button className = 'cardbtn btn btn-warning' onClick={()=>{addCart(formals)}}>Add To Cart</button>
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

export default Formals