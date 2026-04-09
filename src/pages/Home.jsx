
import React from 'react'
import './Home.css'
import CAs from '../assets/CAs.png';
import CAt from '../assets/CAt.png';
import CAj from '../assets/CAj.png';
import CAfp from '../assets/CAf.png';
import dare from '../assets/dare01.png';


const Home = () => {
  return (
    <div>
        <div id='home'>
            <h1 className=" heading text-center fw-bold text-break">TRENDY COLLECTIONS</h1>
		        <p className="pt-4">Enter If You Dare..!</p>
            {/* <img src={dare} alt="" className='bat'/> */}

        </div>  
            <div className='catbag'>
              <h1><strong>Categories To Bag</strong></h1>
            </div>
<div class="container-fluid">
    <div class="row bagbox g-4 row-cols-lg-4 row-cols-2">
            <div class="col">
                <a href="./Shirts.html">
                    <img src={CAs} alt="Category 1" class="img-fluid"/>
                </a>
            </div>
            <div class="col">
                <a href="./T-shirts.html">
                    <img src={CAt} alt="Category 2" class="img-fluid"/>
                </a>
    
            </div>
            <div class="col">
                <a href="./Pants.html">
                    <img src={CAj} alt="Category 3" class="img-fluid"/>
                </a>
    
            </div>
            <div class="col">
                <a href="./Formal.html">
                    <img src={CAfp} alt="Category 3" class="img-fluid"/>
                </a>
            </div>
        </div>
    
  </div>




    </div>
  )
}

export default Home