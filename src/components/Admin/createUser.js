import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as CLAIMS from '../../constants/claims';
import { Typography, Button } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { useForm } from '../Utils/Form'
import useCrud from '../Utils/Crud'

function NewUserForm(){
    
    var initialState = {name:"", email:""};
    CLAIMS.claims.map(x => Object.values(x.permissions).map(x => initialState[x] = false));

    const createUser = () => {
        console.log(values);
    }
    
    const { values, handleChange, handleCheckedChange, handleSubmit } = useForm(initialState, createUser);
    const { create } = useCrud("/teste")
    //create({"awesome": "object"}, () => {console.log("chamou")})

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField
                                id="standard-controlled"
                                onChange={handleChange}
                                label="Nome"
                                margin="normal"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="standard-uncontrolled"
                                onChange={handleChange}
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
                                        name={"container" + claimType.permissions[key]}
                                        control={
                                        <Switch
                                            id={claimType.permissions[key]}
                                            checked={values[claimType.permissions[key]]}
                                            onChange={handleCheckedChange}
                                            name={claimType.permissions[key]}
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
                <Button variant="contained" color="primary" type="submit">Save</Button>
            </form>
        </div>
    )
}

export default NewUserForm