import React, {Component} from 'react';
import Particles from 'react-tsparticles';

export default class Header  extends Component {
    render(){
      return (
            <section id="home" className="s-home page-hero target-section" data-parallax="scroll" data-image-src="images/hero-bg.jpg" data-natural-width={3000} data-natural-height={2000} data-position-y="center">
            <div className="overlay" />
            <Particles
                id="tsparticles"
                init={this.particlesInit}
                loaded={this.particlesLoaded}
                options={{
                    "background": {
                        "color": {
                          "value": "#070707"
                        },
                        "opacity": 0.75
                      },
                      "fullScreen": {
                        "enable": true,
                        "zIndex": -0.5,
                      },
                      "interactivity": {
                        "events": {
                          "onClick": {
                            "enable": true,
                            "mode": "repulse"
                          },
                          "onHover": {
                            "enable": true,
                            "mode": "bubble"
                          }
                        },
                        "modes": {
                          "bubble": {
                            "distance": 250,
                            "duration": 2,
                            "opacity": 0,
                            "size": 0
                          },
                          "grab": {
                            "distance": 400
                          },
                          "repulse": {
                            "distance": 400
                          }
                        }
                      },
                      "particles": {
                        "color": {
                          "value": "#ffffff"
                        },
                        "links": {
                          "color": {
                            "value": "#ffffff"
                          },
                          "distance": 150,
                          "opacity": 0.4
                        },
                        "move": {
                          "attract": {
                            "rotate": {
                              "x": 600,
                              "y": 600
                            }
                          },
                          "enable": true,
                          "outModes": {
                            "bottom": "out",
                            "left": "out",
                            "right": "out",
                            "top": "out"
                          },
                          "random": true,
                          "speed": 1
                        },
                        "number": {
                          "density": {
                            "enable": true
                          },
                          "value": 160
                        },
                        "opacity": {
                          "random": {
                            "enable": true
                          },
                          "value": {
                            "min": 0,
                            "max": 1
                          },
                          "animation": {
                            "enable": true,
                            "speed": 1
                          }
                        },
                        "size": {
                          "random": {
                            "enable": true
                          },
                          "value": {
                            "min": 1,
                            "max": 3
                          },
                          "animation": {
                            "speed": 4,
                            "minimumValue": 0.3
                          }
                        }
                      },
                    detectRetina: true,
                    }}
                />
            {/*<div className="shadow-overlay" />*/}
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