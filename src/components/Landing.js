import React from 'react';
import image_1 from '../assets/Images/img_banner_2.b08b3900.jpg';
import './Landing.css';
import photocont from '../assets/Images/expert-slinder2.1d1a16a9.webp';
import badge1 from '../assets/Images/Screenshot 2025-03-27 181406.png';
import badge3 from '../assets/Images/Screenshot 2025-03-27 181416.png';
import badge2 from '../assets/Images/Screenshot 2025-03-27 181411.png';
import logo1 from '../assets/Images/scroll1.png';
import logo2 from '../assets/Images/1.png';
import logo3 from '../assets/Images/2.png';
import logo4 from '../assets/Images/3.png';
import logo5 from '../assets/Images/4.png';
import logo6 from '../assets/Images/5.png';
import logo7 from '../assets/Images/6.png';
import logo8 from '../assets/Images/7.png';
import logo9 from '../assets/Images/8.png';
import logo10 from '../assets/Images/9.png';
import logo11 from '../assets/Images/10.png';
import logo12 from '../assets/Images/11.png';
import logo13 from '../assets/Images/12.png';
import logo14 from '../assets/Images/13.png';
import logo15 from '../assets/Images/14.png';
import Enterprises from '../assets/Entprise.png';
import Gropus from '../assets/Gropus.png';
import Hotels from '../assets/Hotel.png';
import Independent from '../assets/Indepent.png';
import Res from '../assets/Resturant.png';
import { FaDesktop, FaNetworkWired, FaDollarSign } from 'react-icons/fa';
import silentFeature from '../assets/Images/silentFeatures.png';
import { FaStar } from "react-icons/fa";
import capterra from '../assets/Images/Screenshot 2025-03-27 181341.png';
import hoteltech from '../assets/Images/Screenshot 2025-03-27 181348.png';
import wererated from '../assets/Images/Screenshot 2025-03-27 181354.png';
import getapp from '../assets/Images/Screenshot 2025-03-27 181400.png'

const Landing = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12,logo13,logo14,logo15];
  const categories = [
    { title: "Enterprises", img: Enterprises, link: "/enterprises" },
    { title: "Groups", img: Gropus, link: "/groups" },
    { title: "Hostels", img: Hotels, link: "/hostels" },
    { title: "Independent", img: Independent, link: "/independent" },
    { title: "Restaurants", img: Res, link: "/restaurants" },
  ];
  const reviews = [
    { img:capterra, rating: 4.7 },
    { img:hoteltech, rating: 4.5 },
    { img:wererated, rating: 4.7 },
    { img:getapp, rating: 4.7 },
  ];
  return (
    <div className="landing">
      <div className="landing-content">
        <div className="landing-text">
          <h2 className="tagline">Simple. Secure. Mobile.</h2>
          <h1 className="main-title">
            Next Generation<br />
            Hospitality Platform
          </h1>
          <p className="subtitle">A global system trusted by thousands.</p>
          <button className="demo-button">Request a Demo</button>
        </div>
        <div className="landing-image">
          <div className="decorative-elements">
            <div className="circle"></div>
            <div className="lines"></div>
          </div>
          <img 
            src={image_1} 
            alt="HotelKey Dashboard" 
            className="dashboard-img"
          />
      <p></p>
      <p></p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        </div>
      </div>
      <p></p>
      <p></p>
      <p></p>
      <div className="marquee-container">
      <div className="marquee">
        {/* Display logos twice to create an infinite loop */}
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} className="marquee-logo" />
        ))}
        {logos.map((logo, index) => (
          <img key={index + logos.length} src={logo} alt={`Logo ${index + 1}`} className="marquee-logo" />
        ))}
      </div>
      <div class="properties-cointainer">
        <h1>Made for properties of all shapes and sizes</h1>
        <br></br>
        <br></br>
      </div>
      <div className="grid-container">
        {categories.map((category, index) => (
          <div className="grid-item" key={index}>
            <img src={category.img} alt={category.title} className="image-container" />
            <p className="category-title">{category.title}</p>
          </div>
        ))}
      </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <section>
    <div className="features-container">
      <div className="image-section">
        <img
          src={silentFeature} // Replace with your image
          alt="Person holding tablet"
          className="feature-image"
        />
        <div className="decorative-shape"></div> {/* Left decorative shape */}
      </div>

      <div className="content-section">
        <h2 className="features-title">Salient Features</h2>
        <p className="features-intro">
          Let’s dig into some core features that might help you understand our Hospitality Management Platform.
        </p>

        <div className="feature-item">
          <FaDesktop className="feature-icon" />
          <div>
            <h3>State-of-the-Art Frontdesk System</h3>
            <ul>
              <li>Eco-friendly digital registration & electronic folios.</li>
              <li>Integrated card payments.</li>
              <li>ID and passport scanning.</li>
              <li>Flexible upgrade and up-sell module.</li>
            </ul>
          </div>
        </div>

        <div className="feature-item">
          <FaNetworkWired className="feature-icon" />
          <div>
            <h3>Next Generation Central Reservation System</h3>
            <ul>
              <li>Direct integration with Booking.com, Agoda, TripAdvisor, Google, and Expedia.</li>
              <li>Integrated with over 250+ OTAs and GDS through RateGain channel manager.</li>
              <li>Real-time inventory.</li>
              <li>Flexible distribution.</li>
            </ul>
          </div>
        </div>

        <div className="feature-item">
          <FaDollarSign className="feature-icon" />
          <div>
            <h3>Rate Management</h3>
            <ul>
              <li>Comprehensive Rate Calendar with statistics, alerts, and comparisons.</li>
              <li>Simple to use rate plan management.</li>
              <li>Restrictions & overbooking controls.</li>
              <li>Dynamic pricing with automated rate management.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </section>
    <section className='button-view'>
        <div>
          <button className='viewmore'>View More</button>
        </div>
    </section>
    <section className="reviews-section">
      <div className="reviews-container">
        <div className="left-section">
          <h2>What Experts Have to Say About Us</h2>

          <button className="user-review-btn">
            <FaStar className="star-icon" /> User Review
          </button>

          <div className="review-cards">
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          {/* Displaying the image */}
          <img src={review.img} alt={`Review Logo ${index + 1}`} className="review-logo" />
          <div className="rating-container">
            <div className="stars">
              {Array(Math.floor(review.rating))
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="rating-star" />
                ))}
            </div>
            <p className="rating-score">{review.rating}/5</p>
          </div>
        </div>
      ))}
    </div>

          <div className="badges-container">
            <img src={badge1} alt="Badge 1" />
            <img src={badge2} alt="Badge 2" />
            <img src={badge3} alt="Badge 3" />
          </div>
        </div>

        <div className="right-section">
          <div className="phone-mockup">
            <img
              src={photocont}
              alt="Phone Mockup"
              className="phone-image"
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Landing; 