import React from 'react'
import classnames from 'classnames'

import './menuItem.css'
import { useAppDispatch } from 'store'
import { selectProjectName } from 'modules/projects/slice'
import { ProjectsNameType } from 'data/projects'

interface MenuItemProps {
    name: ProjectsNameType
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
            onClick={() => dispatch(selectProjectName(name))}
            className={menuItemClasses}
        >
            <div className="side-menu-item-left" />
            <div className="side-menu-item-right">{name}</div>
        </div>
    )
}

export default MenuItem
