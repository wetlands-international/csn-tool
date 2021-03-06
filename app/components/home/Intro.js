import React from 'react';
import PropTypes from 'prop-types';
import NavLink from 'containers/common/NavLink';

function Intro(props, context) {
  return (
    <div className="l-upper row">
      <div className="column small-12">
        <h2 className="header inv -intro -center">{context.t('toolUse')}</h2>
      </div>
      <ul className="column small-12 c-use-cases">
        <li className="column small-12 medium-4 use">
          <NavLink to={"/countries"}>
            <svg>
              <use xlinkHref="#illustration-1"></use>
            </svg>
          </NavLink>
          <h3><NavLink to={"/countries"} className="header -intro">{context.t('searchForCountry')}<br />{context.t('seeOccurringSpecies')}</NavLink></h3>
        </li>
        <li className="column small-12 medium-4 use">
          <NavLink to={"/sites"}>
            <svg>
              <use xlinkHref="#illustration-2"></use>
            </svg>
          </NavLink>
          <h3><NavLink to={"/sites"} className="header -intro">{context.t('seeTheData')}<br />{context.t('forParticularSite')}</NavLink></h3>
        </li>
        <li className="column small-12 medium-4 use">
          <NavLink to={"/species"}>
            <svg>
              <use xlinkHref="#illustration-3"></use>
            </svg>
          </NavLink>
          <h3><NavLink to={"/species"} className="header -intro">{context.t('searchForSpecies')}<br />{context.t('seeCriticalSites')}</NavLink></h3>
        </li>
      </ul>
      <div className="column small-12 medium-6 medium-offset-3">
        <p className="text -intro">{context.t('introText1')}</p>
        <p className="text -intro">{context.t('introText2')}</p>
      </div>
    </div>
  );
}

Intro.contextTypes = {
  // Define function to get the translations
  t: PropTypes.func.isRequired
};

export default Intro;
