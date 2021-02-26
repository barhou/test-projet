import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link, withRouter } from "react-router-dom"
import {auth} from "../firebase"

const Login = (props) => {
  
  const signUp=()=>{
    auth.signInWithEmailAndPassword(
      "barhoumiaymen523@gmail.com","123456"
      ).then(res=>props.history.push('/home'))
  }
  return(
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
         Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large' onClick={signUp}>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <Link to={"/signup"}>Sign Up</Link>
      </Message>
    </Grid.Column>
  </Grid>
  )}

export default withRouter(Login)