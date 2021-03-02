const React = require('react');

class AppLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Fruits Page</title>
                </head>
                <body>
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                </body>
            </html>
        );
    }
}

module.exports = AppLayout;
