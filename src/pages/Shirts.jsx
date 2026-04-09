import React, { useEffect, useState } from 'react'
import './Shirts.css'
import Shirtsdetail from '../products/Shirtsdetail.jsx'

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice.jsx';

const Shirts = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
      
  const addCart = (shirt)=>{
    dispatch(addToCart(shirt));
  }

  const deleteCart = (shirt) =>{
    dispatch(deleteFromCart(shirt));
  }
 const [cartCount, setCount] = useState(0);
   const countIcon = () =>{
    setCount(cartCount +1);
   };

   const [shirts, setShirts] = useState([])
   useEffect(()=>{
    fetch(`http://localhost:5070/shirts`)
    .then((res)=> res.json())
    .then((data)=>{
      if(Array.isArray(data)){
        setShirts(data);
      }
    })
    .catch((Error) => console.log(Error));
   })



  return (
    <>
        <div id='products'>
             {/* <div className="headline container">
              <h1> <strong>Casual Shirts For Men</strong></h1>
             </div>
              <div className="container-fluid me-5">
                   <h4 className="text-center"><i>SHIRTS</i></h4>
                     <div className="row  mb-5  row-cols-lg-4 row-cols-md-2 row-cols-sm-2  row-cols-2">
                      {Shirtsdetail.map((shirt)=>(

                           <div className="col">
				                    	<div className="card">
						                    <img src={shirt.img} className="card-img-top"/>
				                    		 <div className="card-body text-center mb-3">
				             		        	<h5 className="card-title">{shirt.Sname}</h5>
					                     		<h5>Rs:{shirt.Price}</h5>
						                      <p className="text-decoration-line-through">Rs:{shirt.oldPrice}</p>
						                      {
                                    cartProducts.find(shirts=> shirts.id === shirt.id)?(
                                    <button className ='cardbtn btn-warning' onClick={()=> {deleteCart(shirt)}}>remove</button>):(
                                      <button className = 'cardbtn btn-warning' onClick={()=>{addCart(shirt); countIcon()}}>Add To Cart</button>
                                    )

                                  }
					                      	</div>
					                      </div>
			                      </div>
                         ))}
                     </div>
              </div> */}
               <div className="container-fluid me-5">
                   <h4 className="text-center"><i>SHIRTS</i></h4>
                     <div className="row  mb-5  row-cols-lg-4 row-cols-md-2 row-cols-sm-2  row-cols-2">
                      {shirts.map((shirt)=>(

                           <div className="col">
				                    	<div className="card" key={shirt._id}>
						                    <img src={shirt.img} className="card-img-top"/>
				                    		 <div className="card-body text-center mb-3">
				             		        	<h5 className="card-title">{shirt.sname}</h5>
					                     		<h5>Rs:{shirt.price}</h5>
						                      <p className="text-decoration-line-through">Rs:{shirt.oldprice}</p>
						                      {
                                    cartProducts.find(shirtses=> shirtses._id === shirt._id)?(
                                    <button className ='cardbtn btn-warning' onClick={()=> {deleteCart(shirt)}}>remove</button>):(
                                      <button className = 'cardbtn btn-warning' onClick={()=>{addCart(shirt); countIcon()}}>Add To Cart</button>
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

export default  Shirts