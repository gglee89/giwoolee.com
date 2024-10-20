import React from 'react'

import './contentRenderer.css'

// Selectors
import { getPost } from 'modules/posts/slice'

// Components
import ContentSection from './ContentSection'
import { useSelector } from 'react-redux'
import { RendererContext } from 'modules/posts/constants'

type RendererContextKeys = keyof typeof RendererContext
export type RendererContextType = (typeof RendererContext)[RendererContextKeys]

export interface Renderer {
    rendererContext: RendererContextType
    renderedImage: string
}
const ContentRenderer = () => {
    const post = useSelector(getPost)
    if (!post) return null

    const { introduction, body, conclusion } = post

    return (
        <div className="post-renderer-container">
            <>
                <ContentSection title="Introduction" content={introduction} />
                {body && <ContentSection title="Description" content={body} />}
                {conclusion && (
                    <ContentSection title="Conclusion" content={conclusion} />
                )}
            </>
        </div>
    )
}

export default ContentRenderer
