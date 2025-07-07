import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'

import posts, { PostsName, PostsType, type PostsNameType } from '@/data/posts'

// Define a type for the slice state
interface PostsState {
    posts: PostsType | null
    postName: PostsNameType
}

// Define the initial state
const initialState: PostsState = {
    posts,
    postName: PostsName.Post1,
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        selectPostName: (state, action: PayloadAction<PostsNameType>) => {
            state.postName = action.payload
        },
    },
})

export const { selectPostName } = postsSlice.actions

// Selectors
const rootSelector = (state: RootState) => state.posts

export const getPostName = (state: RootState) => rootSelector(state).postName

export const getPosts = (state: RootState) => rootSelector(state).posts

export const getPost = (state: RootState) => {
    const projectName = getPostName(state)

    const posts = getPosts(state)
    if (!posts) return null

    return posts[projectName]
}

export default postsSlice.reducer
