import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import classnames from 'classnames';
import jsPDF from 'jspdf';
import store from '../../../store';

// Styles
import './resume.css';

// Assets
import icons from '../../../shared/icons';
import backgrounds from '../../../shared/backgrounds';

// Content
import ResumeHeader from './ResumeHeader';
import ResumeBody from './ResumeBody';
import ResumeFooter from './ResumeFooter';

const FONT_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA_LARGE: 'extra-large',
};

const Resizer = ({ font, setFont }) => {
  let missionSmall = classnames({
    'mission-font-size-small': true,
    active: font.size === FONT_SIZES.SMALL,
  });
  let missionMedium = classnames({
    'mission-font-size-medium': true,
    active: font.size === FONT_SIZES.MEDIUM,
  });
  let missionLarge = classnames({
    'mission-font-size-large': true,
    active: font.size === FONT_SIZES.LARGE,
  });
  let missionExtraLarge = classnames({
    'mission-font-size-extra-large': true,
    active: font.size === FONT_SIZES.EXTRA_LARGE,
  });

  return (
    <div className="mission-button-container">
      <div
        onClick={() => setFont({ size: FONT_SIZES.SMALL })}
        className={missionSmall}
      >
        A
      </div>
      <div
        onClick={() => setFont({ size: FONT_SIZES.MEDIUM })}
        className={missionMedium}
      >
        A
      </div>
      <div
        onClick={() => setFont({ size: FONT_SIZES.LARGE })}
        className={missionLarge}
      >
        A
      </div>
      <div
        onClick={() => setFont({ size: FONT_SIZES.EXTRA_LARGE })}
        className={missionExtraLarge}
      >
        A <img src={icons.view} alt="eyes" />
      </div>
    </div>
  );
};

const Downloader = () => {
  return (
    <div className="Downloader" onClick={() => print()}>
      <img src={icons.download} alt="download" style={{ height: 20 }} />
      <div>Download</div>
    </div>
  );
};

const print = () => {
  const string = renderToString(
    <Provider store={store}>
      <Resume />
    </Provider>
  );
  const pdf = new jsPDF('p', 'mm', 'a4');
  pdf.fromHTML(string);
  pdf.save('pdf');
};

const ThemeSwitcher = ({ changeTheme, opacity }) => {
  const isDarkTheme = opacity > 0.5 ? 'Dark Theme' : 'Light Theme';
  return (
    <div className="ThemeSwitcher">
      <div className="custom-control custom-switch">
        <input
          onChange={() => changeTheme()}
          type="checkbox"
          className="custom-control-input"
          id="customSwitch1"
        />
        <label className="custom-control-label" htmlFor="customSwitch1">
          {isDarkTheme}
        </label>
      </div>
    </div>
  );
};

const THEME_OPACITY = {
  LIGHT: 0.2,
  DARK: 1,
};

const Resume = () => {
  const [font, setFont] = useState({ size: FONT_SIZES.SMALL });
  const [background, setBackground] = useState(null);
  const [opacity, setOpacity] = useState(THEME_OPACITY.LIGHT);

  let missionContainerClass = classnames({
    resume: true,
    'mission-container': true,
    'mission-font-size-small': font.size === FONT_SIZES.SMALL,
    'mission-font-size-medium': font.size === FONT_SIZES.MEDIUM,
    'mission-font-size-large': font.size === FONT_SIZES.LARGE,
    'mission-font-size-extra-large': font.size === FONT_SIZES.EXTRA_LARGE,
  });

  const changeTheme = () => {
    setOpacity(
      opacity === THEME_OPACITY.LIGHT ? THEME_OPACITY.DARK : THEME_OPACITY.LIGHT
    );
  };

  const setBg = () => {
    const options = [backgrounds.bg2, backgrounds.bg4];

    let number = Math.random().toFixed(0);

    setBackground(options[number]);
  };

  if (!background) {
    setBg();
  }

  const color = opacity > THEME_OPACITY.LIGHT ? 'white' : 'black';

  return (
    <React.Fragment>
      <div className="Resume__header">
        <Resizer font={font} setFont={setFont} />
        <Downloader />
        <ThemeSwitcher changeTheme={changeTheme} opacity={opacity} />
      </div>
      <div className={missionContainerClass}>
        <div
          className="Resume__bg"
          style={{ backgroundImage: `url(${background})`, opacity }}
        />
        <ResumeHeader color={color} background={background} />
        <ResumeBody color={color} />
        <ResumeFooter color={color} />
      </div>
    </React.Fragment>
  );
};

export default Resume;
