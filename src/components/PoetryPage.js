import React from 'react';
import { poetry } from './poetry';
import { parseMdText } from './common';

const PoetryPage = () => (
  <div className="center-column">
    <div className="text-column">
      { parseMdText(poetry) }
    </div>
  </div>
);

export default PoetryPage;
