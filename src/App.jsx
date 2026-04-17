import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Carousel from './pages/Carousel'
import Shirts from './pages/Shirts'
import Tshirt from './pages/Tshirt'
import Jeans from './pages/Jeans'
import Formals from './pages/Formals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Upload from './admin/Upload'
import Update from './admin/Update'
import Edit from './admin/Edit'
import Login from './components/Login'
import Contact from './pages/Contact'
import Header from './components/Header'



function App() {
  

  return (
    <>

   {/* <Login/> */}

    
   <BrowserRouter>
   <Navbar/>
   <Header/>
   <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/about" element={<About/>}/>
      <Route path = "/shirts" element={<Shirts/>}/>
      <Route path = "/tshirts" element={<Tshirt/>}/>
      <Route path = "/jeans" element={<Jeans/>}/>
      <Route path = "/formals" element={<Formals/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path = "/cart" element ={<Cart/>}/>
      <Route path='/upload' element = {<Upload/>}/>
      <Route path='/update' element = {<Update/>}/>
      <Route path='/edit/:id' element = {<Edit/>} loader={({params})=> fetch(`http://localhost:5070/allproducts/${params.id}`)} />
   </Routes>
   <Footer/>
   </BrowserRouter>
    












    


  

    
    </>
  )
}

export default App
