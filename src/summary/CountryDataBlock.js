import React from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

function CountryDataBlock({ data: { Country, TotalConfirmed, TotalDeaths, TotalRecovered } }) {
    console.log('hello')
    return (
        <Paper style={infoBlock}>
            <Typography variant="h6">{Country}</Typography>
            <Typography variant="subtitle1">Confirmed: {TotalConfirmed}</Typography>
            <Typography variant="subtitle1">Deaths: {TotalDeaths}</Typography>
            <Typography variant="subtitle1">Recovered: {TotalRecovered}</Typography>
        </Paper>



    )
}

export default CountryDataBlock;
const infoBlock = {
    padding: "10px"
}