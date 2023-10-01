import { MENU_ITEMS } from './constants'

export interface MenuType {
    icon: string
    title: string
}

export type MenuItems = (typeof MENU_ITEMS)[keyof typeof MENU_ITEMS]
