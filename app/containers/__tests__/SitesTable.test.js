/* global expect, jest */
import { mount } from 'enzyme';
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import SitesTable from 'containers/sites/SitesTable';
import SitesTableComponent from 'components/sites/SitesTable';

const setup = () => {
  const standard = {
    filter: 'iba',
    allColumns: ['country', 'english_name', 'population', 'genus', 'family'],
    columns: ['country', 'english_name', 'population', 'genus', 'family'],
    list: {
      hasMore: false,
      data: [
        { country: 'Albania' },
        { country: 'England' }
      ]
    }
  };

  const state = {
    sites: standard
  };

  const store = {
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => (
      { ...state }
    )
  };

  const enzymeWrapper = mount(
    <Provider store={store}>
      <SitesTable />
    </Provider>, {
      context: { t: jest.fn() },
      childContextTypes: {
        t: PropTypes.func
      }
    }
  );

  return {
    state,
    store,
    enzymeWrapper,
    standard
  };
};

describe('containers', () => {
  describe('SitesTable', () => {
    it('should render', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('#sitesTable').length).toBeGreaterThan(0);
    });

    it('should filter search results when the filter is empty', () => {
      const { enzymeWrapper, standard } = setup();
      expect(enzymeWrapper.find(SitesTableComponent).props().list.data).toEqual(standard.list.data);
    });
  });
});
