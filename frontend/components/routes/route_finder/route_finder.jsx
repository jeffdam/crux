import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import RouteFinderForm from './route_finder_form';

class RouteFinder extends React.Component {
  
  componentDidMount() {
    this.props.fetchRoutes();
  }

  render() {
    const { routes, areas } = this.props;

    if (routes === {}) return null;

    const searchParams = queryString.parse(this.props.location.search);


    const ropeGrades = [
      "5.0", "5.1", "5.2", "5.3", "5.4", "5.5", "5.6",
      "5.7-", "5.7", "5.7+", "5.8-", "5.8", "5.8+", "5.9-", "5.9", "5.9+",
      "5.10-", "5.10a", "5.10a/b", "5.10b", "5.10b/c", "5.10c", "5.10c/d", "5.10d", "5.10+",
      "5.11-", "5.11a", "5.11a/b", "5.11b", "5.11b/c", "5.11c", "5.11c/d", "5.11d", "5.11+",
      "5.12-", "5.12a", "5.12a/b", "5.12b", "5.12b/c", "5.12c", "5.12c/d", "5.12d", "5.12+",
      "5.13-", "5.13a", "5.13a/b", "5.13b", "5.13b/c", "5.13c", "5.13c/d", "5.13d", "5.13+",
      "5.14-", "5.14a", "5.14a/b", "5.14b", "5.14b/c", "5.14c", "5.14c/d", "5.14d", "5.14+",
      "5.15-", "5.15a", "5.15a/b", "5.15b", "5.15b/c", "5.15c", "5.15c/d", "5.15d", "5.15+",
      "5.16"
    ];

    const gradeConvert = grade => {
      if (grade.includes(" ")) {
        return grade.split(" ").join("") + "+";
      } else {
        return grade;
      }
    };
    
    const minRopeGradeIdx = ropeGrades.indexOf(gradeConvert(searchParams.r_grade_min));
    const maxRopeGradeIdx = ropeGrades.indexOf(gradeConvert(searchParams.r_grade_max)) + 1;

    const boulderGrades = [
      "VB", "V0-", "V0", "V0+", "V1-", "V1", "V1+", "V2-", "V2", "V2+", "V3-", "V3", "V3+", "V4-", "V4",
      "V4+", "V5-", "V5", "V5+", "V6-", "V6", "V6+", "V7-", "V7", "V7+", "V8-", "V8", "V8+", "V9-", "V9",
      "V9+", "V10-", "V10", "V10+", "V11-", "V11", "V11+", "V12-", "V12", "V12+", "V13-", "V13", "V13+",
      "V14-", "V14", "V14+", "V15-", "V15", "V15+", "V16-", "V16", "V16+", "V17-", "V17", "V17+",
    ];

    const minBoulderGradeIdx = boulderGrades.indexOf(searchParams.b_grade_min);
    const maxBoulderGradeIdx = boulderGrades.indexOf(searchParams.b_grade_max) + 1;

    const typeSearch = route => {
      return [searchParams.is_t, searchParams.is_s, searchParams.is_b].includes(route.routeType);
    };

    const topropeSearch = route => {
      if (searchParams.is_tr === 'true') {
        return route.toprope === true;
      } else {
        return route.toprope === true || route.toprope === false;
      }
    };

    const pitchSearch = route => {
      return (route.pitches >= searchParams.pitches);
    };

    console.log(searchParams);
    console.log(ropeGrades.slice(minRopeGradeIdx, maxRopeGradeIdx));
    
    const ropeGradeSearch = route => {
      const ropeGrade = route.grade.split(" ")[0];
      console.log(ropeGrade);
      return ropeGrades.slice(minRopeGradeIdx, maxRopeGradeIdx).includes(ropeGrade);
    };

    const filteredResults = routes
      .filter(route => 
        typeSearch(route) && 
        topropeSearch(route) &&
        ropeGradeSearch(route)
        );


    const routesList = filteredResults.map(route => {
      const area = areas[route.areaId];
      const tr = route.toprope ? ", TR" : "";
      return (
        <ul key={route.id} className="route-finder-info flex-row">
          <li><Link to={`/routes/${route.id}`}>{route.name}</Link></li>
          <li><Link to={`/areas/${area.id}`}>{area.name}</Link></li>
          <li>{route.grade}{` ${route.safety}`}</li>
          <li>{route.routeType}{tr}</li>
          <li>{route.pitches}</li>
        </ul>
      )
    });


    return (
      <section>
        <h1>Climbing Route Finder</h1>
        <RouteFinderForm />
        <div>
          {routesList}
        </div>
      </section >
    )

  }

} 

export default RouteFinder;