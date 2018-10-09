import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <li className="project">
        <a href={this.props.link}>
          {this.props.title}
        </a>
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
