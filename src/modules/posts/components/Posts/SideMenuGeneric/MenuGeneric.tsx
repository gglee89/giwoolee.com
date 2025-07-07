import MenuItemGeneric from './MenuItemGeneric'
import type { HackerNewsItem } from '@/services/hackernews/types'
import { useNewsStore } from '@/modules/posts/components/Posts'

interface MenuGeneric<T> {
    menuItems: T[]
}

const MenuGeneric = <T extends HackerNewsItem>({
    menuItems,
}: MenuGeneric<T>) => {
    const { selectedNews, setSelectedNews } = useNewsStore()

    return (
        <div className="menu">
            {menuItems &&
                menuItems.length > 0 &&
                menuItems.map((menuItem) => {
                    return (
                        <MenuItemGeneric
                            key={menuItem.id}
                            isActive={menuItem.id === selectedNews?.id}
                            title={menuItem.title}
                            time={menuItem.time}
                            score={menuItem.score}
                            onClick={() => setSelectedNews(menuItem)}
                        />
                    )
                })}
        </div>
    )
}

export default MenuGeneric
