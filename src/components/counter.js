
import '../style/counter-style.css'
function Counter({ clicksNumber }){//Sintaxis de desestructuracion, es diferente de usar props.
    return(
       <div className='counter'>
        {clicksNumber}

       </div>
    );
    
    }
    export default Counter;