import React from 'react';

const RouteShowAttributes = (props) => {
  const {route, author} = props;

  const pageViewsMonth = Math.floor(Math.random() * (3 ** ((Math.floor(Math.random() * 10) + 1))));
  const pageViewsTotal = pageViewsMonth * ((Math.floor(Math.random() * 10) + 1) * (Math.floor(Math.random() * 10) + 1));
  
  const convertDate = date => {
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const convertedDate = new Date(date);
    const month = MONTHS[convertedDate.getMonth()];
    return (
      `${month} ${convertedDate.getDate()}, ${convertedDate.getFullYear()}`
    );
  };
    
  const firstAscent = () => {
    if (!(route.firstAscensionist) && !(route.firstAscentDate)) {
      return "Unknown";
    } else if (!(route.firstAscentDate)) {
      return route.firstAscensionist;
    } else {
      return `${route.firstAscensionist} on ${convertDate(route.firstAscentDate)}`
    }
  }
  
  const pitches = route.routeType === "Boulder" ? "" : `, ${ route.pitches } pitches`;
  
  return (
    <div className="area-show-attributes">
      <ul className="area-show-attribute">
        <li className="area-show-attribute-left">Type:</li>
        <li>{`${route.routeType}, ${route.length} ft${pitches}`}</li>
      </ul>
      <ul className="area-show-attribute">
        <li className="area-show-attribute-left">First Ascent:</li>
        <li>{firstAscent()}</li>
      </ul>
      <ul className="area-show-attribute">
        <li className="area-show-attribute-left">Page Views:</li>
        <li>{pageViewsTotal.toLocaleString('en')} total · {pageViewsMonth.toLocaleString('en')}/month</li>
      </ul>
      <ul className="area-show-attribute">
        <li className="area-show-attribute-left">Shared By:</li>
        <li>{author.username} on {convertDate(route.createdAt)}</li>
      </ul>
    </div>
  )
}

export default RouteShowAttributes;