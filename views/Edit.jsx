const React = require('react');
const AppLayout = require('./AppLayout.jsx');


class Edit extends React.Component {
    render() {
        const { fruit } = this.props;
        return (
            <AppLayout>
                <div style={{ textAlign:'center', backgroundColor: '#f6f0c4 ', backgroundImage: 'linear-gradient(315deg, #f6f0c4 74%, #d99ec9 0%)', height:'92px',padding: '10px '}}>
                 <h2 style={{color:'red',  paddingLeft: '170px', marginTop:'30px', fontSize:'35px' }}>Edit To Fruit </h2>
                </div>
                <div style={{ backgroundColor: '#f6f0c4 ', marginTop:'0px', padding:'50px 100px',borderLeft: '5px solid #d99ec9', textAlign: 'center' }}>
                
                <form
                    style={{color:'#695787', fontSize:'27px',paddingLeft:'160px'}}
                    action={`/fruits/edit/${fruit._id}?_method=put`}
                    method="POST"
                >
                    Fruit Name  <input style={{marginBottom:'20px', padding:'10px 150px', fontSize:'17px'}} type="text" name="name" value={fruit.name} />
                    <br />
                    Fruit Color  {'  '}
                    <input type="text"style={{marginBottom:'20px', padding:'10px 150px',fontSize:'17px'}}  name="color" value={fruit.color} />
                    <br />
                    Fruit Image  {' '}
                    <input type="text"style={{marginBottom:'20px', padding:'10px 150px', fontSize:'17px'}}  name="img" value={fruit.img} />
                    <br />
                    Fruit Calories  {' '}
                    <input style={{marginBottom:'20px', padding:'10px 150px', fontSize:'17px'}} type="text" name="calories" value={fruit.calories} />
                    <br />
                    <span style={{marginLeft:'-420px'}}>Is Ready To Eat : {' '}</span>
                    <input
                        type="checkbox"
                        checked={fruit.readyToEat ? 'checked' : ''}
                        name="readyToEat"
                    />
                    <br />
                    <input style={{ color: ' #f8f9d2', borderRadius:'40%' ,backgroundColor:'#d99ec9' , border:'4px solid #d99ec9', fontSize:'25px',padding:'0px 17px', marginTop:'45px', fontFamily:'Cursive'}}  type="submit" name="" value="Edit Fruit" />
                </form>
                </div>
            </AppLayout>
        );
    }
}

module.exports = Edit;
