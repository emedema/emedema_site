import React, {Component} from 'react';
export default class Header  extends Component {
    render(){
      return (
            <section id="works" className="s-works target-section">
            <div className="row narrow section-intro has-bottom-sep">
            <div className="col-full">
                <h3>Portfolio</h3>
                <h1>See My Latest Projects.</h1>
                <p className="lead">All of this work has been produced throughout my
            degree at the University of British Columbia. During my time at university I have undergone various English courses,
            Data courses, and Computer Science courses. In those courses I have written a lot of reports and developed a lot of projects, of those I am quite proud
            of a few. You can find those here. I have also linked completed side projects.</p>
            </div>
            </div>
            <div className="row masonry-wrap">
            <div className="masonry">
                <div className="masonry__brick">
                <div className="item-folio">
                    <div className="item-folio__thumb">
                    <a href="https://github.com/emedema/OKBoomer" className="thumb-link" title="OkBoomer Icon" data-size="1050x700">
                        <img src="images/portfolio/okboomer_icon.jpg" srcSet="images/portfolio/okboomer_icon.jpg 1x" alt="" />
                        <span className="shadow-overlay" />
                    </a>
                    </div>
                    <div className="item-folio__text">
                    <h3 className="item-folio__title">
                        OkBoomer
                    </h3>
                    <p className="item-folio__cat">
                        App Development
                    </p>
                    <p style = {{color: '#FFFFFF'}}>A high-fidelity wireframe prototype of a dating app for elderly people - OkBoomer.</p>
                    </div>
                    <a href="https://github.com/emedema/OKBoomer" className="item-folio__project-link" title="Project link">
                    <i className="im im-link" />
                    </a>
                </div> {/* end item-folio */}
                </div> {/* end masonry__brick */}
                <div className="masonry__brick">
                <div className="item-folio">
                    <div className="item-folio__thumb">
                    <a href="https://github.com/emedema/Laur.ai" className="thumb-link" title="Lighthouse" data-size="1050x700">
                        <img src="images/portfolio/laurai.jpg" srcSet="images/portfolio/laurai.jpg 1x" alt="" />
                        <span className="shadow-overlay" />
                    </a>
                    </div>
                    <div className="item-folio__text">
                    <h3 className="item-folio__title">
                        Laur.ai
                    </h3>
                    <p className="item-folio__cat">
                        Chat Bot
                    </p>
                    <p style = {{color: '#FFFFFF'}}>Laur.ai is a chatbot designed to simulate reddit conversations.</p>
                    </div>
                    <a href="https://github.com/emedema/Laur.ai" className="item-folio__project-link" title="Project link">
                    <i className="im im-link" />
                    </a>
                </div> {/* end item-folio */}
                </div> {/* end masonry__brick */}
                <div className="masonry__brick">
                <div className="item-folio">
                    <div className="item-folio__thumb">
                    <a href="https://github.com/emedema/COSC304-Pokemon.net" className="thumb-link" data-size="1050x700">
                        <img src="images/portfolio/pokenet.jpg" srcSet="images/portfolio/pokenet.jpg 1x"/>
                        <span className="shadow-overlay" />
                    </a>
                    </div>
                    <div className="item-folio__text">
                    <h3 className="item-folio__title">
                        Pokemon.net
                    </h3>
                    <p className="item-folio__cat">
                        Web Development
                    </p>
                    <p style = {{color: '#FFFFFF'}}>Your Black Market Dealer of Pokémon - Gotta Catch ‘em All ™</p>
                    </div>
                    <a href="https://github.com/emedema/COSC304-Pokemon.net" className="item-folio__project-link" title="Project link">
                    <i className="im im-link" />
                    </a>
                </div> {/* end item-folio */}
                </div> {/* end masonry__brick */}
                <div className="masonry__brick">
                <div className="item-folio">
                    <div className="item-folio__thumb">
                    <a href="https://github.com/emedema/RecommenderSystem" className="thumb-link" data-size="1050x700">
                        <img src="images/portfolio/collabfilter.jpg" srcSet="images/portfolio/collabfilter.jpg 1x" alt="" />
                        <span className="shadow-overlay" />
                    </a>
                    </div>
                    <div className="item-folio__text">
                    <h3 className="item-folio__title">
                        Recommender System
                    </h3>
                    <p className="item-folio__cat">
                        Algorithm Development
                    </p>
                    <p style = {{color: '#FFFFFF'}}>An algorithm to recommend items based on the likes and dislikes of a user and their similarities to other users.</p>
                    </div>
                    <a href="https://github.com/emedema/RecommenderSystem" className="item-folio__project-link" title="Project link">
                    <i className="im im-link" />
                    </a>
                </div> {/* end item-folio */}
                </div> {/* end masonry__brick */}
                <div className="masonry__brick">
                <div className="item-folio">
                    <div className="item-folio__thumb">
                    <a href="https://github.com/emedema/DATA311-PokemonProject" className="thumb-link" data-size="1050x700">
                        <img src="images/portfolio/pokedata.jpg" srcSet="images/portfolio/pokedata.jpg 1x" alt="" />
                        <span className="shadow-overlay" />
                    </a>
                    </div>
                    <div className="item-folio__text">
                    <h3 className="item-folio__title">
                        Pokemon: The Myths and the Legends
                    </h3>
                    <p className="item-folio__cat">
                        Machine Learning
                    </p>
                    <p style = {{color: '#FFFFFF'}}>An analysis of pokemon stats using various machine learning models to see if we can find any trends.</p>
                    </div>
                    <a href="https://github.com/emedema/DATA311-PokemonProject" className="item-folio__project-link" title="Project link">
                    <i className="im im-link" />
                    </a>
                </div> {/* end item-folio */}
                </div> {/* end masonry__brick */}
                <div className="masonry__brick">
                <div className="item-folio">
                    <div className="item-folio__thumb">
                    <a href="images/report.pdf" className="thumb-link" data-size="1050x700">
                        <img src="images/portfolio/data448.jpg" srcSet="images/portfolio/data448.jpg 1x" alt="" />
                        <span className="shadow-overlay" />
                    </a>
                    </div>
                    <div className="item-folio__text">
                    <h3 className="item-folio__title">
                        Fitting Truncated Mixture Mixture Models on Complex Specta
                    </h3>
                    <p className="item-folio__cat">
                        Machine Learning/Statistics Modelling
                    </p>
                    </div>
                    <a href="images/report.pdf" className="item-folio__project-link" title="Project link">
                    <i className="im im-link" />
                    </a>
                </div> {/* end item-folio */}
                </div> {/* end masonry__brick */}
                <div className="masonry__brick">
                <div className="item-folio">
                    <div className="item-folio__thumb">
                    <a href="https://github.com/emedema/fallr" className="thumb-link" data-size="1050x700">
                        <img src="images/portfolio/fallr.jpg" srcSet="images/portfolio/fallr.jpg 1x" alt="" />
                        <span className="shadow-overlay" />
                    </a>
                    </div>
                    <div className="item-folio__text">
                    <h3 className="item-folio__title">
                        fallr
                    </h3>
                    <p className="item-folio__cat">
                        Web Development
                    </p>
                    <p style = {{color: '#FFFFFF'}}>A blogging website for falling into deep holes.</p>
                    </div>
                    <a href="https://github.com/emedema/fallr" className="item-folio__project-link" title="Project link">
                    <i className="im im-link" />
                    </a>
                </div> {/* end item-folio */}
                </div> {/* end masonry__brick */}
                <div className="masonry__brick">
                <div className="item-folio">
                    <div className="item-folio__thumb">
                    <a href="images/frank_dev.pdf" className="thumb-link" data-size="1050x700">
                        <img src="images/portfolio/frank.jpg" srcSet="images/portfolio/frank.jpg 1x" alt="" />
                        <span className="shadow-overlay" />
                    </a>
                    </div>
                    <div className="item-folio__text">
                    <h3 className="item-folio__title">
                    “Lost in time, and lost in space... and meaning”
                    </h3>
                    <p className="item-folio__cat">
                        Deviancy as a Structure for Meaning in Frankenstein and Adaptations
                    </p>
                    <p style = {{color: '#FFFFFF'}}>English Literature Analysis.</p>
                    </div>
                    <a href="images/frank_dev.pdf" className="item-folio__project-link" title="Project link">
                    <i className="im im-link" />
                    </a>
                </div> {/* end item-folio */}
                </div> {/* end masonry__brick */}
            </div>
            </div> {/* end masonry */}
        </section>
      );
    }
}