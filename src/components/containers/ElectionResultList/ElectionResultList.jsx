// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// // Components
// import ElectedOfficial from '../../presentationals/ElectedOfficial/ElectedOfficial';

// //actions
// import { getElectionResultRequest } from '../../../store/modules/results';

// export class ElectionResultList extends Component {
//   componentDidMount() {
//     this.props.getElectionResultRequest(officeId, history);
//   }

//   render() {
//     // const { results, isLoading } = this.props;
//     // console.log('electionsList', results);

//     // let resultsList;

//     // if (results) {
//     //   resultsList = results.map(result => {
//     //     console.log('ahem', result);
//     //     return <ElectedOfficial key={result.id} />;
//     //   });
//     // }
//     return <div>{resultsList}</div>;
//   }
// }

// ElectionResultList.propTypes = {
//   getElectionResultRequest: PropTypes.func,
// };

// const mapStateToProps = state => ({
//   results: state.results,
//   isLoading: state.results.isLoading,
// });

// export default connect(
//   mapStateToProps,
//   { getElectionResultRequest },
// )(ElectionResultList);
