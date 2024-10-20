import React from 'react'

import './posts.css'
import SideMenu from './SideMenu'
import ContentRenderer from './ContentRenderer'
import { useAppSelector } from 'store'
import * as postsSlice from 'modules/posts/slice'
import { PostsNameType } from 'data/posts'

const Posts: React.FC = () => {
    const postName = useAppSelector(postsSlice.getPostName)
    const posts = useAppSelector(postsSlice.getPosts)

    return (
        <div className="posts-container">
            <SideMenu
                currentItem={postName}
                menuItems={posts ? (Object.keys(posts) as PostsNameType[]) : []}
            />
            <ContentRenderer />
        </div>
    )
}

export default Posts
