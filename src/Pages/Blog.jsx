import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import BlogCard from '../Components/BlogCard';
import { Box, Container } from '@mui/material';
import "slick-carousel/slick/slick-theme.css";

import PostF from '../Images/Post1.jpg'
import PostS from '../Images/Post2.jpg'

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import blog1 from '../Videos/blog-v1.mp4'
import blog2 from '../Videos/blog-v2.mp4'
import blog3 from '../Videos/blog-v3.mp4'
import blog4 from '../Videos/blog-v4.mp4'
import blog5 from '../Videos/blog-v5.mp4'
import blog6 from '../Videos/blog-v6.mp4'
import blog7 from '../Videos/blog-v7.mp4'
import blog8 from '../Videos/blog-v8.mp4'
import blog9 from '../Videos/blog-v9.mp4'
import blog10 from '../Videos/blog-v10.mp4'
import blog11 from '../Videos/blog-v11.mp4'
import blog12 from '../Videos/blog-v12.mp4'
import blog13 from '../Videos/blog-v13.mp4'

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  let data = [
    { id: 1, image: 'https://www.kalkifashion.com/blogs/wp-content/uploads/2023/08/DIY-Bridal-Beauty-Skincare-And-Beauty-Tips-For-Radiant-Skin-300x300.jpg', title: 'DIY Bridal Beauty Skincare And Beauty Tips For Radiant Skin' },
    { id: 2, image: 'https://www.kalkifashion.com/blogs/wp-content/uploads/2024/04/rose_pink_bridal_lehenga_in-sg127244_7_-729x1024.jpeg', title: 'Rose Pink Bridal Lehenga In Raw Silk With Heavy Embroidery' },
    { id: 3, image: 'https://www.kalkifashion.com/blogs/wp-content/uploads/2024/06/story-1-2-576x1024.jpg', title: 'Brick Red Velvet Bridal Lehenga Set With Aari Work' },
    { id: 4, image: 'https://www.kalkifashion.com/blogs/wp-content/uploads/2024/10/2-25.jpg', title: 'Purple Embroidered Blouse And Skirt With Choker Jacket' },

    { id: 5, image: 'https://www.kalkifashion.com/blogs/wp-content/uploads/2024/10/9-1093x1536.jpg', title: 'Oyster Organza Lehenga With Cut Dana Embroidery' },
    { id: 6, image: 'https://www.kalkifashion.com/blogs/wp-content/uploads/2024/10/15-1093x1536.jpg', title: 'Gold Hand Embroidered Bridal Lehenga Set' },
    { id: 7, image: 'https://www.kalkifashion.com/blogs/wp-content/uploads/2024/10/3-19-729x1024.jpg', title: 'Deep Green Swarovski Embellished Lehenga In Wrinkle Satin' },
    { id: 8, image: 'https://www.kalkifashion.com/blogs/wp-content/uploads/2024/10/4-21.jpg', title: 'Purple Banarasi Brocade Lehenga Set' },

    { id: 9, image: 'https://www.kalkifashion.com/blogs/wp-content/uploads/2024/10/2-19.jpg', title: 'Black Embroidered Choli With Dupatta' },
    { id: 10, image: 'https://www.kalkifashion.com/blogs/wp-content/uploads/2024/10/1-20.jpg', title: 'White Printed Chinon Crop Top And Skirt Set' },
    { id: 11, image: 'https://www.kalkifashion.com/blogs/wp-content/uploads/2024/10/2-21.jpg', title: 'Mustard Yellow Georgette Lehenga Choli Set' },
    { id: 12, image: 'https://www.kalkifashion.com/blogs/wp-content/uploads/2024/10/4-19.jpg', title: 'Pink Printed Lehenga Choli With Embroidered Jacket' },
  ]

  return (
    <div style={{marginTop:'100px'}}>
      <Box>
        <Container>
          <Box sx={{ width: 'calc(100% - 20px)', display: 'flex', flexWrap:'wrap',justifyContent:'center'}}>
            {
              data.map((el, i) => {
                return (
                  <BlogCard ImageCard={el.image} Title={el.title} />
                )
              })
            }
          </Box>
        </Container>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center',  fontSize: { lg: 40, md: 30, sm: 20, xs: 20 }, fontWeight:'600', textTransform: 'uppercase',fontFamily:'"Prosto One", system-ui', color: '#dd1a18', my: { lg: '40px', md: '10px', sm: 'auto'} }} >
              Our Products
      </Box>
      
      <div className="slider-container" style={{marginBottom:'50px'}}>
        <Slider {...settings}>
          <Box>
            <video src={blog1} autoPlay muted loop style={{ margin: 20, width: '100%' }}></video>
          </Box>
          <Box>
            <video src={blog2} autoPlay muted loop style={{ margin: 20, width: '100%' }}></video>
          </Box>
          <Box>
            <video src={blog3} autoPlay muted loop style={{ margin: 20, width: '100%' }}></video>
          </Box>
          <Box>
            <video src={blog4} autoPlay muted loop style={{ margin: 20, width: '100%' }}></video>
          </Box>
          <Box>
            <video src={blog5} autoPlay muted loop style={{ margin: 20, width: '100%' }}></video>
          </Box>
          <Box>
            <video src={blog6} autoPlay muted loop style={{ margin: 20, width: '100%' }}></video>
          </Box>
          <Box>
            <video src={blog7} autoPlay muted loop style={{ margin: 20, width: '100%' }}></video>
          </Box>
          <Box>
            <video src={blog12} autoPlay muted loop style={{ margin: 20, width: '100%' }}></video>
          </Box>
          <Box>
            <video src={blog13} autoPlay muted loop style={{ margin: 20, width: '100%' }}></video>
          </Box>
          <Box>
            <video src={blog8} autoPlay muted loop style={{ margin: 20, width: '100%' }}></video>
          </Box>
          <Box>
            <video src={blog9} autoPlay muted loop style={{ margin: 20, width: '100%' }}></video>
          </Box>
          <Box>
            <video src={blog10} autoPlay muted loop style={{ margin: 20, width: '100%' }}></video>
          </Box>
          <Box>
            <video src={blog11} autoPlay muted loop style={{ margin: 20, width: '100%' }}></video>
          </Box>
          <Box>
            <video src={blog12} autoPlay muted loop style={{ margin: 20, width: '100%' }}></video>
          </Box>
          <Box>
            <video src={blog13} autoPlay muted loop style={{ margin: 20, width: '100%' }}></video>
          </Box>
        </Slider>
      </div>

      <Container>
        <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',my:'30px'}}>
          <Box sx={{width:'50%'}}>
            <img src={PostF} alt="" width={"100%"} />
          </Box>
          <Box sx={{width:'calc(50% - 40px)', px:'20px'}}>
            <Box sx={{fontFamily:'"Prosto One", system-ui', color: '#dd1a18', fontSize:'34px'}}>Top 10 Lehenga Trends Every Bride Needs to Know</Box>
            <Box sx={{ color: '#000', fontSize:'14px',mt:'10px'}}>People’s love for lehenga has become immensely popular, and why not?</Box>
            <Box sx={{ color: '#000', fontSize:'14px',mt:'10px'}}>It’s airy, designed with intricacy, and even worn for weddings, it’s like a replica of an heirloom saree but trendier and Hoter. Who wouldn’t want to wear the Indian bridal lehenga!</Box>
            <Box sx={{ color: '#000', fontSize:'14px',mt:'10px'}}>When it comes to weddings, your outfit should be the epitome of luxury and for brides choosing the perfect outfit is the most important part of the wedding. To have that one day in life that is so precious and only comes once, you definitely want to look and feel your absolute best. So choosing the perfect bridal lehenga can make a huge difference.</Box>
            <Box sx={{ color: '#000', fontSize:'14px',mt:'20px'}}>
            <Box sx={{display:'flex',justifyContent:'start',gap:'20px'}}>
              <FavoriteIcon sx={{color:'red',}} />
              <ShareIcon sx={{color:'#000',}} />
              <CommentIcon sx={{color:'#000',}} />
            </Box>
            <Box>
              <input type="text" style={{width:'50%',height:'30px', marginTop:'10px', borderRadius:"2px",borderTop:'0px',borderLeft:'0px',borderRight:'0px',borderBottom:'1px solid #000'}} placeholder='Comments'/>  
            </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',my:'50px',}}>
          <Box sx={{width:'calc(50% - 40px)', px:'20px'}}> 
            <Box sx={{fontFamily:'"Prosto One", system-ui', color: '#dd1a18', fontSize:'24px'}}>The Festive Glow-Up: Must-Have Designer Sarees for Every Celebration</Box>
            <Box sx={{ color: '#000', fontSize:'14px',mt:'10px'}}>Sarees are the epitome of Indian heritage, since forever sarees have been worn and cherished by our ancestors. All the more during the festive season, designer sarees are quite the craze in today’s era, and fashion plays an important role in expressing that vibrancy. </Box>
            <Box sx={{ color: '#000', fontSize:'14px',mt:'10px'}}>Did you know you can put on sarees in just 60 seconds? </Box>
            <Box sx={{ color: '#000', fontSize:'14px',mt:'10px'}}>No, no need to drape it. Well, <span style={{fontFamily:'"Prosto One",system-ui'}}>CULTURE STUDIO</span> has gone above and beyond for you, just put on the saree and leave, you don’t have to worry about pins sticking out, or bruising you, biggest fear, right? it’s time you get the no-hassle saree now we’ve got latest saree designs for you</Box>
            <Box sx={{ color: '#000', fontSize:'14px',mt:'20px'}}>
            <Box sx={{display:'flex',justifyContent:'start',gap:'20px'}}>
              <FavoriteIcon sx={{color:'red',}} />
              <ShareIcon sx={{color:'#000',}} />
              <CommentIcon sx={{color:'#000',}} />
            </Box>
            <Box>
              <input type="text" style={{width:'50%',height:'30px', marginTop:'10px', borderRadius:"2px",borderTop:'0px',borderLeft:'0px',borderRight:'0px',borderBottom:'1px solid #000'}} placeholder='Comments'/>  
            </Box>
            </Box>
          </Box>
          <Box sx={{width:'50%'}}>
            <img src={PostS} alt="" width={"100%"}/>
          </Box>
        </Box>
      </Container>
    </div>

  )
}

export default Blog