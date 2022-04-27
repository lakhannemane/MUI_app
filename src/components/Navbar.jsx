// import styled from '@emotion/styled';
import { Mail, NotificationAdd, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Toolbar, styled, InputBase, Badge, Avatar, Typography, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"

});

const Search = styled("div")(({ theme }) => ({
  background: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled("Box")(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}));

const UserBox = styled("Box")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}))

const Navbar = () => {

  const [open ,setOpen ] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Toolbar variant='h4'  sx={{fontSize:"25px",fontWeight:"600", display: { xs: "none", sm: "block" } }}>Lakhan</Toolbar>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder='serach'></InputBase></Search>
        <Icons>
          <Badge badgeContent={4} color="success">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="success">
            <Notifications />
          </Badge>
          <Avatar onClick={e=>setOpen(true)} sx={{ width: "30px", height: "30px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB/CAMAAAANdsbrAAABKVBMVEX////ppSYYHB2tfykREiTqvJgkJiUAAACHcl+ysrK4iHHvwJvonwDspyYgJCWqfSnitpMAAByzgykAABDoohnyqyYICR8AABn9+vSngGoRGR3569brsU4SHSX79OgAEhjNpoepeBSndQB+a1oACRzuv3Xz16vqqjn24L+cciU1MCTy0Z8AFSXZmyeUbSbBjCh6XCSJZiVLTkxfXla6mH3vx4Xu5tqzhEnIrH/j4+QqKzc+PkZpaXEiIi9SUlxcXGXst11RQCNBNyVlTyU5OTZOQjpaTkNuXU6YfGapjXQIJS5wZlsAMDsAEyverV0tP0K6i0PPuJa8llTdzbLptoDVp3ewi1yPdVaceUWce1LGkWG2hmGUb1+TaAsfGA1ra2iYmJt7fH7Ix8nxuyC8AAAIoUlEQVRoge2aeX/aSBKGkYSQgiQQp235QA4QbAw2AbxZGzDmSBBjTyaTSTY7N/j7f4it1gFC6paaw5n9w68NFvwID29VdXVJJBJ50Yte9D11cnj25uK6XL6/L19fX5wdHu4/N3H/8E35iMnKspy1BUdM5f767OTZmCdn5QpQFMYnoCtH18/hev+szIAxshRZPrrYsef9i2CmTc7K92e7g56UKZh2uGVmR+CT66wXqii5nAI5hj85X6rlyi7AF4wXmmPqXGMwHFarw0Hj/KruJSvy/eGW0MMj2Qc9HyRqxwlLx7XjYaOe84Y6e72dVW9SFSVZrSVibgG6wXhDLVc2N3xy77WqMCMP1NRx1WdYkS82pJ756lepV4/9UOS4xvlqS77fqH1ceK2ChngqivSlL9DZygbd49pPzY1IVODGkldecDa7doIxVCVdI1KBO0in696ltC4XQ2VyVUw1uerqksMYXouLoyrpUhAV2eWSnNfwOlwclVEGnvUKYllW0wqs9UQtyXFcMr1qWMlS1xWuhmHxmJllC5qNHY/ff5hMiqIxnRSsKDfSHALXFTc4W6FcR4c4KpM7R2XMTtrqQjwvWTJMbmLImUqullb2iIq6j9/klBHEmG1LEu+XVDRDkEhyNniltGSqBn1P2FuHiVjBwEGRxgmzltMczrBMsRO+wYYYUnscS4wJUF6aFpbJ9RtWQtOLTyz8y6taTCOa5VVkNzFaYrlkcmk4W940xKhFZXQiVpqw1sp1yRXpsDATQgyFfHkciEVRdkrZH2kleBXtVzBTsIV9G4zVcdil4eDdF9soLGwjEGsm149dGg5qVvtEaiiW/wDYahLDtdp00HR1TR6Hw7CoprBYp03LRLsBZq3ctgOwooYNsh1pRckSs0ssY4Q9ryXArcSjXiy5BXlFz0ApJwYErFlaMgl7RCpjxly3H354aDVNtVotQ9fbuj51noGnHmPa6rr1GJbf4KmkBmVh64b0+NgElKl268cHsfj4OHUew3HbaJCxYPgjHlsOPr9SJb3mbEAQ2x/hrrl8zP80lfhLMhX0GltU+5VAagVyWFOXJfQIx01Xabd0XvoUiD39GYc9C4qxiZV+WGKkR7g9uEq7pYZhuc+4DhmwaE0BpjV1MJLelKARiwusih6HYE9xUQ6qYxvbbjnDhfSAPoH6uHhswCeQsN3Cldxf/NSTYCijfAGM+KCj9Kq62JTMHtHS0Uil6lOUZjWYyp3+e+3UMtmPPK9L7WILqWgnVdJF8/HDVAXs1xAs98mf3LDUoppqq67e5KwkSzqspZDUgv7lw5LGimWUP/I6cS+Q2m0p1Cz32o8NXrVmmL/oUyLW0MOpmJUbVlGm34pB3IGMd+FUTE0d0lx5qohOm5LUtq7q8UXQVfGcAst9XreQLbvisoKNg3j8oGhzpbYYXk+gTxthcwfmpCzx06IoigdwK1rZhm4R0ioI2KAtfon9D7InqQaiWioaKmpX4jcaKsd52yN5ZnQH+TNQ1LaJE0XDMP+IsJqn4reArTYAG9otTOyVTRQXp5voMyD+f+mw3oVLhWWUX63QGryzBfCG9QxVarn0hti6nVJDR2CJ123qr3RmN8QyuXd2NRWL9u86Zv1BpioppG8iRpSZ9ZcU1QJCYf4Nh6XpjKa8Ox9VuzCxB37qAS3W1y6oerKJjRteqhGnxfp68hpYHzdOiz396sXu01EZ5mvcy43TY/2Tctjg6Lj9Iumw9SzBRpweixkdQ05FFkIDJIDjB6bilmjd+ocayoWL5lYAx1dFicVMjoHney7Z44S+gv2drl34ChmGqfAZjkHXLZ2pZhVM1Ryx516hEyu6OFxxDYvuSP9Og32Nu6Qd2B7Nb/Xq9Y+rU6ob/O48mU4HxxqTWogyEQvI+tXlqMoWVN6jZaT/yLDVQeMySUbjToGIUVZyzNXlIFYqFTRWwIznDviDhq7fF2LDxjmHJ+NO+AhRVpT65bBU0jQWSXuPOR+wIn2QYC0BethI4sCn+OuOmMtSuXojVdLYhbBXpkzwpLB8lVZiR37HhBj7G5WSO99zvRvBrjmtH7CrKrBvvVzMeZclX8cYpVjv201wXxZI6ljzvrI08nAxvcLW0YpdZVTyvhdw3/tONiWpzfqowF29SkUoKKSVESP3FkMFrmaeB7ig+iSDocIrV+LsGyzwdpWrAu69QJmYqC9O43l9whJeqMVcLfOUbHbFbm5AwsIaybwvGm1dbxvFsUB8GVtwhZmcWaRFy1DqvnLykAVQpoANr6PSAkssY0snzoyRa5BdUGthl7hmHS12e1xxrqvlld7Q75+sMCtXgTGm5oYuHkfW5EpYPeuqZK6h0BAjmTuCMtpBjCG5Vqui+gbXbM2xnWC1QXgVL3SUDVk+9Nhqkiaxlk4q2fRusGwh+Rp7zRyrQ+V8JxUFNfUnTTktuI3MbrDCdA1qJHLz105KSmiuRd0Rd20qTFZjYWvqfG0q6O/tuJow24QaicyELQItJJ42o0YiT4mNDQvNm02pUFjNzbgbB9jRK2EDsNDZwqqt2bpgIfFqayjoZr4OWGBnu4BaYJauqDVhPNvl/1K+mY3DLQtCcyfhXdETWCZ7huk1Mdt4pYaQkWcfGz0FPrcv3mD0vJkQlip0/p4/M3Kpm5snpJub7wV80Yv+P/XqH1FE+EcUia4qDz/O0TMKYW9TAMmjWz7T6fVSe/m9fG+v88zY/F2ne9e56887/c58Nn/Vmd3O5/Nuv7fF26bypvbgZh/m95BScMtHbbf9brfbv+0DtTefzWbaU39809sqyN3+Xadz15nDff8Wju7AWncOv/35/C5lYffmnS789PsIPJuB41l3Nt/bgprv9rt9CB+Aut07oN0BAKzBQb/f3bOw0V6+d9vr9KK30Wgnmop2Mr3b6DYhNoOMSgXeLIWqFAUaKHYFRW2s9QkX989aw5a8C+g76X/H81waMUN0bAAAAABJRU5ErkJggg==" />

        </Icons>
        <UserBox>
          <Avatar onClick={e=>setOpen(true)} sx={{ width: "30px", height: "30px" }} src="data:image/png;base64,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" />
          <Typography variant='span'>John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
      onClose={e=>setOpen(false)}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Log Out</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar