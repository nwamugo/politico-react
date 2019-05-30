import React, { Component } from 'react';

// components
import AboutCard from '../../components/presentationals/AboutCard/AboutCard';
import Footer from '../../components/presentationals/Footer/Footer';
import HeaderTextBox from '../../components/presentationals/HeaderTextBox/HeaderTextBox';
import NavBar from '../../components/presentationals/NavBar/NavBar';
import SecondaryHeading from '../../components/presentationals/SecondaryHeading/SecondaryHeading';
import Gallery from '../../components/presentationals/Gallery/Gallery';
import Image from '../../components/presentationals/Image/Image';

// images
import Apga from '../../resources/img/apga-logo.jpg';
import Ypp from '../../resources/img/ypp.jpg';
import Acpn from '../../resources/img/acpn-logo.jpg';

// styles
import '../../resources/css/style.css';
import '../../resources/css/queries.css';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <NavBar />
          <HeaderTextBox />
        </header>
        <section className="section-about">
          <AboutCard>
            <SecondaryHeading text="Be all you can be" />
          </AboutCard>
        </section>
        <Gallery />
        <section className="section-tours" id="section-tours">
          <SecondaryHeading
            text="Meet the Parties"
            className="secondary-textbox"
            h2ClassName="meet"
          />
          <div className="row parties">
            <div className="col-1-of-3">
              <div className="card">
                <figure className="pic-house">
                  <Image
                    src={Apga}
                    alt="A delivered Parcel"
                    className="small-gallery__photo"
                  />
                  <figcaption className="small-fig-caption" />
                </figure>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <figure className="pic-house">
                  <Image
                    src={Ypp}
                    alt="A delivered Parcel"
                    className="small-gallery__photo"
                  />
                  <figcaption className="small-fig-caption" />
                </figure>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <figure className="pic-house">
                  <Image
                    src={Acpn}
                    alt="A delivered Parcel"
                    className="small-gallery__photo"
                  />
                  <figcaption className="small-fig-caption" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default LandingPage;
