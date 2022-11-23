import './App.css';
import './navbar.css';
import './navbar2.css';
import './hero.css';
import './aboutUs.css';
import './services.css';
import './gallery.css';
import './doctors.css';
import './footer.css';

import logo from './images/Logo.png';
import hero from './images/Hero2.jpg';
import Hamburger from 'hamburger-react';

import serviceIcon1 from './images/service icons/i1.png';
import serviceIcon2 from './images/service icons/i2.png';
import serviceIcon3 from './images/service icons/i3.png';
import serviceIcon4 from './images/service icons/i4.png';
import serviceIcon5 from './images/service icons/i6.png';
import serviceIcon6 from './images/service icons/i7.png';
import serviceIcon7 from './images/service icons/i8.png';

import g1 from './images/gallery/g1.jpg';
import g2 from './images/gallery/g2.jpg';
import g3 from './images/gallery/g3.jpg';
import g4 from './images/gallery/g4.jpg';

import d1 from './images/Doctors/d1.jpg';
import d2 from './images/Doctors/d2.png';
import d3 from './images/Doctors/d3.jpg';
import d4 from './images/Doctors/d4.jpg';
import d5 from './images/Doctors/d5.jpg';
import d6 from './images/Doctors/d6.jpg';

function Service({sIcon, sHeading, sDesc}){
  return(
    <div className='serviceComponent'>
      <img className='serviceIcon' src={sIcon}></img>
      <div className='serviceHeading'>{sHeading}</div>
      <div className='serviceDesc'>{sDesc}</div>
    </div>
  )
}

function Doctor({dPic, dName, dDesc}){
  return(
    <div className='doctorComponent'>
      <img className='doctorPic' src={dPic}></img>
      <div className='doctorName'>{dName}</div>
      <div className='doctorDesc'>{dDesc}</div>
    </div>
  )
}

function App() {
  return (
    <div className="App">

      {/* <div className='navbar'>
        <a href="#"><img className='logo' src={logo}/></a>
        <div className='navlinkContainer'>
          <a href="#aboutUs" className='navlink'>About Us</a>
          <a href="#services"  className='navlink'>Services</a>
          <a href="#gallery" className='navlink'>Gallery</a>
          <a href="#doctorSection" className='navlink'>Doctors</a>
          <a href="#footer" className='navlink'>Contact Us</a>
        </div>
        <button className='hamburgerIcon'><Hamburger/></button>
      </div> */}

      <div className='navbar2'>
        <a href="#"><img className='logo2' src={logo}/></a>
        <div className='navlinkContainer2'>
          <a href="#aboutUs" className='navlink2'>About Us</a>
          <a href="#services"  className='navlink2'>Services</a>
          <a href="#gallery" className='navlink2'>Gallery</a>
          <a href="#doctorSection" className='navlink2'>Doctors</a>
          <a href="#footer" className='navlink2'>Contact Us</a>
        </div>
        <button className='hamburgerIcon2'><Hamburger/></button>
      </div>


      <div className='HS'>
        <div className='heroSection'>
          <div className='heroSlogan'>
          <div className='sloganSub1'>Welcome To E-Dental </div>
            <div>Orthodontic and<br/> Implant Centre</div>
            <div className='sloganSub2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
            <button className='appointmentButton'>Request An Appointment</button>
          </div>
          <div className='heroPicContainer'>
            <img className='heroPic' src={hero}/>
          </div>
        </div>
      </div>


      <div className='aboutUs' id='aboutUs'>
        <div className='aboutUsHeading'>About us</div>
        <div className='aboutUsDesc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
         a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
           1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br/><br/>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking
             at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
             opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages 
             and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many 
             web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </div>
      </div>


      <div className='services' id='services'>
        <div className='serviceHeader'>Services</div>
        <div className='serviceComponentsFlexbox'>
          <Service sIcon={serviceIcon1} sHeading={"ROOT CANAL"} sDesc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}></Service>
          <Service sIcon={serviceIcon2} sHeading={"ROOT CANAL"} sDesc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}></Service>
          <Service sIcon={serviceIcon3} sHeading={"ROOT CANAL"} sDesc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}></Service>
          <Service sIcon={serviceIcon4} sHeading={"ROOT CANAL"} sDesc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}></Service>
          <Service sIcon={serviceIcon5} sHeading={"ROOT CANAL"} sDesc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}></Service>
          <Service sIcon={serviceIcon6} sHeading={"ROOT CANAL"} sDesc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}></Service>
          <Service sIcon={serviceIcon7} sHeading={"ROOT CANAL"} sDesc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}></Service>
          <Service sIcon={serviceIcon1} sHeading={"ROOT CANAL"} sDesc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}></Service>
        </div>
      </div>



      <div className='gallery' id='gallery'>
        <div className='galleryHeader'>Gallery</div>
        <div className='galleryFlexbox'>
          <img className="galleryPic" src={g1}/>
          <img className="galleryPic" src={g2}/>
          <img className="galleryPic" src={g3}/>
          <img className="galleryPic" src={g4}/>
        </div>
      </div>


      <div className='doctorSection' id='doctorSection'>
        <div className='doctorHeader'>Meet our Team</div>
        <div className='doctorFlexbox'>
          <Doctor dPic={d1} dName={"Chandrasekhar MBBS"} dDesc={"+913456826357"}/>
          <Doctor dPic={d2} dName={"Chandrasekhar MBBS"} dDesc={"+913456826357"}/>
          <Doctor dPic={d3} dName={"Chandrasekhar MBBS"} dDesc={"+913456826357"}/>
          <Doctor dPic={d4} dName={"Chandrasekhar MBBS"} dDesc={"+913456826357"}/>
          <Doctor dPic={d5} dName={"Chandrasekhar MBBS"} dDesc={"+913456826357"}/>
          <Doctor dPic={d6} dName={"Chandrasekhar MBBS"} dDesc={"+913456826357"}/>
        </div>
      </div>

      <footer className='footer' id='footer'>
        <div className='footerHeading'>Contact us</div>
        <div className='contactDetails'>
          Mobile : +919495185564<br/>
          Email ID : thomaskuttyedamattom@gmail.com<br/>
          Address : Market Junction, Kaduthuruthy, Kerala 686604
        </div>
        <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.9789315186417!2d76.48813601470974!3d9.76784979301057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d715f81cec7b%3A0xc9edf7a9ed9d500f!2sE%20DENTAL!5e0!3m2!1sen!2sin!4v1669145447560!5m2!1sen!2sin" height="450"></iframe>
        <div className='copyright'>© 2022, Fraktal Ecosystems Pvt. Ltd. All Rights Reserved.</div>
      </footer>

    </div>
  );
}

export default App;
