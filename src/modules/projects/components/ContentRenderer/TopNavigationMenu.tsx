import React from 'react'
import classnames from 'classnames'

import './topNavigationMenu.css'
import { RendererContextType } from '.'

interface TopNavigationMenuProps {
    selectedMenu: RendererContextType
    onItemSelect: (newRenderer: RendererContextType) => void
    menuOptions: RendererContextType[]
}
const TopNavigationMenu: React.FC<TopNavigationMenuProps> = ({
    selectedMenu,
    onItemSelect,
    menuOptions,
}) => {
    return (
        <div className="content-renderer-top-navigation-container">
            {menuOptions &&
                menuOptions.length > 0 &&
                menuOptions.map((menuItem) => {
                    const topNavigationMenuClasses = classnames({
                        'content-renderer-top-navigation-container-item': true,
                        active: menuItem === selectedMenu,
                    })

                    return (
                        <div
                            key={menuItem}
                            onClick={() => onItemSelect(menuItem)}
                            className={topNavigationMenuClasses}
                        >
                            {menuItem}
                        </div>
                    )
                })}
        </div>
    )
}

export default TopNavigationMenu
