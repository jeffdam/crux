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
    
    if (this.props.match.path === "/add/climb-route/:areaId") {
      this.props.fetchArea(this.props.match.params.areaId);
      this.props.openModalFAQ();
    } else if (this.props.match.path === "/routes/:routeId/edit") {
      this.props.fetchRoute(this.props.match.params.routeId);
    }
  }

  componentDidUpdate(prevProps) {

    if (this.props.match.path === "/add/climb-route/:areaId") {
      if (prevProps.match.params.areaId !== this.props.match.params.areaId) {
        this.props.fetchArea(this.props.match.params.areaId);
      }
    } else if (this.props.match.path === "/routes/:routeId/edit") {
      if (prevProps.match.params.routeId !== this.props.match.params.routeId) {
        this.props.fetchRoute(this.props.match.params.routeId);
      }
      if ((this.props.match.path === "/routes/:routeId/edit") && (this.props.route.author_id != this.props.currentUser)) {
        this.props.history.push(`/routes/${this.props.match.params.routeId}`);
      }
    }

    if (!this.state) this.setState(this.props.route);
  }

  handleFAQModal(e) {
    e.preventDefault();
    this.props.openModalFAQ();
  }

  update(field) {
    return (e) => {
      if (field === "ropeGrade" || field === "boulderGrade") {
        const ropeGrade = document.getElementById('selectedRopeGrade') ? document.getElementById('selectedRopeGrade').value : "";
        const boulderGrade = document.getElementById('selectedBoulderGrade') ? document.getElementById('selectedBoulderGrade').value : "";
        return this.setState({ ['grade']: ropeGrade + " " + e.target.value + " " + boulderGrade});
      } else if (field === "toprope") {
        if (document.getElementById("toprope").checked) {
          this.setState({ [field]: true });
        } else {
          this.setState({ [field]: false });
        }
      } else {
        return this.setState({ [field]: e.target.value });
      }
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append('route[area_id]', this.state.area_id);
    formData.append('route[author_id]', this.state.author_id);
    formData.append('route[name]', this.state.name);
    formData.append('route[route_type]', this.state.route_type);
    formData.append('route[grade]', this.state.grade);
    formData.append('route[safety]', this.state.safety);
    formData.append('route[first_ascensionist]', this.state.first_ascensionist);
    formData.append('route[first_ascent_date]', this.state.first_ascent_date);
    formData.append('route[length]', this.state.length);
    formData.append('route[pitches]', this.state.pitches);
    formData.append('route[protection]', this.state.protection);
    formData.append('route[description]', this.state.description);
    formData.append('route[location]', this.state.location);
    
    for (let i = 0; i < this.state.photos.length; i++) {
      formData.append('route[photos][]', this.state.photos[i]);
    }
   
    if (this.props.match.path === "/routes/:routeId/edit") {
      formData.append('route[id]', this.state.id);
    }
    
    if (document.getElementById("toprope").checked) {
      formData.append(`route[toprope]`, true);
    } else {
      formData.append(`route[toprope]`, false);
    }

    
    this.props.formAction(formData)
      .then(({ routeId }) => this.props.history.push(`/routes/${routeId}`));
  } 

  render() {
    const { area, errors } = this.props;
    const route = this.state;
    
    if (!area) return null;
    if (!route) return null;
    
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

    let ropeGradeDefaultVal;    
    const ropeGradeInput = ropeGrades.map(ropeGrade => {
      if (route.grade.includes(ropeGrade)) {
        ropeGradeDefaultVal = ropeGrade
      }
      return (
        <option 
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

    let boulderGradeDefaultVal; 
    const boulderGradeInput = boulderGrades.map(boulderGrade => {
      if (route.grade.includes(boulderGrade)) {
        boulderGradeDefaultVal = boulderGrade
      }
      return (
        <option
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

    const cancelLink = (this.props.match.params.areaId) ? (
      `/areas/${this.props.match.params.areaId}`
      ) : (
      `/routes/${this.props.match.params.routeId}`
      );

    let nameErr = "";
    let routeErr = "";
    let gradeErr = "";
    let safetyErr = "";
    let lengthErr = "";
    let pitchesErr = "";
    let proErr = "";
    let descErr = "";
    let locErr = "";

    errors.forEach((error) => {
      if (error.includes("Name") && nameErr === "") {
        nameErr = error;
      } else if (error.includes("Route") && routeErr === "") {
        routeErr = error;
      } else if (error.includes("Grade") && gradeErr === "") {
        gradeErr = error;
      } else if (error.includes("Safety") && safetyErr === "") {
        safetyErr = error;
      } else if (error.includes("Length") && lengthErr === "") {
        lengthErr = error;
      } else if (error.includes("Pitches") && pitchesErr === "") {
        pitchesErr = error;
      } else if (error.includes("Protection") && proErr === "") {
        proErr = error;
      } else if (error.includes("Description") && descErr === "") {
        descErr = error;
      } else if (error.includes("Location") && locErr === "") {
        locErr = error;
      }
    });

    return (
      <div className="form-page main-padding">
        <section className="form-header">
          <h1>New Route in {area.name}</h1>
          <a href="#" onClick={this.handleFAQModal}>FAQ about new areas & routes</a>
        </section>
        <form className="route-form-main" onSubmit={this.handleSubmit}>
          
          <div className="form-component">
            <h3>Route Name</h3><div className="errors">{nameErr}</div>
            <input 
              type="text" 
              onChange={this.update('name')} 
              value={route.name} 
              maxLength="100"
            />
            <p className="form-char-limit">{100 - this.state.name.length} characters</p>  
          </div>
          
          <div className="flex-row route-form-first-ascent">
            <div className="form-component route-form-first-ascensionist">
              <div className="flex-row baseline">
                <h3>First Ascensionist</h3>&nbsp;&nbsp;Optional
              </div>
              <input type="text" onChange={this.update('first_ascensionist')} value={route.first_ascensionist}/>
            </div>

            <div className="form-component">
              <div className="flex-row baseline">
                <h3>First Ascent Date</h3>&nbsp;&nbsp;Optional
              </div>
              <input type="date" onChange={this.update('first_ascent_date')} value={route.first_ascent_date}/>
            </div>
          </div>

          <div className="flex-row">
            <div className="form-component">
              <h3>Length in Feet</h3><div className="errors">{lengthErr}</div>
              <input 
                type="number" 
                onChange={this.update('length')} 
                value={route.length} 
                placeholder="Approximate is fine."
                min="1"
              />
            </div>

            <div className="form-component">
              <h3>Pitches</h3><div className="errors">{pitchesErr}</div>
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

          <div className="flex-row route-form-route-grade-safety">

            <div className="form-component">
              <h3>Route Type</h3><div className="errors">{routeErr}</div>
              <div className="flex-col route-form-route-type">
                <h4>Type</h4>
                {typeInput}
              </div>
              <h4>Top Rope</h4>
              <label>
                <input 
                  type="checkbox" 
                  id="toprope" 
                  value={true}
                  onChange={this.update('toprope')} 
                  checked={this.state.toprope}
                />Top Rope - you can set up a TR without leading the route.
              </label>
            </div>
            
            <div>
              <div className="route-form-grade"> 
                <h3>Grade</h3><div className="errors">{gradeErr}</div>
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
                <h3>Safety</h3><div className="errors">{safetyErr}</div>
                <select defaultValue={route.safety} onChange={this.update("safety")}>
                  <option disabled value="">-- Select one --</option>
                  {safetyOptionInput}
                </select>
              </div>
            </div>
          </div>
          
          <div className="form-component">
            <h3>Description</h3><div className="errors">{descErr}</div>
            <textarea 
              onChange={this.update('description')}
              value={route.description} 
              placeholder="Where's the crux? What's good / bad? Details, opinions, and deep thoughts."
              maxLength="1000"
            ></textarea>
            <p className="form-char-limit">{1000 - route.description.length} characters</p>   
          </div>

          <div className="form-component">
            <h3>Location</h3><div className="errors">{locErr}</div>
            <textarea
              onChange={this.update('location')}
              value={route.location}
              placeholder="How do you find the start? Obvious landmarks? AVOID relative directions such as 'Left of (route next to it)'!"
              maxLength="1000"
            ></textarea>
            <p className="form-char-limit">{1000 - route.location.length} characters</p>
          </div>

          <div className="form-component">
            <h3>Protection</h3><div className="errors">{proErr}</div>
            <textarea
              onChange={this.update('protection')}
              value={route.protection}
              placeholder="What type of pro? Bolts or fixed gear? Anchors at the top?"
              maxLength="1000"
            ></textarea>
            <p className="form-char-limit">{1000 - route.protection.length} characters</p>
          </div>

          <div className="form-component upload-photos">
            <div className="flex-row baseline">
              <h3>Upload Photos</h3>&nbsp;&nbsp;Optional
            </div>

            <div>
              <h4>Guidelines</h4>
              <ul>
                <li>Avoid duplicating existing photos and too many "butt-shots".</li>
                <li>Photos should be least 600 x 600 pixels.</li>
                <li>Accepted image formats: .jpg, .png.</li>
              </ul>
            </div>
            
            <input
                type="file"
                onChange={e => this.setState({ photos: e.target.files })}
                multiple
                accept=".jpg,.png"
            />

          </div>
          
          <div className="flex-row form-submission-buttons">
            <input type="submit" value="Save Route" />
            <Link to={cancelLink}>Cancel</Link>
          </div>

        </form>

      </div>
    )
  }
}

export default RouteForm;