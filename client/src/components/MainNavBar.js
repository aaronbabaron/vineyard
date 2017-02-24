import React from 'react';
import { Button, Icon, Menu, Sidebar } from 'semantic-ui-react';
import MenuLink from './MenuLink';
import { toggleLeftSidebar } from '../actions/navigation';

export default props => {
  var handleClick = e => {
    props.dispatch(toggleLeftSidebar()); 
  };

  return (
    <Menu icon>
        <Menu.Item name="content" onClick={ handleClick }>
          <Icon name="content" />
      </Menu.Item>
    </Menu>
  );
};

