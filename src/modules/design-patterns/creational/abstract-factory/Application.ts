import Button from './factories/components/Button'
import GUIFactory from './factories/GUIFactory'
import Input from './factories/components/Input'

class Application {
    private _factory: GUIFactory
    private _button!: Button
    private _input!: Input

    constructor(factory: GUIFactory) {
        this._factory = factory
    }

    private _createButton() {
        this._button = this._factory.createButton()
    }

    private _createInput() {
        this._input = this._factory.createInput()
    }

    renderButton() {
        this._createButton()
        return this._button.render()
    }

    renderInput() {
        this._createInput()
        return this._input.render()
    }
}

export default Application
