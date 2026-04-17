import React, { useState } from 'react'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import footer from '../assets/footer.png'


const FooterSection = ({ title, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-3">
      {/* Title */}
      <div
        className="d-flex justify-content-between align-items-center"
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer" }}
      >
        <h6 className="fw-bold mb-0">{title}</h6>
        <span className="d-md-none">{open ? "-" : "+"}</span>
      </div>

      {/* Links */}
      <ul className={`list-unstyled mt-2 ${open ? "d-block" : "d-none"} d-md-block`}>
        {links.map((link, index) => (
          <li key={index} className="mb-1 text-muted footer-link">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};


const Footer = () => {
  return (
    <div>
      <footer className="bg-warning-subtle pt-5 pb-3">
      <div className="container">
        
        <div className="row">

          {/* Section 1 */}
          <div className="col-12 col-md-3">
            <FooterSection
              title="ONLINE SHOPPING"
              links={["Men", "Women", "Kids", "Home & Living", "Beauty", "Gift Cards"]}
            />
          </div>

          {/* Section 2 */}
          <div className="col-12 col-md-3">
            <FooterSection
              title="CUSTOMER POLICIES"
              links={["Contact Us", "FAQ", "Returns", "Shipping", "Cancellation"]}
            />
          </div>

          {/* Section 3 */}
          <div className="col-12 col-md-3">
            <FooterSection
              title="EXPERIENCE APP"
              links={["Android App", "iOS App"]}
            />
          </div>

          {/* Section 4 - Social */}
          <div className="col-12 col-md-3">
            <h6 className="fw-bold">KEEP IN TOUCH</h6>
            <div className="d-flex gap-3 mt-2 fs-5">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-youtube"></i>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center mt-4 pt-3 border-top text-muted small">
          © {new Date().getFullYear()} Trendy Swag. All rights reserved.
        </div>

      </div>
    </footer>
    </div>
  )
}

export default Footer