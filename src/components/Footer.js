import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram,FiYoutube } from 'react-icons/fi';

import Logo from '../assests/images/Lgo1.png';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
  <div className="app__footer-links">
    <div className="app__footer-links_contact">
      <h1 className="app__footer-headtext">Contact Us</h1>
      <p className="p__opensans">Kolkata,WB</p>
      <p className="p__opensans">+1 212-344-1230</p>
      <p className="p__opensans">Mail ID:</p>
      <p className="p__opensans">dryd@gmail.com</p>
    </div>

    <div className="app__footer-links_logo">
      <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
      <img src={Logo} alt="logo" style={{ width: '78px', height: '108px', margin: '0px 20px' }} />
      <div className="app__footer-links_icons">
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
        <FiYoutube/>
      </div>
    </div>

    <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
      <p className="p__opensans">Monday-Friday:</p>
      <p className="p__opensans">08:00 am - 12:00 am</p>
      <p className="p__opensans">Saturday-Sunday:</p>
      <p className="p__opensans">07:00 am - 11:00 pm</p>
    </div>
  </div>

  <div className="footer__copyright">
    <p className="p__opensans">2022 Kasrat. All Rights reserved.</p>
  </div>

</div>
);

export default Footer;