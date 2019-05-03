import React from 'react';
import { Link } from 'react-router-dom';

const AreasIndexItem = ({area}) => {
  // debugger
  const subAreas = area.sub_areas.map((subArea,idx) => (
    <Link key={idx} to={`/areas/${subArea.id}`}>
      <li className="area-child">{subArea.name}</li>
    </Link>
  ));

  return (
    <section key={area.id}>
      <Link to={`/areas/${area.id}`}>
        <li className="area-parent" key="TEST">{area.name}</li>
      </Link>
      <ul>
        {subAreas}
      </ul>
    </section>
  )
};

export default AreasIndexItem;

