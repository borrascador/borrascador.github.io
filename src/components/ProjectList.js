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
          title="Dime Drop Times"
          text="Straightforward personal blog optimized for mobile and desktop with dynamic content styling"
          tech="Made with Python and Django" />
        <Project
          title="Reddit Clone"
          text="Reverse-engineered message board with point-based post and comment ranking system"
          tech="Made with React" />          
        <Project
          title="OSSP Bot"
          text="Facebook scraping, meme recombinating twitter bot full of One Sentence Startup Pitch ideas"
          tech="Made with Python and Tweepy" />
        <Project
          title="Griddage" 
          text="Addicting grid-based card game scored like Cribbage for 1-4 players"
          tech="Made with Python and Kivy" />
        <Project
          title="Mark World"
          text="Experimental personal artist's gallery designed to display multimedia content and accept donations"
          tech="Made with Python, Django, and jQuery" />
        <Project 
          title="Todo List"
          text="Sleek and stylish task list for the modern man"
          tech="Made with React" />
      </ul>
    );
  }
}

export default ProjectList;
