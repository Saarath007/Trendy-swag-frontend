import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const Edit = () => {

    const {id}=useParams();
    const [product, setProduct] = useState({
        sname: '',
        price: '',
        oldprice: '',
        img: '',
        quantity: ''
    });

    useEffect(() =>{
        fetch(`http://localhost:5070/shirtsitem/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    });
    const handleUpdate = (event) =>{
        event.preventDefault();
        const form = event.target;
        const sname = form.sname.value;
        const price= form.price.value;
        const oldprice=form.oldprice.value;
        const img=form.img.value;
        const quantity = form.quantity.value;

        const updatedProduct = {sname, price, oldprice, img, quantity};
        console.log(updatedProduct);
        fetch(`http://localhost:5070/allproducts/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct),
        })
        .then((res) => res.json())
        .then((data) => {
            toast.success('Product updated successfully');
            window.location.href = '/update';
        });


    }

  return (
    <div>
        <form onSubmit={handleUpdate}>
           <div>
        <div className="upload0">
            <label value="sname">TITLE</label>
            <input type="text" name='sname' defaultValue={product.sname} />
        </div>
        <div className="upload1">
            <label value="img">IMAGE</label>
            <input type="text" name='img' defaultValue={product.img} />
        </div>
        <div className="upload2">
            <label value="price">PRICE</label>
            <input type="text" name='price' defaultValue={product.price} />
        </div>
        <div className="upload3">
            <label value="oldprice">OLD PRICE</label>
            <input type="text" name='oldprice' defaultValue={product.oldprice} />
        </div>
        <div className="upload4">
            <label value="quantity">QUANTITY</label>
            <input type="text" name='quantity' defaultValue={product.quantity} />
        </div>
        <div className="upload7">
            <button type='submit' className='btn btn-primary'>UPATE</button>
        </div>
    </div>
</form>
    </div>
  )
}

export default Edit