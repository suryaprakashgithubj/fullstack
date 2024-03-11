import Navbar from "./navbar";
import '/src/assets/css/home.css';
import Footer from "./Footer.jsx";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div>
        <div style={{ fontSize: "45px", marginLeft: "300px", fontFamily: "italic", fontWeight: 800 }}>
          <i>
            <p>Indias No.1 Corporate Event Management House</p>
          </i>
        </div>
        <div className="bg1"></div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', color: "#093A3E" }}>
          <button style={{ padding: '15px', backgroundColor: '#093A3E', color: '#fff', border: 'none', borderRadius: '5px', fontFamily: "sans-serif", fontSize: '20px', cursor: 'pointer' }} onClick={() => navigate("/register")}>Get Started</button>
        </div>
        <div className="q1">Creating Connections, Inspiring Collaborations – Every Detail, Every Moment, Perfected!!</div>
        <div>
          <div className="p1"></div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button style={{ padding: '15px', backgroundColor: '#093A3E', color: '#fff', border: 'none', borderRadius: '5px', fontFamily: "sans-serif", fontSize: '20px', cursor: 'pointer' }} onClick={() => navigate("/events")}>Book an Event</button>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
