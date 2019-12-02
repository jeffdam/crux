export const getRouteFormErrors = errors => {
  const errorsObj = {
    name: "",
    route: "",
    grade: "",
    safety: "",
    length: "",
    pitches: "",
    protection: "",
    description: "",
    location: ""
  };

  errors.forEach(error => {
    if (error.includes("Name")) {
      errorsObj.name = error;
    } else if (error.includes("Route")) {
      errorsObj.route = error;
    } else if (error.includes("grade")) {
      errorsObj.grade = error;
    } else if (error.includes("Safety")) {
      errorsObj.safety = error;
    } else if (error.includes("Length")) {
      errorsObj.length = error;
    } else if (error.includes("Pitches")) {
      errorsObj.pitches = error;
    } else if (error.includes("Protection")) {
      errorsObj.protection = error;
    } else if (error.includes("Description")) {
      errorsObj.description = error;
    } else if (error.includes("Location")) {
      errorsObj.location = error;
    }
  });

  return errorsObj;
};