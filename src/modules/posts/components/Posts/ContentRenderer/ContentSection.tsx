import React from 'react'

import './contentSection.css'
import { ContentType } from 'data/projects'

interface ContentSectionProps {
    title: string
    url: string
    by: string
    text?: string
}
const ContentSection: React.FC<ContentSectionProps> = ({
    title,
    url,
    by,
    text,
}) => {
    return (
        <div className="content-renderer-section">
            <div className="content-renderer-section-title">{title}</div>
            <div className="content-renderer-form">
                <div>
                    News URL:{' '}
                    <a href={url} rel="noreferrer" target="_blank">
                        {url}
                    </a>
                </div>
                <div>{`Author: ${by}`}</div>
                {text && <div>{text}</div>}
            </div>
        </div>
    )
}

export default ContentSection
