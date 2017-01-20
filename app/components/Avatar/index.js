/**
 *
 * Img.react.js
 *
 * Renders an image within a figure, enforcing the usage of the alt="" tag on img
 */

import React, { PropTypes } from 'react';

import StyledImg from './StyledImg';
import StyledFigure from './StyledFigure';


function Avatar(props) {
  return (
    <StyledFigure>
      <StyledImg
        src={ props.src }
        alt={ props.alt }
        title={ props.title }
      />
    </StyledFigure>
  );
}

// We require the use of src and alt, only enforced by react in dev mode
Avatar.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Avatar;
