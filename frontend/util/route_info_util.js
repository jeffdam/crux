export const ROPE_GRADES = [
  "5.0", "5.1", "5.2", "5.3", "5.4", "5.5", "5.6", 
  "5.7-", "5.7", "5.7+", "5.8-", "5.8", "5.8+", "5.9-", "5.9", "5.9+", 
  "5.10a", "5.10-", "5.10a/b", "5.10b", "5.10b/c", "5.10c", "5.10+", "5.10c/d", "5.10d",  
  "5.11a", "5.11-", "5.11a/b", "5.11b", "5.11b/c", "5.11c", "5.11+", "5.11c/d", "5.11d", 
  "5.12a", "5.12-", "5.12a/b", "5.12b", "5.12b/c", "5.12c", "5.12+", "5.12c/d", "5.12d",  
  "5.13a", "5.13-", "5.13a/b", "5.13b", "5.13b/c", "5.13c", "5.13+", "5.13c/d", "5.13d",  
  "5.14a", "5.14-", "5.14a/b", "5.14b", "5.14b/c", "5.14c", "5.14+", "5.14c/d", "5.14d",  
  "5.15a", "5.15-", "5.15a/b", "5.15b", "5.15b/c", "5.15c", "5.15+", "5.15c/d", "5.15d",  
  "5.16"
];

export const BOULDER_GRADES = [
  "VB", "V0-", "V0", "V0+", "V1-", "V1", "V1+", "V2-", "V2", "V2+", "V3-", "V3", "V3+", "V4-", "V4",
  "V4+", "V5-", "V5", "V5+", "V6-", "V6", "V6+", "V7-", "V7", "V7+", "V8-", "V8", "V8+", "V9-", "V9",
  "V9+", "V10-", "V10", "V10+", "V11-", "V11", "V11+", "V12-", "V12", "V12+", "V13-", "V13", "V13+",
  "V14-", "V14", "V14+", "V15-", "V15", "V15+", "V16-", "V16", "V16+", "V17-", "V17", "V17+",
];

export const ROUTE_SAFETY_OPTIONS = [
  { type: "G", label: "G - Good protection" },
  { type: "PG-13", label: "PG-13 - Slightly runout" },
  { type: "R", label: "R - A fall could be dangerous" },
  { type: "X", label: "X - A fall could be your last" }
];

export const ROUTE_TYPE_OPTIONS = [
  { type: "Sport", label: "Sport - most people lead with just quickdraws."},
  { type: "Trad", label: "Trad - most people use some trad gear. There may also be bolts."},
  { type: "Boulder", label: "Boulder - climbing without the use of ropes or harnesses."},
  { type: "Other", label: "Other - TR (but not trad or sport), snow route, etc."},
];

export const getGrade = (ropeGrade, boulderGrade) => {
  if (ropeGrade > -1 && boulderGrade > -1) {
    return ROPE_GRADES[ropeGrade] + " " + BOULDER_GRADES[boulderGrade];
  } else {
    return ROPE_GRADES[ropeGrade] || BOULDER_GRADES[boulderGrade];
  }
};

export const sortRouteFinderResults = (routes, sortParams) => {
  let compareFunction;
  if (sortParams.sort_by === "name") {
    compareFunction = (a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      } else {
        return 1;
      }
    };
  } else if (sortParams.sort_by === "grade") {
    const field = sortParams.route_type === "Rope" ? "ropeGrade" : "boulderGrade";
    compareFunction = (a, b) => {
      return a[field] - b[field];
    };
  } else if (sortParams.sort_by === "routeType") {
    compareFunction = (a, b) => {
      if (a.routeType < b.routeType) {
        return -1;
      } else {
        return 1;
      }
    };
  } else {
    compareFunction = (a, b) => {
      return a[sortParams.sort_by] - b[sortParams.sort_by];
    };
  }
  return routes.sort(compareFunction);
};