import React from 'react'
import './Tshirt.css'
import Tshirtsdetail from '../products/Tshirtsdetail'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice'

const Tshirt = () => {
            const cartsProducts = useSelector((state) => state.cart.cartItems);
            const dispatch = useDispatch();

            const addCart = (tshirt) =>{
              dispatch(addToCart(tshirt));
            }

            const deleteCart = (tshirt) =>{
              dispatch(deleteFromCart(tshirt));
            }

  return (
    <>
        <div id='products'>
             <div className="headline">
              <h1> <strong>Trendy T-shirts & Hoodies For Men</strong></h1>
             </div>
              <div className="container-fluid me-5">
                   <h4 className="text-center"><i>T-SHIRTS</i></h4>
                     <div className="row  mb-5  row-cols-lg-4 row-cols-md-2 row-cols-sm-2  row-cols-2">
                      {Tshirtsdetail.map((tshirt)=>(

                           <div className="col">
				                    	<div className="card">
						                    <img src={tshirt.img} className="card-img-top"/>
				                    		 <div className="card-body text-center mb-3">
				             		        	<h5 className="card-title">{tshirt.tsname}</h5>
					                     		<h5>Rs:{tshirt.price}</h5>
						                      <p className="text-decoration-line-through">Rs:{tshirt.oldprice}</p>
						                      {
                                    cartsProducts.find(Tshirts=> Tshirts.id === tshirt.id)?(
                                    <button className ='cardbtn btn btn-warning' onClick={()=> {deleteCart(tshirt)}}>remove</button>):(
                                      <button className = 'cardbtn btn btn-warning' onClick={()=>{addCart(tshirt)}}>Add To Cart</button>
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

export default Tshirt