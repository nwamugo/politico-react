import React, { Component } from 'react';

// Components
import NavBar from '../../components/presentationals/NavBar/NavBar';
// import ElectionResultList from '../../components/containers/ElectionResultList/ElectionResultList';

class ElectionResults extends Component {
  render() {
    return (
      <div className="results-page">
        <header className="profile-header">
          <NavBar className="navs" />
        </header>

        {/* <main className="results-pf">
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
               <h1 className="heading-tertiary u-margin-bottom-small">
                 &ldquo;The General Elections took place and concluded on the 5th
                 of March, 2019 with the emergent winners!&rdquo;
               </h1>
             </div>
             <div className="presidential-spot">
               <div className="result__top">
                 <h3 className="result-heading">Presidential Winner</h3>
               </div>
               <figure>
                 <img
                  src="resources/img/kingsley-moghalu.jpg"
                  alt="The author of this site"
                  className="profile-img"
                />
                <figcaption className="" />
              </figure>
              <div className="presidential-details">
                <div className="parcel-analysis same-line">
                  <h4 className="property-name user-property">Name: &nbsp;</h4>
                  <span className="property-value user-value">
                    kingsley Moghalu
                  </span>
                </div>
                <div className="parcel-analysis same-line">
                  <h4 className="property-name user-property">Party: &nbsp;</h4>
                  <span className="property-value user-value">
                    Young Progressive Party
                  </span>
                </div>
              </div>
            </div>
            <div className="gubernatorial-spot">
              <div className="result__top">
                <h3 className="result-heading">Gubernatorial Winners</h3>
              </div>
              <div className="governors__list">
                <ElectionResultList />
              </div>
            </div>
            <div className="legislative-spot">
              <div className="result__top">
                <h3 className="result-heading">Legislative Winners</h3>
              </div>
              <table id="legislators">
                <tr>
                  <th>Name</th>
                  <th>Political zone</th>
                  <th>Party</th>
                </tr>
                <tr>
                  <td>Bukola Saraki</td>
                  <td>Kwara Central</td>
                  <td>PDP</td>
                </tr>
                <tr>
                  <td>Ike Ekweremadu</td>
                  <td>Enugu North</td>
                  <td>PDP</td>
                </tr>
                <tr>
                  <td>Dino Melay</td>
                  <td>Kogi East</td>
                  <td>ANCP</td>
                </tr>
                <tr>
                  <td>Ben Bruce</td>
                  <td>Bayelsa Central</td>
                  <td>YPP</td>
                </tr>
                <tr>
                  <td>Shehu Sani</td>
                  <td>Kaduna South</td>
                  <td>YDP</td>
                </tr>
                <tr>
                  <td>Ademola Adeleke</td>
                  <td>Kwara West</td>
                  <td>PDP</td>
                </tr>
                <tr>
                  <td>Godswill Obot Akpabio</td>
                  <td>Akwa Ibom North East</td>
                  <td>APC</td>
                </tr>
                <tr>
                  <td>Rilwan Akanbi</td>
                  <td>Oyo South</td>
                  <td>APC</td>
                </tr>
                <tr>
                  <td>Gibert Nnaji</td>
                  <td>Enugu East</td>
                  <td>PDP</td>
                </tr>
                <tr>
                  <td>Nelson Asuquo Effiong</td>
                  <td>Akwa Ibom South</td>
                  <td>YPP</td>
                </tr>
              </table>
            </div>
          </div>
        </main> */}
      </div>
    );
  }
}

export default ElectionResults;
