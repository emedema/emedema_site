import React, {Component} from 'react';
export default class Header  extends Component {
    render(){
      return (
        <section id="about" className="s-about target-section">
        <div className="row narrow section-intro has-bottom-sep">
            <div className="col-full text-center">
            <h3>About</h3>
            <h1>More About Me</h1>
            <p className="lead">I am a current student at the University of British Columbia Okanagan Campus with a major in Computer Science and minor in Data Science.</p>
            </div>
        </div>
        <div className="row about-content">
            <div className="col-six tab-full left">
            <h3>Hi!</h3>
            <p>I'm Emily, an Okanagan based computer science student with experience in software and web development, research, teaching, and help desk/customer support. 
                I primarily work in Python, JavsScript (as well as frameworks such as React and Node), Java, and R. I have a lot of experience with machine learning and data analytic models/visualisations.</p>
            <p>
                When I am not working or studying, I can be found working on one of my numerous writing works in progress, camping, reading, or futilely trying to make my way through my ever-growing Netflix queue. 
                I also enjoy travelling (when it is legal), hiking, volleyball, and soccer.
            </p>
            <p>
                Fun fact: I have a lot of random trivia stored in my head. 
                For example, I for some reason know that the Great Fire of London occurred in 1666 and 
                that the core of the earth is approximately 2 years younger than the crust of the earth according to Einstein's Theory of Relativity.
            </p>
            </div>
            <div className="col-six tab-full right">
            <h3>My skills.</h3>
            <ul className="skill-bars">
                <li>
                <div className="progress percent90"><span>90%</span></div>
                <strong>HTML5</strong>
                </li>
                <li>
                <div className="progress percent85"><span>85%</span></div>
                <strong>CSS3</strong>
                </li>
                <li>
                <div className="progress percent70"><span>95%</span></div>
                <strong>Python</strong>
                </li>
                <li>
                <div className="progress percent95"><span>70%</span></div>
                <strong>PHP</strong>
                </li>
                <li>
                <div className="progress percent75"><span>90%</span></div>
                <strong>Java</strong>
                </li>   
                <li>
                <div className="progress percent75"><span>95%</span></div>
                <strong>R - ML and Data Analysis</strong>
                </li>  
                <li>
                <div className="progress percent90"><span>90%</span></div>
                <strong>React JS</strong>
                </li>   
            </ul>
            </div>
        </div> {/* end about-content */}
        <div className="row about-content about-content--buttons">
            <div className="col-six tab-full left">
            <a href="#0" className="btn btn--primary full-width">Download My CV</a>
            </div>
            <div className="col-six tab-full right">
            <a href="#0" className="btn full-width">Hire Me Now</a>
            </div>
        </div> {/* end about-content buttons */}
        <div className="row about-content about-content--timeline">
            <div className="col-full text-center">
            <h3>My Work Experience.</h3>
            </div>
            <div className="col-six tab-full left">
            <div className="timeline">
                <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                    <p className="timeline__timeframe">September 2020 - Present</p>
                    <h3>Teck Resources</h3>
                    <h5>Digital Systems Student</h5>
                </div>
                <div className="timeline__desc">
                    <p>Entailed software development, QA - both manual and automated testing with Selenium, user interface development for web application, system support, 
                        database update script development and implementation, change management, enhancement and defect specification, refinement, design and development, 
                        planning with Azure DevOps, build automation and security improvements with SonarQube.</p>
                </div>
                </div> {/* end timeline__block */}
                <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                    <p className="timeline__timeframe">May 2020 - August 2020</p>
                    <h3>Saturn Animation Studios</h3>
                    <h5>Software Developer</h5>
                </div>
                <div className="timeline__desc">	
                    <p>Developing a web application, Kukarella, that provides an online Voice-to-Text, Text-to-Voice platform. Primarily working in React.js, Node.js, Firebase, and AWS.
                    Primarily develop new features, fix various bugs, and perform testing.</p>
                </div>
                </div> {/* end timeline__block */}
            </div> {/* end timeline */}
            </div> {/* end left */}
            <div className="col-six tab-full right">
            <div className="timeline">
                <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                    <p className="timeline__timeframe">September 2019 - April 2020</p>
                    <h3>University of British Columbia</h3>
                    <h5>Research & Teaching Assistant</h5>
                </div>
                <div className="timeline__desc">
                    <p>
                        My research entailed developing a mobile application to integrate the Internet of Things and better data visualization, visioning and analytics algorithms into Patient Health Platforms to improve patient experience.
                        Teaching included providing additional instruction and support to students in the Computer Science faculty. As well as marking and giving feedback to students on assignments and tests, which involves knowledge on the language, syntax,
                        and occasionally proofs.
                    </p>
                </div>
                </div> {/* end timeline__block */}
                <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                    <p className="timeline__timeframe">May 2017 - August 2019</p>
                    <h3>Tolko Industries Ltd.</h3>
                    <h5>Help Desk Intern</h5>
                </div>
                <div className="timeline__desc">
                    <p>Offered solutions to operations issues for users of Tolko's enterprise system and various applications such as Microsoft Office, working closely via phone, email, live chat and web teleconference with end users. Responded to support tickets within 1 hour which improved customer service.
                    Kept customers informed about issue resolution progress and updated estimated times of resolution on ongoing basis.</p>
                </div>
                </div> {/* end timeline__block */}
            </div> {/* end timeline */}
            </div> {/* end right */}
        </div> {/* end about-content timeline */}
        </section>
    );
    }
}