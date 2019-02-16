import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import './contentRenderer.css';

// Selectors
import * as projectsSelectors from '../../reducers/projects';

// Components
import TopNavigationMenu from './TopNavigationMenu';
import ContentSection from './ContentSection';
import Screenshots from './Screenshots';

const RENDERER_CONTEXT = {
  GENERAL: 'General',
  SCREENSHOTS: 'Screenshots',
  ABOUT: 'About the Company',
};

class ContentRenderer extends PureComponent {
  state = {
    rendererContext: RENDERER_CONTEXT.GENERAL,
    renderedImage: '',
  };

  updateRendererContext = newContext => {
    this.setState({
      rendererContext: newContext,
    });
  };

  updateRenderedImage = newImage => {
    this.setState({
      renderedImage: newImage,
    });
  };

  render() {
    const {
      project: { basics, description },
    } = this.props;

    const { rendererContext, renderedImage } = this.state;

    let topMenuOptions = Object.values(RENDERER_CONTEXT);

    return (
      <div className="renderer-container">
        <TopNavigationMenu
          selectedMenu={rendererContext}
          onItemSelect={this.updateRendererContext}
          menuOptions={topMenuOptions}
        />
        {rendererContext === RENDERER_CONTEXT.GENERAL ? (
          <React.Fragment>
            <ContentSection title="Basics" content={basics} />
            <ContentSection
              title="Description"
              content={description}
              isDescription
            />
          </React.Fragment>
        ) : rendererContext === RENDERER_CONTEXT.SCREENSHOTS ? (
          <React.Fragment>
            <Screenshots
              projectName={basics.name}
              selectImage={this.updateRenderedImage}
              selectedImage={renderedImage}
            />
          </React.Fragment>
        ) : (
          <React.Fragment />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  let projectName = projectsSelectors.getProjectName(state);
  return {
    project: projectsSelectors.getProject(state, projectName),
  };
}

export default connect(mapStateToProps)(ContentRenderer);
