import React from 'react';
import PropTypes from 'prop-types';
import './Button.styles.css';

const Button = ({ text, type, color, ...props }) => {
  return (
    <button className={`button ${color ? color : ''}`} type={type} {...props}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  color: '',
};

export default Button;
