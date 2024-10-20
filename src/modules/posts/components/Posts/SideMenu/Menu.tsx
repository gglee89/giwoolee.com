import React from 'react'

// Components
import MenuItem from './MenuItem'
import { PostsNameType } from 'data/posts'

interface MenuProps {
    currentItem: string
    menuItems: PostsNameType[]
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
