import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
    return (
        <Box

            sx={{ display: { xs: "none", sm: "block" } }}
            p={2}
            flex={2}
        >
            <Box position="fixed" width={300}>
                <Typography variant='h6'
                    fontWeight={100}>
                    Online Friends
                </Typography>
                <AvatarGroup max={7}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqaKjxLoGKglyVnVLoSh307ULNjLa_T313PiFYTi01jJuqe9kG6FCfSH0EfDOr3v6vnYE&usqp=CAU"
                    />
                    <Avatar
                        alt="Travis Howa
                     rd" src="data:image/jpeg;base64,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"
                    />
                    <Avatar
                        alt="Cindy Baker
                     " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6mry-QlozKzM3Fw_bkeRA7fEoaBPVCPZUaWqt-hNuZVymtA-13dp6_HC5WzuL2PO8jk&usqp=CAU"
                    />
                    <Avatar
                        alt="Agnes Walke
                     r" src="/static/images/avatar/4.jpg"
                    />
                    <Avatar
                        alt="Trevor Hend
                     erson" src="/static/images/avatar/5.jpg"
                    />
                </AvatarGroup>
                <Typography variant='h6'
                    fontWeight={100} mt={2} mb={2}>
                    Latest Photos
                </Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e' alt="" />

                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d' alt="" />

                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.unsplash.com/photo-1516802273409-68526ee1bdd6' alt="" />

                    </ImageListItem>
                </ImageList>

                <Typography variant='h6'
                    fontWeight={100} mt={2} >
                    Latest Coversations
                </Typography>

                {/*  */}

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Rightbar