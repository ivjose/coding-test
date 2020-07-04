import React from 'react';
import PropTypes from 'prop-types';
import './ErrorDisplay.styles.css';

const ErrorDisplay = ({ message, ...props }) => {
  return (
    <div className="error-display" {...props}>
      {message}
    </div>
  );
};

ErrorDisplay.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorDisplay;
