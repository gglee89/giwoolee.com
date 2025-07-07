import React, { useState, useCallback } from 'react'
import { useFullScreenHandle } from 'react-full-screen'
import { MOVIE_PLATFORM_LINK } from './constants'
import TopBar from './TopBar'

interface Position {
    x: number
    y: number
}

interface MovieIframeProps {
    onClose: () => void
    zIndex: number
    onFocus: () => void
}

const MovieIframe: React.FC<MovieIframeProps> = ({
    onClose,
    zIndex,
    onFocus,
}) => {
    const handle = useFullScreenHandle()
    const [isDragging, setIsDragging] = useState(false)
    const [position, setPosition] = useState<Position>({
        x: window.innerWidth / 2 - 570,
        y: window.innerHeight / 2 - 300,
    })
    const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 })

    const handleMouseDown = (e: React.MouseEvent) => {
        if (
            e.target instanceof HTMLElement &&
            e.target.closest('#topbar') &&
            !e.target.closest('.window-control')
        ) {
            setIsDragging(true)
            setDragStart({
                x: e.clientX - position.x,
                y: e.clientY - position.y,
            })
            onFocus()
            e.preventDefault()
        }
    }

    const handleMouseMove = useCallback(
        (e: globalThis.MouseEvent) => {
            if (isDragging && !handle.active) {
                const newX = e.clientX - dragStart.x
                const newY = e.clientY - dragStart.y

                // Keep the window within viewport bounds
                const maxX = window.innerWidth - 570
                const maxY = window.innerHeight - 100

                setPosition({
                    x: Math.max(0, Math.min(newX, maxX)),
                    y: Math.max(0, Math.min(newY, maxY)),
                })
            }
        },
        [isDragging, dragStart, handle.active]
    )

    const handleMouseUp = useCallback(() => {
        setIsDragging(false)
    }, [])

    React.useEffect(() => {
        if (isDragging) {
            document.addEventListener(
                'mousemove',
                handleMouseMove as EventListener
            )
            document.addEventListener('mouseup', handleMouseUp as EventListener)
            document.body.style.cursor = 'grabbing'

            return () => {
                document.removeEventListener(
                    'mousemove',
                    handleMouseMove as EventListener
                )
                document.removeEventListener(
                    'mouseup',
                    handleMouseUp as EventListener
                )
                document.body.style.cursor = ''
            }
        }
    }, [isDragging, handleMouseMove, handleMouseUp])

    return (
        <div
            className={classnames({
                container: true,
                'preferences-container': true,
                'is-open': true,
            })}
            style={{
                position: 'fixed',
                left: handle.active ? '0' : `${position.x}px`,
                top: handle.active ? '0' : `${position.y}px`,
                cursor: isDragging ? 'grabbing' : 'default',
                transition: isDragging ? 'none' : 'all 0.3s ease',
                zIndex,
                display: 'flex',
                flexDirection: 'column',
            }}
            onMouseDown={handleMouseDown}
        >
            <TopBar
                title="Movie Platform"
                closeFinder={onClose}
                requestFullScreen={handle.active ? handle.exit : handle.enter}
            />
            <div
                className="preferences-menu"
                style={{
                    flex: 1,
                    minHeight: 0,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <iframe
                    src={MOVIE_PLATFORM_LINK}
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        flex: 1,
                    }}
                    title="Movie Platform"
                />
            </div>
        </div>
    )
}

export default MovieIframe
