import React from 'react';
import firebase from '../Auth/firebase'
import * as ROUTES from '../../constants/routes';
import withAuthentication from './withAuthentication'

const withAuthorization = requiredClaim => Component => {
    class withAuthorization extends React.Component {

        constructor(props) {
            super(props);
      
            this.state = {
              isLoading: true,
              isAuthorized: false
            };
        }

        componentDidMount() {
            if(requiredClaim !== undefined){
                var isAuthorized = firebase.isAuthorized(requiredClaim);
                if(!isAuthorized) {
                    this.props.history.replace(ROUTES.UNAUTHORIZED)
                    return null
                }

                firebase.isAuthorized(requiredClaim).then(
                    () => {
                        this.setState({
                            isLoading: false,
                            isAuthorized: true
                        })
                    }, 
                    () => { 
                        this.setState({
                            isLoading: false,
                            isAuthorized: false
                        })
                        this.props.history.push(ROUTES.UNAUTHORIZED);
                    })
            }else{
                this.setState({
                    isLoading: false,
                    isAuthorized: true
                })
            }
        }

        render() {           
            return this.state.isLoading ? <div>LOADING ...</div> : this.state.isAuthorized ? <Component {...this.props} /> : null
        }
    }
    return withAuthentication(withAuthorization);
}

export default withAuthorization;
