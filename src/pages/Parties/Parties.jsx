import React, { Component } from 'react';

// Components
import NavBar from '../../components/presentationals/NavBar/NavBar';
import PartiesList from '../../components/containers/PartiesList/PartiesList';

class Parties extends Component {
  render() {
    return (
      <div className="parties-page">
        <header className="profile-header">
          <NavBar className="navs" />
        </header>
        <section className="section-parties" id="parties">
          <div className="row">
            <h2 className="heading-secondary meet u-margin-top-big">
              Nigeria&apos;s Political Parties
            </h2>
          </div>
          <div className="row">
            <PartiesList />
          </div>
          <div>&nbsp;</div>
        </section>
      </div>
    );
  }
}

export default Parties;
