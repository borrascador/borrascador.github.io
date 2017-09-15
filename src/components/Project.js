import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <li className="project">
        <h3>
          {this.props.title}
        </h3>
        <p>
          {this.props.text}
        </p>
        <h5>
          {this.props.tech}
        </h5>
      </li>
    );
  }
}

export default Project;
