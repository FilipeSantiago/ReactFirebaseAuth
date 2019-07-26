import React from 'react';
import { withAuthorization } from '../Session'

const Admin = () => (
    <p>Admin Page</p>
);

const neededClaim = "admin"
export default withAuthorization(neededClaim)(Admin);