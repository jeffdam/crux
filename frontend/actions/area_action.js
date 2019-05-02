import * as AreaApiUtil from '../util/area_util';

export const RECEIVE_AREAS = "RECEIVE_AREAS";
export const RECEIVE_AREA = "RECEIVE_AREA";
export const REMOVE_AREA = "REMOVE_AREA";

const receiveAreas = areas => ({
  type: RECEIVE_AREAS,
  areas
});

const receiveArea = area => ({
  type: RECEIVE_AREA,
  area
});

const removeArea = area => ({
  type: REMOVE_AREA,
  areaId: area.id
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
);

export const updateArea = area => dispatch => (
  AreaApiUtil.updateArea(area)
    .then(area => dispatch(receiveArea(area)))
);

export const deleteArea = id => dispatch => (
  AreaApiUtil.deleteArea(id)
    .then(area => dispatch(removeArea(area.id)))
);

window.fetchAreasThunk = fetchAreas;