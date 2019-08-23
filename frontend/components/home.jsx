import React from 'react';
import AreasIndexContainer from './areas/areas_index_container';
import AreasIndexHeader from './areas/areas_index_header';
import RouteFinderForm from './routes/route_finder/route_finder_form';


const Home = () => (
  <section>
    <AreasIndexHeader />
    <div className="home-header">
      <div>
        <RouteFinderForm />
      </div>
    </div>
    <AreasIndexContainer />
  </section>
);

export default Home;
