import { MenuType } from './types'

export const MENU_ITEMS = {
    GENERAL: 'General',
    PROJECTS: 'Projects',
    INTERESTS: 'Interests',
    MISSION: 'Mission',
    CONTACT: 'Contact',
    ATTRIBUTION: 'Attribution',
    POSTS: 'Posts',
    DESIGN_PATTERNS: 'Design Patterns',
} as const

export const menuOptions: MenuType[] = [
    { icon: 'cookie', title: MENU_ITEMS.GENERAL },
    { icon: 'iceCream', title: MENU_ITEMS.PROJECTS },
    { icon: 'melon', title: MENU_ITEMS.INTERESTS },
    { icon: 'pieceOfCake', title: MENU_ITEMS.MISSION },
    { icon: 'sushi', title: MENU_ITEMS.CONTACT },
    { icon: 'pizza', title: MENU_ITEMS.ATTRIBUTION },
    { icon: 'pizza', title: MENU_ITEMS.POSTS },
    { icon: 'pizza', title: MENU_ITEMS.DESIGN_PATTERNS },
]
