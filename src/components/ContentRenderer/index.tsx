import React, { useState } from 'react'

import './contentRenderer.css'

// Selectors
import { getProject } from 'components/projects/projectsSlice'

// Components
import TopNavigationMenu from './TopNavigationMenu'
import ContentSection from './ContentSection'
import Screenshots from './Screenshots'
import { useSelector } from 'react-redux'

const RendererContext = {
    General: 'General',
    Screenshots: 'Screenshots',
    About: 'About the Company',
} as const
type RendererContextKeys = keyof typeof RendererContext
export type RendererContextType = typeof RendererContext[RendererContextKeys]

export interface Renderer {
    rendererContext: RendererContextType
    renderedImage: string
}
export interface ContentRendererProps {}
const ContentRenderer: React.FC<ContentRendererProps> = () => {
    const [renderer, setRenderer] = useState<Renderer>({
        rendererContext: RendererContext.General,
        renderedImage: '',
    })

    const project = useSelector(getProject)
    if (!project) return null

    const updateRendererContext = (newRenderer: Partial<Renderer>) => {
        setRenderer((prevRenderer) => ({
            ...prevRenderer,
            ...newRenderer,
        }))
    }

    let topMenuOptions: RendererContextType[] = Object.values(RendererContext)

    const { basics, description, aboutCompany } = project

    return (
        <div className="renderer-container">
            <TopNavigationMenu
                selectedMenu={renderer.rendererContext}
                onItemSelect={(selectedItem) =>
                    updateRendererContext({ rendererContext: selectedItem })
                }
                menuOptions={topMenuOptions}
            />
            {renderer.rendererContext === RendererContext.General ? (
                <React.Fragment>
                    <ContentSection title="Basics" content={basics} />
                    <ContentSection
                        title="Description"
                        content={description}
                        isDescription
                    />
                </React.Fragment>
            ) : renderer.rendererContext === RendererContext.Screenshots ? (
                <React.Fragment>
                    <Screenshots
                        projectName={basics.name.content}
                        selectImage={updateRendererContext}
                        selectedImage={renderer.renderedImage}
                    />
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <ContentSection
                        title="About the Company"
                        content={aboutCompany}
                    />
                </React.Fragment>
            )}
        </div>
    )
}

export default ContentRenderer
