// import React from 'react'

// import {toast,ToastContainer} from 'react-toastify';

// const Upload = () => {
    
//     const handleSubmit = (event) => {
//         event.preventDefault();
//      const form = event.target;
//      const sname = form.sname.value;
//      const price = form.price.value;
//      const oldprice = form.oldprice.value;
//      const img = form.img.value;
//      const quantity = 1;
       
       

//         if (sname==="" || price==="" || oldprice==="" || img==="") {
//             toast.warn("Please fill in all fields");
//         }
//         const sample = { sname,price,oldprice,img,quantity};
//         console.log(sample);
//         fetch('http://localhost:5070/creatshirts',{
//             method: 'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body: JSON.stringify(sample)

//         })
//         .then((res) => res.json())
//         .then((data) => {
//             toast.success('Product uploaded successfully');
//             form.reset();
//             window.location.href = "/update";
//         })
//     }
//   return (
//     <div><ToastContainer/>
//         <form onSubmit={handleSubmit}>

//         <div className="upload0">
//             <label value="sname" >Sname</label>
//             <input type="text" />
//         </div>
//         <div className="upload1">
//             <label value="price" >PRICE</label>
//             <input type="text" />
//         </div>
//         <div className="upload2">
//             <label value="oldprice" >OLD PRICE</label>
//             <input type="text" />
//         </div>
//         <div className="upload3">
//             <label value="img" >IMAGE</label>
//             <input type="text" />
//         </div>
//         <div className="upload4">
//             <button type='submit' className='btn btn-primary'>UPLOAD</button>
//         </div>
//         </form>
//     </div>
//   )
// }

// export default Upload





import React from 'react'
import { toast, ToastContainer } from 'react-toastify';



const Upload = () => {
      const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const sname = form.sname.value;
        const price= form.price.value;
        const oldprice=form.oldprice.value;
        const img=form.img.value;
        const quantity = 1;

        if(sname==="" ||price==="" || oldprice==="" || img==="" || quantity==="")
            {
               toast.warn("fill the required fields") 
            }
        
            const foodObj = {sname,img,price,oldprice,quantity};
            console.log(foodObj);

            fetch('http://localhost:5070/creatshirts',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(foodObj)
            }).then((res)=>res.json())
            .then((data)=> {
                toast.success("data added successfully");
                form.reset();
                window.location.href = '/update';
            })
            

    }
  return (
    <div>
         
        <ToastContainer/>
    
     <div class="card upload6">
         <div class="card-body upload5">
     <form onSubmit={handleSubmit}>
            <h2>UPLOAD</h2>
            <div class="upload0">
                <label value="sname"><b>TITLE</b></label>
                <input type="text" name="sname" className='ms-3'/>
            </div>
            < div class="upload1">
                <label value="price"><b>PRICE</b></label>
                <input type='img' name="price" className='ms-3'/>
                </div> 
                <div class="upload2">
                <label value="oldprice"><b>OLD PRICE</b></label>
                <input type='text' name="oldprice" className='ms-3'/>
                </div>
                <div class="upload3">
                <label value="img"><b>IMG</b></label>
                <input type='text' name='img' className='ms-3'/> 
                </div>
                <div class="upload4">
                <label value="quantity"><b>QUANTITY</b></label>
                <input type='numbers' name='quantity' className='ms-3'/>
            </div>
            <div class="upload7">
                <button type="submit" class="btn btn-primary">upload</button>
                
            </div>
        </form>
        </div>
        </div>
    </div>
  

  )
}

export default Upload