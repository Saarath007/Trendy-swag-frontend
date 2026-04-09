import React from "react";
import "./Carousel.css";
import car01 from '../assets/img04.jpg';
import car02 from '../assets/img02.jpg';
import car03 from '../assets/img03.jpg';

const Carousel = () => {
  return (
    <div>
      <div id="carousel-page">
            <div id="carouselExampleInterval" class="carousel slide position-relative" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src={car01} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={car02} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={car03} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="prev-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="next-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg>
</span>
    {/* <span class="visually-hidden">Next</span> */}
  </button>
</div>
       
      </div>
    </div>
  );
};

export default Carousel;
