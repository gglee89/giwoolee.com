import React from 'react'

import './sideMenu.css'

// Components
import TopMenu from './TopMenu'
import Menu from './Menu'
import { PostsNameType } from 'data/posts'

interface SideMenuProps {
    currentItem: string
    menuItems: PostsNameType[]
}
const SideMenu: React.FC<SideMenuProps> = ({ currentItem, menuItems }) => {
    return (
        <div className="side-menu-container">
            <TopMenu />
            <Menu currentItem={currentItem} menuItems={menuItems} />
        </div>
    )
}

export default SideMenu
