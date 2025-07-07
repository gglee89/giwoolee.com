import { RootState } from '@/store'
import INTERESTS from '@/data/interests'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    interests: INTERESTS,
}

const interestsSlice = createSlice({
    name: 'interests',
    initialState,
    reducers: {},
})

// Selectors
const rootSelector = (state: RootState) => state.interests

export const getInterests = (state: RootState) => rootSelector(state).interests

export default interestsSlice.reducer
