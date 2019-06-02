import React, { Component } from 'react';

// components
import AboutCard from '../../components/presentationals/AboutCard/AboutCard';
import Button from '../../components/presentationals/Button/Button';
import Footer from '../../components/presentationals/Footer/Footer';
import HeaderTextBox from '../../components/presentationals/HeaderTextBox/HeaderTextBox';
import NavBar from '../../components/presentationals/NavBar/NavBar';
import SecondaryHeading from '../../components/presentationals/SecondaryHeading/SecondaryHeading';
import Gallery from '../../components/presentationals/Gallery/Gallery';
import PartiesRow from '../../components/presentationals/PartiesRow/PartiesRow';
import Popup from '../../components/presentationals/Popup/Popup';

// images
import Apga from '../../resources/img/apga-logo.jpg';
import Ypp from '../../resources/img/ypp.jpg';
import Acpn from '../../resources/img/acpn-logo.jpg';

// styles
import '../../resources/css/vendors/normalize.css';
import '../../resources/css/style.css';
import '../../resources/css/queries.css';

class LandingPage extends Component {
  state = { show: false, authMode: '' };

  signupShowPopup = () => {
    this.setState({ show: true, authMode: 'signup' });
  };

  loginShowPopup = () => {
    this.setState({ show: true, authMode: 'login' });
  };

  hidePopup = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <header className="header">
          <NavBar signupId="pop">
            <ul className="main-nav js--main-nav">
              <li>
                <Button
                  value="Sign up today"
                  signupClassName="btn-signup"
                  onClick={this.signupShowPopup}
                />
              </li>
              <li>
                <Button
                  value="Log in"
                  loginClassName="btn-login"
                  onClick={this.loginShowPopup}
                />
              </li>
            </ul>
            <a className="mobile-nav-icon js--nav-icon">
              <i className="ion-navicon-round" />
            </a>
          </NavBar>
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
          <PartiesRow src={Apga} />
          <PartiesRow src={Ypp} />
          <PartiesRow src={Acpn} />
        </section>
        <Footer />
        <Popup
          show={this.state.show}
          authMode={this.state.authMode}
          handleClose={this.hidePopup}
        />
      </div>
    );
  }
}

export default LandingPage;
