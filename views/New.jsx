const React = require('react');
const AppLayout = require('./AppLayout.jsx');

class New extends React.Component {
    render() {
      return (
          <AppLayout>
              <h1>New Fruit page</h1>
              <form action="/fruits" method="POST">
                  Name: <input type="text" name="name" /><br/>
                  Color: <input type="text" name="color" /><br/>
                  Image: <input type="text" name="img" /><br/>
                  Calories: <input type="text" name="calories" /><br/>
                  Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
                  <input type="submit" name="" value="Create Fruit"/>
               </form>
          </AppLayout>);
    }
  }
  
  module.exports = New;