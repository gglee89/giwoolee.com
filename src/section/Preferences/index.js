import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import Fullscreen from 'react-full-screen';
import classnames from 'classnames';

// Assets
import icons from '../../shared/icons';

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

    this.iconRef = React.createRef();
    this.count = 0;

    this.state = {
      isFullScreen: false,
      isFinderOpen: true,
      isIconSelected: false,
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickIcon);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickIcon);
  }

  toggleFullScreen = () => {
    this.setState(prevState => ({
      isFullScreen: prevState.isFullScreen ? false : true,
    }));
  };

  handleDoubleClick = () => {
    this.setState({
      isIconSelected: true,
    });

    this.count++;

    setTimeout(() => {
      this.count = 0;
    }, 1000);

    // Only executes if user does double click
    if (this.count === 2) {
      this.setState({
        isFinderOpen: true,
      });
    }
  };

  handleClickIcon = event => {
    if (this.iconRef && !this.iconRef.current.contains(event.target)) {
      this.setState({
        ...this.state,
        isIconSelected: false,
      });
      this.count = 0;
    }
  };

  handleCloseFinder = () => {
    this.setState({ isFinderOpen: false, isFullScreen: false });
  };

  render() {
    const { selectMenu, selectedMenu, selectProject, projectName } = this.props;
    const { isFinderOpen, isIconSelected } = this.state;

    let preferencesContainerClasses = classnames({
      'preferences-container': true,
      'is-open': isFinderOpen,
    });

    let desktopIconClasses = classnames({
      'desktop-icon': true,
      'is-selected': isIconSelected,
    });

    return (
      <Fullscreen
        enabled={this.state.isFullScreen}
        onChange={isFullScreen => this.setState({ isFullScreen })}
      >
        <Container className={preferencesContainerClasses}>
          <TopBar
            title="About Me"
            closeFinder={() => this.handleCloseFinder()}
            requestFullScreen={this.toggleFullScreen}
          />
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
        <div
          ref={this.iconRef}
          onClick={() => this.handleDoubleClick()}
          className={desktopIconClasses}
        >
          <img src={icons['notebook']} alt="notebook" />
          <div>About Me</div>
        </div>
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
