import Buttons from './components/button';
import './App.css';
import Counter from './components/counter';

import logo from './images/logo.png'
import { useState } from 'react';

function App() {


    const [clicksNumber, setClicksNumber] = useState(0);
    //Funcion flecha
    const clicksManager = () => {
        setClicksNumber(clicksNumber + 1);
    }
    //Funcion flecha
    const restartCounter = () => {
        setClicksNumber(0);
    }

    return (
        <div className="App">
            <div className='container-logo'>
                <img className='logo' src={logo}
                    alt='logo de la app calculadora' />
            </div>

            <div className='container-counter'>

                <Counter
                    clicksNumber={clicksNumber}
                />

                <Buttons
                    text='Click'
                    IsBtnClick={true}
                    //Aca decimos, asigna esta funcion a este prop
                    clicksManager={clicksManager}
                />

                <Buttons
                    text='Restart'
                    IsBtnClick={false}
                    clicksManager={restartCounter}
                />


            </div>
        </div>
    );
}

export default App;
