import { connect } from 'react-redux';
import CountriesTable from 'components/countries/CountriesTable';

function getCountryColums(category) {
  switch (category) {
    case 'species':
      return ['scientific_name', 'english_name', 'populations', 'genus', 'family'];
    case 'populations':
      return ['scientific_name', 'english_name', 'populations', 'genus', 'family'];
    default:
      return ['site_name', 'protection_status', 'iba', 'csn'];
  }
}

function getCountryData(countries, columns) {
  const data = countries[countries.selectedCategory] && countries[countries.selectedCategory][countries.selected]
    ? countries[countries.selectedCategory][countries.selected]
    : false;

  if (!data || !countries.searchFilter) return data;

  const newData = data.map((a) => Object.assign({}, a));

  const filteredData = newData.filter((item) => {
    let match = false;
    const searchFilter = countries.searchFilter.toLowerCase();

    for (let i = 0, cLength = columns.length; i < cLength; i++) {
      if (typeof item[columns[i]] === 'string' && item[columns[i]].toLowerCase().indexOf(searchFilter) >= 0) {
        item[columns[i]] = item[columns[i]].toLowerCase().replace(searchFilter, `<span>${searchFilter}</span>`);
        match = true;
        break;
      }
    }
    return match;
  });

  return filteredData;
}

const mapStateToProps = (state) => {
  const columns = getCountryColums(state.countries.selectedCategory);
  return {
    country: state.countries.selected,
    category: state.countries.selectedCategory,
    data: getCountryData(state.countries, columns),
    columns
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CountriesTable);
