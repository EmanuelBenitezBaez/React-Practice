import React from 'react';
import '../style/Testimony.css';


function Testimony(props) {
  return (

    <div className='testimony-container'>
      <img className='testimony-image' src={require(`../images/${props.images}-img.png`)} alt={ `Foto de ${props.images}`} />
      <div className='testimony-text-container'>

        <p className='testimony-name'>
         <strong> {props.name}</strong>  in {props.country} </p>
        <p className='testimony-positions'> {props.positions} at <strong> {props.company} </strong></p>
        <p className='testimony-comment'>"{props.comments} "</p>
      </div>
    </div>

  );
}

export default Testimony;