import { Grid, Box } from '@mui/material'
import React from 'react'

export const HerosList = ({ heros }) => {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <ul>

                        <Grid container spacing={2}>
                            {heros.map((hero) => {
                            return (
                                <Grid item xs={4}>
                                    <li key={hero.id}>{hero.superhero} </li>
                                 </Grid>)})}
                        </Grid>

                    </ul>
                </Grid>
            </Grid>
        </Box>

    )
}
