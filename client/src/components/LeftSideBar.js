import React from 'react';
import axios from 'axios';
import { Menu, Sidebar } from 'semantic-ui-react';
import MenuLink from './MenuLink';

export default props => {
  const handleLogout = (e) => {
    e.preventDefault();
    axios.get('/auth/logout')
    .then(() => {
      props.dispatch(clearAuthStatus());
      window.localStorage.removeItem('token');
      browserHistory.push('/login');
    })
    .catch((err) => {
      console.log('inside the axios catch', err);
    });
  };

  console.log(props.nav.leftSidebarVisible);
  return (
    <Sidebar 
      as={Menu} 
      animation='uncover' 
      visible={props.nav.leftSidebarVisible} 
      vertical 
      width='thin' 
      inverted 
    >
        <Menu.Item header>Vineyard</Menu.Item>
        {
          props.auth.username ? 
            (
              <Menu.Menu>
                <MenuLink name='home' />
                <MenuLink name='viewData' to='/data/view' />
                <MenuLink name='viewAlerts' to='alerts' />
                <MenuLink name='writeNote' to='form' />
                <MenuLink name='viewNotes' to='/notesView' />
              </Menu.Menu>
            ) : ''
        }
        <Menu.Menu position='right'>
          { 
            props.auth.username ? 
              (<MenuLink name='logout' to='/' onClick={handleLogout} />) : 
              (<MenuLink name='login' />)
          }
          {
            props.auth.username ? '' : 
              (<MenuLink name='signUp' />)
          }
        </Menu.Menu>
      </Sidebar>
  );
}
