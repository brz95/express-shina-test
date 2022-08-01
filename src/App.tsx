import React, { useState } from 'react';
import styles from './app.module.scss';
import Sidebar from './components/Sidebar';
import MapComponent from './components/Map';
import data from './data/state.json';
import { Coordinates, IPoints } from './types';

const App = () => {
  const places: IPoints[] = data.pickPoints;
  const [coordinate, setCoordinate] = useState<Coordinates>();
  const [zoom, setZoom] = useState(5);

  return (
    <div className={styles.app}>
      <Sidebar setCoordinate={setCoordinate} setZoom={setZoom} places={places} />
      <MapComponent coordinate={coordinate} zoom={zoom} />
    </div>
  );
};

export default App;
