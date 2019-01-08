import React from 'react';

const Option = ({text, vote}) => <section onClick={vote}>{text}</section>;

export default Option;
