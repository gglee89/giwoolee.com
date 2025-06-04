import AbstractFactory from './abstract-factory'

const Creational = () => {
    return (
        <div>
            <h2>Creational Patterns</h2>
            <h4>Abstract Factory</h4>
            <AbstractFactory framework="react" />
            <AbstractFactory framework="vue" />
        </div>
    )
}

export default Creational
