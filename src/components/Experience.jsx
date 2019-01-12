import React, { Component } from 'react';

class Experience extends Component {
  render() {
    let exp = this.props.experience;
    return (
      <div className="app__exp container" id={this.props.id}>
        <h5><b>{exp.job_title + " / " + exp.company}</b></h5>
        <h6>
          <i className="fa fa-calendar fa-fw"></i>
          {exp.start_date} - {exp.end_date.replace(/\s/g, "").toUpperCase() === "CURRENT" ? <span className="current-tag">{exp.end_date}</span> : exp.end_date}
        </h6>
        <p>{exp.job_description}</p>
        {this.props.i < this.props.total - 1 ? <hr /> : <br />}
      </div>
    );
  }
}

export default Experience;