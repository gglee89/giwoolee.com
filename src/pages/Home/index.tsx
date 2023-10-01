import React from 'react'

import './home.css'

// Sections
import Header from 'section/Header'
import Preferences from 'modules/preferences/components/Preferences'

// Images
import backgrounds from 'shared/backgrounds'

const BACKGROUND_IMAGE_INDEX = 'bg1'

const Home = () => {
    return (
        <div
            className="Home"
            style={{
                backgroundImage: `url(${backgrounds[BACKGROUND_IMAGE_INDEX]})`,
            }}
        >
            <Header />
            <Preferences />
        </div>
    )
}

export default Home
