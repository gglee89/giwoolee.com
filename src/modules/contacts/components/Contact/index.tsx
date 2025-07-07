// Styles
import './contact.css'

// Components
import Section from '@/modules/section/components/Section'
import { useAppSelector } from '@/store'
import { getContacts } from '@/modules/contacts/slice'

const Contact = () => {
    const contacts = useAppSelector(getContacts)
    const dataAllIds = Object.keys(contacts)

    return (
        <div className="contact-container">
            {dataAllIds &&
                dataAllIds.length > 0 &&
                dataAllIds.map((dataId) => {
                    return (
                        <Section
                            key={dataId}
                            title={dataId}
                            topics={contacts[dataId].topics}
                            isDisabled
                        />
                    )
                })}
        </div>
    )
}

export default Contact
