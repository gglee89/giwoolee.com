import React from 'react'
import TopMenu from './TopMenu'
import MenuGeneric from './MenuGeneric'
import type { HackerNewsItem } from 'services/hackernews/types'

import './sideMenu.css'

interface SideMenuGenericProps<T> {
    menuItems: T[]
}

const SideMenuGeneric = <T extends HackerNewsItem>({
    menuItems,
}: SideMenuGenericProps<T>) => {
    return (
        <div className="side-menu-container">
            <TopMenu />
            <MenuGeneric<T> menuItems={menuItems} />
        </div>
    )
}

export default SideMenuGeneric
