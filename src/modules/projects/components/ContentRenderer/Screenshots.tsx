import React from 'react'
import classnames from 'classnames'

import './screenshots.css'
import screenshotImages from 'shared/screenshots'
import { Renderer } from '.'
import { RendererContext } from 'modules/projects/constants'

interface ScreenshotsProps {
    projectName: string
    selectImage: (newRenderer: Partial<Renderer>) => void
    selectedImage: string
}
const Screenshots: React.FC<ScreenshotsProps> = ({
    projectName,
    selectImage,
    selectedImage,
}) => {
    const processedSelectedImage =
        screenshotImages[projectName] &&
        screenshotImages[projectName].length > 0 &&
        screenshotImages[projectName].includes(selectedImage)
            ? selectedImage
            : screenshotImages[projectName][0]

    return (
        <div className="screenshot-container">
            <div className="screenshot-image">
                <img src={processedSelectedImage} alt="" />
            </div>
            <div className="screenshot-preview">
                {screenshotImages[projectName] &&
                    screenshotImages[projectName].length > 0 &&
                    screenshotImages[projectName].map((imageUrl, idx) => {
                        const screenshotPreviewClasses = classnames({
                            active: imageUrl === processedSelectedImage,
                        })

                        return (
                            <img
                                key={idx}
                                onClick={() =>
                                    selectImage({
                                        rendererContext:
                                            RendererContext.General,
                                        renderedImage: imageUrl,
                                    })
                                }
                                src={imageUrl}
                                className={screenshotPreviewClasses}
                                alt={`${projectName}_${idx}`}
                            />
                        )
                    })}
            </div>
        </div>
    )
}

export default Screenshots
