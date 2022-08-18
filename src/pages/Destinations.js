import React, { useState } from 'react';
import DestinationList from '../Components/Destination/DestinationList/DestinationList.js';
import data from '../data/destinations.json';

const Destinations = () => {
  const [destinations, setDestinations] = useState(data);

  return <DestinationList destinations={destinations} />;
};

export default Destinations;
