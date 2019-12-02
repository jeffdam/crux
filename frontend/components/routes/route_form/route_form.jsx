import React from 'react';
import { Link } from 'react-router-dom';
import { ROPE_GRADES, BOULDER_GRADES, ROUTE_SAFETY_OPTIONS, ROUTE_TYPE_OPTIONS } from '../../../util/route_info_util';
import { getRouteFormErrors } from "../../../util/errors_util";

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
      const value = field === "toprope" ? document.getElementById("toprope").checked : e.target.value;
      return this.setState({ [field]: value });
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(this.state).forEach(attribute => {
      formData.append(`route[${attribute}]`, this.state[attribute]);
    });
    
    for (let i = 0; i < this.state.photos.length; i++) {
      formData.append('route[photos][]', this.state.photos[i]);
    }
   
    if (this.props.match.path === "/routes/:routeId/edit") {
      formData.append('route[id]', this.state.id);
    }

    this.props.formAction(formData)
      .then(({ routeId }) => this.props.history.push(`/routes/${routeId}`));
  } 

  render() {
    const { area, errors } = this.props;
    const route = this.state;
    if (!area || !route) return null;

    const typeInput = ROUTE_TYPE_OPTIONS.map(typeOption => {
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

    const ropeGradeInput = ROPE_GRADES.map((ropeGrade, idx) => {
      return (
        <option 
          key={ropeGrade}
          value={idx}
        >{ropeGrade}</option>
      )
    })

    const boulderGradeInput = BOULDER_GRADES.map((boulderGrade, idx) => {
      return (
        <option
          key={boulderGrade}
          value={idx}
        >{boulderGrade}</option>
      )
    })

    const safetyOptionInput = ROUTE_SAFETY_OPTIONS.map(safetyOption => {
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

    const formErrors = getRouteFormErrors(errors);

    return (
      <div className="form-page main-padding">
        <section className="form-header">
          <h1>New Route in {area.name}</h1>
          <a href="#" onClick={this.handleFAQModal}>FAQ about new areas & routes</a>
        </section>
        <form className="route-form-main" onSubmit={this.handleSubmit}>
          
          <div className="form-component">
            <h3>Route Name</h3><div className="errors">{formErrors.name}</div>
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
              <h3>Length in Feet</h3><div className="errors">{formErrors.length}</div>
              <input 
                type="number" 
                onChange={this.update('length')} 
                value={route.length} 
                placeholder="Approximate is fine."
                min="1"
              />
            </div>

            <div className="form-component">
              <h3>Pitches</h3><div className="errors">{formErrors.pitches}</div>
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
              <h3>Route Type</h3><div className="errors">{formErrors.route}</div>
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
                <h3>Grade</h3><div className="errors">{formErrors.grade}</div>
                <div className="flex-row">
                  <div className="form-component">
                    <h4>Rope Grade</h4>
                    <select defaultValue={route.rope_grade} onChange={this.update("rope_grade")}>
                      <option value={-1}>--</option>
                      {ropeGradeInput}
                    </select>
                  </div>

                  <div className="form-component">
                    <h4>Boulder Grade</h4>
                    <select defaultValue={route.boulder_grade} onChange={this.update("boulder_grade")}>
                      <option value={-1}>--</option>
                      {boulderGradeInput}
                    </select>
                  </div>
                </div>
              </div>


              <div className="form-component">
                <h3>Safety</h3><div className="errors">{formErrors.safety}</div>
                <select defaultValue={route.safety} onChange={this.update("safety")}>
                  <option disabled value="">-- Select one --</option>
                  {safetyOptionInput}
                </select>
              </div>
            </div>
          </div>
          
          <div className="form-component">
            <h3>Description</h3><div className="errors">{formErrors.description}</div>
            <textarea 
              onChange={this.update('description')}
              value={route.description} 
              placeholder="Where's the crux? What's good / bad? Details, opinions, and deep thoughts."
              maxLength="1000"
            ></textarea>
            <p className="form-char-limit">{1000 - route.description.length} characters</p>   
          </div>

          <div className="form-component">
            <h3>Location</h3><div className="errors">{formErrors.location}</div>
            <textarea
              onChange={this.update('location')}
              value={route.location}
              placeholder="How do you find the start? Obvious landmarks? AVOID relative directions such as 'Left of (route next to it)'!"
              maxLength="1000"
            ></textarea>
            <p className="form-char-limit">{1000 - route.location.length} characters</p>
          </div>

          <div className="form-component">
            <h3>Protection</h3><div className="errors">{formErrors.protection}</div>
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