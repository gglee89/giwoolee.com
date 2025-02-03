import React from 'react'

import './contentRenderer.css'

// Selectors
import { getPost } from 'modules/posts/slice'

// Components
import ContentSection from './ContentSection'
import { useSelector } from 'react-redux'
import { RendererContext } from 'modules/posts/constants'
import { HackerNewsItem } from 'services/hackernews/types'
import { useNewsStore } from '..'

type RendererContextKeys = keyof typeof RendererContext
export type RendererContextType = (typeof RendererContext)[RendererContextKeys]

export interface Renderer {
    rendererContext: RendererContextType
    renderedImage: string
}

const ContentRenderer: React.FC = () => {
    const { selectedNews } = useNewsStore()

    if (!selectedNews) return null

    const { title, time, score, url, by, text } = selectedNews

    return (
        <div className="post-renderer-container">
            <ContentSection title={title} by={by} url={url} text={text} />
        </div>
    )
}

export default ContentRenderer
