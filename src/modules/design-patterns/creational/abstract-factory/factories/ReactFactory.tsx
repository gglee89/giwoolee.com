import Button from './components/Button'
import Input from './components/Input'
import GUIFactory from './GUIFactory'

import ReactButton from './react/Button'
import ReactInput from './react/Input'

class ReactFactory extends GUIFactory {
    createButton(): Button {
        return new ReactButton()
    }

    createInput(): Input {
        return new ReactInput()
    }
}

export default ReactFactory
