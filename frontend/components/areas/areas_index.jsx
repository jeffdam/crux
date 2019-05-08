import React from 'react';
import AreasIndexItem from './areas_index_item';

class AreasIndex extends React.Component {
  
  componentDidMount(){
    this.props.fetchAreas();
  }

  render() {
    const { areas } = this.props;

    if (!areas[1]) return null;
    
    const parent_areas = areas.map((area, idx) => (
        <AreasIndexItem key={idx} area={area} />
    ))
    
    let totalRouteCount = 0;
    areas.forEach(area => {
      totalRouteCount += area.routeCount;
    })     
    
    return (
      <div className="area-index-page main-width main-padding ">
        <div className="area-index-header blue-line flex-row">
          <h2 >Rock Climbing Guide</h2>
          <p>{totalRouteCount.toLocaleString()} Routes Shared by Climbers Like You</p>
        </div>
        <div className="area-index-list">
          {parent_areas}
        </div>
      </div>
    )
  }
}

export default AreasIndex; 