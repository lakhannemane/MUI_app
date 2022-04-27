import { Box } from '@mui/material'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

const Post = () => {
  return (
    <Box>
        <Card sx={{margin:5}} >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="John Deo"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="5%"
                    image="https://images.unsplash.com/photo-1591378603223-e15b45a81640?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHVrZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
 
                    </IconButton>
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                   
                </CardActions>
               
            </Card>
    </Box>
  )
}

export default Post