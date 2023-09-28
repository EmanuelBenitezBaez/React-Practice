
import '../style/button-style.css'
function Buttons({text,IsBtnClick,clicksManager}){//Sintaxis de desestructuracion, es diferente de usar props.
return(
    //Evalua si IsBtnClick es verdadera, retorna btn-click. Por el contrario si es falsa devuelve btn-restart.
    <button className={ IsBtnClick? 'btn-click' : 'btn-restart' } 
    //Funcion que se llama cuando ocurra el evento onclick.
    onClick={clicksManager} >   
    
        {text}
    </button>
)

}
export default Buttons;