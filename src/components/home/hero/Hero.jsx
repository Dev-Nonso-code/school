import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/student/login");
  };
  const logout = () => {
    navigate("/student/Signup");
  };
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO ACADEMIA"
              title="Best Online Education Expertise"
            />
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
             <div className="d-flex mt-5">
              <button onClick={login} className="btn btn-primary w-50 p-3 ">
                Login  <i class="bi bi-arrow-right"></i>
              </button>
              <button
                onClick={logout}
                className="btn btn-secondary w-50 p-3"
                id="btn"
              >
                Register  <i class="bi bi-arrow-right"></i>
              </button>

            </div>
            {/*<div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>*/}
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
