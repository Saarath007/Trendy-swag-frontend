import React, { useEffect, useState } from 'react'
import { data, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Update = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5070/shirts')
        .then((res) => res.json())
        .then((data) => 
            setProducts(data))
        },[])

     const DeleteItem =(id) =>{
        fetch(`http://localhost:5070/removeshirts/${id}`,{
            method: 'DELETE'
        })
        .then((res) => res.json())
        .then((data) =>{
            toast.success('Product deleted successfully');
            setProducts((preProducts)=> preProducts.filter((Item)=> Item._id !== id));
        }
    
    )}
        
        
  return (
    <div>
        <div className="card-table">
            <div className="card-body">
                <table>
                    <tr>
                        <th>Sname</th>
                        <th>price</th>
                        <th>oldprice</th>
                        <th>img</th>
                        <th>quantity</th>
                    </tr>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product.sname}</td>
                            <td>{product.price}</td>
                            <td>{product.oldprice}</td>
                            <td><img src={product.img} alt={product.sname} /></td>
                            <td>{product.quantity}</td>
                            <Link to ={`/edit/${product._id}`}> <button className='btn btn-primary me-3'>Edit</button></Link>
                               <button className='btn btn-primary' onClick={() => DeleteItem(product._id)}>Delete</button> 
                        </tr>
                    ))}
                </table>
            </div>
        </div>

    </div>
  )
}


export default Update