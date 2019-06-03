import React, { Component } from 'react';

// Components
import NavBar from '../../components/presentationals/NavBar/NavBar';
import ElectionResultList from '../../components/containers/ElectionResultList/ElectionResultList';

class ElectionResults extends Component {
  buttonText = {
    first: 'View Aspirants',
    second: 'View Political Parties',
    third: 'Back to my profile',
  };
  render() {
    return (
      <div className="results-page">
        <header className="profile-header">
          <NavBar
            className="navs"
            buttonText={this.buttonText}
            buttonLeads3="/profile"
          />
        </header>

        <main className="results-pf">
          <div className="results-profile__outer">
            <div>
              <div className="user-zone">
                <div className="user-classification">
                  <h3 className="result-kind">All Winners</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="results-profile__lower">
            <div className="notice-board tertiary-textbox">
              <h1 className="heading-tertiary u-margin-bottom-small">&nbsp;</h1>
            </div>
            <ElectionResultList />
          </div>
        </main>
      </div>
    );
  }
}

export default ElectionResults;
