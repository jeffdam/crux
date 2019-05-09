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
      is_tr: true,
      r_grade_min: "5.0",
      r_grade_max: "5.16",
      b_grade_min: "VB",
      b_grade_max: "V17+",
      pitches: 1,
      sort_by: "name"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.history.push(`/route-finder?location=${location}&is_b=${is_b}&is_t=${is_t}&is_s=${is_s}&is_tr=${is_tr}&b_grade_min=${b_grade_min}&b_grade_max=${b_grade_max}&pitches=${pitches}&sort_by=${sort_by}`);
    this.props.history.push(`/route-finder?is_b=${this.state.is_b}&is_t=${this.state.is_t}&is_s=${this.state.is_s}&is_tr=${this.state.is_tr}&r_grade_min=${this.state.r_grade_min}&r_grade_max=${this.state.r_grade_max}`);
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
      <form onSubmit={this.handleSubmit}>
        <label>Trad
        <input id="t" onChange={this.update('t')} type="checkbox" value='true'/>
        </label>
        <label>Sport
        <input id="s" onChange={this.update('s')} type="checkbox" value='true'/>
        </label>
        <label>Boulder
        <input id="b" onChange={this.update('b')} type="checkbox" value='true'/>
        </label>
        <label>Top Rope
        <input id="tr" onChange={this.update('tr')} type="checkbox" value='true'/>
        </label>
        <label>Rope Grade
          <label>Min:
            <select onChange={this.update("r_grade_min")}>
              <option value="">--</option>
              {ropeGradeMinInput}
            </select>
          </label>
          <label>Max:
            <select onChange={this.update("r_grade_max")}>
              <option value="">--</option>
              {ropeGradeMaxInput}
            </select>

          </label>
        </label>

        {/* <label>
          <select onChange={this.update("pitches")}>
            <option value="1">--</option>
            <
          </select>
        </label> */}
        <input type="submit" value="Find Routes"/>
      </form>
    )
  }
};

export default withRouter(RouteFinderForm);