import React, { Component } from 'react';
import Project from './Project.js';

class ProjectList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="project-list">
        <Project 
          title="Todo List App"
          text="Sleek and stylish task list for the modern man" />
        <Project
          title="Griddage" 
          text="Cribbage, but on a grid with five hands apiece instead of with a board!" />
        <Project
          title="Another Test"
          text="How does this render?" />
      </ul>
    );
  }
}

export default ProjectList;
