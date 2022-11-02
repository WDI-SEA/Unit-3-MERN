import React from 'react';
import {useParams, useMatch} from 'react-router-dom';
// import this
import './Logo.css';

function Logo(props) {
  let params = useParams()
  console.log(params)

  return (
      <div className='Logo'>
        <h2>{params.id}</h2>

        Logo
      </div>
  );
}

export default Logo;