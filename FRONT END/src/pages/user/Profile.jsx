import React from 'react';

const UserProfile = () => {
  return (
    <div style={{ 
      maxWidth: "600px",
      marginTop:"200px", 
      margin: "auto", 
      padding: "20px", 
      border: "1px solid #ccc", 
      borderRadius: "5px", 
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" 
    }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img 
          src="https://via.placeholder.com/150" 
          alt="Profile" 
          style={{ borderRadius: "50%", width: "150px", height: "150px", objectFit: "cover" }} 
        />
        <h2 style={{ margin: "10px 0" }}>John Doe</h2>
        {/* <p style={{ fontSize: "16px", color: "#666" }}>Frontend Developer</p> */}
      </div>
      <div style={{ marginBottom: "20px" }}>
       
      </div>
      <div style={{ marginBottom: "20px" }}>
        <h3>Username</h3>
        <h3>Email</h3>
        <h3>Mobile Number</h3>
        
        
      </div>
    </div>
  );
};

export default UserProfile;
