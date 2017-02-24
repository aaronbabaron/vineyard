import React from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';
import { handleItemChange } from '../helpers/changeHandlers';

export default props => (
  <div>
    <Grid.Row>
      <Grid.Column>
	      <Form.Input
          label='Email'
					value={props.signup.email} 
					onChange={ handleItemChange.bind(null, props.setItem, 'email') } 
					placeholder='Email' 
				/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Form.Group widths='equal'>
          <Form.Input
            label="First name"
	  	    	value={props.signup.first_name} 
	  	    	onChange={ handleItemChange.bind(null, props.setItem, 'first_name') } 
	  	    	placeholder='First Name' 
	  	    />
          <Form.Input
            label='Last name'
	  	    	value={props.signup.last_name} 
	  	    	onChange={ handleItemChange.bind(null, props.setItem, 'last_name') } 
	  	    	placeholder='Last Name' 
	  	    />
        </Form.Group>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Form.Group widths='equal'>
          <Form.Input 
            label='Day'
	  	    	value={props.signup.birth_day} 
	  	    	onChange={ handleItemChange.bind(null, props.setItem, 'birth_day') } 
	  	    	placeholder='Day' 
	  	    />
          <Form.Input 
            label='Month'
	  	    	value={props.signup.birth_month} 
	  	    	onChange={ handleItemChange.bind(null, props.setItem, 'birth_month') } 
	  	    	placeholder='Month' 
	  	    />
          <Form.Input 
            label='Year'
	  	    	value={props.signup.birth_year} 
	  	    	onChange={ handleItemChange.bind(null, props.setItem, 'birth_year') } 
	  	    	placeholder='Year' 
	  	    />
        </Form.Group>
      </Grid.Column>
    </Grid.Row>
  </div>
);
