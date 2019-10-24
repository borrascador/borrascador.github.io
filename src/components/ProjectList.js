import React from 'react';
import Project from './Project.js';

const ProjectList = () => (
  <ul className="project-list">
    <Project
      title="Rainforest Trail"
      text="Online jungle survival game emphasizing education and conservation. Release date TBA"
      tech="Made with HTML5 Canvas, Redux, and Java using the WebSockets protocol"
      link="https://borrascador.github.io/rain" />
    <Project
      title="Let's Chat"
      text="Single-page chat site that uses the fetch library to store all messages on jsonstore.io"
      tech="Made with React, Redux, Webpack and jsonstore.io by Eliran Pe'er"
      link="https://borrascador.github.io/chat" />
    <Project
      title="OSSP Bot"
      text="Facebook scraping, meme recombinating twitter bot full of One Sentence Startup Pitch ideas"
      tech="Made with Python and Tweepy"
      link="https://twitter.com/osspbot" />
    <Project
      title="Dime Drop Times"
      text="Straightforward personal blog optimized for mobile and desktop with dynamic content styling"
      tech="Made with Python and Django"
      link="https://borrascador.pythonanywhere.com" />
    <Project
      title="Reddit Clone"
      text="Reverse-engineered implementation of nested message board comments"
      tech="Made with React"
      link="https://borrascador.github.io/reddit" />
    <Project
      title="Griddage"
      text="Addicting grid-based card game scored like Cribbage for 1-4 players"
      tech="Made with Python and Kivy"
      link="https://github.com/borrascador/griddage " />
    <Project
      title="Mark World"
      text="Experimental personal artist's gallery designed to display multimedia content and accept donations"
      tech="Made with Python, Django, and jQuery"
      link="https://markworld.pythonanywhere.com" />
    <Project
      title="Todo List"
      text="Sleek and stylish task list for the modern man"
      tech="Made with React"
      link="https://borrascador.github.io/todo" />
  </ul>
);

export default ProjectList;
