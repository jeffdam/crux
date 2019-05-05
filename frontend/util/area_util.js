export const fetchAreas = () => (
  $.ajax({
    method: "GET",
    url: "/api/areas",
  })
);

export const fetchArea = id => (
  $.ajax({
    method: "GET",
    url: `/api/areas/${id}`,
  })
);

export const createArea = area => (
  $.ajax({
    method: "POST",
    url: `/api/areas/`,
    data: {area}
  })
);

export const updateArea = area => (
  $.ajax({
    method: "PATCH",
    url: `/api/areas/${area.id}`,
    data: {area}
  })
);

export const deleteArea = id => (
  $.ajax({
    method: "GET",
    url: `/api/areas/${id}`,
  })
);

window.fetchAreas = fetchAreas;