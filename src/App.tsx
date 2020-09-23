import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
        <div>
              <div >
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <img className="navbar-brand logo" src={process.env.PUBLIC_URL + "/hskj-logo.png"}/> 
               <a className="navbar-brand" href="#"></a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav">
                   <li className="nav-item active">
                     <a className="nav-link" href="#">首页 <span className="sr-only"></span></a>
                   </li>
                   <li className="nav-item">
                     <a className="nav-link" href="#">产品</a>
                   </li>
                   <li className="nav-item">
                     <a className="nav-link" href="#">关于</a>
                   </li>
                   <li className="nav-item">
                     <a className="nav-link" href="#">加入我们</a>
                   </li>
                 </ul>
               </div>
             </nav>
             <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                     <div className="carousel-item active">
                          <img className="bg_1" src={process.env.PUBLIC_URL + "/bg-masthead.jpg"}>
                          </img>
                          <div className="carousel-caption d-md-block">
                          <h5></h5>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                          </div>
                     </div>
                </div>
              </div>
              </div>

             
        </div>
       
        
  );
}

export default App;
