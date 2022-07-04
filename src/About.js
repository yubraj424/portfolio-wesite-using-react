import React from 'react';
import './About.css';
import aboutimg from "./img/aboutimg.JPG";

function About() {
    //  Up To Top Btn
      window.addEventListener("scroll", function(){
        const upToTop = document.querySelector("a.bottom__to__top");
         upToTop.classList.toggle("active", window.scrollY > 0)
      });
    return (
      <div className="about component__space" id="About">
        <div className="container">
          <div className="row">
            <div className="col__2">
              <img src={aboutimg} alt="" className="about__img" />
            </div>
            <div className="col__2">
              <h1 className="about__heading">About Me</h1>
              <div className="about__meta">
                <p className="about__text p__color">
                Effective Student committed to learning, developing skills in programming and team contribution. Self-directed and energetic with superior performance in both autonomous or collaborative environments working independently and collaborating with others on group projects. I've done my bachelors in computer engineering from Advanced college of enginnering and management,IOE.I have a great interest in coding and developing</p>
            
                <div className="about__button d__flex align__items__center">
                  <a href="#section">
                    <button className="about btn pointer">Download Cv</button>
                  </a>
                  <a href="#section">
                    <button className="about btn pointer">Hire Me</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* UP TO TOP BTN */}
        <div className="up__to__top__btn">
          <a href="#section" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
          </a>
        </div>
      </div>
    );
  }
  
  export default About;