import React, {
    useState,
    useEffect,
    useRef,
    Suspense,
    MouseEventHandler,
    useCallback,
} from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import classnames from 'classnames'
import { DesktopIcons, MOVIE_PLATFORM_LINK } from './constants'

// Assets
import icons from 'shared/icons'

// @MUI
import { LinearProgress } from '@mui/material'

// Styles
import './preferences.css'

// Components
import TopBar from './TopBar'
import TopNavigationMenu from './TopNavigationMenu'

// Selectors
import { useAppDispatch, useAppSelector } from 'store'
import { getProjectName } from 'modules/projects/slice'
import { getSelectedMenu, selectMenu } from 'modules/preferences/slice'
import { MENU_ITEMS, menuOptions } from '../constants'

interface Position {
    x: number
    y: number
}

interface PreferencesProps {
    onMovieClick: () => void
    zIndex: number
    onFocus: () => void
    isOpen: boolean
    onClose: () => void
}

// Components (Menu Content Items)
const General = React.lazy(
    () => import('modules/preferences/components/General')
)
const Projects = React.lazy(
    () => import('modules/projects/components/Projects')
)
const Interests = React.lazy(
    () => import('modules/interests/components/Interests')
)
const Mission = React.lazy(
    () => import('modules/preferences/components/Mission')
)
const Contact = React.lazy(() => import('modules/contacts/components/Contact'))
const Attribution = React.lazy(
    () => import('modules/attribution/components/Attribution')
)
const Posts = React.lazy(() => import('modules/posts/components/Posts'))

const Preferences: React.FC<PreferencesProps> = ({
    onMovieClick,
    zIndex,
    onFocus,
    isOpen,
    onClose,
}) => {
    const iconRef = useRef<HTMLDivElement>(null)
    const viteIconRef = useRef<HTMLDivElement>(null)
    const moviePlatformIconRef = useRef<HTMLDivElement>(null)
    const [isFinderOpen, setIsFinderOpen] = useState(true)
    const [selectedIcons, setSelectedIcons] = useState<string[]>([])
    const [isDragging, setIsDragging] = useState(false)
    const [position, setPosition] = useState<Position>({
        x: window.innerWidth / 2 - 570,
        y: window.innerHeight / 2 - 300,
    })
    const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 })
    const handle = useFullScreenHandle()

    const dispatch = useAppDispatch()
    const projectName = useAppSelector(getProjectName)
    const selectedMenu = useAppSelector(getSelectedMenu)

    const clickAboutMe: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        if (e.detail === 1) {
            setSelectedIcons((prevSelection) => [
                ...prevSelection,
                DesktopIcons.AboutMe,
            ])
        } else if (e.detail === 2) {
            setIsFinderOpen(true)
        }
    }

    const clickMoviePlatform: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        if (e.detail === 1) {
            setSelectedIcons((prevSelection) => [
                ...prevSelection,
                DesktopIcons.MoviePlatform,
            ])
        } else if (e.detail === 2) {
            onMovieClick()
        }
    }

    const handleClickIcon = (event: MouseEvent) => {
        if (
            iconRef.current &&
            !iconRef.current.contains(event.target as Node)
        ) {
            setSelectedIcons((prevSelection) =>
                prevSelection.filter(
                    (selection) => selection !== DesktopIcons.AboutMe
                )
            )
        }

        if (
            viteIconRef.current &&
            !viteIconRef.current.contains(event.target as Node)
        ) {
            setSelectedIcons((prevSelection) =>
                prevSelection.filter(
                    (selection) => selection !== DesktopIcons.ViteWebsite
                )
            )
        }

        if (
            moviePlatformIconRef.current &&
            !moviePlatformIconRef.current.contains(event.target as Node)
        ) {
            setSelectedIcons((prevSelection) =>
                prevSelection.filter(
                    (selection) => selection !== DesktopIcons.MoviePlatform
                )
            )
        }
    }

    const handleCloseFinder = () => {
        setIsFinderOpen(false)
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        if (
            e.target instanceof HTMLElement &&
            e.target.closest('.topbar-container') &&
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

    useEffect(() => {
        document.addEventListener('mousedown', handleClickIcon)
        return () => {
            document.removeEventListener('mousedown', handleClickIcon)
        }
    }, [])

    useEffect(() => {
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

    const preferencesContainerClasses = classnames({
        container: true,
        'preferences-container': true,
        'is-open': isOpen,
    })

    return (
        <FullScreen handle={handle}>
            <div
                className={preferencesContainerClasses}
                style={{
                    position: 'fixed',
                    left: handle.active ? '0' : `${position.x}px`,
                    top: handle.active ? '0' : `${position.y}px`,
                    cursor: isDragging ? 'grabbing' : 'default',
                    transition: isDragging ? 'none' : 'all 0.3s ease',
                    zIndex,
                }}
                onMouseDown={handleMouseDown}
            >
                <TopBar
                    title="About Me"
                    closeFinder={onClose}
                    requestFullScreen={
                        handle.active ? handle.exit : handle.enter
                    }
                />
                <TopNavigationMenu
                    menuItems={menuOptions}
                    selectMenu={(menuTitle: string) =>
                        dispatch(selectMenu(menuTitle))
                    }
                    selectedMenu={selectedMenu}
                />
                <div className="preferences-menu">
                    <Suspense fallback={<LinearProgress color="primary" />}>
                        {selectedMenu === MENU_ITEMS.GENERAL && <General />}
                        {selectedMenu === MENU_ITEMS.PROJECTS && (
                            <Projects projectName={projectName} />
                        )}
                        {selectedMenu === MENU_ITEMS.INTERESTS && <Interests />}
                        {selectedMenu === MENU_ITEMS.MISSION && <Mission />}
                        {selectedMenu === MENU_ITEMS.CONTACT && <Contact />}
                        {selectedMenu === MENU_ITEMS.ATTRIBUTION && (
                            <Attribution />
                        )}
                        {selectedMenu === MENU_ITEMS.POSTS && <Posts />}
                    </Suspense>
                </div>
            </div>
        </FullScreen>
    )
}

export default Preferences
