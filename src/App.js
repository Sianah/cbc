import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './img/CBC Logo.png';
import video from './img/CBC.mp4';
import site1 from './img/site1.png';
import site2 from './img/site2.png';
import site3 from './img/site3.png';
import React from 'react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Balancer from 'react-wrap-balancer';


function vidPlay(){
  return(
    <ReactPlayer 
    url={video} 
    playing = {true}
    loop = {true}
    muted = {true}
    width = "100%" 
    height = "100%" 
     />
  );
}

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={img} alt="CBC Logo" height="70"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {vidPlay()}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
        <FontAwesomeIcon icon={faAngleDown} size="2x" color='#CB9B2B' style={{ marginBottom: '-20px' }}/>
        <FontAwesomeIcon icon={faAngleDown} size="2x" color='#CB9B2B'/>
      </div>
      <div className="sites" style={{display:'flex'}}>
        <img src={site1} alt="Site1"/>
        <p style={{marginLeft:'700px', marginTop:'50px', textAlign:'justify', flex: 1, flexWrap:'wrap', textWrap:'balance'}}>
          <Balancer>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, 
          dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, 
          ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
          Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. 
          Aliquam in elementum tellus.</Balancer>
          </p>
      </div>
      <div className="sites2" style={{display:'flex'}}>
        <p style={{marginLeft:'100px', marginTop:'50px', textAlign:'justify', flex: 1, flexWrap:'wrap', textWrap:'balance'}}>
          <Balancer>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, 
          dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, 
          ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
          Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. 
          Aliquam in elementum tellus.</Balancer>
          </p>
          <img src={site2} alt="Site1"/>
      </div>
      <div className="sites" style={{display:'flex'}}>
        <img src={site3} alt="Site1"/>
        <p style={{marginLeft:'700px', marginTop:'50px', textAlign:'justify', flex: 1, flexWrap:'wrap', textWrap:'balance'}}>
          <Balancer>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, 
          dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, 
          ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
          Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. 
          Aliquam in elementum tellus.</Balancer>
          </p>
      </div>
      <footer className="footer">
        <div className = "footer-titles" style={{display:'flex' , justifyContent:'space-between'}}>
        <h3 style={{color:'#333'}}>Construction By Cadena</h3>
        <h3 style={{color:'#333'}}>Socials</h3>
        <h3 style={{color:'#333'}}>inquiries</h3>
        </div>
        <h4 style={{color: '#878787'}}>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit.</h4>
        <ul/>
        <h4 style={{color: '#878787'}}>123 Sesame Street</h4>
        <ul/>
        <h4 style={{color: '#878787'}}>Office: (123)-456-7890<br/>
        Support@ConstructionByCadena.com</h4>
      </footer>
    </div>
  );
}


export default App;
<script src="https://kit.fontawesome.com/aea2883ddf.js" crossorigin="anonymous"></script>
