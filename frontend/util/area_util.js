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

export const createArea = formData => (
  $.ajax({
    method: "POST",
    url: `/api/areas/`,
    data: formData,
    contentType: false,
    processData: false
  })
);

export const updateArea = formData => (
  $.ajax({
    method: "PATCH",
    url: `/api/areas/${formData.get('area[id]')}`,
    data: formData,
    contentType: false,
    processData: false
  })
);

export const deleteArea = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/areas/${id}`,
  })
);