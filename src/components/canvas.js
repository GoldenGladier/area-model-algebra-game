import React, { useRef } from 'react';
// import './css/itemMenu.css';

class Canvas extends React.Component{
    constructor(props) {
        super(props);
    }    
    render(){
        const canvasRef = useRef(null)
        return(
            <canvas />
        );
    }
}

export default Canvas;