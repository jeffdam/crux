import React from 'react';
import { Link } from 'react-router-dom';

const AreaShowPhotos = ({photos}) => {


  const photosList = photos.map(photoUrl => {
    return (
      <img className="show-photo" src={photoUrl} alt="test"/>
    )
  })

  return (
    <>
      <h2>Photos</h2>
      <ul className="show-photos">
        {photosList}
      </ul>
    </>
  )
}

export default AreaShowPhotos;