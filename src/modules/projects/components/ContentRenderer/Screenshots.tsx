import React, { useEffect } from 'react'
import classnames from 'classnames'

import './screenshots.css'
import screenshotImages from 'shared/screenshots'
import { Renderer } from '.'
import { ImageUrl } from 'modules/projects/types'

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
    const selected = screenshotImages[projectName].find(
        (image) => image.original === selectedImage
    )
    const processedSelectedImage: ImageUrl = selected
        ? selected
        : screenshotImages[projectName][0]

    useEffect(() => {
        const blurLoads = document.querySelectorAll('.blur-load')
        blurLoads.forEach((div) => {
            const img = div.querySelector('img')
            if (!img) return

            function loaded() {
                if (!img) return
                // show img
                div.classList.add('loaded')
            }

            if (img.complete) {
                loaded()
            } else {
                img.addEventListener('load', loaded)
            }
        })

        return () => {
            blurLoads.forEach((div) => {
                div.classList.remove('loaded')
            })
        }
    }, [projectName])

    return (
        <div className="screenshot-container">
            <div className="screenshot-image">
                <div
                    className="blur-load"
                    style={{
                        backgroundImage: `url(${processedSelectedImage.blur})`,
                    }}
                >
                    <img
                        src={processedSelectedImage.original}
                        loading="lazy"
                        alt=""
                    />
                </div>
            </div>
            <div className="screenshot-preview">
                {screenshotImages[projectName] &&
                    screenshotImages[projectName].length > 0 &&
                    screenshotImages[projectName].map((imageUrl, idx) => {
                        const screenshotPreviewClasses = classnames({
                            preview: true,
                            active: imageUrl === processedSelectedImage,
                        })

                        return (
                            <div
                                key={idx}
                                onClick={() =>
                                    selectImage({
                                        renderedImage: imageUrl.original,
                                    })
                                }
                                className="blur-load"
                                style={{}}
                            >
                                <img
                                    src={imageUrl.original}
                                    className={screenshotPreviewClasses}
                                    alt={`${projectName}_${idx}`}
                                    loading="lazy"
                                />
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Screenshots
