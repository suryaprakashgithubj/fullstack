import { useState } from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Button, Box , Dialog , DialogContent} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CorporateEventManagement = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const navigate = useNavigate();

    const services = [
        { name: 'Corporate Awards Ceremonies', image: 'https://3.imimg.com/data3/GM/VR/MY-12215453/award-ceremony.jpg', description: 'Recognize outstanding employees and celebrate company successes.' },
        { name: 'Corporate Retreat Planning', image: 'https://tse2.mm.bing.net/th?id=OIP.0EMjD_58fg0ed-Un17abmwAAAA&pid=Api&P=0&h=180', description: 'Plan and organize corporate retreats for team building and strategic planning.' },
        { name: 'Corporate Event Catering', image: 'https://www.brillianteventsinc.com/wp-content/uploads/2019/05/event_cater_fi.jpg', description: 'Provide catering services for corporate events of all sizes.' },
        { name: 'Corporate Conference Management', image: 'https://tse1.mm.bing.net/th?id=OIP.aAHZhaUQ9f6Hvc0xjCf42AHaE7&pid=Api&P=0&h=180', description: 'Organize and manage corporate conferences, seminars, and symposiums.' },
        { name: 'Corporate Team Building Activities', image: 'https://tse1.mm.bing.net/th?id=OIP.J_JAjL3sGKEPLr9RiSbz0gHaFG&pid=Api&rs=1&c=1&qlt=95&h=180', description: 'Plan and facilitate engaging team building activities and workshops.' },
        { name: 'Corporate Product Launch Events', image: 'https://spotme.com/wp-content/uploads/2021/03/virtual-product-launch-event-examples.jpg  ', description: 'Create buzz and excitement for new products or services with memorable launch events.' },
        // Add more services as needed
    ];

    const handleDialogOpen = (service) => {
        setSelectedService(service);
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleBookNow = (service) => {
        // Logic to book the selected corporate event
        navigate('/booking');
        // Additional logic can be added here if needed
    };

    return (
        <div className="corporate-event-management">
            <Box textAlign="center" mt={3} mb={3}>
                <Typography variant="h4" sx={{ fontFamily: 'sans-serif' }}>Event Booking</Typography>
            </Box>
            <Grid container spacing={7} justifyContent="center">
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Card className="service-card" sx={{ maxWidth: 300 }}>
                            <CardMedia
                                component="img"
                                image={service.image}
                                alt={service.name}
                                style={{ height: 150 }}
                            />
                            <CardContent sx={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
                                <Typography variant="h5">{service.name}</Typography>
                                <Typography>{service.description}</Typography>
                                <Box textAlign="center" mt={2}>
                                    <Button variant="contained" sx={{ color: '#fff', backgroundColor: '#093A3E' }} onClick={() => handleBookNow(service)}>Book Now</Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogContent>
                    {selectedService && (
                        <>
                            <Typography variant="h5">{selectedService.name}</Typography>
                            <Typography>{selectedService.description}</Typography>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default CorporateEventManagement;
