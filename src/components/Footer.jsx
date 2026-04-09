import React from 'react'
import './Footer.css'
import footer from '../assets/footer.png'

const Footer = () => {
  return (
    <div>
             <footer>
        <div className="footer container-fluid">
            <div className="footer-content container-fluid">
                <img src={footer} alt="footer"/>
            </div>
        </div>
    </footer>
      
    </div>
  )
}

export default Footer