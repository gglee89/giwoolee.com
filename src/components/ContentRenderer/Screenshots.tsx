import React from 'react';
import classnames from 'classnames';

import './screenshots.css';
import screenshotImages from '../../shared/screenshots';

const Screenshots = ({ projectName, selectImage, selectedImage }) => {
  let processedSelectedImage =
    screenshotImages[projectName] &&
    screenshotImages[projectName].length > 0 &&
    screenshotImages[projectName].includes(selectedImage)
      ? selectedImage
      : screenshotImages[projectName][0];

  return (
    <div className="screenshot-container">
      <div className="screenshot-image">
        <img src={processedSelectedImage} alt="" />
      </div>
      <div className="screenshot-preview">
        {screenshotImages[projectName] &&
          screenshotImages[projectName].length > 0 &&
          screenshotImages[projectName].map((imageUrl, idx) => {
            let screenshotPreviewClasses = classnames({
              active: imageUrl === processedSelectedImage,
            });

            return (
              <img
                key={idx}
                onClick={() => selectImage(imageUrl)}
                src={imageUrl}
                className={screenshotPreviewClasses}
                alt={`${projectName}_${idx}`}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Screenshots;
