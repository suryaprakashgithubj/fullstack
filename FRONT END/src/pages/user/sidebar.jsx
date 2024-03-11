import PropTypes from 'prop-types'; // Import PropTypes

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <div style={{ width: 250 }}>
        <List>
          <ListItem button component={Link} to="/" onClick={onClose}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={onClose}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={Link} to="/contact" onClick={onClose}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

// Define propTypes for isOpen and onClose
Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
