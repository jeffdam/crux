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
        
    
    return (
      <div className="area-index-page main-width main-padding ">
        <h2 className="blue-line">Rock Climbing Guide</h2>
        <div className="area-index-list">
          {parent_areas}
        </div>
      </div>
    )
  }
}

export default AreasIndex; 