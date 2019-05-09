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
      pitches: "max",
      sort_by: "name"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.history.push(`/route-finder?location=${location}&is_b=${is_b}&is_t=${is_t}&is_s=${is_s}&is_tr=${is_tr}&r_grade_min=${r_grade_min}&r_grade_max=${r_grade_max}&b_grade_min=${b_grade_min}&b_grade_max=${b_grade_max}&pitches=${pitches}&sort_by=${sort_by}`);
    this.props.history.push(`/route-finder?is_b=${this.state.is_b}&is_t=${this.state.is_t}&is_s=${this.state.is_s}&is_tr=${this.state.is_tr}`);
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
      } 
    };
  }

  render() {
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
         <input type="submit" value="Find Routes"/>
      </form>
    )
  }
};

export default withRouter(RouteFinderForm);