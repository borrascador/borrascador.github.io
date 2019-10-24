import React from 'react';

const Project = ({
  link, title, text, tech,
}) => (
  <li className="project">
    <a href={link}>
      {title}
    </a>
    <p>
      {text}
    </p>
    <h5>
      {tech}
    </h5>
  </li>
);

export default Project;
