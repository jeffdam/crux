import React from 'react';
import AreasIndexItem from './areas_index_item';

class AreasIndex extends React.Component {
  
  componentDidMount(){
    this.props.fetchAreas();
  }

  render() {
    const parent_areas = this.props.areas.map(area => (
      <AreasIndexItem area={area} />
    ));

    return (
      <div className="area-index-main">
        <h1>Rock Climbing Guide</h1>
        <div className="bluebar">{" "}</div>
        <ul className="area-index-list">
          {parent_areas}
        </ul>
      </div>
    )
  }
}

export default AreasIndex;