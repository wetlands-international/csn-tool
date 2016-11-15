import React from 'react';
import { Link } from 'react-router';

function NavLink(props, context) {
  return (
    <Link className={props.button ? 'btn' : ''} to={`/${props.lang}${props.to}`}>
      {props.i18nText
        ? context.t(props.i18nText)
        : props.text
      }
    </Link>
  );
}

NavLink.contextTypes = {
  // Define function to get the translations
  t: React.PropTypes.func.isRequired
};

NavLink.propTypes = {
  // Define if the link should look like a button
  button: React.PropTypes.bool,
  // Define the language selected
  lang: React.PropTypes.string.isRequired,
  // Define the link to go
  to: React.PropTypes.string.isRequired,
  // Define the text to show
  text: React.PropTypes.string,
  // Define the text to show translated
  i18nText: React.PropTypes.string
};

export default NavLink;