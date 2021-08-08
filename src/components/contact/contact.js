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
                <h4 className="h06">Phone</h4>
                <p>Phone: (+1) 778 212 7440<br />
                </p>
                <h4 className="h06">Email</h4>
                <p>medema.emily@gmail.com<br />
                </p>
                <h4 className="h06">Address</h4>
                <p>
                1308 Phoenix Dr<br />
                Vernon BC<br />
                V1B 3M4 CA
                </p>
            </div>
            </div>
        </section>
      );
    }
}