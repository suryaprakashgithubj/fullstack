import React from 'react';
import "../../assets/css/up.css"
export default function ProfilePage() {
  return (
    <section style={{ backgroundColor: '#eee' , maxWidth:"800px" , marginLeft:"380px" }}>
      <div style={{ maxWidth: '800px', margin: 'auto', marginTop:"135px" }}>
        <div style={{ marginBottom: 'px'  , padding:"5px" }}>
          <h1 style={{ textAlign: 'center', marginBottom: '' , fontFamily:"sans-serif" }}>User Profile</h1>
          <hr style={{ backgroundColor: '#ccc', height: '1px', border: 'none' }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ flex: '0 0 48%' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' ,   }}>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                style={{ borderRadius: '50%', width: '150px', marginLeft:"300px" , border: '4px solid #fff', boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)' }}
              />
              
            </div>
          </div>
          
        </div>

        <div>
          <h4 style={{marginRight:"13px" , textAlign:"center" ,fontFamily:"sans-serif"  }}>Personal Information</h4>
          <hr style={{ backgroundColor: '#ccc', height: '1px', border: 'none', marginBottom: '20px' }} />
          
          <div className='upcss1'>
          <div style={{ marginBottom: '10px' }}>
            <span style={{ fontWeight: 'bold', marginLeft: '40px' , fontFamily:"sans-serif" }}>UserName:</span>
            {/* <span className="text-muted">Johnatan Smith</span> */}
          </div>
          <div style={{ marginBottom: '10px' }}>
            <span style={{ fontWeight: 'bold', marginLeft: '40px' , fontFamily:"sans-serif" }}>Email:</span>
            {/* <span className="text-muted">example@example.com</span> */}
          </div>
          
          <div style={{ marginBottom: '50px' }}>
            <span style={{ fontWeight: 'bold', marginLeft: '40px' , marginBottom:"30px" , fontFamily:"sans-serif" }}>Mobile:</span>
            {/* <span className="text-muted">(098) 765-4321</span> */}
          </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
