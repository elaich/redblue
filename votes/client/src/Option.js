import React from 'react';

const Option = ({text, voted, ...props}) => (
  <button {...props}>
    <h1>
      {text}
      {voted ? <i className="far fa-check-circle" /> : ''}
    </h1>
  </button>
);

export default Option;
