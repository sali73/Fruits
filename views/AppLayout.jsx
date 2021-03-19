const React = require('react');


class AppLayout extends React.Component {
    render() {
        return (
            < div style={{fontFamily:'Cursive'}}>
                <nav>
                    <title>Fruits Page</title>   
                </nav>

                <nav style={{ display:'flex', height:'75px',  backgroundColor: '#f6f0c4', backgroundImage: 'linear-gradient(315deg, #f6f0c4 20%, #d99ec9 74%)'}} >
                    
                    <ul style={{ display:'flex', listStyleType:'none'}}>

                      <li style={{paddingRight:'320px', fontSize:'45px',color: ' #f8f9d2', marginTop:'25px', textShadow: '2px 2px 8px #000000', }}>Fruits App!</li>

                      <li style={{paddingRight:'100px', paddingTop:'10px', fontSize:'25px' }}>
                          <a style={{color:'#695787', textDecoration: 'none', textShadow: '1px 1px #171022'}} href="/fruits">Home</a>
                      </li>
                    
                      <li style={{paddingRight:'100px', paddingTop:'10px', fontSize:'25px', }}>
                          <a style={{textDecoration: 'none',color:'#695787', textShadow: '1px 1px #171022'}} href="/fruits/new"> New Fruit</a>    
                      </li>
                   
                      <div className='user'>
                          <li style={{paddingRight:'100px', fontSize:'25px', paddingTop:'10px', }}>
                              <a style={{textDecoration: 'none', color:'#695787', textShadow: '1px 1px #171022'}} href="/user/new">Sing up</a>
                          </li>  
                      </div>

                    </ul>
                  </nav>

                <body>
                    {this.props.children}
                </body>
                <div>
                    <h3 style={{height:'75px', backgroundColor: '#f6f0c4', backgroundImage: 'linear-gradient(315deg, #f6f0c4 20%, #d99ec9 74%)', textAlign:'center',marginTop:'0px', fontSize: '25px',marginBottom:'0px', paddingTop:'30px'}}>
                        @2021 by 
                        <a style={{textDecoration:'none'}} href="https://salimohamed.me/"> Sali Mohamed</a>
                    </h3>
                </div>
            </div>
        );
    }
}

module.exports = AppLayout;
