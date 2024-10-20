import React from 'react'
import classnames from 'classnames'

import './menuItem.css'
import { useAppDispatch } from 'store'
import { selectPostName } from 'modules/posts/slice'
import { PostsNameType } from 'data/posts'

interface MenuItemProps {
    name: PostsNameType
    isActive: boolean
}
const MenuItem: React.FC<MenuItemProps> = ({ name, isActive }) => {
    const dispatch = useAppDispatch()

    const menuItemClasses = classnames({
        'side-menu-item': true,
        active: isActive,
    })

    return (
        <div
            onClick={() => dispatch(selectPostName(name))}
            className={menuItemClasses}
        >
            <div className="side-menu-item-left" />
            <div className="side-menu-item-right">{name}</div>
        </div>
    )
}

export default MenuItem
