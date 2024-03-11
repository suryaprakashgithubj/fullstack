import "../../assets/css/about.css"
const AboutPage = () => {
    return (
      <div className='qw'>
        <div style={styles.container}>
            <h1 style={styles.heading}>About Our Company</h1>
            <p style={styles.paragraph}>
                We are dedicated to creating unforgettable corporate events that leave a lasting impression. With our expertise in event planning and management, we strive to exceed our clients' expectations every time.
            </p>
            <p style={styles.paragraph}>
                Our team of experienced professionals brings creativity, precision, and attention to detail to every event we undertake. From large-scale conferences to intimate corporate gatherings, we tailor our services to meet the unique needs and objectives of each client.
            </p>
            <p style={styles.paragraph}>
                At our core, we believe in the power of events to inspire, connect, and drive business success. Whether it's fostering meaningful relationships, launching new products, or celebrating milestones, we are committed to delivering exceptional experiences that make a difference.
            </p>
            
        </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '800px',
        marginTop: '200px',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        marginLeft: '600px', // Align container to the right
        marginRight: '0', // Align container to the right
    },
    heading: {
        color: '#333',
        textAlign:"center"
    },
    paragraph: {
        color: '#666',
        marginBottom: '20px',
        textAlign:"center"
    },
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 0',
        position: 'fixed',
        bottom: '0',
        width: '100%',
    }
};

export default AboutPage;
