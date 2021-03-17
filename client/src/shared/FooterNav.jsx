import React from "react";
import {Link} from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'

// MATERIAL UI COMPONENTS
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const FooterNav = (props) => {
  // Will Set this up
  const {currentUser, handleLogout} = props;
  console.log(currentUser)

  const anchor = 'bottom';

  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="nav-container">
      <h1>Pak Your Bags</h1>
      {currentUser ? (
        <>
          <p>{`Welcome, ${currentUser.first_name}`} </p>
          <ExitToAppIcon id="exit-icon" onClick={handleLogout}/>
        </>
      ) : (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
          <List>
          <ListItem>
          <Link to='/login'>Login</Link>
          </ListItem>
          </List>
          </Drawer>
        </React.Fragment>
        
      )}
    </div>
  );
};

export default FooterNav;
