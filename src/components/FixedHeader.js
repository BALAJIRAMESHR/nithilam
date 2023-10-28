
import React, { useState, useEffect } from 'react';
import logo from './images/nit-1.png';
import Nithilam from './images/Nithilam.png';
import './FixedHeader.css';
import balaji from "./images/balaji.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBook, faMicrophone,faGamepad, faTheaterMasks, faVolumeUp} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import video from './images/நா.மகாலிங்கம் தமிழாய்வு மையம் - Tamil Library _ Kumaraguru Institutions(1) (online-video-cutter.com).mp4';
import inba from './images/inba.jpg';
import jana from './images/jana.jpg';
import sidd from './images/sidd.jpg';
import kavi from './images/kavi.jpg';
import kari from './images/kari.jpg';
import nali from './images/nali.jpg';
import kav from './images/kav.jpg';





const FixedHeader = () => {
    const books = [
        { title: 'ஆய்வுக் கட்டுரைகள் வெளியிடல்',  icon: faBook },
        { title: 'புத்தகம் வெளியிடுதல்', icon: faSearch},
        { title: 'பாண்பாடு சார் கலை நிகழ்ச்சிகள் ', icon: faMicrophone },
        { title: 'கருத்தரங்கம் ', icon: faGamepad},
        { title: 'காப்பியங்கள் பற்றிய கலந்துரையாடல் ', icon: faTheaterMasks},
        { title: 'தொழில்நுட்பம் சார்ந்த போட்டிகள் ', icon: faVolumeUp},
      ];
      

      
        const text = "தேடலின் துவக்கம்";  
        const [displayedText, setDisplayedText] = useState("");
        const [index, setIndex] = useState(0);
        
        useEffect(() => {
            // If all characters have been typed, wait for 10 seconds, then clear and restart.
            if (index === text.length) {
            setTimeout(() => {
                setDisplayedText("");
                setIndex(0);
            }, 10000);  // 10 seconds delay.
            return;
            }
        
            const timer = setTimeout(() => {
            setDisplayedText((prevText) => prevText + text[index]);
            setIndex((prevIndex) => prevIndex + 1);
            }, 100);
        
            return () => clearTimeout(timer);
        }, [index, text]);
       
        const styles = {
            footer: {
                display: 'flex',
                justifyContent: 'space-between',
                // padding: '10px 20px',
                color: '#fff',
                position:'relative',
                top:'5em'

            },
            section: {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position:'relative',
                top:'2em'
            },
            separator: {
                height: '70%',
                width: '1px',
                backgroundColor: '#fff',
                alignSelf: 'center'
            },
            icon: {
                margin: '10px 10px',
                width:'80px',
                cursor: 'pointer',
                color: 'white',       // Set icon color to white
                marginRight: '8px'
            },
            link: {
                color: 'white',       // Set link color to white
                textDecoration: 'none'  // Remove underline
            },
            
        }

    return (
        <div>
            <header className="fixed-header">
            <img src={Nithilam} className="imgae" alt="logo"/>
                        <div className="list"> 
                            <a href="#home">முகப்பு</a>
                            <a href="#about">பற்றி</a>
                            <a href="#events">நிகழ்வுகள்</a>
                            <a href="#office">அலுவலகம்</a>
                            <a href="#contacts">தொடர்புகள்</a>
                            
                        </div>
            </header>
            <div className='home-page'>
                <div class="wrapper">
                    <div className="video-container">
                        <video autoPlay loop muted className="background-video">
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                    <div class="box">
                        <h1 className='nithilam'>நித்திலம்</h1>
                        <h3 className='nit'>{displayedText}</h3>
                    </div>
                </div>
            </div>
            <div className='about'>
                <div className='img-side'>
                    <img src={logo} alt='nmtrc'/>
                </div>
                <div className='content-side'>
                    <h1>பற்றி</h1>
                </div>

            </div>
            <div className='event'>
                <div className='event-top'>
                    <h1>நோக்கம்</h1>
                </div>

                <div className='grid-container'>
                {books.map((book, index) => (
                    <div key={index} className='book-wrapper'>
                        <div className='book-container'>
                            <FontAwesomeIcon icon={book.icon} className="fa-icon" size='3x' />
                        </div>
                        <div className="book-text">{book.title}</div>
                    </div>
                ))}
                        
                </div>
                
            </div>
            <div>
                <div className='event-header'>
                    <Link to="/"><span>நிகழ்வுகள்</span></Link>
                    <Link to="/Skills"><span>சாதனைகள்</span> </Link>
                </div>
               
            </div>
            <div className='office-bar'>
                <div className='heading-office'>
                    <h1>அலுவலகம்</h1>
                </div>
                <div className='office'>
                    <div className='mar-box'>
                        <div className='image-office-list'>
                            <img src={inba} alt='nmtrc' className='office-img'/>
                        </div>
                        <div className="ofice-content">
                            <h3>இன்பவேல்</h3>
                            <div className='office-con-2'><h4>தலைவர்</h4>
                            <p>மின் மற்றும் எலாட்ரானிக் துறைகள்</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='mar-box'>
                        <div className='image-office-list'>
                            <img src={jana} alt='nmtrc' className='office-img'/>
                        </div>
                        <div className="ofice-content">
                        <h3>ஜனரஞ்சனி</h3>
                            <div className='office-con-2'><h4>இணை தலைவர்</h4>
                            <p>மின் மற்றும் எலாட்ரானிக் துறைகள்</p>
                            </div>
                        </div>
                    </div>
                    <div className='mar-box'>
                        <div className='image-office-list'>
                            <img src={balaji} alt='nmtrc' className='office-img'/>
                        </div>
                        <div className="ofice-content">
                        <h3>பாலாஜி</h3>
                            <div className='office-con-2'><h4>பொருளாளர் </h4>
                            <p>செயற்கை நுண்ணறிவு மற்றும் <br/>தரவு அறிவியல்</p>
                            </div>
                        </div>
                    </div>
                    <div className='mar-box'>
                        <div className='image-office-list'>
                            <img src={sidd} alt='nmtrc' className='office-img'/>
                        </div>
                        <div className="ofice-content">
                        <h3>சித்தார்த்த தேவன்</h3>
                            <div className='office-con-2'><h4>செயலாளர்</h4>
                            <p>செயற்கை நுண்ணறிவு மற்றும் <br/>தரவு அறிவியல்</p>
                            </div>
                        </div>
                    </div>
                    <div className='mar-box'>
                        <div className='image-office-list'>
                            <img src={kavi} alt='nmtrc' className='office-img'/>
                        </div>
                        <div className="ofice-content">
                            <h3>கவி ஸ்ரீ</h3>
                                <div className='office-con-2'><h4> இணை செயலாளர்</h4>
                                <p>மின் மற்றும் எலாட்ரானிக் துறைகள்</p>
                                </div>
                        </div>
                    </div>
                    <div className='mar-box'>
                        <div className='image-office-list'>
                            <img src={kav} alt='nmtrc' className='office-img'/>
                        </div>
                        <div className="ofice-content">
                            <h3>காவ்ய பிரியா</h3>
                                <div className='office-con-2'><h4>நிகழ்வு ஒருங்கிணைப்பாளர்</h4>
                                <p>செயற்கை நுண்ணறிவு மற்றும் <br/> தரவு அறிவியல்</p>
                                </div>
                        </div>
                    </div>
                    <div className='mar-box'>
                        <div className='image-office-list'>
                            <img src={kari} alt='nmtrc' className='office-img'/>
                        </div>
                        <div className="ofice-content">
                            <h3>அதித கரிகாலன்</h3>
                                <div className='office-con-2'><h4>உறுப்பினர்</h4>
                                <p>கட்டிட பொறியாளர்</p>
                                </div>
                        </div>
                    </div>
                    <div className='mar-box'>
                        <div className='image-office-list'>
                            <img src={nali} alt='nmtrc' className='office-img'/>
                        </div>
                        <div className="ofice-content">
                            <h3>நளினி பிரியா</h3>
                            <div className='office-con-2'><h4>உறுப்பினர்</h4>
                            <p>மின் மற்றும் எலாட்ரானிக் துறைகள்</p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            
                
            </div>
            <div className='contact'>
                <div>
                    <div>
                        <h1 className='contact-heading'>தொடர்புகள்</h1>
                        <hr className='line-head'></hr>
                        <div>
                            <footer style={styles.footer}>
                                <div style={styles.section}>
                                    <h4>தொடர்பு</h4>
                                    <p>மின்னஞ்சல் முகவரி:nithilam@kct.ac.in</p>
                                    <p>தொலைபேசி: +91 9363204116</p>
                                </div>
                                <div style={styles.separator}></div>
                                <div style={styles.section}>
                                    <h4>இணையதளம்</h4>
                                    <p><a href='https://nmtrc.in/'>தமிழ் ஆய்வு மையம் </a></p>
                                    <p><a href='https://www.kct.ac.in/'>கல்லூரி</a></p>
                                </div>
                                <div style={styles.separator}></div>
                                <div style={styles.section}>
                                    <h4>Follow Us</h4>
                                    <a href='https://www.facebook.com/kumaragurutamilmandram/?locale=ta_IN'><FaFacebook  style={styles.icon} /></a>
                                    <a href='https://www.instagram.com/kumaraguru_tamil_mandram/'><FaInstagram style={styles.icon} /></a>
                                    <a href='https://www.linkedin.com/company/kumaraguru-tamil-mandram/mycompany/'><FaLinkedin style={styles.icon} /></a>
                                </div>
                            </footer>
                        </div>
                        <hr className='line-bot'></hr>
                    </div>
                </div>
            </div>
            
        </div>        
        
    );
}

export default FixedHeader;              
         

