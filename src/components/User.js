import React from 'react';

export default function Post({user}){
  return (
    <div className="User">
      <h4 className="User-username">
        {user.username}
      </h4>
      <div className="User-info name">
        <span className="tag">Nombre:</span>
        <span>{user.name}</span>
      </div>
      <div className="User-info email">
        <span className="tag">Email:</span>
        <span>{user.email}</span>
      </div>
      <div className="User-info phone">
        <span className="tag">Teléfono:</span>
        <span>{user.phone}</span>
      </div>
      <div className="User-info website">
        <span className="tag">Website:</span>
        <span>{user.website}</span>
      </div>
    </div>
  )
}