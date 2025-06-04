import Button from './components/Button'
import Input from './components/Input'
import GUIFactory from './GUIFactory'

import VueButton from './vue/Button'
import VueInput from './vue/Input'

class VueFactory extends GUIFactory {
    createButton(): Button {
        return new VueButton()
    }

    createInput(): Input {
        return new VueInput()
    }
}

export default VueFactory
