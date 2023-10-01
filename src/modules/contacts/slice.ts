import { createSlice } from '@reduxjs/toolkit'
import CONTACT from 'data/contact'
import { RootState } from 'store'

const initialState = {
    contacts: CONTACT,
}

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {},
})

const rootSelector = (state: RootState) => state.contacts

export const getContacts = (state: RootState) => rootSelector(state).contacts

export default contactSlice.reducer
