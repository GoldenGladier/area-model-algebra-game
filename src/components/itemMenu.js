import React from 'react';
import './css/itemMenu.css';
import Tilt from 'react-vanilla-tilt';
// import images from '../images/'

class itemMenu extends React.Component{
    constructor(props) {
        super(props);
    }    
    render(){
        return(
            <Tilt options={{ max: 25, speed: 300  }} className="card">
            {/* <div className="card">  */}
                <div className="content">
                    <h2>{this.props.number}</h2>
                    <h3>{this.props.name}</h3>
                    <img src={'images/difficulty' + this.props.number + ".png"} alt="alternativo" className="difficulty-img"></img>
                    <div className="score"> 
                        <i class="bi bi-star-fill"></i> 
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>  
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>   
                        <i class="bi bi-star"></i>                      
                    </div>
                </div>
            {/* </div> */}
            </Tilt>
        );
    }
}

export default itemMenu;