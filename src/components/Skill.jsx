import React, { Component } from 'react';

class Skill extends Component {
  render() {
    let sk = this.props.skill;
    return (
      <div className="app__skill" id={this.props.id}>
        <p>{sk.skill_name}</p>
        <div className="pctg__background">
          <div className="pctg__front" style={{ width: sk.skill_pctg + "%" }}>
            {sk.skill_pctg}%
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;