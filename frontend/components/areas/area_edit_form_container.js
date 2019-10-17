import { connect } from 'react-redux';
import { updateArea, fetchArea } from '../../actions/area_action';
import AreaForm from './area_form';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  let area = state.entities.areas[ownProps.match.params.areaId];
  
  let areaData;
  if (!area) {
    areaData = null;
  } else {
    areaData = {
      id: area.id,
      parent_id: area.parent_id,
      author_id: area.authorId,
      name: area.name,
      description: area.description,
      getting_there: area.gettingThere,
      latitude: area.latitude,
      longitude: area.longitude,
      photos: []
    };
  }
  
  return ({
    parent: state.entities.areas[ownProps.match.params.areaId],
    area: areaData,
    errors: state.errors.area,
    formType: "Update Area",
    currentUser: state.session.id
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchArea: id => dispatch(fetchArea(id)),
    formAction: area => dispatch(updateArea(area)),
    openModal: modal => dispatch(openModal(modal))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(AreaForm);