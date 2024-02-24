import { Grid } from '@mui/material';
import '../../assets/css/card.css';

export default function ActionAreaCard() {
  return (
    <Grid className="grid-container" container rowSpacing={1} columnSpacing={{ xs: 6, sm: 6, md: 6 }}>
      <Grid className='grid1' item xs={3} style={{minWidth: '400px'}}>
        <img style={{height: '100%', width: '100%' , borderRadius:"10px"}} src="/src/assets/images/client.jpg" alt="Description of the image" />
        <div className='paper' style={{backgroundColor: 'lightblue', padding: '5px', borderRadius: '10px' }}>
          <h1 style={{fontFamily:"sans-serif" , marginLeft:"10px" , borderRadius:"15px"}}>Client Success Meet</h1>
          <h3 style={{fontFamily:"sans-serif" , textAlign:"center"}}>Show gratitude and appreciation for clients and the business they bring your company with customer appreciation events.</h3>
        </div>
      </Grid>
      <Grid className='grid2' item xs={3} style={{minWidth: '400px'}}>
        <img style={{height: '100%', width: '100%' , borderRadius:"15px"}} src="/src/assets/images/Product-launch.jpg" alt="Description of the image" />
        <div className='paper' style={{backgroundColor: 'lightblue', padding: '5px', borderRadius: '10px'}}>
          <h1 style={{fontFamily:"sans-serif" , marginLeft:"50px" , borderRadius:"5px"}}>Product Launch</h1>
          <h3 style={{fontFamily:"sans-serif" , textAlign:"center"}}>Companies host product launches to introduce and build buzz for a new product. </h3>
        </div>
      </Grid>
      <Grid className='grid3' item xs={3} style={{minWidth: '400px'}}>
        <img style={{height: '100%', width: '100%' , borderRadius:"10px"}} src="/src/assets/images/awards.jpg" alt="Description of the image" />
        <div className='paper' style={{backgroundColor: 'lightblue', padding: '5px', borderRadius: '10px'}}>
          <h1  style={{fontFamily:"sans-serif" , marginLeft:"34px" , borderRadius:"5px"}}>Awards Ceremony</h1>
          <h3 style={{fontFamily:"sans-serif" , textAlign:"center"}}>Recognize outstanding employees, managers, and other staff members by hosting a company awards ceremony. </h3>
        </div>
      </Grid>
      <Grid className='grid1' item xs={3} style={{minWidth: '400px'}}>
        <img style={{height: '10%', width: '100%' , borderRadius:"10px"}} src="/src/assets/images/th1.jpeg" alt="Description of the image" />
        <div className='paper' style={{backgroundColor: 'lightblue', padding: '5px', borderRadius: '10px' }}>
          <h1 style={{fontFamily:"sans-serif" , marginLeft:"0px" , borderRadius:"15px" , textAlign:"center"}}>Fundraising</h1>
          <h3 style={{fontFamily:"sans-serif" , textAlign:"center"}}>A fundraising event is meant to raise money for charity, usually. Or sometimes it's to help raise money for your company.</h3>
        </div>
      </Grid>
      <Grid className='grid2' item xs={3} style={{minWidth: '400px'}}>
        <img style={{height: '100%', width: '100%' , borderRadius:"15px"}} src="/src/assets/images/th2.jpeg" alt="Description of the image" />
        <div className='paper' style={{backgroundColor: 'lightblue', padding: '5px', borderRadius: '10px'}}>
          <h1 style={{fontFamily:"sans-serif" , marginLeft:"0px" , textAlign:"center", borderRadius:"5px"}}>Appreciation Events</h1>
          <h3 style={{fontFamily:"sans-serif" , textAlign:"center"}}>An appreciation event is meant to thank your customers, partners, or employees. </h3>
        </div>
      </Grid>
      <Grid className='grid3' item xs={3} style={{minWidth: '400px'}}>
        <img style={{height: '100%', width: '100%' , borderRadius:"10px"}} src="/src/assets/images/th3.jpeg" alt="Description of the image" />
        <div className='paper' style={{backgroundColor: 'lightblue', padding: '5px', borderRadius: '10px'}}>
          <h1  style={{fontFamily:"sans-serif" , textAlign:"center", borderRadius:"5px"}}>Team Building
</h1>
          <h3 style={{fontFamily:"sans-serif" , textAlign:"center"}}>Team building events are meant to boost team morale, and help people learn how to work together.</h3>
        </div>
    
      </Grid>
    
    </Grid>
  );
}
