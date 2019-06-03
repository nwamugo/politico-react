import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import ElectedOfficial from '../../presentationals/ElectedOfficial/ElectedOfficial';

//actions
import { getElectionResultRequest } from '../../../store/modules/results';
import { getAllOfficesRequest } from '../../../store/modules/offices';

export class ElectionResultList extends Component {
  componentDidMount() {
    this.props.getElectionResultRequest(8, history);
    if (!this.props.offices) this.props.getAllOfficesRequest();
  }

  render() {
    const { results, isLoading, offices } = this.props;
    console.log('electionsList', results);
    console.log('officesList', offices);

    let resultsList;

    if (results && offices) {
      resultsList = results.map(result => {
        const theOffice = offices[0].allOffices.find(
          office => office.id === result.office,
        );
        console.log('ahem', result.office, theOffice);
        return <ElectedOfficial key={result.id} theOffice={theOffice} />;
      });
    }
    return <div>{resultsList}</div>;
  }
}

ElectionResultList.propTypes = {
  getElectionResultRequest: PropTypes.func,
  getAllOfficesRequest: PropTypes.func,
  results: PropTypes.array,
  offices: PropTypes.array,
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
  results: state.results.results.data,
  isLoading: state.results.isLoading,
  offices: state.offices.offices.data,
});

export default connect(
  mapStateToProps,
  { getElectionResultRequest, getAllOfficesRequest },
)(ElectionResultList);
