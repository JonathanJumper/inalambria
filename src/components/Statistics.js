import React from 'react';

export default function Statistics({usersLength, timeLapsed}){
  return (
    <div className="Statistics">
      <h4>
        Cantidad de usuarios:
        <br/>
        {usersLength}
      </h4>
      <h4>
        Tiempo de respuesta:
        <br/>
        {timeLapsed} ms
      </h4>
    </div>
  )
}