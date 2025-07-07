import React from 'react'

// Styles
import './notFound.css'

// Section
import Header from '@/section/Header'

// Icons
import icons from '@/shared/icons'

const NotFound = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="notfound-container">
                <img
                    className="notfound-image rotate"
                    src={icons.cookie}
                    alt="page-notfound"
                />
                <div className="notfound-text">
                    Oopsss! I couldn&#39;t find this page.
                </div>
                <div>Make sure you&#39;ve typed the correct address.</div>
                <div>
                    If not, please let me know at my e-mail{' '}
                    <a href="mailto: gglee89@gmail.com">
                        <img
                            className="notfound-image-small"
                            src={icons.email}
                            alt="email"
                        />
                    </a>
                </div>
                <div>
                    <a href="/" className="notfound-button">
                        Back to home
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NotFound
