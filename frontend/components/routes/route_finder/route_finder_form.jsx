import React from 'react';
import { ROPE_GRADES, BOULDER_GRADES } from '../../../util/route_info_util';

class RouteFinderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.searchParams;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchRoutes(this.state)
      .then(() => {
        this.props.history.push(`/route-finder`);
      });
  }

  update(field) {
    return (e) => {
      if (field === "routeType") {
        const sport = document.getElementById("s").checked ? "Sport" : "";
        const trad = document.getElementById("t").checked ? "Trad" : "";
        const boulder = document.getElementById("b").checked ? "Boulder" : "";
        this.setState({ route_type: [sport, trad, boulder] });
      } else if (field === "tr") {
        this.setState({ toprope: document.getElementById("tr").checked });
      } else if (field.includes("grade")) {
        this.setState({ [field]: parseInt(e.target.value) });
      } else {
        this.setState({ [field]: e.target.value });
      }
    };
  }

  render() {
    const ropeGradeMinInput = ROPE_GRADES.slice(0, this.state.r_grade_max + 1).map((ropeGrade, idx) => {
      return (
        <option
          key={ropeGrade}
          value={idx}
        >{ropeGrade}</option>
      )
    })

    const ropeGradeMin = this.state.r_grade_min < 0 ? 0 : this.state.r_grade_min;
    const ropeGradeMaxInput = ROPE_GRADES.slice(ropeGradeMin).map((ropeGrade, idx) => {
      const value = idx + ropeGradeMin;
      return (
        <option
          key={ropeGrade}
          value={value}
        >{ropeGrade}</option>
      )
    })

    const boulderGradeMinInput = BOULDER_GRADES.slice(0, this.state.b_grade_max + 1).map((boulderGrade, idx) => {
      return (
        <option
          key={boulderGrade}
          value={idx}
        >{boulderGrade}</option>
      )
    })
    
    const boulderGradeMin = this.state.b_grade_min < 0 ? 0 : this.state.b_grade_min;
    const boulderGradeMaxInput = BOULDER_GRADES.slice(boulderGradeMin).map((boulderGrade, idx) => {
      const value = idx + boulderGradeMin;
      return (
        <option
          key={boulderGrade}
          value={value}
        >{boulderGrade}</option>
      )
    })

    return (
      <form onSubmit={this.handleSubmit} className="route-finder-form flex-col">
        <section className="route-finder-form-component">
          <h4>Type</h4>
          <div className="route-finder-form-type flex-row">
            <label>
              <input id="t" onChange={this.update('routeType')} type="checkbox" value='true'/>
              Trad
            </label>
            <label>
              <input id="s" onChange={this.update('routeType')} type="checkbox" value='true'/>
              Sport
            </label>
            <label>
              <input id="b" onChange={this.update('routeType')} type="checkbox" value='true'/>
              Boulder
            </label>
            <label>
              <input id="tr" onChange={this.update('tr')} type="checkbox" value='true'/>
              Top Rope
            </label>
          </div>
        </section>
        <section className="route-finder-form-component">
          <h4>Rope Grade</h4>
          <div className="route-finder-form-rgrade flex-row">
            <label className="flex-col">Min:
              <select onChange={this.update("r_grade_min")}>
                <option value="0">--</option>
                {ropeGradeMinInput}
              </select>
            </label>
            <label className="flex-col">Max:
              <select onChange={this.update("r_grade_max")}>
                <option value="71">--</option>
                {ropeGradeMaxInput}
              </select>
            </label>
          </div>
        </section>
        <section className="route-finder-form-component">
          <h4>Boulder Grade</h4>
          <div className="route-finder-form-rgrade flex-row">
            <label className="flex-col">Min:
              <select onChange={this.update("b_grade_min")}>
                <option value="0">--</option>
                {boulderGradeMinInput}
              </select>
            </label>
            <label className="flex-col">Max:
              <select onChange={this.update("b_grade_max")}>
                <option value="54">--</option>
                {boulderGradeMaxInput}
              </select>
            </label>
          </div>
        </section>
        <section className="route-finder-form-component">
          <h4>Pitches</h4>
          <select onChange={this.update("pitches")}>
            <option value="1">--</option>
            <option value="1">At least 1 pitch</option>
            <option value="2">At least 2 pitches</option>
            <option value="3">At least 3 pitches</option>
            <option value="4">At least 4 pitches</option>
            <option value="5">At least 5 pitches</option>
            <option value="10">At least 10 pitches</option>
            <option value="20">At least 20 pitches</option>
          </select>
        </section>
        <section className="route-finder-form-component">
          <h4>Sort</h4>
          <select onChange={this.update("sort_by")}>
            <option value="name">--</option>
            <option value="name">By Name</option>
            <option value="areaId">By Area</option>
            <option value="grade">By Grade</option>
            <option value="routeType">By Type</option>
            <option value="pitches">By Pitches</option>
          </select>
        </section>
        <input type="submit" value="Find Routes"/>
      </form>
    )
  }
};

export default RouteFinderForm;