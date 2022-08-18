import React from 'react';
import DestinationItem from '../DestinationItem/DestinationItem.js';

const DestinationList = (props) => {
  return (
    <div>
      {props.destinations.map((d) => (
        <DestinationItem key={d.id} d={d} />
      ))}
    </div>
  );
};

export default DestinationList;
