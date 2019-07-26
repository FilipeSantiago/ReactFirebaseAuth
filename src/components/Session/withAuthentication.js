import React from 'react';
import firebase from '../Auth/firebase'
import * as ROUTES from '../../constants/routes';


const withAuthentication = Component => {
    class WithAuthentication extends React.Component {

        constructor(props) {
            super(props);
      
            this.state = {
              authUser: null,
            };
        }

        render() {
            
            if(!firebase.isSignedIn()) {
                this.props.history.replace(ROUTES.SIGN_IN)
                return null
            }

            return (
                <Component {...this.props} />
            );
        }

    }
    return WithAuthentication;
}

export default withAuthentication;
