import React, { Component } from 'react';
import Experience from './Experience';
import Education from './Education';

class Formation extends Component {
  render() {
    let filteredExperiences = this.props.experiences;
    let filteredEducation = this.props.education;
    return (
      <section className="app__formation">
        <div className="app__experiences container">
          <h2>
            <i className="fa fa-suitcase fa-fw fa--36"></i>
            Work Experience
            </h2>
          {filteredExperiences
            .map((experience, index) => {
              return (<Experience experience={experience} key={"experience_" + index} id={"experience_" + index} i={index} total={filteredExperiences.length} />)
            })}
        </div>
        <div className="app__education container">
          <h2>
            <i className="fa fa-certificate fa-fw fa--36"></i>
            Education
            </h2>
          {filteredEducation
            .map((education, index) => {
              return (<Education education={education} key={"education" + index} id={"education" + index} i={index} total={filteredEducation.length} />)
            })}
        </div>
      </section>
    );
  }
}

export default Formation;