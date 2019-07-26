import React, { useState, useEffect } from 'react'
import SignIn from '../SignIn'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import firebase from '../Auth/firebase'

import * as ROUTES from '../../constants/routes';
import Nav from '../Navigator'
import Dashboard from '../Dashboard'
import Admin from '../Admin'
import Unauthorized from '../Unauthorized'


const theme = createMuiTheme()

export default function App(props) {

	const [firebaseInitialized, setFirebaseInitialized] = useState(false)

	useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
	})

	return firebaseInitialized !== false ? (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Switch>
					<Route exact path={ROUTES.SIGN_IN} component={SignIn} />
					<Nav>
						<Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
						<Route exact path={ROUTES.ADMIN} component={Admin} />
						<Route exact path={ROUTES.UNAUTHORIZED} component={Unauthorized} />
					</Nav>
				</Switch>
			</Router>
		</MuiThemeProvider>
	) : <div id="loader"><CircularProgress /></div>
}