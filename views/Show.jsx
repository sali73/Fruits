const React = require('react');

class Show extends React.Component {
    render() {
        const { name, color, readyToEat, img, calories } = this.props.fruit;
        return (
            <div>
                <h1>Fruits Show Page</h1>
                <img src={img} />
                <p>{name}</p>
                <p>Color: {color}</p>
                <p>Calories: {calories}</p>
                <p>{readyToEat ? `It is ready to eat` : `Is not ready to eat`}</p>
            </div>
        )
    }
}

module.exports = Show;