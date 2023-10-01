import React from 'react'

// Sections
import Header from 'section/Header'
import Preferences from 'modules/preferences/components/Preferences'

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Preferences />
        </React.Fragment>
    )
}

export default Home
