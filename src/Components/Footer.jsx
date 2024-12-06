import { Box, Container, Typography, Link } from '@mui/material';
import React from 'react';
import Logo from '../Images/LogoPng.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import FooterK from '../Images/Kriti-Sanon.jpg';
import FooterA from '../Images/AdityaRoyF.jpg';

const Footer = () => {
  const handleRedirectHome = () =>{
    window.location.href='/'
  }
  const handleRedirectAbout = () =>{
    window.location.href='/about'
  }
  const handleRedirectBlog = () =>{
    window.location.href='/blog'
  }
  const handleRedirectContact = () =>{
    window.location.href='/contact'
  }
  const handleRedirectFaqs = () =>{
    window.location.href='/faqs'
  }
  return (
    <Box sx={{ py: '50px', backgroundColor: '#f5f5f5', borderTop: '1px solid #ddd' }}>
      <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left Side */}
        <Box sx={{ width: '30%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ height: '250px', mb: 2 }}>
            <img
              src={FooterK}
              alt="Footer Image 1"
              width="100%"
              height="100%"
              style={{ borderRadius: '20px', objectFit: 'cover' }}
            />
          </Box>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 1 ,textAlign:'center'}}>
            Explore our collections of women's fashion, including sarees, cholis, gowns, and more.
          </Typography>
        </Box>

        {/* Middle Logo Section */}
        <Box sx={{ width: '20%', textAlign: 'center', display: 'flex', flexDirection: 'column',justifyContent:'center',alignItems:'center'}}>
          <img src={Logo} alt="Logo" style={{ width: '80%'}} />
          <Typography variant="body2" color="textSecondary">
            Elevate your style with our exquisite fashion choices.
          </Typography>
        </Box>

        {/* Right Side */}
        <Box sx={{ width: '30%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ height: '250px', mb: 2 }}>
            <img
              src={FooterA}
              alt="Footer Image 2"
              width="100%"
              height="100%"
              style={{ borderRadius: '20px', objectFit: 'cover' }}
            />
          </Box>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 1 ,textAlign:'center'}}>
            Latest trends in men’s fashion, including kurtas, sherwanis, and suits.
          </Typography>
        </Box>
      </Container>

      < Container sx={{ display: 'flex', justifyContent: 'space-around', mt: 4 }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Quick Links
          </Typography>
          <ul style={{ listStyleType: 'none', paddingLeft: '0px' }}>
            <li><button onClick={handleRedirectHome} href="#" style={{border:'0px', color: '#333', textDecoration: 'none' }}>Home</button ></li>
            <li><button onClick={handleRedirectAbout} href="#" style={{border:'0px', color: '#333', textDecoration: 'none' }}>About</button ></li>
            <li><button onClick={handleRedirectBlog} href="#" style={{border:'0px', color: '#333', textDecoration: 'none' }}>Blog</button ></li>
            <li><button onClick={handleRedirectContact} href="#" style={{border:'0px', color: '#333', textDecoration: 'none' }}>Contact</button ></li>
            <li><button onClick={handleRedirectFaqs} href="#" style={{border:'0px', color: '#333', textDecoration: 'none' }}>FAQs</button ></li>
          </ul>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Women's Collection
          </Typography>
          <ul style={{ listStyleType: 'none', paddingLeft: '0px' }}>
            <li><Link href="#" sx={{ color: '#333', textDecoration: 'none' }}>Saree</Link></li>
            <li><Link href="#" sx={{ color: '#333', textDecoration: 'none' }}>Choli</Link></li>
            <li><Link href="#" sx={{ color: '#333', textDecoration: 'none' }}>Gown</Link></li>
            <li><Link href="#" sx={{ color: '#333', textDecoration: 'none' }}>Kurties</Link></li>
          </ul>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Men's Collection
          </Typography>
          <ul style={{ listStyleType: 'none', paddingLeft: '0px' }}>
            <li><Link href="#" sx={{ color: '#333', textDecoration: 'none' }}>Kurta</Link></li>
            <li><Link href="#" sx={{ color: '#333', textDecoration: 'none' }}>Sherwani</Link></li>
            <li><Link href="#" sx={{ color: '#333', textDecoration: 'none' }}>Suit</Link></li>
          </ul>
        </Box>
      </Container>

      <Container sx={{width:'100%',my:'50px'}}>
        <Box sx={{display:'flex',justifyContent:'center',gap:'20px'}}>
          <InstagramIcon sx={{'&:hover':{color:'#dd1a18'},color:'#000',transition:'0.3s'}} />
          <FacebookIcon sx={{'&:hover':{color:'#dd1a18'},color:'#000',transition:'0.3s'}} />
          <TwitterIcon sx={{'&:hover':{color:'#dd1a18'},color:'#000',transition:'0.3s'}} />
        </Box>
      </Container>

      <Container sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="body2" color="textSecondary">
          Copyright © 2024 | Designed and Developed by <a href="#" style={{'&:hover':{color:'#dd1a18'},color:'#000', textDecoration:'none',}} >Kashak</a>, <a href="#" style={{'&:hover':{color:'#dd1a18'},color:'#000', textDecoration:'none',}} >Keval</a>, <a href="#" style={{'&:hover':{color:'#dd1a18'},color:'#000', textDecoration:'none',}} >Happy</a> and <a href="#" style={{'&:hover':{color:'#dd1a18'},color:'#000', textDecoration:'none',}} >Harsh</a>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
