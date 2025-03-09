import React, { useState } from 'react'

import './topbar.css'

interface TopBarProps {
    title: string
    closeFinder: () => void
    requestFullScreen: () => void
}

const CloseIcon = () => (
    <svg width="8" height="8" viewBox="0 0 8 8">
        <path
            d="M1.5 1.5l5 5m0-5l-5 5"
            stroke="#000"
            strokeWidth="1.3"
            strokeLinecap="round"
        />
    </svg>
)

const MinimizeIcon = () => (
    <svg width="8" height="8" viewBox="0 0 8 8">
        <path
            d="M1.5 4h5"
            stroke="#000"
            strokeWidth="1.3"
            strokeLinecap="round"
        />
    </svg>
)

const MaximizeIcon = () => (
    <svg width="8" height="8" viewBox="0 0 8 8">
        <path
            d="M1.5 4h5M4 1.5v5"
            stroke="#000"
            strokeWidth="1.3"
            strokeLinecap="round"
        />
    </svg>
)

const RestoreIcon = () => (
    <svg width="8" height="8" viewBox="0 0 8 8">
        <path
            d="M1.5 4h5"
            stroke="#000"
            strokeWidth="1.3"
            strokeLinecap="round"
        />
    </svg>
)

const TopBar: React.FC<TopBarProps> = ({
    title,
    closeFinder,
    requestFullScreen,
}) => {
    const [isFullScreen, setIsFullScreen] = useState(false)

    const handleFullScreen = () => {
        setIsFullScreen(!isFullScreen)
        requestFullScreen()
    }

    return (
        <div className="topbar-container">
            <div className="left-menu">
                <div
                    className="window-control close-icon"
                    onClick={() => closeFinder()}
                >
                    <CloseIcon />
                </div>
                <div
                    className="window-control minimize"
                    title="Minimize not available"
                >
                    <MinimizeIcon />
                </div>
                <div
                    className="window-control maximize"
                    onClick={handleFullScreen}
                    title={
                        isFullScreen ? 'Exit fullscreen' : 'Enter fullscreen'
                    }
                >
                    {isFullScreen ? <RestoreIcon /> : <MaximizeIcon />}
                </div>
            </div>
            <div className="title">{title}</div>
            <div className="right-menu" />
        </div>
    )
}

export default TopBar
