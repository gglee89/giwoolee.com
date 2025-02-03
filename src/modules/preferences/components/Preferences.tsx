import React, {
    useState,
    useEffect,
    useRef,
    Suspense,
    MouseEventHandler,
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

const Preferences = () => {
    const iconRef = useRef<HTMLDivElement>(null)
    const viteIconRef = useRef<HTMLDivElement>(null)
    const moviePlatformIconRef = useRef<HTMLDivElement>(null)
    const [isFinderOpen, setIsFinderOpen] = useState(true)
    const [selectedIcons, setSelectedIcons] = useState<string[]>([])
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
            window.open(MOVIE_PLATFORM_LINK, '_blank')?.focus()
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

    useEffect(() => {
        document.addEventListener('mousedown', handleClickIcon)
        return () => {
            document.removeEventListener('mousedown', handleClickIcon)
        }
    }, [])

    const preferencesContainerClasses = classnames({
        container: true,
        'preferences-container': true,
        'is-open': isFinderOpen,
    })

    return (
        <FullScreen handle={handle}>
            <div className={preferencesContainerClasses}>
                <TopBar
                    title="About Me"
                    closeFinder={() => handleCloseFinder()}
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

            <div className="desktop-icon-containers">
                <div className="topbar-container">
                    <div className="title">Home directory</div>
                </div>
                <div className="desktop-icon-menu">
                    <div
                        ref={iconRef}
                        onClick={clickAboutMe}
                        className={classnames({
                            'desktop-icon': true,
                            'is-selected':
                                isFinderOpen ||
                                selectedIcons.includes(DesktopIcons.AboutMe),
                        })}
                    >
                        <img src={icons['notebook']} alt="notebook" />
                        <div>About Me</div>
                    </div>
                    <div
                        ref={moviePlatformIconRef}
                        onClick={clickMoviePlatform}
                        className={classnames({
                            'desktop-icon': true,
                            'is-selected': selectedIcons.includes(
                                DesktopIcons.MoviePlatform
                            ),
                        })}
                    >
                        <img src={icons['movie']} alt="movie" />
                        <div>Movie DB</div>
                    </div>
                </div>
            </div>
        </FullScreen>
    )
}

export default Preferences
