import React from 'react';
import PropTypes from 'prop-types';

// components
import Image from '../Image/Image';

// Images
import RepresentativeSeal from '../../../resources/img/representatives-seal.png';
import SenateSeal from '../../../resources/img/senate-seal.png';
import PresidencySeal from '../../../resources/img/presidency-seal.png';
import ThumbPrint from '../../../resources/img/thumb.png';

const AboutCard = props => {
  return (
    <div className="card-about">
      {props.children}
      <div className="row">
        <div className="col-1-of-2">
          <div className="composition">
            &nbsp;
            <Image
              src={RepresentativeSeal}
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
            />
            <Image
              src={SenateSeal}
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
            />
            <Image
              src={PresidencySeal}
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="tertiary-textbox">
            <h1 className="heading-tertiary u-margin-bottom-small">
              <figure className="pic-house">
                <Image
                  src={ThumbPrint}
                  alt="A thumb print"
                  className="tertiary__photo"
                />
                <figcaption className="small-fig-caption" />
              </figure>
              Vote <br />
              and be <br />
              voted for!
            </h1>
          </div>
          <ul className="bulleted">
            <li>President</li>
            <li>Governor</li>
            <li>Legislator</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

AboutCard.propTypes = {
  children: PropTypes.any,
};

export default AboutCard;
