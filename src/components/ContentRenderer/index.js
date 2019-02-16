import React from 'react';

import './contentRenderer.css';

// Components
import TopNavigationMenu from './TopNavigationMenu';

const ContentRenderer = () => {
  return (
    <div className="renderer-container">
      <TopNavigationMenu />
    </div>
  );
};

export default ContentRenderer;
