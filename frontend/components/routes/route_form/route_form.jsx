import React from 'react';
import { Link } from 'react-router-dom'

class RouteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.route;
    this.handleFAQModal = this.handleFAQModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchArea(this.props.match.params.areaId)
  }

  handleFAQModal(e) {
    e.preventDefault();
    this.props.openModal();
  }

  update(field) {
    return (e) => {
      if (field === "ropeGrade" || field === "boulderGrade") {
        const ropeGrade = document.getElementById('selectedRopeGrade') ? document.getElementById('selectedRopeGrade').value : "";
        const boulderGrade = document.getElementById('selectedBoulderGrade') ? document.getElementById('selectedBoulderGrade').value : "";
        return this.setState({ ['grade']: ropeGrade + " " + e.target.value + " " + boulderGrade});
      } else {
        return this.setState({ [field]: e.target.value });
      }
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();

    let submission = Object.assign({}, this.state)
    
    if (!document.getElementById("toprope").checked) {
      submission['toprope'] = false;
    }
    
    this.props.formAction(submission)
      .then(({ routeId }) => this.props.history.push(`/routes/${routeId}`))
  } 

  render() {
    const { area } = this.props
    const route = this.state;
    if (!area) return null;

    const routeTypeOptions = [
      { type: "Sport", label: "Sport - most people lead with just quickdraws."},
      { type: "Trad", label: "Trad - most people use some trad gear. There may also be bolts."},
      { type: "Boulder", label: "Boulder - climbing without the use of ropes or harnesses."},
      { type: "Other", label: "Other - TR (but not trad or sport), snow route, etc."},
    ]

    const typeInput = routeTypeOptions.map(typeOption => {
      const checkedType = (route.route_type === typeOption.type) ? "checked" : "";
      return (
        <label key={typeOption.type}>
          <input 
            checked={checkedType} 
            type="radio" 
            name="routeType" 
            onChange={this.update('route_type')} 
            value={typeOption.type}/> 
          {typeOption.label}
        </label>
      )
    })

    const ropeGrades = [
      "5.0", "5.1", "5.2", "5.3", "5.4", "5.5", "5.6", "5.7-", "5.7", "5.7+", "5.8-", "5.8+",
      "5.9-", "5.9+", "5.10-", "5.10a", "5.10a/b", "5.10b", "5.10b/c", "5.10c", "5.10c/d", "5.10d",
      "5.10+", "5.11-", "5.11a", "5.11a/b", "5.11b", "5.11b/c", "5.11c", "5.11c/d", "5.11d", "5.11+",
      "5.12-", "5.12a", "5.12a/b", "5.12b", "5.12b/c", "5.12c", "5.12c/d", "5.12d", "5.12+", "5.13-",
      "5.13a", "5.13a/b", "5.13b", "5.13b/c", "5.13c", "5.13c/d", "5.13d", "5.13+", "5.14-", "5.14a",
      "5.14a/b", "5.14b", "5.14b/c", "5.14c", "5.14c/d", "5.14d", "5.14+", "5.15-", "5.15a", "5.15a/b",
      "5.15b", "5.15b/c", "5.15c", "5.15c/d", "5.15d", "5.15+", "5.16"
    ]

    // const ropeGradeDefaultVal = ropeGrades.forEach(ropeGrade => {
    //   if (route.grade.includes(ropeGrade)) return ropeGrade;
    // }) 

    let ropeGradeDefaultVal;
    
    const ropeGradeInput = ropeGrades.map(ropeGrade => {
      if (route.grade.includes(ropeGrade)) {
        ropeGradeDefaultVal = ropeGrade
      }
      const ropeIdVal = (route.grade.includes(ropeGrade)) ? "selectedRopeGrade" : "";
      return (
        <option 
          id={ropeIdVal}
          key={ropeGrade}
          value={ropeGrade}
        >{ropeGrade}</option>
      )
    })

    const boulderGrades = [
      "VB", "V0-", "V0", "V0+", "V1-", "V1", "V1+", "V2-", "V2", "V2+", "V3-", "V3", "V3+", "V4-", "V4",
      "V4+", "V5-", "V5", "V5+", "V6-", "V6", "V6+", "V7-", "V7", "V7+", "V8-", "V8", "V8+", "V9-", "V9",
      "V9+", "V10-", "V10", "V10+", "V11-", "V11", "V11+", "V12-", "V12", "V12+", "V13-", "V13", "V13+",
      "V14-", "V14", "V14+", "V15-", "V15", "V15+", "V16-", "V16", "V16+", "V17-", "V17", "V17+",
    ]

    const boulderGradeDefaultVal = boulderGrades.forEach(boulderGrade => {
      if (route.grade.includes(boulderGrade)) return boulderGrade;
    })

    const boulderGradeInput = boulderGrades.map(boulderGrade => {
      const boulderIdVal = (route.grade.includes(boulderGrade)) ? "selectedBoulderGrade" : "";
      return (
        <option
          id={boulderIdVal}
          key={boulderGrade}
          value={boulderGrade}
        >{boulderGrade}</option>
      )
    })

    const safetyOptions = [
      { type: "G", label: "G - Good protection" },
      { type: "PG-13", label: "PG-13 - Slightly runout" },
      { type: "R", label: "R - A fall could be dangerous"},
      { type: "X", label: "X - A fall could be your last"}
    ]

    const safetyOptionInput = safetyOptions.map(safetyOption => {
      return (
        <option
          key={safetyOption.type}
          value={safetyOption.type}
        >{safetyOption.label}</option>
      )
    })

    const errors = this.props.errors.map((error, idx) => {
      return (
        <li key={idx}>{error}</li>
      )
    })

    return (
      <div className="form-page main-padding">
        <section className="route-form-header">
          <h1>New Route in {area.name}</h1>
          <a href="#" onClick={this.handleFAQModal}>FAQ about new areas & routes</a>
        </section>
        <form className="route-form-main" onSubmit={this.handleSubmit}>
          
          <div className="form-component">
            <h3>Route Name</h3>
            <input type="text" onChange={this.update('name')} value={route.name}/>
          </div>
          
          <div className="flex-row">
            <div className="form-component">
              <h3>First Ascensionist</h3>
              <input type="text" onChange={this.update('first_ascensionist')} value={route.first_ascensionist}/>
            </div>

            <div className="form-component">
              <h3>First Ascent Date</h3>
              <input type="date" onChange={this.update('first_ascent_date')} value={route.first_ascent_date}/>
            </div>
          </div>

          <div className="flex-row">
            <div className="form-component">
              <h3>Length in Feet</h3>
              <input 
                type="number" 
                onChange={this.update('length')} 
                value={route.length} 
                placeholder="Approximate is fine."
                min="1"
              />
            </div>

            <div className="form-component">
              <h3>Pitches</h3>
              <input 
                type="number" 
                onChange={this.update('pitches')} 
                value={route.pitches} 
                placeholder="As it's most commonly done."
                min="1"
                max="100"
              />
            </div>
          </div>

          <div className="flex-row">

            <div className="form-component">
              <h3>Route Type</h3>
              <div className="flex-col">
                {typeInput}
              </div>
              <input 
                type="checkbox" 
                id="toprope" 
                value='true'
                onChange={this.update('toprope')} 
              />Toprope - you can set up a TR without leading the route.
            </div>
            
            <div>
              <div> 
                <h3>Grade</h3>
                <div className="flex-row">
                  <div className="form-component">
                    <h4>Rope Grade</h4>
                    <select defaultValue={ropeGradeDefaultVal} onChange={this.update("ropeGrade")}>
                      <option value="">--</option>
                      {ropeGradeInput}
                    </select>
                  </div>

                  <div className="form-component">
                    <h4>Boulder Grade</h4>
                    <select defaultValue={boulderGradeDefaultVal} onChange={this.update("boulderGrade")}>
                      <option value="">--</option>
                      {boulderGradeInput}
                    </select>
                  </div>
                </div>
              </div>


              <div className="form-component">
                <h3>Safety</h3>
                <select defaultValue={route.safety} onChange={this.update("safety")}>
                  <option disabled value="">-- Select one --</option>
                  {safetyOptionInput}
                </select>
              </div>
            </div>
          </div>
          
          <div className="form-component">
            <h3>Description</h3>
            <textarea 
              onChange={this.update('description')}
              value={route.description} 
              placeholder="Where's the crux? What's good / bad? Details, opinions, and deep thoughts."
              maxLength="1000"
            ></textarea>
            <p className="form-char-limit">{1000 - route.description.length} characters</p>   
          </div>

          <div className="form-component">
            <h3>Location</h3>
            <textarea
              onChange={this.update('location')}
              value={route.location}
              placeholder="How do you find the start? Obvious landmarks? AVOID relative directions such as 'Left of (route next to it)'!"
              maxLength="1000"
            ></textarea>
            <p className="form-char-limit">{1000 - route.location.length} characters</p>
          </div>

          <div className="form-component">
            <h3>Protection</h3>
            <textarea
              onChange={this.update('protection')}
              value={route.protection}
              placeholder="What type of pro? Bolts or fixed gear? Anchors at the top?"
              maxLength="1000"
            ></textarea>
            <p className="form-char-limit">{1000 - route.protection.length} characters</p>
          </div>
          
          <div className="flex-row form-submission-buttons">
            <input type="submit" value="Save Route" />
            <Link to={`/areas/${this.props.match.params.areaId}`}>Cancel</Link>
          </div>

        </form>

        <ul>{errors}</ul>
      </div>
    )
  }
}

export default RouteForm;