import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Redirect } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from "react-router-dom";
export const mainListItems = (persona) => {
  
return(
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText style={{color: 'crimson'}} primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/profile">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
            <ListItemText style={{color: 'crimson'}} primary="Profile" />
        </ListItem>
    <ListItem button component={Link} to="/pricing">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText style={{color: 'crimson'}} primary="Payment Plan" />
    </ListItem>
    {persona === 'owner' && (
    <Link to={{
      pathname: '/RideList',
      state: {
        persona: 'owner'
      }}}>
      <ListItem button >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText style={{color: 'crimson'}} primary="Your Asset Rides" />
      </ListItem>
      </Link>
    )}
    <Link to={{
    pathname: '/RideList',
    state: {
      persona: 'customer'
    }}}>
    <ListItem button >
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText style={{color: 'crimson'}} primary="Your Rides" />
    </ListItem>
    </Link>
    
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText style={{color: 'crimson'}} primary="Integrations" />
    </ListItem>
    {persona === 'owner' && (
      <ListItem button component={Link} to='/AddCar'>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText style={{color: 'crimson'}} primary="Add a Car" />
    </ListItem>
    )}
    {persona === 'owner' && (
      <ListItem button component={Link} to='/CarList'>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText style={{color: 'crimson'}} primary="View Assets" />
    </ListItem>
    )}

  </div>
)};

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText style={{color: 'crimson'}} primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText style={{color: 'crimson'}} primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText style={{color: 'crimson'}} primary="Year-end sale" />
    </ListItem>
  </div>
);