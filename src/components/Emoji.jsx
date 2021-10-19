import React from 'react';
import PropTypes from 'prop-types';

export default function Emoji({ label, backgroundColor, onClick }) {
  return (
    <button onClick={onClick}
    style={backgroundColor && { backgroundColor }}>
      {label}
    </button>
  );
}

Emoji.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Emoji.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};