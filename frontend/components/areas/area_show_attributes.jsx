import React from 'react';

const AreaAttributes = (props) => {
  const {area} = props;
  const elevation = Math.floor(Math.random() * 10000);
  const pageViewsMonth = Math.floor(Math.random() * (4 ** ((Math.floor(Math.random() * 10) + 1))));
  const pageViewsTotal = pageViewsMonth * ((Math.floor(Math.random() * 10) + 1) * (Math.floor(Math.random() * 100) + 1));
  
  return (
    <div className="area-show-attributes">
      <ul className="area-show-attribute">
        <li className="area-show-attribute-left">Elevation:</li>
        <li>{elevation} ft</li>
      </ul>
      <ul className="area-show-attribute">
        <li className="area-show-attribute-left">GPS:</li>
        <li>{`${area.latitude.toFixed(3)}, ${area.longitude.toFixed(3)}`} · <a target="_blank" href={`http://maps.google.com/maps?q=${area.latitude},${area.longitude}&t=h&hl=en`}>Google Map</a></li>
      </ul>
      <ul className="area-show-attribute">
        <li className="area-show-attribute-left">Page Views:</li>
        <li>{pageViewsTotal.toLocaleString('en')} total · {pageViewsMonth.toLocaleString('en')}/month</li>
      </ul>
    </div>
  )
}

export default AreaAttributes;