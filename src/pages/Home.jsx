
import React from 'react'
import './Home.css'
import CAs01 from '../assets/CAs01.png'
import CAt02 from '../assets/CAt02.png'
import CAj03 from '../assets/CAj03.png'
import CAfp04 from '../assets/CAfp04.png'
import dare from '../assets/dare01.png';
import Carousel from './Carousel';
import { IoBagHandle } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div id='home'>
            <h1 className=" heading text-center fw-bold text-break">TRENDY COLLECTIONS</h1>
		        <p className="pt-4">Enter If You Dare..!</p>
            {/* <img src={dare} alt="" className='bat'/> */}

        </div>  
            <div className='catbag'>
              <h1><strong>Categories To Bag <IoBagHandle /></strong></h1>
            </div>
<div class="container-fluid">
    <div class="row bagbox g-4 row-cols-lg-4 row-cols-2">
            <div class="col">
                <Link to = "/shirts">
                    <img src={CAs01} alt="Category 1" class="img-fluid"/>
                </Link>
            </div>
            <div class="col">
                <Link to = "/tshirts">
                    <img src={CAt02} alt="Category 2" class="img-fluid"/>
                </Link>
    
            </div>
            <div class="col">
                <Link to = "/jeans">
                    <img src={CAj03} alt="Category 3" class="img-fluid"/>
                </Link>
    
            </div>
            <div class="col">
                <Link to = "/formals">
                    <img src={CAfp04} alt="Category 3" class="img-fluid"/>
                </Link>
            </div>
        </div>
    
  </div>
<Carousel/>



    </div>
  )
}

export default Home