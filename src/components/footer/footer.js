import React, {Component} from 'react';
export default class Header  extends Component {
    render(){
      return (
            <footer>
            <div className="row">
            <div className="col-full">
                <div className="footer-logo">
                <a className="footer-site-logo" href="#0"><img src="images/logo.png" alt="Homepage" /></a>
                </div>
                <ul className="footer-social">
                <li><a href="#0">
                    <i className="im im-facebook" aria-hidden="true" />
                    <span>Facebook</span>
                    </a></li>
                <li><a href="#0">
                    <i className="im im-github" aria-hidden="true" />
                    <span>GitHub</span>
                    </a></li>
                <li><a href="#0">
                    <i className="im im-linkedin" aria-hidden="true" />
                    <span>LinkedIn</span>
                    </a></li>
                </ul>
            </div>
            </div>
            <div className="row footer-bottom">
            
            </div> {/* end footer-bottom */}
        </footer>
      );
    }
}