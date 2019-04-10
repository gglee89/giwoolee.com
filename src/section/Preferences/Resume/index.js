import React, { useState } from 'react';
import classnames from 'classnames';

// Styles
import './resume.css';

// Assets
import icons from '../../../shared/icons';

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

const Resume = () => {
  const [font, setFont] = useState({ size: FONT_SIZES.SMALL });

  let missionContainerClass = classnames({
    resume: true,
    'mission-container': true,
    'mission-font-size-small': font.size === FONT_SIZES.SMALL,
    'mission-font-size-medium': font.size === FONT_SIZES.MEDIUM,
    'mission-font-size-large': font.size === FONT_SIZES.LARGE,
    'mission-font-size-extra-large': font.size === FONT_SIZES.EXTRA_LARGE,
  });

  return (
    <React.Fragment>
      <Resizer font={font} setFont={setFont} />
      <div className={missionContainerClass}>
        <ResumeHeader />
        <ResumeBody />
        <ResumeFooter />
      </div>
    </React.Fragment>
  );
};

export default Resume;
