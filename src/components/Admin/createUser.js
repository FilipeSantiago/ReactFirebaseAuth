import React from 'react';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import * as CLAIMS from '../../constants/claims';
import { Typography, Button } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function NewUserForm(){
    
    var stateBuilder = {}
    CLAIMS.claims.map(x => Object.values(x.permissions).map(x => stateBuilder[x] = false))
    const [state, setState] = React.useState(stateBuilder);

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked })
    };
    
    return(
        <div>
            <form>
                <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField
                                id="standard-controlled"
                                label="Nome"
                                margin="normal"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="standard-uncontrolled"
                                label="E-mail"
                                margin="normal"
                                fullWidth
                            />
                        </Grid>
                </Grid>
                {CLAIMS.claims.map(claimType => 
                    <Grid key={claimType.category}>
                        <Typography variant="h6" component="h2">
                           {claimType.category}
                        </Typography>                        
                        <Grid item>
                            {
                                Object.keys(claimType.permissions).map(key =>
                                    <FormControlLabel
                                        key={claimType.permissions[key]}
                                        control={
                                        <Switch
                                            id={claimType.permissions[key]}
                                            checked={state[claimType.permissions[key]]}
                                            onChange={handleChange(claimType.permissions[key])}
                                            value={claimType.permissions[key]}
                                            color="primary"
                                        />
                                        }
                                        label={key}
                                    />
                                )
                            }
                        </Grid>
                    </Grid>
                )}
                <Button variant="contained" color="primary">Save</Button>
            </form>
        </div>
    )
}

export default NewUserForm