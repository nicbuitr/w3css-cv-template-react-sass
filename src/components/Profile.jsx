import React, { Component } from 'react';
import Skill from './Skill';
import Language from './Language';
import avatar_sm from '../img/sm_avatar.jpg';
import avatar_md from '../img/md_avatar.jpg';
import avatar_lg from '../img/lg_avatar.jpg';

class Profile extends Component {
  render() {
    let profile = this.props.profile;
    let filteredSkills = profile.skills;
    let filteredLanguages = profile.languages;
    return (
      <section className="app__profile">
        <div className="profile__avatar">
          <picture>
            <source media="(min-width: 650px)" srcSet={avatar_lg} />
            <source media="(min-width: 465px)" srcSet={avatar_md} />
            <img className="avatar__image" src={avatar_sm} alt="Avatar" />
          </picture>
          <div className="profile__name container">
            <h2>{profile.names} {profile.surnames}</h2>
          </div>
        </div>
        <div className="profile__info container">
          <p>
            <i className="fa fa-briefcase fa-fw fa--18"></i>
            {profile.profession}
          </p>
          <p>
            <i className="fa fa-home fa-fw fa--18"></i>
            {profile.location}
          </p>
          <p>
            <i className="fa fa-envelope fa-fw fa--18"></i>
            {profile.email}
          </p>
          <p>
            <i className="fa fa-phone fa-fw fa--18"></i>
            {profile.phone}
          </p>
          <hr />
          <div className="profile__skills">
            <p className="profile__header">
              <b>
                <i className="fa fa-asterisk fa-fw"></i>
                Skills
            </b>
            </p>
            {filteredSkills
              .map((skill, index) => {
                return (<Skill skill={skill} key={"skill" + index} id={"skill_" + index} i={index} total={filteredSkills.length} />)
              })}
          </div>
          <br />
          <div className="profile__languages">
            <p className="profile__header">
              <b>
                <i className="fa fa-globe fa-fw"></i>
                Languages
            </b>
            </p>
            {filteredLanguages
              .map((language, index) => {
                return (<Language language={language} key={"language" + index} id={"language_" + index} i={index} total={filteredLanguages.length} />)
              })}
          </div>
          <br />
        </div>
      </section>
    );
  }
}

export default Profile;