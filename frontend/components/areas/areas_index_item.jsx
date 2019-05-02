import React from 'react';
import { Link } from 'react-router-dom';

const AreasIndexItem = ({area}) => {
  const subAreas = area.sub_areas.map(subArea => (
    <Link to={`/areas/${subArea.id}`}>
      <li key={`sub-${subArea.id}`} className="area-child">{subArea.name}</li>
    </Link>
  ));

  return (
    <section>
      <Link to={`/areas/${area.id}`}>
        <li key={`area-${area.id}`} className="area-parent">{area.name}</li>
      </Link>
      <ul key={`child-${area.id}`} >
        {subAreas}
      </ul>
    </section>
  )
};

export default AreasIndexItem;


