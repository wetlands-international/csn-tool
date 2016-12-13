import { GET_SPECIES_STATS, GET_SPECIES_LIST, GET_SPECIES_SITES, GET_SPECIES_POPULATION,
  GET_SPECIES_THREATS, GET_SPECIES_HABITATS, SET_SPECIES_DETAIL_PARAMS,
  SET_SPECIES_DETAIL_SEARCH, GET_SPECIES_LAYER, TOGGLE_SPECIES_LAYER } from 'constants';

const initialState = {
  list: false,
  selected: '',
  selectedCategory: 'sites',
  searchFilter: '',
  stats: {},
  sites: {},
  population: {},
  threats: {},
  habitats: {},
  layers: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SPECIES_DETAIL_PARAMS: {
      const params = {
        selected: action.payload.id,
        selectedCategory: action.payload.category
      };
      return Object.assign({}, state, params);
    }
    case SET_SPECIES_DETAIL_SEARCH:
      return Object.assign({}, state, { searchFilter: action.payload });
    case GET_SPECIES_STATS:
      return Object.assign({}, state, { stats: action.payload });
    case GET_SPECIES_LIST:
      return Object.assign({}, state, { list: action.payload });
    case GET_SPECIES_SITES: {
      const data = Object.assign({}, state.sites, {});
      data[action.payload.id] = action.payload.data.error
        ? []
        : action.payload.data;
      return Object.assign({}, state, { sites: data });
    }
    case GET_SPECIES_POPULATION: {
      const data = Object.assign({}, state.population, {});
      data[action.payload.id] = action.payload.data;
      return Object.assign({}, state, { population: data });
    }
    case GET_SPECIES_THREATS: {
      const data = Object.assign({}, state.threats, {});
      data[action.payload.id] = action.payload.data;
      return Object.assign({}, state, { threats: data });
    }
    case GET_SPECIES_HABITATS: {
      const data = Object.assign({}, state.habitats, {});
      data[action.payload.id] = action.payload.data;
      return Object.assign({}, state, { habitats: data });
    }
    case GET_SPECIES_LAYER: {
      const data = Object.assign({}, state.threats, {});
      data[action.payload.id] = action.payload.data;
      return Object.assign({}, state, { layers: data });
    }
    case TOGGLE_SPECIES_LAYER: {
      // We need inmutable array to change the state
      // http://vincent.billey.me/pure-javascript-immutable-array
      const layers = [...state.layers[state.selected]];
      for (let i = 0, layersLength = layers.length; i < layersLength; i++) {
        if (layers[i].slug === action.payload) {
          layers[i].active = !layers[i].active;
          break;
        }
      }
      const selected = {};
      selected[state.selected] = layers;
      return Object.assign({}, state, { layers: selected });
    }
    default:
      return state;
  }
}
