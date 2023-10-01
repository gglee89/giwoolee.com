import React from 'react'

import './topNavigationMenu.css'

// Components
import MenuItem from './MenuItem'
import { MenuType } from 'modules/preferences/types'

interface TopNavigationMenuProps {
    menuItems: MenuType[]
    selectedMenu: string
    selectMenu: (menu: string) => void
}
const TopNavigationMenu: React.FC<TopNavigationMenuProps> = ({
    menuItems,
    ...rest
}) => {
    return (
        <div className="top-navigation-container">
            <div className="navigation-menu">
                {menuItems &&
                    menuItems.length > 0 &&
                    menuItems.map(({ title }) => {
                        return <MenuItem key={title} title={title} {...rest} />
                    })}
            </div>
        </div>
    )
}

export default TopNavigationMenu
