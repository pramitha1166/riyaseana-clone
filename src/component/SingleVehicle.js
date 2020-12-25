import { Card, CardActionArea, CardContent, CardMedia,CardActions,Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    root: {
        maxWidth: 335,
        margin: "20px"
    },
    media: {
        height: 100
    }
})

function VehileList() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="Vehicle Image"> 
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Range Rover
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                View More
                </Button>
            </CardActions>
        </Card>
    )
}

export default VehileList
