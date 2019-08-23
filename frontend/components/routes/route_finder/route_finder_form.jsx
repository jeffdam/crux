import React from 'react';
import { withRouter } from 'react-router-dom';

class RouteFinderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "all",
      is_b: "",
      is_t: "",
      is_s: "",
      is_tr: false,
      r_grade_min: "5.0",
      r_grade_max: "5.16",
      b_grade_min: "",
      b_grade_max: "",
      pitches: 1,
      sort_by: "name"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {is_b, is_t, is_tr, is_s, r_grade_min, r_grade_max, pitches, sort_by} = this.state;
    this.props.history.push(`/route-finder?is_b=${is_b}&is_t=${is_t}&is_s=${is_s}&is_tr=${is_tr}&r_grade_min=${r_grade_min}&r_grade_max=${r_grade_max}&pitches=${pitches}&sort_by=${sort_by}`);
  }

  update(field) {
    return (e) => {
      if (field === "t") {
        if (document.getElementById("t").checked) {
          this.setState({ ["is_t"]: "Trad" });
        } else {
          this.setState({ ["is_t"]: "" });
        }
      } else if (field === "s") {
        if (document.getElementById("s").checked) {
          this.setState({ ["is_s"]: "Sport" });
        } else {
          this.setState({ ["is_s"]: "" });
        }
      } else if (field === "b") {
        if (document.getElementById("b").checked) {
          this.setState({ ["is_b"]: "Boulder" });
        } else {
          this.setState({ ["is_b"]: "" });
        }
      } else if (field === "tr") {
        if (document.getElementById("tr").checked) {
          this.setState({ ["is_tr"]: true });
        } else {
          this.setState({ ["is_tr"]: false });
        }
      } else {
        this.setState({ [field]: e.target.value });
      }
    };
  }



  render() {

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
    ]
    const ropeGradeMinInput = ropeGrades.map(ropeGrade => {
      return (
        <option
          key={ropeGrade}
          value={ropeGrade}
        >{ropeGrade}</option>
      )
    })

    const ropeGradeMaxInput = ropeGrades.slice(ropeGrades.indexOf(this.state.r_grade_min)).map(ropeGrade => {
      return (
        <option
          key={ropeGrade}
          value={ropeGrade}
        >{ropeGrade}</option>
      )
    })


    return (
      <form onSubmit={this.handleSubmit} className="route-finder-form flex-col">
        <section className="route-finder-form-component">
          <h4>Type</h4>
          <div className="route-finder-form-type flex-row">
            <label>
              <input id="t" onChange={this.update('t')} type="checkbox" value='true'/>
              Trad
            </label>
            <label>
              <input id="s" onChange={this.update('s')} type="checkbox" value='true'/>
              Sport
            </label>
            {/* <label>
              <input id="b" onChange={this.update('b')} type="checkbox" value='true'/>
              Boulder
            </label> */}
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
                <option value="5.0">--</option>
                {ropeGradeMinInput}
              </select>
            </label>
            <label className="flex-col">Max:
              <select onChange={this.update("r_grade_max")}>
                <option value="5.16">--</option>
                {ropeGradeMaxInput}
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

export default withRouter(RouteFinderForm);