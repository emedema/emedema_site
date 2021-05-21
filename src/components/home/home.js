import React, {Component} from 'react';
export default class Header  extends Component {
    render(){
      return (
            <section id="home" className="s-home page-hero target-section" data-parallax="scroll" data-image-src="images/hero-bg.jpg" data-natural-width={3000} data-natural-height={2000} data-position-y="center">
            <div className="overlay" />
            <div className="shadow-overlay" />
            <div className="home-content">
            <div className="row home-content__main">
                <h3>Hello There</h3>
                <h1>
                I am Emily Medema <br />
                </h1>
                <div className="home-content__buttons">
                <a href="#works" className="smoothscroll btn btn--stroke">
                    Latest Projects
                </a>
                <a href="#about" className="smoothscroll btn btn--stroke">
                    More About Me
                </a>
                </div>
                <div className="home-content__scroll">
                <a href="#about" className="scroll-link smoothscroll">
                    <span>Scroll Down</span>
                </a>
                </div>
            </div>
            </div> {/* end home-content */}
            <ul className="home-social">
            <li>
                <a href="https://www.facebook.com/medema.emily"><i className="im im-facebook" aria-hidden="true" /><span>Facebook</span></a>
            </li>
            <li>
                <a href="https://github.com/emedema"><i className="im im-github" aria-hidden="true" /><span>GitHub</span></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/emily-medema"><i className="im im-linkedin" aria-hidden="true" /><span>LinkedIn</span></a>
            </li>
            </ul> 
            {/* end home-social */}
        </section>
      );
    }
}