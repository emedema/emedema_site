import React, {Component} from 'react';
export default class Header  extends Component {
    render(){
      return (
        <section id="about" className="s-about target-section">
        <div className="row narrow section-intro has-bottom-sep">
            <div className="col-full text-center">
            <h3>About</h3>
            <h1>More About Me</h1>
            <p className="lead">Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p>
            </div>
        </div>
        <div className="row about-content">
            <div className="col-six tab-full left">
            <h3>Hi!</h3>
            <p>Lorem ipsum Ut eiusmod ex magna sit dolor esse adipisicing minim ad cupidatat eu veniam nostrud mollit laboris sunt magna velit culpa consectetur nostrud consectetur labore sed do.</p>
            <p>
                Lorem ipsum Nisi officia Duis irure voluptate dolor commodo pariatur occaecat aliquip adipisicing voluptate Ut in qui ea sint occaecat in commodo in in in incididunt ut sunt in Ut Duis in ut ex qui anim cupidatat cupidatat ex in non dolore labore ea amet cillum ea qui dolor nisi sed velit mollit exercitation ex fugiat labore in deserunt culpa laborum culpa anim dolore laboris amet irure mollit proident velit fugiat aute ea elit magna consequat qui officia quis elit Duis dolor esse cupidatat tempor proident voluptate aliqua ex cupidatat do eiusmod veniam irure laborum ut magna nostrud dolore ullamco commodo elit sit magna aliqua laborum veniam officia dolor.	
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
                <strong>R - Machine Learning and Data Analysis</strong>
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
                    <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
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
                    <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.</p>
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
                    <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
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
                    <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.</p>
                </div>
                </div> {/* end timeline__block */}
            </div> {/* end timeline */}
            </div> {/* end right */}
        </div> {/* end about-content timeline */}
        </section>
    );
    }
}