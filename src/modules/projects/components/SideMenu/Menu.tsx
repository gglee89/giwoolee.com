import React from 'react'

// Components
import MenuItem from './MenuItem'
import { ProjectsNameType } from 'data/projects'

interface MenuProps {
    currentItem: string
    menuItems: ProjectsNameType[]
}
const Menu: React.FC<MenuProps> = ({ currentItem, menuItems }) => {
    return (
        <div className="menu">
            {menuItems &&
                menuItems.length > 0 &&
                menuItems.map((menuItem) => {
                    return (
                        <MenuItem
                            key={menuItem}
                            isActive={menuItem === currentItem}
                            name={menuItem}
                        />
                    )
                })}
        </div>
    )
}

export default Menu
