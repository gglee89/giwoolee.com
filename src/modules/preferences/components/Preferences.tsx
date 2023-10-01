import React, { useState, useEffect, useRef, Suspense } from 'react'
import { Container } from 'react-bootstrap'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import classnames from 'classnames'

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
import {
    getSelectedMenu,
    selectMenu,
    selectProject,
} from 'modules/preferences/slice'
import { MenuType } from '../types'
import { MENU_ITEMS } from '../constants'

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

// Data
const menuItems: MenuType[] = [
    { icon: 'cookie', title: MENU_ITEMS.GENERAL },
    { icon: 'iceCream', title: MENU_ITEMS.PROJECTS },
    { icon: 'melon', title: MENU_ITEMS.INTERESTS },
    { icon: 'pieceOfCake', title: MENU_ITEMS.MISSION },
    { icon: 'sushi', title: MENU_ITEMS.CONTACT },
    { icon: 'pizza', title: MENU_ITEMS.ATTRIBUTION },
    { icon: 'cog', title: MENU_ITEMS.SETTINGS },
]

const Preferences = () => {
    const iconRef = useRef<HTMLDivElement>(null)
    const [isFinderOpen, setIsFinderOpen] = useState(true)
    const [count, setCount] = useState(0)
    const [isIconSelected, setIsIconSelected] = useState(false)
    const handle = useFullScreenHandle()

    const dispatch = useAppDispatch()
    const projectName = useAppSelector(getProjectName)
    const selectedMenu = useAppSelector(getSelectedMenu)

    const preferencesContainerClasses = classnames({
        'preferences-container': true,
        'is-open': isFinderOpen,
    })

    const desktopIconClasses = classnames({
        'desktop-icon': true,
        'is-selected': isIconSelected,
    })

    const handleDoubleClick = () => {
        setIsIconSelected(true)
        setCount(count + 1)

        setTimeout(() => {
            setCount(0)
        }, 1000)

        // Only executes if user does double click
        if (count === 2) {
            setIsFinderOpen(true)
        }
    }

    const handleClickIcon = (event: MouseEvent) => {
        if (
            iconRef.current &&
            !iconRef.current.contains(event.target as Node)
        ) {
            setIsIconSelected(false)
            setCount(0)
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

    return (
        <FullScreen handle={handle}>
            <Container className={preferencesContainerClasses}>
                <TopBar
                    title="About Me"
                    closeFinder={() => handleCloseFinder()}
                    requestFullScreen={
                        handle.active ? handle.exit : handle.enter
                    }
                />
                <TopNavigationMenu
                    menuItems={menuItems}
                    selectMenu={(menuTitle: string) =>
                        dispatch(selectMenu(menuTitle))
                    }
                    selectedMenu={selectedMenu}
                />
                <Suspense
                    fallback={
                        <div className="preferences-body">
                            <LinearProgress color="secondary" />
                        </div>
                    }
                >
                    <div className="preferences-body">
                        {selectedMenu === MENU_ITEMS.GENERAL && <General />}
                        {selectedMenu === MENU_ITEMS.PROJECTS && (
                            <Projects
                                selectProject={(name: string) =>
                                    dispatch(selectProject(name))
                                }
                                projectName={projectName}
                            />
                        )}
                        {selectedMenu === MENU_ITEMS.INTERESTS && <Interests />}
                        {selectedMenu === MENU_ITEMS.MISSION && <Mission />}
                        {selectedMenu === MENU_ITEMS.CONTACT && <Contact />}
                        {selectedMenu === MENU_ITEMS.ATTRIBUTION && (
                            <Attribution />
                        )}
                        {selectedMenu === MENU_ITEMS.SETTINGS && (
                            <Attribution />
                        )}
                    </div>
                </Suspense>
            </Container>
            <div
                ref={iconRef}
                onClick={() => handleDoubleClick()}
                className={desktopIconClasses}
            >
                <img src={icons['notebook']} alt="notebook" />
                <div>About Me</div>
            </div>
        </FullScreen>
    )
}

export default Preferences
