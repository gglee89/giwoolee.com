import React from 'react'

// Components
import MenuItem from './MenuItem'

interface MenuProps {
    onItemSelect: (name: string) => void
    currentItem: string
    menuItems: string[]
}
const Menu: React.FC<MenuProps> = ({
    onItemSelect,
    currentItem,
    menuItems,
}) => {
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
                            onItemSelect={onItemSelect}
                        />
                    )
                })}
        </div>
    )
}

export default Menu
