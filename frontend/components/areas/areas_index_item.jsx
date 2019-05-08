import React from 'react';
import { Link } from 'react-router-dom';

const AreasIndexItem = ({area}) => {
  const subAreas = area.subAreas.map((subArea,idx) => (


    <li key={idx} className="area-child area-index-row">
      <Link key={idx} to={`/areas/${subArea.id}`}>{subArea.name}</Link>
      <div className="area-index-dotted-border"></div>
      <div className="area-count">{subArea.routeCount}</div>
    </li>
    
  ));

  return (
    <section className="area" key={area.id}>
        <div className="area-index-row">
          <Link className="area-parent" to={`/areas/${area.id}`}>{area.name}</Link>
          <div className="area-index-dotted-border"></div>
        <div className="area-count">{area.routeCount}</div>
        </div>
      
      <ul>
        {subAreas}
      </ul>
    </section>
  )
};

export default AreasIndexItem;


