import React, { useRef, useState, MouseEventHandler, useCallback } from 'react'
import { DesktopIcons as DesktopIconTypes } from './constants'
import icons from '@/shared/icons'

interface Position {
    x: number
    y: number
}

interface DesktopIconsProps {
    onAboutMeClick: () => void
    onMovieClick: () => void
    isFinderOpen: boolean
}

const DesktopIcons: React.FC<DesktopIconsProps> = ({
    onAboutMeClick,
    onMovieClick,
    isFinderOpen,
}) => {
    const iconRef = useRef<HTMLDivElement>(null)
    const moviePlatformIconRef = useRef<HTMLDivElement>(null)
    const [selectedIcons, setSelectedIcons] = useState<string[]>([])
    const [isDragging, setIsDragging] = useState(false)
    const [position, setPosition] = useState<Position>({
        x: 50,
        y: 100,
    })
    const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 })

    const handleMouseDown = (e: React.MouseEvent) => {
        if (
            e.target instanceof HTMLElement &&
            e.target.closest('#topbar') &&
            !e.target.closest('.title')
        ) {
            setIsDragging(true)
            setDragStart({
                x: e.clientX - position.x,
                y: e.clientY - position.y,
            })
            e.preventDefault()
        }
    }

    const handleMouseMove = useCallback(
        (e: globalThis.MouseEvent) => {
            if (isDragging) {
                const newX = e.clientX - dragStart.x
                const newY = e.clientY - dragStart.y

                // Keep the container within viewport bounds
                const maxX = window.innerWidth - 540
                const maxY = window.innerHeight - 200

                setPosition({
                    x: Math.max(0, Math.min(newX, maxX)),
                    y: Math.max(0, Math.min(newY, maxY)),
                })
            }
        },
        [isDragging, dragStart]
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

    const handleClickIcon = (event: MouseEvent) => {
        if (
            iconRef.current &&
            !iconRef.current.contains(event.target as Node)
        ) {
            setSelectedIcons((prevSelection) =>
                prevSelection.filter(
                    (selection) => selection !== DesktopIconTypes.AboutMe
                )
            )
        }

        if (
            moviePlatformIconRef.current &&
            !moviePlatformIconRef.current.contains(event.target as Node)
        ) {
            setSelectedIcons((prevSelection) =>
                prevSelection.filter(
                    (selection) => selection !== DesktopIconTypes.MoviePlatform
                )
            )
        }
    }

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickIcon)
        return () => {
            document.removeEventListener('mousedown', handleClickIcon)
        }
    }, [])

    const clickAboutMe: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        if (e.detail === 1) {
            setSelectedIcons((prevSelection) => [
                ...prevSelection,
                DesktopIconTypes.AboutMe,
            ])
        } else if (e.detail === 2) {
            onAboutMeClick()
        }
    }

    const clickMoviePlatform: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        if (e.detail === 1) {
            setSelectedIcons((prevSelection) => [
                ...prevSelection,
                DesktopIconTypes.MoviePlatform,
            ])
        } else if (e.detail === 2) {
            onMovieClick()
        }
    }

    return (
        <div
            className="bg-stone-800 rounded-lg border-top-left-radius-7 border-top-right-radius-7 cursor-default flex flex-col absolute top-10 left-5 max-w-[540px]"
            style={{
                position: 'fixed',
                left: `${position.x}px`,
                top: `${position.y}px`,
                cursor: isDragging ? 'grabbing' : 'default',
                transition: isDragging ? 'none' : 'all 0.3s ease',
            }}
            onMouseDown={handleMouseDown}
        >
            <div
                className="bg-stone-700 rounded-t-lg h-6 w-full flex"
                style={{
                    cursor: isDragging ? 'grabbing' : 'grab',
                }}
            >
                <div className="mx-auto text-center text-sm text-stone-300">
                    Home directory
                </div>
            </div>
            <div className="flex flex-row p-5 gap-1">
                <div
                    ref={iconRef}
                    onClick={clickAboutMe}
                    className={`rounded-lg pt-2 w-[100px] flex flex-col justify-around box-shadow-md ${
                        isFinderOpen ||
                        selectedIcons.includes(DesktopIconTypes.AboutMe)
                            ? 'bg-stone-700'
                            : 'bg-transparent'
                    }`}
                >
                    <img
                        className="h-[70px]"
                        src={icons['notebook']}
                        alt="notebook"
                    />
                    <div className="font-bold text-white text-sm">About Me</div>
                </div>
                <div
                    ref={moviePlatformIconRef}
                    onClick={clickMoviePlatform}
                    className={`rounded-lg pt-2 w-[100px] flex flex-col justify-around box-shadow-md ${
                        selectedIcons.includes(DesktopIconTypes.MoviePlatform)
                            ? 'bg-stone-700'
                            : 'bg-transparent'
                    }`}
                >
                    <img className="h-16" src={icons['movie']} alt="movie" />
                    <div className="font-bold text-white text-sm">Movie DB</div>
                </div>
            </div>
        </div>
    )
}

export default DesktopIcons
