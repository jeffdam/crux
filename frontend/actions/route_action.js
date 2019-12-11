import * as RouteApiUtil from '../util/route_util';

export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const REMOVE_ROUTE = "REMOVE_ROUTE";
export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ROUTE_ERRORS";

const receiveRoutes = payload => ({
  type: RECEIVE_ROUTES,
  routes: payload.routes || {},
  areas: payload.areas || {}
});

const receiveRoute = payload => ({
  type: RECEIVE_ROUTE,
  routeId: payload.routeId,
  routes: payload.routes,
  author: payload.author,
  area: payload.area
});

const removeRoute = route => ({
  type: REMOVE_ROUTE,
  routeId: route.id
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ROUTE_ERRORS,
  errors: errors
});

export const fetchRoutes = () => dispatch => (
  RouteApiUtil.fetchRoutes()
    .then(routes => dispatch(receiveRoutes(routes)))
);

export const fetchRecentlyAddedRoute = () => dispatch => (
  RouteApiUtil.fetchRecentlyAddedRoute()
    .then(routes => dispatch(receiveRoutes(routes)))
);

export const searchRoutes = searchParams => dispatch => (
  RouteApiUtil.searchRoutes(searchParams)
    .then(routes => dispatch(receiveRoutes(routes)))
);

export const fetchRoute = id => dispatch => (
  RouteApiUtil.fetchRoute(id)
    .then(route => dispatch(receiveRoute(route)))
);

export const createRoute = route => dispatch => (
  RouteApiUtil.createRoute(route)
    .then(route => dispatch(receiveRoute(route)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const updateRoute = route => dispatch => (
  RouteApiUtil.updateRoute(route)
    .then(route => dispatch(receiveRoute(route)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const deleteRoute = id => dispatch => (
  RouteApiUtil.deleteRoute(id)
    .then(route => dispatch(removeRoute(route.id)))
);