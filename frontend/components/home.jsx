import React from 'react';
import AreasIndexContainer from './areas/areas_index_container';
import AreasIndexHeader from './areas/areas_index_header';
import RouteFinderForm from './routes/route_finder/route_finder_form';


const Home = () => (
  <section>
    <AreasIndexHeader />
    <div className="home-header">
      <div>
        <h3>Route Finder</h3>
        <p>Tell us what you like, we'll tell you what to climb!</p>
        <RouteFinderForm />
      </div>
    </div>
    <AreasIndexContainer />
  </section>
);

export default Home;
