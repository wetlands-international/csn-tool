import React from 'react';
import PropTypes from 'prop-types';
import TableListHeader from 'containers/advanced-search/TableListHeader';
import TableList from 'components/tables/TableList';

const SearchTable = ({ data, allColumns, columns, category }) => {
  const detailLinkHash = {
    species: 'species',
    ibas: 'sites/iba',
    criticalSites: 'sites/csn',
    populations: null
  };
  const detailLink = detailLinkHash[category];

  return (
    <div id="searchTable">
      <div>
        <TableListHeader
          data={data}
          columns={columns}
          allColumns={allColumns}
          detailLink
        />
      </div>
      <TableList
        data={data}
        columns={columns}
        detailLink={detailLink}
      />
    </div>
  );
};

SearchTable.contextTypes = {
  t: PropTypes.func.isRequired
};

SearchTable.propTypes = {
  allColumns: PropTypes.array.isRequired,
  data: PropTypes.any.isRequired,
  columns: PropTypes.array.isRequired,
  category: PropTypes.string
};

export default SearchTable;
