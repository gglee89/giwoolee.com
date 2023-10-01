import React from 'react'

import './sideMenu.css'

// Components
import TopMenu from './TopMenu'
import Menu from './Menu'

interface SideMenuProps {
    onItemSelect: (name: string) => void
    currentItem: string
    menuItems: string[]
}
const SideMenu: React.FC<SideMenuProps> = ({
    onItemSelect,
    currentItem,
    menuItems,
}) => {
    return (
        <div className="side-menu-container">
            <TopMenu />
            <Menu
                onItemSelect={onItemSelect}
                currentItem={currentItem}
                menuItems={menuItems}
            />
        </div>
    )
}

export default SideMenu
