import Application from './Application'
import GUIFactory from './factories/GUIFactory'
import ReactFactory from './factories/ReactFactory'
import VueFactory from './factories/VueFactory'

interface ApplicationProps {
    framework: 'react' | 'vue'
}

const getFactory = (framework: 'react' | 'vue'): GUIFactory => {
    switch (framework) {
        case 'react':
            return new ReactFactory()
        case 'vue':
            return new VueFactory()
        default:
            throw new Error('Unknown framework.')
    }
}

const AbstractFactory = ({ framework }: ApplicationProps) => {
    const factory = getFactory(framework)
    const application = new Application(factory)

    return (
        <div>
            {application.renderButton()}
            {application.renderInput()}
        </div>
    )
}

export default AbstractFactory
