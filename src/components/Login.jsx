
import React, { useState } from 'react'

const Login = () => {
    const [form,setForm] = useState({
    username:"",
    email:"",
    password:"",
})
const [error,setError] = useState({})
const validation = () =>{
    const newError = ({})

    if(!form.username) newError.username = 'invalid username';
    if(!form.email) newError.email = 'invalid email';
    else
        if(!/\S+@\S+\.\S+/.test(form.email)) newError.email = 'missing error';
        if(!form.password) newError.password = 'invalid password';
        else{
            if(form.password.length <6) newError.password = 'must be at least 6 characters';
            if(!/[a-z]/.test(form.password)) newError.password = 'must contain at least one lowercase letter';
            if(!/[A-Z]/.test(form.password)) newError.password = 'must contain at least one uppercase letter';
            if(!/\d/.test(form.password)) newError.password = 'must contain at least one digit';
            if(!/[!@#$%^&*]/.test(form.password)) newError.password = 'must contain at least one special character';
        }
        return newError;
    }
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setForm({
            ...form,
            [name]:value,
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const validationerror = validation();
        if(Object.keys(validationerror).length === 0)
        {
           console.log('form valid',form);
           window.location.href = '/home';
           setForm({
            username:'',
            email:'',
            password:'',
           })
           setError({});
        }
        else{
            setError(validation());
        }
        }
    
  return (
    <div>
        
        <form onSubmit={handleSubmit}>
      <div className="form1">
         <label>USERNAME</label>
         <input type='text' name='username' placeholder='username' value={form.username} onChange={handleChange} className='ms-3' />
         {error.username && <p>{error.username}</p>}
      </div>
      <div className="form2">
         <label >EMAIL</label>
         <input type="email" name='email' placeholder='email' value={form.email} onChange={handleChange} className='ms-3'/>
         {error.email && <p>{error.email}</p>}
      </div>
      <div className="form3">
         <label >PASSWORD</label>
        <input type="password" name='password' placeholder='password' value={form.password} onChange={handleChange} className='ms-3 '/>
         {error.password && <p>{error.password}</p>}
     </div>
<button className='btn btn-primary'>submit</button>
</form> 
    </div>
  )
}

export default Login