const React = require('react');
const AppLayout = require('./AppLayout.jsx');


class Index extends React.Component {
    render() {
        const logout = (
            <form action="/sessions/?_method=delete" method="post">
                <input style={{ color: ' #f8f9d2', borderRadius:'40%' ,backgroundColor:'#d99ec9' , border:'4px solid #d99ec9', fontSize:'18px',padding:'0px 17px', marginTop:'-25px', fontFamily:'Cursive'}}  type="submit" value="Logout" />
            </form>
        );
        const { fruits } = this.props;
        return (
            <AppLayout title="INDEX PAGE">
                <div >
                    <div style={{ textAlign:'center', backgroundColor: '#f6f0c4 ', backgroundImage: 'linear-gradient(315deg, #f6f0c4 74%, #d99ec9 0%)', height:'92px',padding: '10px '}}>

                        <h2 style={{color:'red',  paddingLeft: '170px', marginTop:'10px' }}>Welcome {this.props.username} :)</h2>
                        
                        <div style={{marginLeft: '170px'}}>{this.props.username ? logout : ''}</div>
                    </div>
                    <div style={{ backgroundImage: 'url(https://thepaleodiet-assets.s3.amazonaws.com/images/Recipes/_1200x630_crop_center-center_82_none/Fruit.jpg?mtime=20200514115951&focal=none&tmtime=20210112140723)', height:'430px' , backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderTop: ' 2px solid #d99ec9',  borderLeft: '5px solid #d99ec9', opacity: '0.89'}}>
                    </div>
                    <div style={{ color:'red', textAlign:'center',paddingTop:'30px', height:'75px', backgroundColor: '#f6f0c4', backgroundImage: 'linear-gradient(315deg, #f6f0c4 20%, #d99ec9 74%)',fontSize:'29px'}}> Our Fruits List</div>

                    <div style={{ backgroundColor: '#f6f0c4 ', marginTop:'0px', padding:'30px 100px',borderLeft: '5px solid #d99ec9' }}>
                        
                        <div style={{ width: '1300px', height:'auto'}}>
                            <ul style={{ display:'flex', listStyle: 'none', flexWrap:'wrap'}} >
                                {fruits.map((fruit, i) => {
                                    console.log(fruit._id);
                                    return (
                                        <li style={{ backgroundColor:'#d99ec9', margin:'50px 30px', border:'4px solid #d99ec9', borderRadius: '20%'}} >
                                            
                                            <a href={`/fruits/${fruit._id}`}>
                                                <img style={{ borderRadius: '20%',width:'165px', height:'155px' , position:'relative'}} src={fruit.img}></img>
                                            </a>

                                            <div style={{position: 'absolute', display: 'flex' , marginLeft:'20px', marginTop:'7px',  boxSizing:'border-box'}}>
                                                <a style={{}} href={`/fruits/edit/${fruit._id}`}>
                                                    <input style={{ color:'#f8f9d2', backgroundColor:'#d99ec9' , border:'4px solid #f8f9d2', fontSize:'18px', padding:'5px 17px', fontFamily:'Cursive'}} type="submit" value=" E" />
                                                </a>
                                                <form
                                                    action={`/fruits/${fruit._id}?_method=DELETE`}
                                                    method="post" 
                                                    style={{padding:'5px',marginLeft:'5px',}}>
                                                    <input style={{ color:'#f8f9d2', backgroundColor:'#d99ec9' , border:'4px solid #f8f9d2', fontSize:'18px',padding:'5px 17px', marginTop:'-5px', fontFamily:'Cursive'}} type="submit" value="D" />
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
