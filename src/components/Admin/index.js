import React from 'react';
import { withAuthorization } from '../Session'
import NewUserForm from './createUser'

const Admin = () => (
    <NewUserForm />
);

const neededClaim = "admin"
export default withAuthorization(neededClaim)(Admin);