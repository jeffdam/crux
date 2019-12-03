export const fetchRoutes = () => (
  $.ajax({
    method: "GET",
    url: "/api/routes",
  })
);

export const fetchRoute = id => (
  $.ajax({
    method: "GET",
    url: `/api/routes/${id}`,
  })
);

export const fetchRecentlyAddedRoute = () =>
  $.ajax({
    method: "GET",
    url: `/api/routes/recently_added_routes`,
  });
  
export const searchRoutes = searchParams => {
  return $.ajax({
    method: "GET",
    url: `/api/routes/route_finder`,
    data: searchParams,
  });
};

// export const searchRoutes = searchParams => (
//   $.ajax({
//     method: "GET",
//     url: `/api/routes/route_finder`,
//     data: searchParams,
//     contentType: false,
//     processData: false
//   })
// );

export const createRoute = formData => (
  $.ajax({
    method: "POST",
    url: `/api/routes/`,
    data: formData,
    contentType: false,
    processData: false
  })
);

export const updateRoute = formData => (
  $.ajax({
    method: "PATCH",
    url: `/api/routes/${formData.get('route[id]')}`,
    data: formData,
    contentType: false,
    processData: false
  })
);

export const deleteRoute = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/routes/${id}`,
  })
);