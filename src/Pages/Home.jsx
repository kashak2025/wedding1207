import { Box, Container} from '@mui/material'
import React from 'react'
import '../App.css';
import Hero from '../Images/Hero.jpg'
import PngF from '../Images/Pngf.png'
import PngS from '../Images/PngS.png'
import HeroS from '../Images/HeroS.jpg'
import HeroT from '../Images/HeroT.jpg'
import AbtF from '../Images/AbtS.jpg'
import AbtG from '../Images/groom122.jpg'
import Slider from "react-slick";
import EastIcon from '@mui/icons-material/East';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Home = () => {
  let history = useHistory()
  let handleRedirect = () => {
    history.push('/about')
  }  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return (
    <Box sx={{marginTop:'84px'}}>
      <Box className="slick-arrow">
          <Slider {...settings} >
            <div>
              <img src={Hero} width={"100%"} height={"500px"}/>
              <Box sx={{display:'flex', justifyContent:'center', }}>
                <Box sx={{position:'absolute', top:'0px',paddingTop:{lg:'220px', md:'230px', sm:'234px',xs:'242px'}, color:'#ffffff',fontSize:{lg:'40px',md:'34px',sm:'22px',xs:'16px'},letterSpacing:'3px', wordSpacing:'3px', fontWeight:'600px', fontFamily:'"Prosto One", system-ui'}}>Capturing Unique Rituals and Styles</Box>
                <Box sx={{position:'absolute', top:'0px',fontSize:{xs:'16px'},paddingTop:{lg:'278px',md:'268px', sm:'268px', xs:'262px'}, color:'#ffffff'}}>Lightweight and Flowy, great for Comfort</Box>
              </Box>
            </div>
            <div>
              <img src={HeroS} width={"100%"} height={"500px"}/>
              <Box sx={{display:'flex', justifyContent:'center'}}>
                <Box sx={{position:'absolute', top:'0px',paddingTop:{lg:'220px', md:'230px', sm:'234px',xs:'242px'}, color:'#ffffff',fontSize:{lg:'40px',md:'34px',sm:'22px',xs:'16px'},letterSpacing:'3px', wordSpacing:'3px', fontWeight:'600px', fontFamily:'"Prosto One", system-ui'}}>A Fusion of Unique Rituals</Box>
                <Box sx={{position:'absolute', top:'0px',fontSize:{xs:'16px'},paddingTop:{lg:'278px',md:'268px', sm:'268px', xs:'262px'}, color:'#ffffff'}}>Discover Comfort That Dances with You</Box>
              </Box>
            </div>
            <div>
              <img src={HeroT} width={"100%"} height={"500px"}/>
              <Box sx={{display:'flex', justifyContent:'center'}}>
                <Box sx={{position:'absolute', top:'0px',paddingTop:{lg:'220px', md:'230px', sm:'234px',xs:'242px'}, color:'#ffffff',fontSize:{lg:'40px',md:'34px',sm:'22px',xs:'16px'},letterSpacing:'3px', wordSpacing:'3px', fontWeight:'600px', fontFamily:'"Prosto One", system-ui'}}>Where Tradition Meets Trend</Box>
                <Box sx={{position:'absolute', top:'0px',fontSize:{xs:'16px'},paddingTop:{lg:'278px',md:'268px', sm:'268px', xs:'262px'}, color:'#ffffff'}}>Airy and Adaptable Comfort Meets Style in Every Step</Box>
              </Box>
            </div>
        </Slider>
      </Box>
      <Box sx={{position:'relative'}}>
        <Box sx={{position:'absolute', top:'-65px', left:'0px'}}>
          <img src={PngF} />
        </Box>
        <Box sx={{position:'absolute', top:'-10px', right:'0px'}}>
          <img src={PngS} width={"250px"} height={"280px"} />
        </Box>
        <Container>


          <Box sx={{mt:'100px'}}>
            <Box sx={{ display: 'flex', justifyContent: 'center',  fontSize: { lg: 40, md: 30, sm: 20, xs: 20 }, fontWeight:'600', textTransform: 'uppercase',fontFamily:'"Prosto One", system-ui', color: '#dd1a18', my: { lg: '40px', md: '10px', sm: 'auto'} }} >
              about us
            </Box>
          </Box>
          
          <Box>
            <Box sx={{display:'flex', marginTop:'46px'}}>
              <Box className='img' sx={{display:{lg:'block', sm:'none',md:'none',xs:'none'}}}>
                <img src={AbtF}  height={"710px"}/>
              </Box>
              <Box sx={{width:{lg:'50%', sm:'100%',md:'100%',xs:'100%'},marginLeft:'28px', py:{lg:'170px',md:'0px',sm:'0px', xs:'0px'}, textAlign:{lg:'none', sm:'center',md:'center',xs:'center'}}}>
                <Box sx={{fontSize:'49px', fontWeight:'600',fontFamily:'"Prosto One", system-ui',color:'#dd1a18'}}>
                We Belive In A Bridal Revolution
                </Box>
                <Box sx={{fontSize:'20px', mt:'30px'}}>
                  We don’t think bridal should be uncomfortable or kept in a box. We don’t think you should be pressured into not feeling like yourself. Our dresses are unusual, figure flattering and above all comfortable. They are made to stand out in the bridal world and to make your guests salute you for being you.
                </Box>
                <Box sx={{mt:'40px',width:'100%',display:'flex',justifyContent:'center'}}>
                    <button onClick={handleRedirect} style={{display:'flex',alignItems:'center', justifyContent:'space-evenly',backgroundColor:'transparent', color:'#000',margin:'0px',padding:'20px',width:'180px',height:'40px',lineHeight:'-10px',cursor:'pointer',textAlign:'left'}} className='border-gradient border-gradient-purple'>
                      Explore More
                      <EastIcon sx={{lineHeight:'0px'}}/>
                    </button>
                </Box>
              </Box>
            </Box>
          </Box>



          <Box sx={{marginBottom:'60px'}}>
            <Box sx={{display:'flex', marginTop:'46px'}}>
              
              <Box sx={{width:{lg:'50%', sm:'100%',md:'100%',xs:'100%'},marginRight:'28px', py:{lg:'170px',md:'0px',sm:'0px', xs:'0px'}, textAlign:{lg:'none', sm:'center',md:'center',xs:'center'}}}>
                <Box sx={{fontSize:'49px', fontWeight:'600',fontFamily:'"Prosto One", system-ui',color:'#dd1a18'}}>
                We Belive In A Groom Revolution
                </Box>
                <Box sx={{fontSize:'20px', mt:'30px',textAlign:'center'}}>
                We believe that grooms shouldn’t have to sacrifice comfort for style. Your wedding day is one of the most important days of your life, and you deserve to feel confident and true to yourself. Our suits are designed to break the mold
                </Box>
                <Box sx={{mt:'40px',width:'100%',display:'flex',justifyContent:'center'}}>
                    <button onClick={handleRedirect} style={{display:'flex',alignItems:'center', justifyContent:'space-evenly',backgroundColor:'transparent', color:'#000',margin:'0px',padding:'20px',width:'180px',height:'40px',lineHeight:'-10px',cursor:'pointer',textAlign:'center'}} className='border-gradient border-gradient-purple'>
                      Explore More
                      <EastIcon sx={{lineHeight:'0px'}}/>
                    </button>
                </Box>
              </Box>
              <Box className='img' sx={{display:{lg:'block', sm:'none',md:'none',xs:'none'}}}>
                <img src={AbtG} style={{borderRadius:'300px'}} height={"710px"}/>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
export default Home