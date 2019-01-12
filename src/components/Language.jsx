import React, { Component } from 'react';

class Language extends Component {
  render() {
    let lang = this.props.language;
    return (
      <div className="app__language" id={this.props.id}>
        <p>{lang.language}</p>
        <div className="pctg__background">
          <div className="pctg__front pctg__front--no-text" style={{ width: lang.lang_pctg + "%" }}>
          </div>
        </div>
      </div>
    );
  }
}

export default Language;