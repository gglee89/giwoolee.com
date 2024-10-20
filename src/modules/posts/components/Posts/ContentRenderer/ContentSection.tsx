import React from 'react'

import './contentSection.css'
import { ContentType } from 'data/projects'

interface ContentRendererFormTextAreaProps {
    label: string
    field: string
}
const ContentRendererFormTextArea: React.FC<
    ContentRendererFormTextAreaProps
> = ({ field }) => {
    return (
        <div className="post-content-renderer-form-item">
            <div className="post-content-renderer-form-item-label" />
            <div className="post-content-renderer-form-item-textarea">
                {field}
            </div>
        </div>
    )
}

interface ContentSectionProps {
    title: string
    content: Record<string, ContentType>
}
const ContentSection: React.FC<ContentSectionProps> = ({ title, content }) => {
    const contentAllIds = Object.keys(content)

    return (
        <div className="content-renderer-section">
            <div className="content-renderer-section-title">{title}</div>
            {contentAllIds &&
                contentAllIds.map((contentId) => {
                    return (
                        <div key={contentId} className="content-renderer-form">
                            <ContentRendererFormTextArea
                                label={contentId}
                                field={content[contentId].content as string}
                            />
                        </div>
                    )
                })}
        </div>
    )
}

export default ContentSection
