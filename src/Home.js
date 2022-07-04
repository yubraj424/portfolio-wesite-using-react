import React from 'react';
import './Home.css';
import logo from './img/logo.png';

function Home() {
    
  return (
    <div className='Home'>
        <div className="home__bg">
            <div className='header d_flex align_items_center pxy__1'>
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="navigation pxy__30">
                    <ul className="navbar d__flex">
                        <a href="#Home"><li className='nav_items mx__15'>Home</li></a>
                        <a href="#About"><li className='nav_items mx__15'>About</li></a>
                        <a href="#Services"><li className='nav_items mx__15'>Services</li></a>
            
                        <a href="#contact"><li className='nav_items mx__15'>contact</li></a>
                    </ul>

                </div>
            </div>
              {/* home content */}
              <div className="container">
              <div className="home__content">
                <div className="home__meta">
                    <h1 className="home__text pz__10">
                        Hello! Welcome to my Portfolio
                    </h1>
                    <h2 className="home__text pz__10">
                        Hi, I'm Yubraj Regmi.
                    </h2>
                    <h3 className="home__text pz__5">
                        and, I'm a 
                    </h3>
                    <h4 className="home__text sweet">
                        computer engineer.
                    </h4>
                </div>
              </div>

              </div>
             
        </div>
       
    </div>
  )
}

export default Home
