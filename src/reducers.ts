import { combineReducers } from 'redux'

import interests from 'modules/interests/slice'
import projects from 'modules/projects/slice'
import preferences from 'modules/preferences/slice'
import contacts from 'modules/contacts/slice'
import settings from 'modules/settings/slice'
import attribution from 'modules/attribution/slice'
import posts from 'modules/posts/slice'

export default combineReducers({
    interests,
    projects,
    preferences,
    contacts,
    settings,
    attribution,
    posts,
})
