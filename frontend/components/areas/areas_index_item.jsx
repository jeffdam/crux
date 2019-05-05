import React from 'react';
import { Link } from 'react-router-dom';

const AreasIndexItem = ({area}) => {
  const subAreas = area.subAreas.slice(0,5).map((subArea,idx) => (
    <Link key={idx} to={`/areas/${subArea.id}`}>
      <li className="area-child">{subArea.name}</li>
    </Link>
  ));

  return (
    <section className="area" key={area.id}>
      <Link className="area-parent" to={`/areas/${area.id}`}>
        {area.name}
      </Link>
      <ul>
        {subAreas}
      </ul>
    </section>
  )
};

export default AreasIndexItem;


