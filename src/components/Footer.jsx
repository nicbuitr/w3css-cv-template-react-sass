import React, { Component } from 'react';
import fs from 'fs';

class Footer extends Component {
  render() {
    let copy = fs.readFileSync('./src/api/copyright.txt', 'utf8');
    return (
      <section className="footer container">
        <p>Find me on social media.</p>
        <i className="fa fa-facebook-official fa--opacity"></i>
        <i className="fa fa-instagram fa--opacity"></i>
        <i className="fa fa-snapchat fa--opacity"></i>
        <i className="fa fa-pinterest-p fa--opacity"></i>
        <i className="fa fa-twitter fa--opacity"></i>
        <i className="fa fa-linkedin fa--opacity"></i>
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a> / &copy; {new Date().getFullYear()} {copy}</p>
      </section>
    );
  }
}

export default Footer;