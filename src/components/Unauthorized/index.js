import React from 'react';
import { withAuthentication } from '../Session'

const Unauthorized = () => (
    <p>Unauthorized Page</p>
);

export default withAuthentication(Unauthorized);