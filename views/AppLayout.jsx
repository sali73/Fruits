const React = require('react');


class AppLayout extends React.Component {
    render() {
        return (
            <>
                <nav>
                    <title>Fruits Page</title>   
                </nav>

                <nav style={{ display:'flex', height:'95px', backgroundColor: '#f8f9d2', backgroundImage: 'linear-gradient(315deg, #f8f9d2 0%, #e8dbfc 74%)',}} >
                    
                    <ul style={{ display:'flex', listStyleType:'none'}}>

                      <li style={{paddingRight:'320px', fontSize:'40px',color: ' #f8f9d2', marginTop:'50px', textShadow: '2px 2px 8px #302441'}}>Fruits App!</li>

                      <li style={{paddingRight:'100px', paddingTop:'10px', fontSize:'25px' }}>
                          <a style={{color:'#f8f9d2', textDecoration: 'none', textShadow: '1px 1px 5px #171022'}} href="/fruits">Home</a>
                      </li>
                    
                      <li style={{paddingRight:'100px', paddingTop:'10px', fontSize:'25px', }}>
                          <a style={{textDecoration: 'none',color:'#f8f9d2', textShadow: '1px 1px 5px #171022'}} href="/fruits/new"> New Fruit</a>    
                      </li>
                   
                      <div className='user'>
                          <li style={{paddingRight:'100px', fontSize:'25px', paddingTop:'10px', }}>
                              <a style={{textDecoration: 'none', color:'#f8f9d2', textShadow: '1px 1px 5px #171022'}} href="/user/new">Sing up</a>
                          </li>    
                      </div>

                    </ul>
                  </nav>

                <body>
                    {this.props.children}
                </body>
            </>
        );
    }
}

module.exports = AppLayout;
