// Styles
import './attribution.css'

// Components
import Section from '@/modules/section/components/Section'
import { getAttribution } from '@/modules/attribution/slice'
import { useAppSelector } from '@/store'

// Selectors

const Attribution = () => {
    const attributions = useAppSelector(getAttribution)
    const dataAllIds = Object.keys(attributions)

    return (
        <div className="attribution-container">
            {dataAllIds &&
                dataAllIds.length > 0 &&
                dataAllIds.map((dataId) => {
                    return (
                        <Section
                            key={dataId}
                            title={dataId}
                            topics={attributions[dataId].topics}
                            isDisabled
                        />
                    )
                })}
        </div>
    )
}

export default Attribution
