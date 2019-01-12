import React, { Component } from 'react';

class Education extends Component {
  render() {
    let ed = this.props.education;
    return (
      <div className="app__ed container" id={this.props.id}>
        <h5><b>{ed.institution}</b></h5>
        <h6>
          <i className="fa fa-calendar fa-fw"></i>
          {ed.end_date.replace(/\s/g, "").toUpperCase() === "FOREVER" ? ed.end_date : ed.start_date + " - " + ed.end_date}
        </h6>
        <p>{ed.degree}</p>
        {this.props.i < this.props.total - 1 ? <hr /> : <br />}
      </div>
    );
  }
}

export default Education;