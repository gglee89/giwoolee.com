import React from 'react'
import classnames from 'classnames'

// Styles
import './section.css'

// Icons
import icons from '@/shared/icons'
import type { Topic } from '@/modules/types'

const SectionItem: React.FC<Topic> = ({
    name,
    level,
    link,
    mail,
    icon,
    iconUrl,
    seniority,
}) => {
    const getHref = () => {
        if (link !== undefined) return link
        if (mail !== undefined) return `mailto: ${mail}`
        return '#'
    }

    const getImageSrc = () => {
        if (icon !== undefined) return icons[icon]
        if (iconUrl !== undefined) return iconUrl
        return ''
    }

    const [imageLoaded, setImageLoaded] = React.useState(false)

    return link !== undefined || mail !== undefined ? (
        <a
            href={getHref()}
            rel="noopener noreferrer"
            target="_blank"
            className="section-item-container"
        >
            {(icon !== undefined || iconUrl !== undefined) && (
                <div className="section-topic__image">
                    <div
                        className="section-item-skeleton"
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#525050',
                            animation: 'pulse 1.5s ease-in-out infinite',
                            borderRadius: 'inherit',
                            opacity: imageLoaded ? 0 : 1,
                            transition: 'opacity 0.2s ease',
                        }}
                    />
                    <img
                        src={getImageSrc()}
                        alt={name}
                        className="section-item-icon"
                        style={{
                            opacity: imageLoaded ? 1 : 0,
                            transition: 'opacity 0.2s ease',
                        }}
                        onLoad={() => setImageLoaded(true)}
                    />
                </div>
            )}
            <div className="section-topic">
                <div>{name}</div>
                <div className="section-topic-item">{level}</div>
            </div>
        </a>
    ) : (
        <div className="section-item-container">
            {(icon !== undefined || iconUrl !== undefined) && (
                <div className="section-topic__image">
                    <div
                        className="section-item-skeleton"
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#2a2a2a',
                            animation: 'pulse 1.5s ease-in-out infinite',
                            borderRadius: 'inherit',
                            opacity: imageLoaded ? 0 : 1,
                            transition: 'opacity 0.2s ease',
                        }}
                    />
                    <img
                        src={getImageSrc()}
                        alt={name}
                        className="section-item-icon"
                        style={{
                            opacity: imageLoaded ? 1 : 0,
                            transition: 'opacity 0.2s ease',
                        }}
                        onLoad={() => setImageLoaded(true)}
                    />
                </div>
            )}
            <div className="section-topic">
                <div>{name}</div>
                <div className="section-topic-item">{level}</div>
                {seniority !== undefined && (
                    <div className="section-topic-item">{seniority}</div>
                )}
            </div>
        </div>
    )
}

interface SectionProps {
    title: string
    topics: Topic[]
    isDisabled: boolean
}
const Section: React.FC<SectionProps> = ({ title, topics, isDisabled }) => {
    const updateButtonClasses = classnames({
        'section-update-button': true,
        disabled: isDisabled,
    })

    return (
        <div className="section-container">
            <div className="section-header">
                <div className="section-title">{title}</div>
                <div className={updateButtonClasses}>
                    <div>UPDATE ALL</div>
                    <div>+</div>
                </div>
            </div>
            <div className="section-body">
                {topics !== undefined &&
                    topics.length > 0 &&
                    topics.map((props, key) => {
                        return <SectionItem key={key} {...props} />
                    })}
            </div>
        </div>
    )
}

export default Section
