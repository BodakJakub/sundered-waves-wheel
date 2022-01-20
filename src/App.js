import { useEffect, useState } from 'react';
import './App.css';
import wheel from './wheel_ccexpress.png';
import map from './map.jpg';
import mapIcon from './map.png';

function App() {

  const [rotation, setRotation] = useState(0);
  const [step, setStep] = useState(0);
  const [correctAnimation, setCorrectAnimation] = useState('');
  const [mapVisible, setMapVisible] = useState('');

  useEffect(() => {
    if (step === 4) {
      alert('Congratulations, corsairs! Arrr!')
    }
  }, [step])

  const resetWheel = () => {
    setStep(0);
    setRotation(0);
  }

  const playAnimationCorrect = () => {
    //  ('correct');
  }

  const checkWheel = () => {
    setCorrectAnimation('processing');
    switch (step) {
      case 0:
        if (rotation === 360) {
          setStep(step + 1);
          playAnimationCorrect()
        } else {
          resetWheel()
        }
        break;
      
      case 1:
        if (rotation === 180) {
          setStep(step + 1);
          playAnimationCorrect();
        } else {
          resetWheel();
        }
        break;

      case 2:
        if (rotation === 270) {
          setStep(step + 1);
          playAnimationCorrect();
        } else {
          resetWheel();
        }
        break;

      case 3:
        if (rotation === 0) {
          setStep(step + 1);
        } else {
          resetWheel();
        }
        break;
        default:
          resetWheel();
    }
  }

  const showMap = () => {
    setMapVisible(!mapVisible);
  }

  const addRotation = () => {
    setCorrectAnimation('');
    setRotation(rotation + 90);
  };
  const removeRotation = () => {
    setCorrectAnimation('');
    setRotation(rotation - 90);
  };

  return (
    <div className="App">
      <header className="App-header">

        <div className="wheel" style={{transform: `rotate(${rotation}deg)`}}>
          <img src={wheel} className={correctAnimation}  alt="still the wheel" />
        </div>


        <div className="wheelButtons">
          <button onClick={removeRotation}>
            counterclockwise
          </button>

          <button onClick={addRotation}>
            clockwise
          </button>
        </div>

        <div>
          <button onClick={checkWheel}>CHECK THE WHEEL!</button>
        </div>
      </header>

      <div className='mapBtn'>
        <button onClick={showMap}><img src={mapIcon} alt='a map icon'/></button>
      </div>

      {mapVisible && <img className='map' src={map} alt="a map" />}

    </div>
  );
}

export default App;
