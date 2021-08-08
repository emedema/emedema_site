import React, {Component} from 'react';
import { useForm } from 'react-hook-form';
import ContactForm from './react-hook-form';
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
                <form name="contactForm" id="contactForm" action="https://formsubmit.co/3eb44c4389a982a7f6f2ea9878dcaae3" method="POST">
                <fieldset>
                    <div className="form-field">
                    <input name="contactName" type="text" id="contactName" placeholder="Name" defaultValue={""} minLength={2} required aria-required="true" className="full-width" />
                    </div>
                    <div className="form-field">
                    <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" defaultValue={""} required aria-required="true" className="full-width" />
                    </div>
                    <div className="form-field">
                    <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" defaultValue={""} className="full-width" />
                    </div>
                    <div className="form-field">
                    <textarea name="contactMessage" id="contactMessage" placeholder="Message" rows={10} cols={50} required aria-required="true" className="full-width" defaultValue={""} />
                    </div>
                    <div className="form-field">
                    <button className="full-width btn--primary">Submit</button>
                    <div className="submit-loader">
                        <div className="text-loader">Sending...</div>
                        <div className="s-loader">
                        <div className="bounce1" />
                        <div className="bounce2" />
                        <div className="bounce3" />
                        </div>
                    </div>
                    </div>
                </fieldset>
                </form>
                {/*contact-warning */}
                {/*<ContactForm />*/}
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