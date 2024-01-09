// Advertisement.js
import React, { useState } from 'react';
import './Advertisement.css'; // Import your CSS file
import imageSrc from './img.jpg';
import './ImageTable.css';
import image1 from './images/img2.jpeg';
import image2 from './images/img3.jpeg';
import image3 from './images/img4.jpeg';
import image4 from './images/img5.jpeg';
import image5 from './images/img6.jpeg';
import image6 from './images/img7.jpeg';



const Advertisement = () => {
    const [showMessageModal, setShowMessageModal] = useState(false);

    const toggleMessageModal = () => {
        setShowMessageModal(!showMessageModal);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className="advertisement">
            {showMessageModal && (
                <div className="messageModal">
                    <div className="messageContent">
                        {/* Your message form or content for message us */}
                        <button className="closeButton" onClick={toggleMessageModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div className="messageButton" onClick={toggleMessageModal}>
                Message Us
            </div>
           <div className="advertisementContent">
                <div className="textSection">
                    <h2>Invoices Made Simple: Fast, Accurate, and Secure!</h2>
                    <i><p>Get your invoices on whatsapp to work smartly in this new generation.</p></i>
                    {/* Add more content for your advertisement */}
                    <br>
                    </br>
                    <p>Experience the ease of managing your invoices directly through WhatsApp! At our service, we understand the importance of convenience and efficiency in handling your billing needs. With our streamlined system, you can now effortlessly generate, send, and track your invoices—all from the comfort of your WhatsApp chat. Simplify your business transactions and stay connected with us on WhatsApp for swift, hassle-free invoicing at your fingertips.
                    </p>
                    <button className="getStartedButton">Get Started</button>
                </div>
                <div className="imageSection">
                    <img src={imageSrc} alt="Offer" />
                </div>

            </div>
            <br></br>
            
            <div className="imageTable">
                    <h3>Benefits of Using WhatsApp Invoice Generator</h3>
                    <div className="row">
                        <div className="cell">
                            <img src={image1} alt="Image 1" />
                            <div className="text-box">
                            <p>Digitization of your invoices</p>
                        </div>
                        </div>
                        <div className="cell">
                            <img src={image2} alt="Image 2" />
                            <div className="text-box">
                            <p>Experience cost-effective invoicing</p>
                        </div>
                        </div>
                        <div className="cell">
                            <img src={image3} alt="Image 3" />
                            <div className="text-box">
                            <p>Go green with our paperless billing!</p>
                        </div>
                        </div>
                        <div className="cell">
                            <img src={image4} alt="Image 4" />
                            <div className="text-box">
                            <p>Unlock time-saving efficiency</p>
                        </div>
                        </div>
                        <div className="cell">
                            <img src={image5} alt="Image 5" />
                            <div className="text-box">
                            <p>Enhanced Security</p>
                        </div>
                        </div>
                        <div className="cell">
                            <img src={image6} alt="Image 6" />
                            <div className="text-box">
                            <p>Efficiency in record management</p>
                        </div>
                        </div>
                    </div>


                    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>Have questions? We're here to help!</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" placeholder="Your message"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
                </div>
        </div>
    );
}

export default Advertisement;