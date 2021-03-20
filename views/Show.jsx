const React = require('react');
const AppLayout = require('./AppLayout.jsx');

class Show extends React.Component {
    render() {
        const { name, color, readyToEat, img, calories } = this.props.fruit;
        return (
            <AppLayout>

              <div style={{ textAlign:'center', backgroundColor: '#f6f0c4 ', backgroundImage: 'linear-gradient(315deg, #f6f0c4 74%, #d99ec9 0%)', height:'92px',padding: '10px '}}>
                 <h2 style={{color:'red',  paddingLeft: '170px', marginTop:'30px', fontSize:'35px' }}>Fruit Details</h2>
              </div>
              <div style={{ backgroundColor: '#f6f0c4 ', marginTop:'0px', padding:'70px 100px',borderLeft: '5px solid #d99ec9', textAlign: 'center' }}>
                  <div style={{color:'#695787', fontSize:'27px',paddingLeft:'370px', display:'flex'}}>
                    <img style={{ width:'400px', height:'300px', marginRight:'30px', borderRadius:'10%', boxShadow: '2px 2px 8px #d99ec9'}}src={img} />
                    <div>
                        <p>Fruit Name Is {name}</p>
                        <p>Fruit Color Is {color}</p>
                        <p>Fruit Calories Is {calories}</p>
                        <p>{readyToEat ? `It Is Ready To Eat` : `Is Not Ready To Eat`}</p>
                    </div>
                   
                  </div>
                </div>
            </AppLayout>
        )
    }
}

module.exports = Show;