import React from 'react'

// Styles
import './interests.css'

// Components
import Section from 'modules/section/components/Section'

// Selectors
import { getInterests } from 'modules/interests/slice'
import { useAppSelector } from 'store'

const Interests = () => {
    const interests = useAppSelector(getInterests)
    const dataAllIds = Object.keys(interests)

    return (
        <div>
            {dataAllIds.length > 0 &&
                dataAllIds.map((dataId) => {
                    return (
                        <Section
                            key={dataId}
                            title={dataId}
                            topics={interests[dataId].topics}
                            isDisabled
                        />
                    )
                })}
        </div>
    )
}

export default Interests
