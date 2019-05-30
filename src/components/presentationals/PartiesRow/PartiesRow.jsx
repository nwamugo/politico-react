import React from 'react';
import PropTypes from 'prop-types';

const PartiesRow = ({ src }) => {
  return (
    <div className="row parties">
      <div className="col-1-of-3">
        <div className="card">
          <figure className="pic-house">
            <img
              src={src}
              alt="A political party"
              className="small-gallery__photo"
            />
            <figcaption className="small-fig-caption" />
          </figure>
        </div>
      </div>
    </div>
  );
};

PartiesRow.propTypes = {
  src: PropTypes.string,
};

export default PartiesRow;
