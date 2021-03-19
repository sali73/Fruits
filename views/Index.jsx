const React = require('react');
const AppLayout = require('./AppLayout.jsx');


class Index extends React.Component {
    render() {
        const logout = (
            <form action="/sessions/?_method=delete" method="post">
                <input style={{ color:'red', backgroundColor:'#e8dbfc' , border:'4px solid #f8f9d2', fontSize:'18px',padding:'0px 17px', marginTop:'-25px', fontFamily:'Cursive'}}  type="submit" value="Logout" />
            </form>
        );
        const { fruits } = this.props;
        return (
            <AppLayout title="INDEX PAGE">
                <div >
                    <div style={{ textAlign:'center', backgroundColor: '#e8dbfc', backgroundImage: 'linear-gradient(315deg, #f8f9d2 74%, #e8dbfc 0%)', height:'97px',padding: '10px '}}>

                        <h2 style={{color:'#e8dbfc', textShadow: '1px 1px 6px #000000', paddingLeft: '130px', marginTop:'10px' }}>Welcome {this.props.username} :)</h2>
                        
                        <div style={{marginLeft: '130px'}}>{this.props.username ? logout : ''}</div>
                    </div>
                    <div style={{ backgroundColor: '#f6f0ea', marginTop:'5px', padding:'30px 100px' }}>
                        <div style={{ width: '1300px', height:'auto'}}>
                            <ul style={{ display:'flex', listStyle: 'none', flexWrap:'wrap'}} >
                                {fruits.map((fruit, i) => {
                                    console.log(fruit._id);
                                    return (
                                        <li style={{ backgroundColor:'#e8dbfc', margin:'50px 30px', border:'4px solid #e8dbfc', borderRadius: '20%'}} >
                                            
                                            <a href={`/fruits/${fruit._id}`}>
                                                <img style={{ borderRadius: '20%',width:'160px', height:'150px' , position:'relative'}} src={fruit.img}></img>
                                            </a>

                                            <div style={{position: 'absolute', display: 'flex' , marginLeft:'20px', marginTop:'7px',  boxSizing:'border-box'}}>
                                                <a style={{}} href={`/fruits/edit/${fruit._id}`}>
                                                    <input style={{ color:'red', backgroundColor:'#e8dbfc' , border:'4px solid #f8f9d2', fontSize:'18px', padding:'5px 17px', fontFamily:'Cursive'}} type="submit" value=" E" />
                                                </a>
                                                <form
                                                    action={`/fruits/${fruit._id}?_method=DELETE`}
                                                    method="post" 
                                                    style={{padding:'5px',marginLeft:'5px',}}>
                                                    <input style={{ color:'red', backgroundColor:'#e8dbfc' , border:'4px solid #f8f9d2', fontSize:'18px',padding:'5px 17px', marginTop:'-5px', fontFamily:'Cursive'}} type="submit" value="D" />
                                                </form>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </AppLayout>
        );
    }
}

module.exports = Index;
