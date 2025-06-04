import Button from './components/Button'
import Input from './components/Input'

class GUIFactory {
    createButton(): Button {
        throw new Error('Not implemented')
    }

    createInput(): Input {
        throw new Error('Not implemented')
    }
}

export default GUIFactory
