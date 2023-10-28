import React from 'react';
import './Skill.css'
import balaji from './images/balaji.jpg'

function ImageGrid() {
    return (
        <div>
            <div className='achive'>
                <h1 className='achive-head'>சாதனைகள்</h1>
                <div className='achive-contant'>
                <div class="container">
                    <div className="box right">
                        <img  src={balaji} alt='bala' className='img-achive'/>
                        <h1>BALAJI</h1>
                        <p className='para-achive'>hello</p>
                    </div>
                    <div className="box left">
                        <img  src={balaji} alt='bala' className='img-achive'/>
                        <h1>BALAJI</h1>
                        <p className='para-achive'>hello</p></div>
                    <div className="box right">
                        <img  src={balaji} alt='bala' className='img-achive'/>
                        <h1>BALAJI</h1>
                        <p className='para-achive'>hello</p></div>
                    <div className="box left">
                        <img  src={balaji} alt='bala' className='img-achive'/>
                        <h1>BALAJI</h1>
                        <p className='para-achive'>hello</p></div>
                    </div>

                </div>
            </div>
      
        </div>
        
    );
}

export default ImageGrid;
