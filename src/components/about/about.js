import React, {Component} from 'react';
export default class Header  extends Component {
    render(){
      return (
        <section id="about" className="s-about target-section">
        <div className="row narrow section-intro has-bottom-sep">
            <div className="col-full text-center">
            <h3>About</h3>
            <h1>More About Me</h1>
            <p className="lead">I am a current MSc in Computer Science graduate student at Queen's University within the <a href = "https://sites.google.com/site/tinghushomepage/research">Machine Intelligence & Biocomputing (MIB)</a> and <a href = "https://etlab.cs.queensu.ca/" >Ethics & Technology</a> Labs.</p> I am specifically researching bio-medical machine learning with a focus in ethics.
            </div>
        </div>
        <div className="row about-content">
            <div className="col-six tab-full left">
            <h3>Hi!</h3>
            <p>I'm Emily, an Kingston-based computer science student with experience in software and web development, research, teaching, and help desk/customer support. 
                I primarily work in Python, JavaScript (as well as frameworks such as React and Node), Java, and R. I have a lot of experience with machine learning and data analytic models/visualisations.</p>
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
                <div className="progress percent95"><span>95%</span></div>
                <strong>Python</strong>
                </li>
                <li>
                <div className="progress percent70"><span>70%</span></div>
                <strong>PHP</strong>
                </li>
                <li>
                <div className="progress percent90"><span>90%</span></div>
                <strong>Java</strong>
                </li>   
                <li>
                <div className="progress percent95"><span>95%</span></div>
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
            <a href="images/resume.pdf" className="btn btn--primary full-width">Download My CV</a>
            </div>
            <div className="col-six tab-full right">
            <a href="#contact" className="btn full-width">Hire Me Now</a>
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
                <p className="timeline__timeframe">January 2023 - Present</p>
                    <h3>Queen's University</h3>
                    <h5>Research Assistant</h5>
                </div>
                <div className="timeline__desc">
                    <p>
                        I am currently working on three additional research projects to my thesis. One of which is focusing on tracking injustice, specifically in terms of police brutality incidences in Canada. To do so, I am teaching other research assistants Web Scraping and Data Collection techinques. 
                    In another project, I am working on assessing the quality of feedback given to surgical residents and evaluating how the quality of feedback affects their development. 
                    Lastly, I am working on a few social epistemology projects looking at modelling various scenarios that affect the spread of beliefs. I am also aiding in the research on the addictive qualities of social media and considering the agency of users based on these addictive qualities.
                    </p>
                </div>
                </div> {/* end timeline__block */}
                <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                <p className="timeline__timeframe">January 2023 - April 2022</p>
                    <h3>Queen's University</h3>
                    <h5>Teaching Assistant</h5>
                </div>
                <div className="timeline__desc">
                    <p>
                        I worked as the Head Teaching Assistant for Algorithms 1 which included organizing and scheduling marking and office hours for all TAs, providing additional instruction and support to students in the Computer Science faculty. As well as marking and giving feedback to students on assignments and tests, which involves knowledge on the language, syntax,
                        and occasionally proofs.
                    </p>
                </div>
                </div> {/* end timeline__block */}
                <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                <p className="timeline__timeframe">September 2019 - April 2022</p>
                    <h3>University of British Columbia</h3>
                    <h5>Research & Teaching Assistant</h5>
                </div>
                <div className="timeline__desc">
                    <p>
                        My research entailed developing a mobile application to integrate the Internet of Things and better data visualization, visioning and analytics algorithms into Patient Health Platforms to improve patient experience.
                        Teaching included providing additional instruction and support to students in the Computer Science faculty. As well as marking and giving feedback to students on assignments and tests, which involves knowledge on the language, syntax,
                        and occasionally proofs. I also was the Head TA for a semester which involved organizing and scheduling marking and functioning as a mediator between students, TAs, and the Professor.
                    </p>
                </div>
                </div> {/* end timeline__block */}
            </div> {/* end timeline */}
            </div> {/* end left */}
                    
            <div className="col-six tab-full right">
            <div className="timeline">
                <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                <p className="timeline__timeframe">September 2020 - September 2021</p>
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
