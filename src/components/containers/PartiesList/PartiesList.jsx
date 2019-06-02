import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { getAllPartiesRequest } from '../../../store/modules/parties';
import PartiesCard from '../../presentationals/PartyCard/PartyCard';

class PartiesList extends Component {
  componentDidMount() {
    this.props.getAllPartiesRequest();
  }

  render() {
    const { parties, isLoading } = this.props;
    console.log('dont know', parties, isLoading);

    let partiesList;

    if (parties) {
      partiesList = parties[0].allParties.map(party => {
        console.log('ahem', party);
        return (
          <PartiesCard
            key={party.id}
            name={party.name}
            headquarters={party.hq_address}
            logoUrl={party.logo_url}
          />
        );
      });
    }
    return <div>{partiesList}</div>;
  }
}

PartiesList.propTypes = {
  parties: PropTypes.array,
  getAllPartiesRequest: PropTypes.func,
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
  parties: state.parties.parties.data,
  isLoading: state.parties.isLoading,
});

export default connect(
  mapStateToProps,
  { getAllPartiesRequest },
)(withRouter(PartiesList));
