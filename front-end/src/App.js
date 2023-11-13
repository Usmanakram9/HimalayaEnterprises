
import React, { useState, useEffect } from 'react';
 
function App() { 
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const dots = document.querySelectorAll('.dots-navigation li');
    const sections = document.querySelectorAll('section');

    const handleDotClick = (index) => {
      sections[index].scrollIntoView({ behavior: 'smooth' });

      // Remove the 'active' class from all dots
      dots.forEach((dot) => {
        dot.classList.remove('active');
      });

      // Add the 'active' class to the clicked dot
      dots[index].classList.add('active');
      setActiveDot(index);
    };

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => handleDotClick(index));
    });

    // Cleanup event listeners when component unmounts
    return () => {
      dots.forEach((dot, index) => {
        dot.removeEventListener('click', () => handleDotClick(index));
      });
    };
  }, []); 
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpened((prev) => !prev);
  };
  return (
    <>
  
  <section id="home" className="container">
    <div className="logo">
        <img src="assets/img/logo.png" alt="Logo" />
        <span>Usman Akram<strong>.</strong></span>
    </div> 
  <div className="navbar">
      
        <button id="menu-button" onClick={toggleMenu}>
        {isMenuOpened ? 'CLOSE' : 'MENU'}
        </button>
    </div>
    
    <div className="blur-background" style={{
          display: isMenuOpened ? 'flex' : 'none',
          opacity: isMenuOpened ? 1 : 0, // Add opacity property
          transition: 'opacity 0.5s', // Add transition property
        }}>
        <nav className="nav-menu">
            
            <div className="ico">
                <span className="horizon"></span>
                <a href="https://instagram.com/sh.a9i" target="/"><i className="fa fa-instagram"></i></a> 
                <a href="https://www.facebook.com/FlyynR" target="/"><i className="fa fa-facebook"></i></a>
                <a href="https://www.linkedin.com/in/usmanakram9" target="/"><i className="fa fa-linkedin"></i></a>
               
        </div>
            <ul className="nav-menu-item">
                <li><a href="index.html">Home</a></li>
               
                <li><a href="#about">About</a></li>
              
            </ul>
            <ul className="nav-menu-item2">
                <li><a href="#service">Services</a></li>
                <li><a href="#subscribe">Subscribe</a></li>

                <li><a href="#contactus">Contact</a></li>
            </ul>
         <div className="copy">
           <p>&copy; Copyright- Usman Akram</p>
         </div>
        </nav>  
       
        <div className="vertical-line"></div>
       
    </div>

  
</section>
<section id="banner" className="banner">
    <div className="left">
        <a href="https://instagram.com/sh.a9i" target="/"><i className="fa fa-instagram"></i></a> 

        <a href="https://www.linkedin.com/in/usmanakram9"><i className="fa fa-linkedin"></i></a>
        <a href="https://www.facebook.com/FlyynR" target="/"><i className="fa fa-facebook"></i></a>
        <div className="left-line"></div>
    </div>
   <div className="head">
    <h1>
        <span className="light"></span>
        <span className="normal"></span>
      </h1>
      

      <p>Learn More</p>
      <div className="arr">
      <div className="down-line line1"></div><div className="down-line line2"></div>
    </div>
      
    </div>
    <div className="scrol">
        <p className="vert">SCROLL</p>
    <div className="lf"></div>
</div>
    <div className="right">
       
    <ul className="dots-navigation">
        {Array.from({ length: 6 }, (_, index) => (
          <li
            key={index}
            className={`dot ${activeDot === index ? 'active' : ''}`}
            onClick={() => setActiveDot(index)}
          ></li>
        ))}
      </ul>
    </div>
   
</section>

<section id="about" className="about">
    <div className="pic">
        
       <img src="./assets/img/usm.jpeg" alt="" />
    </div>
    <div className="des">
        <p className="one">Possessing an in-depth knowledge of administration and Information Technology processes and
            procedures and a proven track record of providing support.</p>
        <p className="two">Easy going by nature and able to get along with
            both work colleagues and seniors when providing comprehensive administrative support to day-to-day
            operations of human resources department.</p>
        <p className="three">Have in-depth knowledge of languages and development
            tools. I am passionate about programming and application development.</p>
            <p className="four">Organized, punctual and multiskilled dedicated worker who is very keen to take new responsibilities with bigger opportunities and high
                challenges.
                </p>
    </div>
    <div className="abscrol">
        <p className="abvert">ABOUT ME</p>
    <div className="ablf"></div>
</div>
</section>

<section id="service" className="service">
    <div className="servicet">
<div className="serh">
    <h1>Our Services</h1>
</div>
    <div className="serd"><h1>We are the team of highly professionals. below are the services we provide</h1>
    </div>    

    <div className="vertline"></div>
    <div className="cont">
        <div className="item1">
            <div className="iconn"> <i className="fa fa-html5"></i></div>
            <div className="serdesc"><p>Harness the potential of the web with our HTML expertise, building the foundation for seamless and dynamic online experiences.</p></div>
            
           
           
        </div>
        <div className="item2">
            <div className="iconn"><i className="fa fa-css3"></i></div> 
            <div className="serdesc"><p>Elevate your website's design and functionality with our CSS expertise, creating visually stunning and responsive web experiences.</p></div> 
        </div>
        <div className="item3">
            <div className="iconn"><i className="fa fa-database"></i></div>
            <div className="serdesc"><p>Unlock the power of data with our database solutions, tailored to optimize your information management and retrieval needs.</p></div>
            
        </div>
    </div>
    </div>
   
    
  
    <div className="service-abscrol">
        <p className="service-abvert">SERVICES</p>
        <div className="service-ablf"></div>
    </div>
    
    
</section>


<section id="subscribe" className="subscribe">
    <div className="subscribet">
<div className="subit1"><h1>Call to action.</h1></div>
<div className="subit2"><p>Don't miss any news via email ! Register email if you agree :</p>
<h4>EMAIL ADDRESS*</h4>
<input type="text" placeholder="your@email.address" />
<input type="submit" value="SUBSCRIBE" />
</div>

    </div>
   
    
    <div className="subscribe-abscrol">


        <p className="subscribe-abvert">SUBSCRIBE</p>
        <div className="subscribe-ablf"></div>
    </div>

</section>




<section id="contactus" className="contactus">
    <div className="contactust">
        <div className="contactit1">
            <h1>Let's Talk!.</h1>
        <p>INFORMATION</p>
        <p className="mes">MESSAGE</p>
    </div>
        <div className="contactit2">
            <p>Want to start an awesome projects or have questions about our company and products found on our website? Feel free to talk to us, we will happy to answer you. Here is how to reach us:</p>
           <div className="box">
            <div className="it1">
               <div className="hl"></div>
               <p>Contact</p>
               <p>Call: 0311-0699799</p>
               <p>Email: M.usman9@hotmail.com</p>
               <div className="socio">
               <a href="https://instagram.com/sh.a9i" target="/"> <i className="fa fa-instagram" ></i></a>
               <a href="https://www.facebook.com/FlyynR" target="/"> <i className="fa fa-facebook" ></i></a>
               <a href="https://t.snapchat.com/dZz5WrIQ" target="/"><i className="fa fa-snapchat" ></i></a>
               <a href="https://www.linkedin.com/in/usmanakram9" target="/"><i className="fa fa-linkedin" ></i></a>
               </div>
               
            </div>
            <div className="it2">
               <div className="hl2">
              
               </div>
               <p>Address</p>
               <p>Human Resource Department</p>
               <p>Admin Block,IIUI</p>
          
             <a href="/">  <i className="fa fa-phone"> </i> </a>
            </div>
           </div>
        </div>
    </div>
    <div className="contactus-abscrol">
        <p className="contactus-abvert">CONTACT US</p>
        <div className="contactus-ablf"></div>
    </div>
</section>
    </>
  );
}

export default App;
