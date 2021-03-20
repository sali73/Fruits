const React = require('react');
const AppLayout = require('./AppLayout.jsx');

class New extends React.Component {
    render() {
      return (
          <AppLayout>

              <div style={{ textAlign:'center', backgroundColor: '#f6f0c4 ', backgroundImage: 'linear-gradient(315deg, #f6f0c4 74%, #d99ec9 0%)', height:'92px',padding: '10px '}}>
                 <h2 style={{color:'red',  paddingLeft: '170px', marginTop:'80px' }}>Here You Can Add Your Favorite Fruits Or Vegetables!</h2>
              </div>

              <div style={{ backgroundColor: '#f6f0c4 ', marginTop:'0px', padding:'50px 100px',borderLeft: '5px solid #d99ec9', textAlign: 'center' }}>
                <form style={{color:'#695787', fontSize:'27px',paddingLeft:'160px'}} action="/fruits" method="POST">
                    Name: <input style={{marginBottom:'20px', padding:'10px 150px'}} type="text" name="name" /><br/>
                    Color: <input style={{marginBottom:'20px', padding:'10px 150px'}}  type="text" name="color" /><br/>
                    Image: <input style={{marginBottom:'20px', padding:'10px 150px'}}  type="text" name="img" /><br/>
                    Calories: <input style={{marginBottom:'20px', padding:'10px 150px'}}  type="text" name="calories" /><br/>
                    <span style={{marginLeft:'-320px'}}>Is Ready To Eat: </span><input type="checkbox" name="readyToEat" /><br/>
                    <input style={{ color: ' #f8f9d2', borderRadius:'40%' ,backgroundColor:'#d99ec9' , border:'4px solid #d99ec9', fontSize:'25px',padding:'0px 17px', marginTop:'45px', fontFamily:'Cursive'}}  type="submit" name="" value="Create Fruit"/>
                </form>
               </div>
          </AppLayout>);
    }
  }
  
  module.exports = New;