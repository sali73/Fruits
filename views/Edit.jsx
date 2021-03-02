const React = require('react');

class Edit extends React.Component {
    render() {
        const { fruit } = this.props;
        return (
            <div>
                <h1>Edit Fruit page</h1>
                <form
                    action={`/fruits/edit/${fruit._id}?_method=put`}
                    method="POST"
                >
                    Name: <input type="text" name="name" value={fruit.name} />
                    <br />
                    Color:{' '}
                    <input type="text" name="color" value={fruit.color} />
                    <br />
                    Is Ready To Eat:{' '}
                    <input
                        type="checkbox"
                        checked={fruit.readyToEat ? 'checked' : ''}
                        name="readyToEat"
                    />
                    <br />
                    <input type="submit" name="" value="Edit Fruit" />
                </form>
            </div>
        );
    }
}

module.exports = Edit;
