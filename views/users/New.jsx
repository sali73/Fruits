const React = require('react');
const AppLayout = require('../AppLayout.jsx');

class NewUser extends React.Component {
    render() {
        return (
            <AppLayout>
                  <div style={{ textAlign:'center', backgroundColor: '#f6f0c4 ', backgroundImage: 'linear-gradient(315deg, #f6f0c4 74%, #d99ec9 0%)', height:'92px',padding: '10px '}}>
                 <h2 style={{color:'red',  paddingLeft: '170px', marginTop:'30px', fontSize:'35px' }}>Wellcome Our New User :) </h2>
                </div>
                <div style={{ backgroundColor: '#f6f0c4 ', marginTop:'0px', padding:'50px 100px',borderLeft: '5px solid #d99ec9', textAlign: 'center' }}>

                    <form style={{color:'#695787', fontSize:'27px',paddingLeft:'160px',marginTop:'20px' , marginBottom: '20px'}} action="/user/" method="POST">
                        UserName : <input style={{marginBottom:'20px', padding:'10px 150px', fontSize:'17px'}} type="text" name="username" />
                        <br />
                        Password : <input style={{marginBottom:'20px', padding:'10px 150px', fontSize:'17px'}} type="password" name="password" />
                        <br />
                        <input style={{ color: ' #f8f9d2', borderRadius:'40%' ,backgroundColor:'#d99ec9' , border:'4px solid #d99ec9', fontSize:'25px',padding:'0px 17px', marginTop:'45px', fontFamily:'Cursive', marginLeft:'30px'}}  type="submit" value="Create User" />
                    </form>
                </div>
            </AppLayout>
        );
    }
}

module.exports = NewUser;
