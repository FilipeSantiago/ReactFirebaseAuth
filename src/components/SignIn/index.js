import React, { useState } from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from '../Auth/firebase'
import * as ROUTES from '../../constants/routes';

function SignIn(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
      <Card>
        <CardContent>  
          <div>
            <TextField
              id="email"
              name="email"
              label="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="password"
              name="password"
              label="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              margin="normal"
            />
          </div>

          <Button variant="contained" color="primary" type="submit" onClick={login}>
            Sign In
          </Button>
        </CardContent>
      </Card>   
    );

    async function login(){
        try{
          await firebase.login(email, password)
          props.history.replace(ROUTES.DASHBOARD)
        } catch(error){
            alert(error.message)
        }
    }    
}

export default SignIn