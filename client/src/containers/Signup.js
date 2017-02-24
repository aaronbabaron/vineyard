import React from 'react';
import { browserHistory } from 'react-router';
import {  Col, ControlLabel,  FormControl, FormGroup, Row } from 'react-bootstrap';
import { Button, Form, Grid } from 'semantic-ui-react';
import NameBirthdateInput from '../components/NameBirthdateInput';
import { handleItemChange } from '../helpers/changeHandlers';
import { setSignupItem, signup } from '../actions/signup';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.username) {
      browserHistory.push('/home');
    }
  }

  getPasswordValidationState() {
    if (this.props.signup.password === '' &&
        this.props.signup.confirm_password === '') return null;
    else if (this.props.signup.password !== this.props.signup.confirm_password) return 'error';
    else return 'success';
  }

  buttonStatus() {
    return !(this.props.signup.password === this.props.signup.confirm_password &&
      Object.keys(this.props.signup).reduce((acc, key)  => {
        return this.props.signup[key] !== '' && acc;
      }, true));
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('button clicked');
    this.props.dispatch(signup(this.props.signup));
  }

  render() {
    return (
      <div className='oneEm'>
	      <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <h2>Sign up here!</h2>
            </Grid.Column>
          </Grid.Row>
	        <Grid.Row>
	          <Grid.Column>
              <Form onSubmit={ this.handleSubmit }>
                <Grid.Row>
                  <Grid.Column>
	                  <Form.Input
                      label="Username"
	      				    	value={this.props.signup.username}
	      				    	onChange={ handleItemChange.bind(null, setSignupItem, 'username') }
	      				    	placeholder='Username'
	      				    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
	                  <Form.Input
                      label='Password'
                      type='password'
	      				    	value={this.props.signup.password}
	      				    	onChange={ handleItemChange.bind(null, setSignupItem, 'password') }
	      				    	placeholder='Password'
	      				    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
	                  <Form.Input
                      label='Confirm Password'
                      type='password'
	      				    	value={this.props.signup.confirm_password}
	      				    	onChange={ handleItemChange.bind(null, setSignupItem, 'confirm_password') }
	      				    	placeholder='Confirm password'
	      				    />
                  </Grid.Column>
                </Grid.Row>
                <NameBirthdateInput
                  setItem={ setSignupItem }
                  signup={ this.props.signup }
                />
                <Button
                  disabled={ this.buttonStatus() }
                  type='submit'
                >
                  Submit
                </Button>
	            </Form>
	          </Grid.Column>
	        </Grid.Row>
	      </Grid>
      </div>
    );
  }
}
