import { createSlice } from '@reduxjs/toolkit'

import ATTRIBUTION from 'data/attribution'
import { RootState } from 'store'

const initialState = {
    attribution: ATTRIBUTION,
}

const attributionSlice = createSlice({
    name: 'attribution',
    initialState,
    reducers: {},
})

const rootSelector = (state: RootState) => state.attribution

export const getAttribution = (state: RootState) =>
    rootSelector(state).attribution

export default attributionSlice.reducer
