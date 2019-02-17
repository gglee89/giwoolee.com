import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import Fullscreen from 'react-full-screen';

// Styles
import './preferences.css';

// Components
import TopBar from '../../components/TopBar';
import TopNavigationMenu from '../../components/TopNavigationMenu';

// Components (Menu Content Items)
import General from './General';
import Projects from './Projects';
import Interests from './Interests';
import Mission from './Mission';
import Contact from './Contact';
import Attribution from './Attribution';

// Actions
import * as projectsActions from '../../actions/projects';
import * as menuActions from '../../actions/menu';

// Selectors
import * as projectSelectors from '../../reducers/projects';
import * as menuSelectors from '../../reducers/menu';

// Constants
const MENU_ITEMS = {
  GENERAL: 'General',
  PROJECTS: 'Projects',
  INTERESTS: 'Interests',
  MISSION: 'Mission',
  CONTACT: 'Contact',
  ATTRIBUTION: 'Attribution',
};

// Data
const menuItems = [
  { icon: 'cookie', title: MENU_ITEMS.GENERAL },
  { icon: 'iceCream', title: MENU_ITEMS.PROJECTS },
  { icon: 'melon', title: MENU_ITEMS.INTERESTS },
  { icon: 'pieceOfCake', title: MENU_ITEMS.MISSION },
  { icon: 'sushi', title: MENU_ITEMS.CONTACT },
  { icon: 'pizza', title: MENU_ITEMS.ATTRIBUTION },
];

class Preferences extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isFullScreen: false,
    };
  }

  toggleFullScreen = () => {
    this.setState(prevState => ({
      isFullScreen: prevState.isFullScreen ? false : true,
    }));
  };

  render() {
    const { selectMenu, selectedMenu, selectProject, projectName } = this.props;

    return (
      <Fullscreen
        enabled={this.state.isFullScreen}
        onChange={isFullScreen => this.setState({ isFullScreen })}
      >
        <Container className="preferences-container">
          <TopBar title="About Me" requestFullScreen={this.toggleFullScreen} />
          <TopNavigationMenu
            menuItems={menuItems}
            selectMenu={selectMenu}
            selectedMenu={selectedMenu}
          />
          <div className="preferences-body">
            {selectedMenu === MENU_ITEMS.GENERAL && <General />}
            {selectedMenu === MENU_ITEMS.PROJECTS && (
              <Projects
                selectProject={selectProject}
                projectName={projectName}
              />
            )}
            {selectedMenu === MENU_ITEMS.INTERESTS && <Interests />}
            {selectedMenu === MENU_ITEMS.MISSION && <Mission />}
            {selectedMenu === MENU_ITEMS.CONTACT && <Contact />}
            {selectedMenu === MENU_ITEMS.ATTRIBUTION && <Attribution />}
          </div>
        </Container>
      </Fullscreen>
    );
  }
}

function mapStateToProps(state) {
  return {
    projectName: projectSelectors.getProjectName(state),
    selectedMenu: menuSelectors.getSelectedMenu(state),
  };
}

const actionCreators = {
  selectProject: projectsActions.selectProject,
  selectMenu: menuActions.selectMenu,
};

export default connect(
  mapStateToProps,
  actionCreators
)(Preferences);
