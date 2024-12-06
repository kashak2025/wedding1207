import { AppBar, Box, Button, Container} from '@mui/material'
import Logo from '../Images/Logo.jpg'
import React from 'react'
import '../App.css'
import SearchIcon from '@mui/icons-material/Search';
// import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {
  Link
} from "react-router-dom";

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const list = [
      {name: 'home',path: '/'},
      {name: 'about',path: '/about'},
      {name: 'category',path: '/category'},
      {name: 'blog',path: '/blog'},
      {name: 'contact',path: '/contact'},
      // {path: '/login'},
    ]
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    
  return (
    <Box sx={{position:'fixed',top:0,zIndex:999,backgroundColor:"#fff",width:'100%'}}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: '0px 0px '}}>
        <Container maxWidth="xl" sx={{ px: { lg: '40px', md: '30px', sm: '20px', xs: '16px' }, m: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <a href="http://localhost:3000/">
              <img src={Logo} height={"80px"} width={"120px"} alt="" />
            </a>
          </Box>

          <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex',} }}>
            {list.map((list) => (
              <Button key={list.path} onClick={handleCloseNavMenu} sx={{'&:hover':{background:'fff !important'}, my: 1, color: '#000', fontFamily:'"Prosto One",system-ui',display:'block', textTransform:'uppercase',fontSize:'16px',margin:'0',padding:'20px 30px',lineHeight:'0px'}}>
                <Link to={list.path} className='link' >{list.name}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ display: 'flex'}}>
            <Box sx={{ mr: '20px' }}><SearchIcon sx={{'&:hover':{color:'#dd1a18'},transition:'0.5s', color: '#000' }} /></Box>
            <Box sx={{ mr: '20px' }}><FavoriteBorderIcon sx={{'&:hover':{color:'#dd1a18'},transition:'0.5s', color: '#000' }} /></Box>
            <Box sx={{ mr: '20px' }}><a href="http://localhost:3000/Login"><PersonOutlineIcon sx={{'&:hover':{color:'#dd1a18'},transition:'0.5s', color: '#000' }} /></a></Box>
          </Box>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header