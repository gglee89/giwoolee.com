import React from 'react'

// Styles
import './settings.css'

// Selectors
import { getSettings } from 'modules/settings/slice'
import { useAppSelector } from 'store'

const Settings = () => {
    const settings = useAppSelector(getSettings)
    let dataAllIds = Object.keys(settings)

    return <div className="settings-container"></div>
}

export default Settings
