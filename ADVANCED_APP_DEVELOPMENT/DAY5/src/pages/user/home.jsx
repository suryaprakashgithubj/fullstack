// import React from 'react';
import Navbar from "./navbar";
import '/src/assets/css/home.css'
import ActionAreaCard from "./card.jsx";
import Footer  from "./Footer.jsx";
const Homepage = () => {
  return (
    <>
    {/* <Sidebar/> */}
    <Navbar/>
    <div>
    <div style={{fontSize:"45px" , marginLeft:"300px" , fontFamily:"italic" , fontWeight: 800}}>
    <i>

      <p>Indias No.1 Corporate Event Management House</p>
    </i>
    </div>
    <div className="bg1">

    </div>
    <div className="q1">
    Creating Connections, Inspiring Collaborations – Every Detail, Every Moment, Perfected!!
    </div>
    <div>
     <div className="p1">
         
     </div>
     </div>
     </div>
      <div style={{display:"flex"}}>
     <ActionAreaCard/>
      </div>
     <Footer/>
    </>
  );
};

export default Homepage;
