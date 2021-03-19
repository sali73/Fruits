const React = require('react');
const AppLayout = require('./AppLayout.jsx');


class Index extends React.Component {
    render() {
        const logout = (
            <form action="/sessions/?_method=delete" method="post">
                <input type="submit" value="Logout" />
            </form>
        );
        const { fruits } = this.props;
        return (
            <AppLayout title="INDEX PAGE">
                <div style={{}}>
                    <div style={{ textAlign:'center', backgroundColor: '#e8dbfc', backgroundImage: 'linear-gradient(315deg, #f8f9d2 74%, #e8dbfc 0%)', height:'95px', marginTop: '0px' ,padding: '10px '}}>

                        <h2 style={{color:'#e8dbfc', textShadow: '1px 1px 6px #171022', paddingLeft: '130px' }}>Welcome {this.props.username} :)</h2>
                        
                        <div style={{ paddingLeft: '130px' }}>{this.props.username ? logout : ''}</div>
                    </div>
                    <div style={{ backgroundColor: '#f6f0ea', marginTop:'-10px'}}>
                        <ul style={{ display:'flex', listStyle: 'none'}} >
                            {fruits.map((fruit, i) => {
                                console.log(fruit._id);
                                return (
                                    <li style={{ backgroundColor:'gray', margin:'30px'}} >
                                        
                                        <a href={`/fruits/${fruit._id}`}>
                                            <img style={{ width:'140px'}} src={fruit.img}></img>
                                        </a>
                                        
                                        <a href={`/fruits/edit/${fruit._id}`}>
                                            EDIT 
                                        </a>
                                        <form
                                            action={`/fruits/${fruit._id}?_method=DELETE`}
                                            method="post"
                                        >
                                        <input type="submit" value="delete" />
                                        </form>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </AppLayout>
        );
    }
}

module.exports = Index;
