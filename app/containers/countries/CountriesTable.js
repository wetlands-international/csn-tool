import { connect } from 'react-redux';
import CountriesTable from 'components/countries/CountriesTable';

function getCountryColums(category) {
  switch (category) {
    case 'species':
      return ['scientific_name', 'english_name', 'iucn_category',
        'country_status'];
    case 'populations':
      return ['scientific_name', 'english_name', 'iucn_category', 'populations',
        'a', 'b', 'c', 'table_1_status', 'flyway_range', 'year_start',
        'year_end', 'size_min', 'size_max', 'ramsar_criterion'];
    case 'sitesOld':
      return ['site_name', 'protection_status', 'iba', 'csn', 'iba_species',
        'csn_species', 'total_percentage'];
    case 'lookAlikeSpecies':
      return ['original_species', 'populations', 'original_a', 'original_b',
        'original_c', 'confusion_species', 'confusion_population', 'a', 'b', 'c'];
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
    const modItem = item;
    const searchFilter = countries.searchFilter.toLowerCase();

    for (let i = 0, cLength = columns.length; i < cLength; i++) {
      if (typeof modItem[columns[i]] === 'string' && modItem[columns[i]].toLowerCase().indexOf(searchFilter) >= 0) {
        modItem[columns[i]] = modItem[columns[i]].toLowerCase().replace(searchFilter, `<span class="filtered">${searchFilter}</span>`);
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
