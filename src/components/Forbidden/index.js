import React from 'react';
import { withAuthentication } from '../Session'

const Forbidden = () => (
    <p>Forbidden Page</p>
);

export default withAuthentication(Forbidden);