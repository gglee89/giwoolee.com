import React from 'react'

import './contentSection.css'
import { ContentType } from 'data/projects'

interface ContentRendererFormFieldProps {
    label: string
    field: string
}
const ContentRendererFormField: React.FC<ContentRendererFormFieldProps> = ({
    label,
    field,
}) => {
    return (
        <div className="content-renderer-form-item">
            <div className="content-renderer-form-item-label">{`${label}:`}</div>
            <div className="content-renderer-form-item-field">{field}</div>
        </div>
    )
}

interface ContentRendererFormTextAreaProps {
    label: string
    field: string
}
const ContentRendererFormTextArea: React.FC<
    ContentRendererFormTextAreaProps
> = ({ label, field }) => {
    return (
        <div className="content-renderer-form-item">
            <div className="content-renderer-form-item-label">{`${label}:`}</div>
            <div className="content-renderer-form-item-textarea">{field}</div>
        </div>
    )
}

interface ContentRendererFormKeywordsProps {
    label: string
    keywords: string[]
}
const ContentRendererFormKeywords: React.FC<
    ContentRendererFormKeywordsProps
> = ({ label, keywords }) => {
    return (
        <div className="content-renderer-form-item">
            <div className="content-renderer-form-item-label">{`${label}:`}</div>
            <div className="content-renderer-form-item-keywords">
                {keywords &&
                    keywords.map((keyword) => {
                        return (
                            <div
                                key={keyword}
                                className="content-renderer-form-item-keyword-item"
                            >
                                {keyword}
                            </div>
                        )
                    })}
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
                            {content[contentId].type === 'array' ? (
                                <ContentRendererFormKeywords
                                    label={contentId}
                                    keywords={
                                        content[contentId].content as string[]
                                    }
                                />
                            ) : content[contentId].type === 'field' ? (
                                <ContentRendererFormField
                                    label={contentId}
                                    field={content[contentId].content as string}
                                />
                            ) : (
                                <ContentRendererFormTextArea
                                    label={contentId}
                                    field={content[contentId].content as string}
                                />
                            )}
                        </div>
                    )
                })}
        </div>
    )
}

export default ContentSection
