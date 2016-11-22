import React from 'react';
import LoadingSpinner from 'components/common/LoadingSpinner';
import SpeciesTable from 'components/species/SpeciesTable';

class SpeciesPage extends React.Component {
  componentWillMount() {
    if (!this.props.species) {
      this.props.getSpeciesList();
    }
  }

  render() {
    return (
      <div className="l-page row">
        <div className="column">
          <SpeciesTable data={this.props.species} />
        </div>
      </div>
    );
  }
}

SpeciesPage.contextTypes = {
  t: React.PropTypes.func.isRequired
};


SpeciesPage.propTypes = {
  getSpeciesList: React.PropTypes.func.isRequired,
  species: React.PropTypes.any.isRequired // bool or array
};

export default SpeciesPage;
