import { createSlice } from '@reduxjs/toolkit'
import SETTINGS from 'data/settings'
import { RootState } from 'store'

const initialState = {
    settings: SETTINGS,
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {},
})

const rootSelector = (state: RootState) => state.settings

export const getSettings = (state: RootState) => rootSelector(state).settings

export default settingsSlice.reducer
