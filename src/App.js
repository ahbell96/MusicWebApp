import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


// components
import Player from './components/player';
import Song from './components/song';

// styles
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Song/>
      <Player/>
    </div>
  );
}

export default App;
