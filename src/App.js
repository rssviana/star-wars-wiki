import React from 'react';
import { useState, useEffect } from 'react';
import Space from './components/space/Space';
import InfoPlanet from './components/infoPlanet/InfoPlanet';
import Loading from './components/loading/Loading';
import Feedback from './components/feedback/Feedback';
import Buttons from './components/buttons/Buttons';

function App() {

  const BASE_URL = 'https://swapi.co/api/planets';
  const [ currentPlanet, setCurrentPlanet ] = useState(1);
  const [ error, setError ] = useState(null);
  const [ isLoading, setLoading ] = useState(true);
  const [ planet, setPlanet ] = useState(null);



  const handleSetPlanet = data => { setPlanet(data) }

  const incCurrentPlanet = () => {
    if( currentPlanet < 61 ) setCurrentPlanet(currentPlanet + 1) 
  } 
  
  const decCurrentPlanet = () => {
    if(currentPlanet !== 1 ) setCurrentPlanet(currentPlanet - 1)
  } 



  useEffect(() => {
    setLoading(true)

    fetch(`${BASE_URL}/${currentPlanet}`)
      .then(res => res.json())
      .then(data => handleSetPlanet(data))
      .catch(err => { setError(err) })

    setLoading(false)
  }
  , [currentPlanet])



  return (
    <>
      { error 
        ? <Feedback type='error' messager={error.message}/>
        : isLoading 
          ? ( <Loading /> ) 
          : (<div className='StarWarsWiki'>
              <Space />
              { planet !== null && (
                <>
                  <InfoPlanet {...planet} />
                  <Buttons 
                    inc={incCurrentPlanet} 
                    dec={decCurrentPlanet} 
                  />
                </>
              )}
            </div>
          )
      }
    </>
    
  );
}

export default App;
