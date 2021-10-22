import React, {Component} from 'react';
import ContactForm2 from './contactForm';
export default class Header  extends Component {
    render(){
      return (
            <section id="contact" className="s-contact target-section">
            <div className="overlay" />
            <div className="row narrow section-intro">
            <div className="col-full">
                <h3>Contact</h3>
                <h1>Say Hello.</h1>
                <p className="lead">If you have any questions or simply want to reach out feel free to contact me!</p>
            </div>
            </div>
            <div className="row contact__main">
            <div className="col-eight tab-full contact__form">
                <ContactForm2 />
            </div>
            <div className="col-four tab-full contact__infos">
                <h4 className="h06">Email</h4>
                <p>medema[dot]emily@gmail[dot]com<br />
                </p>
            </div>
            </div>
        </section>
      );
    }
}
