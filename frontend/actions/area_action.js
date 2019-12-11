import * as AreaApiUtil from '../util/area_util';
export const RECEIVE_AREAS = "RECEIVE_AREAS";
export const RECEIVE_AREA = "RECEIVE_AREA";
export const REMOVE_AREA = "REMOVE_AREA";
export const RECEIVE_AREA_ERRORS = "RECEIVE_AREA_ERRORS";

const receiveAreas = payload => {
  return {
    type: RECEIVE_AREAS,
    areas: payload.areas
  };
};

const receiveArea = payload => {
  return {
  type: RECEIVE_AREA,
  areaId: payload.areaId,
  areas: payload.areas,
  routes: payload.routes,
  author: payload.author
  };
};

const removeArea = area => ({
  type: REMOVE_AREA,
  areaId: area.id
});

const receiveErrors = (errors) => ({
  type: RECEIVE_AREA_ERRORS,
  errors: errors
});

export const fetchAreas = () => dispatch => (
  AreaApiUtil.fetchAreas()
    .then(areas => dispatch(receiveAreas(areas)))
);

export const fetchArea = id => dispatch => (
  AreaApiUtil.fetchArea(id)
    .then(area => dispatch(receiveArea(area)))
);

export const createArea = area => dispatch => (
  AreaApiUtil.createArea(area)
    .then(area => dispatch(receiveArea(area)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const updateArea = area => dispatch => (
  AreaApiUtil.updateArea(area)
    .then(area => dispatch(receiveArea(area)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const deleteArea = id => dispatch => (
  AreaApiUtil.deleteArea(id)
    .then(area => dispatch(removeArea(area.id)))
);