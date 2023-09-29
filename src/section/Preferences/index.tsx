import React, { useState, useEffect, useRef, Suspense } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import classnames from "classnames";

// Assets
import icons from "../../shared/icons";

// @MUI
import { LinearProgress } from "@mui/material";

// Styles
import "./preferences.css";

// Components
import TopBar from "../../components/TopBar";
import TopNavigationMenu from "../../components/TopNavigationMenu";

// Actions
import * as projectsActions from "../../actions/projects";
import * as menuActions from "../../actions/menu";

// Selectors
import * as projectSelectors from "../../reducers/projects";
import * as menuSelectors from "../../reducers/menu";

// Components (Menu Content Items)
const General = React.lazy(() => import("./General"));
const Projects = React.lazy(() => import("./Projects"));
const Interests = React.lazy(() => import("./Interests"));
const Mission = React.lazy(() => import("./Mission"));
const Contact = React.lazy(() => import("./Contact"));
const Attribution = React.lazy(() => import("./Attribution"));

// Constants
export const MENU_ITEMS = {
  GENERAL: "General",
  PROJECTS: "Projects",
  INTERESTS: "Interests",
  MISSION: "Mission",
  CONTACT: "Contact",
  ATTRIBUTION: "Attribution",
  SETTINGS: "Settings",
};

// Data
const menuItems = [
  { icon: "cookie", title: MENU_ITEMS.GENERAL },
  { icon: "iceCream", title: MENU_ITEMS.PROJECTS },
  { icon: "melon", title: MENU_ITEMS.INTERESTS },
  { icon: "pieceOfCake", title: MENU_ITEMS.MISSION },
  { icon: "sushi", title: MENU_ITEMS.CONTACT },
  { icon: "pizza", title: MENU_ITEMS.ATTRIBUTION },
  { icon: "cog", title: MENU_ITEMS.SETTINGS },
];

const Preferences = ({
  selectMenu,
  selectedMenu,
  selectProject,
  projectName,
}) => {
  const iconRef = useRef(null);
  const [isFinderOpen, setIsFinderOpen] = useState(true);
  const [count, setCount] = useState(0);
  const [isIconSelected, setIsIconSelected] = useState(false);
  const handle = useFullScreenHandle();

  let preferencesContainerClasses = classnames({
    "preferences-container": true,
    "is-open": isFinderOpen,
  });

  let desktopIconClasses = classnames({
    "desktop-icon": true,
    "is-selected": isIconSelected,
  });

  const handleDoubleClick = () => {
    setIsIconSelected(true);
    setCount(count + 1);

    setTimeout(() => {
      setCount(0);
    }, 1000);

    // Only executes if user does double click
    if (count === 2) {
      setIsFinderOpen(true);
    }
  };

  const handleClickIcon = (event) => {
    if (iconRef && !iconRef.current.contains(event.target)) {
      setIsIconSelected(false);
      setCount(0);
    }
  };

  const handleCloseFinder = () => {
    setIsFinderOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickIcon);
    return () => {
      document.removeEventListener("mousedown", handleClickIcon);
    };
  }, []);

  return (
    <FullScreen handle={handle}>
      <Container className={preferencesContainerClasses}>
        <TopBar
          title="About Me"
          closeFinder={() => handleCloseFinder()}
          requestFullScreen={handle.active ? handle.exit : handle.enter}
        />
        <TopNavigationMenu
          menuItems={menuItems}
          selectMenu={selectMenu}
          selectedMenu={selectedMenu}
        />
        <Suspense fallback={<LinearProgress color="secondary" />}>
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
            {selectedMenu === MENU_ITEMS.SETTINGS && <Attribution />}
          </div>
        </Suspense>
      </Container>
      <div
        ref={iconRef}
        onClick={() => handleDoubleClick()}
        className={desktopIconClasses}
      >
        <img src={icons["notebook"]} alt="notebook" />
        <div>About Me</div>
      </div>
    </FullScreen>
  );
};

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

export default connect(mapStateToProps, actionCreators)(Preferences);
