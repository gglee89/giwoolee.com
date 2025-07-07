import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/store'
import type { MenuItems } from './types'
import { MENU_ITEMS } from './constants'

interface PreferencesState {
    projectName: string
    selectedMenu: MenuItems
}
const initialState: PreferencesState = {
    projectName: '',
    selectedMenu: MENU_ITEMS.GENERAL,
}

const preferencesSlice = createSlice({
    name: 'preferences',
    initialState,
    reducers: {
        selectProject: (state, action) => {
            state.projectName = action.payload
        },
        selectMenu: (state, action) => {
            state.selectedMenu = action.payload
        },
    },
})

export const { selectProject, selectMenu } = preferencesSlice.actions

const rootSelector = (state: RootState) => state.preferences

export const getProjectName = (state: RootState) =>
    rootSelector(state).projectName
export const getSelectedMenu = (state: RootState) =>
    rootSelector(state).selectedMenu

export default preferencesSlice.reducer
