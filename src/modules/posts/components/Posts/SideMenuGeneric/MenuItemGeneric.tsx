import classNames from 'classnames'
import React from 'react'

import './menuItemGeneric.css'
import moment from 'moment'

interface MenuItemGenericProps {
    title: string
    time: number
    score: number
    isActive: boolean
    onClick: () => void
}

const MenuItemGeneric: React.FC<MenuItemGenericProps> = ({
    title,
    time,
    score,
    isActive,
    onClick,
}) => {
    const menuItemClasses = classNames({
        'posts-side-menu-item': true,
        active: isActive,
    })

    return (
        <div className={menuItemClasses} onClick={onClick}>
            <div className="posts-side-menu-item-left">{score}</div>
            <div className="posts-side-menu-item-post">
                <div>{title}</div>
                <div className="date">
                    {moment.unix(time).format('MM/DD/YYYY h:mm:ss A')}
                </div>
            </div>
        </div>
    )
}

export default MenuItemGeneric
