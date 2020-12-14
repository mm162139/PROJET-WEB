import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {ResponsiveContainer} from "recharts";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function OutlinedCard() {
    const classes = useStyles();

    return (
        <ResponsiveContainer width="100%" height={200} >
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    OBJECTIF DE LA SEMAINE!
                </Typography>
                <Typography variant="h5" component="h2">
                    FINIR PREMIER SUR LE SECTEUR DE VENTES!!
                </Typography>
                <Typography variant="body2" component="p">
                    "On avance doucement mais surement!"
                    <br />
                </Typography>
            </CardContent>
        </Card>
        </ResponsiveContainer>
    );
}