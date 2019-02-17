import React, { PureComponent } from 'react';
import classnames from 'classnames';

// Styles
import './mission.css';

// Icons
import icons from '../../../shared/icons';

const FONT_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA_LARGE: 'extra-large',
};

class Mission extends PureComponent {
  state = {
    fontSize: FONT_SIZES.SMALL,
  };

  selectFontSize = fontSize => {
    this.setState({
      fontSize,
    });
  };

  render() {
    const { fontSize } = this.state;

    let missionContainerClass = classnames({
      'mission-container': true,
      'mission-font-size-small': fontSize === FONT_SIZES.SMALL,
      'mission-font-size-medium': fontSize === FONT_SIZES.MEDIUM,
      'mission-font-size-large': fontSize === FONT_SIZES.LARGE,
      'mission-font-size-extra-large': fontSize === FONT_SIZES.EXTRA_LARGE,
    });

    let missionSmall = classnames({
      'mission-font-size-small': true,
      active: fontSize === FONT_SIZES.SMALL,
    });
    let missionMedium = classnames({
      'mission-font-size-medium': true,
      active: fontSize === FONT_SIZES.MEDIUM,
    });
    let missionLarge = classnames({
      'mission-font-size-large': true,
      active: fontSize === FONT_SIZES.LARGE,
    });
    let missionExtraLarge = classnames({
      'mission-font-size-extra-large': true,
      active: fontSize === FONT_SIZES.EXTRA_LARGE,
    });

    return (
      <div className={missionContainerClass}>
        <div className="mission-button-container">
          <div
            onClick={() => this.selectFontSize(FONT_SIZES.SMALL)}
            className={missionSmall}
          >
            A
          </div>
          <div
            onClick={() => this.selectFontSize(FONT_SIZES.MEDIUM)}
            className={missionMedium}
          >
            A
          </div>
          <div
            onClick={() => this.selectFontSize(FONT_SIZES.LARGE)}
            className={missionLarge}
          >
            A
          </div>
          <div
            onClick={() => this.selectFontSize(FONT_SIZES.EXTRA_LARGE)}
            className={missionExtraLarge}
          >
            A <img src={icons.view} alt="eyes" />
          </div>
        </div>
        <div className="mission-item">
          <span style={{ fontWeight: 'bold' }}>Never stop learning.</span>{' '}
          Always try to understand one's view prior to formulating an output.
          Live by Bayes's Theorem applied to approaching one's understanding of
          the unknown source event by measuring the outcome of subsequent
          events. Putting it simply, is to expose one's self to new experiences
          in order to find why the first one even took place.
        </div>
        <div className="mission-item">
          <a
            href="http://rmurphey.com/blog/2015/03/23/a-baseline-for-front-end-developers-2015"
            style={{
              textDecoration: 'underline',
            }}
          >
            Rebecca Murphy's quote that resonates with many selves including my
            own:
          </a>
          <span className="mission-quote">
            "For me, I don't want to get a job; I want to get invited to great
            jobs. I don't want to go to work; I want to go to work with talented
            people. And I don't want to be satisfied with knowing enough to do
            the work that needed to be done yesterday; I want to know how to do
            the work that will need to get done tomorrow."
          </span>
        </div>
        <div className="mission-item">
          To incessantly respect others regardless of the prior. And from my
          favorite book:{' '}
          <a
            href="https://en.wikipedia.org/wiki/The_Alchemist_(novel)"
            style={{ textDecoration: 'underline' }}
          >
            Paulo Coelho's "The Alchemist"
          </a>
          . The most famous quote to reference is:
          <span className="mission-quote">
            "When you want something; all the universe conspire in helping you
            to achieve it."
          </span>
          And thus, one's prime goal (as referring to my own) is to speak up as
          to be listened and to be acknowledged.
        </div>
        <div className="mission-item">
          Lastly, in a more technical note, is to be part of the Machine
          Learning movement. Helping others with state-of-the-art tools that can
          bring intelligent solutions to unforseen circumstances.
        </div>
      </div>
    );
  }
}

export default Mission;
