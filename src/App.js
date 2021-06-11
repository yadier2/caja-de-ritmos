import React from 'react'

import { sounds } from './components/Sonido'
import {Drumpad} from './components/Drumpad'


const App = () => {

  return (
    <>
    <h1 className="m-3">Drum Machine</h1>
    <div id="drum-machine" className="container">
      <div id="display" className="display ">
      <h1>Play a sound</h1>
        {
          sounds.map((sound, idx) => (
            <Drumpad text={sound.key} key={idx} sound={sound.url} />
          ))
        }
      </div>
    </div>
    </>
  )
}

export default App
