import React from 'react';
import { projects } from './projects';
import { parseMdText } from './common';

const ProjectsPage = () => (
  <div className="center-column">
    <div className="text-column">
      { parseMdText(projects) }
    </div>
  </div>
);

export default ProjectsPage;
