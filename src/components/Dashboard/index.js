import React from 'react';
import { withAuthorization } from '../Session'

const Dashboard = () => (
    <p>Dashboard Page</p>
);

export default withAuthorization(undefined)(Dashboard);