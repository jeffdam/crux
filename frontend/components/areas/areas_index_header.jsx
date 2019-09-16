import React from 'react';
import RouteFinderForm from '../routes/route_finder/route_finder_form';
import RouteNewListContainer from '../routes/route_header/route_new_list_container';
import MainCarousel from '../main/main-carousel';

const AreasIndexHeader = props => {
  
  return (
    <div className="main-width area-index-header">
      <MainCarousel photos={Object.values(window.images.slideshow)} />     
      <div>
        <h3>Route Finder</h3>
        <p>Tell us what you like, we'll tell you what to climb!</p>
        <RouteFinderForm />
      </div>
      <RouteNewListContainer />
    </div>
  )
};

export default AreasIndexHeader;