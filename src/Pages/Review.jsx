import { Box } from '@mui/material'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Reviews1 from '../Videos/review-1.mp4'
import Reviews2 from '../Videos/review-2.mp4'
import Reviews3 from '../Videos/review-3.mp4'
import Reviews4 from '../Videos/review-4.mp4'
import Reviews5 from '../Videos/review-5.mp4'
import Reviews6 from '../Videos/review-6.mp4'
import Reviews7 from '../Videos/review-7.mp4'
import Reviews8 from '../Videos/review-8.mp4'
import Reviews9 from '../Videos/review-9.mp4'
import Reviews10 from '../Videos/review-10.mp4'
import Reviews11 from '../Videos/review-11.mp4'


function Review() {
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
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', fontSize: { lg: 45, md: 40, sm: 35, xs: 30 }, textTransform: 'uppercase', color: '#dd1a18', fontFamily:'"Prosto One", system-ui', margin: { lg: '36px 0px 21px 0px', md: '  10px', sm: 'auto', } }} >highlights
      </Box>
      <div className="slider-container" style={{marginBottom:'50px'}}>
        <Slider {...settings}>
          <Box>
            <video src={Reviews1} autoPlay muted loop style={{margin: 20, width: '100%'}}></video>
          </Box>
          <Box>
            <video src={Reviews2} autoPlay muted loop style={{margin: 20, width: '100%'}}></video>
          </Box>
          <Box>
            <video src={Reviews3} autoPlay muted loop style={{margin: 20, width: '100%'}}></video>
          </Box>
          <Box>
            <video src={Reviews4} autoPlay muted loop style={{margin: 20, width: '100%'}}></video>
          </Box>
          <Box>
            <video src={Reviews5} autoPlay muted loop style={{margin: 20, width: '100%'}}></video>
          </Box>

          <Box>
            <video src={Reviews6} autoPlay muted loop style={{margin: 20, width: '100%'}}></video>
          </Box>
          <Box>
            <video src={Reviews7} autoPlay muted loop style={{margin: 20, width: '100%'}}></video>
          </Box>
          <Box>
            <video src={Reviews8} autoPlay muted loop style={{margin: 20, width: '100%'}}></video>
          </Box>
          <Box>
            <video src={Reviews9} autoPlay muted loop style={{margin: 20, width: '100%'}}></video>
          </Box>
          <Box>
            <video src={Reviews10} autoPlay muted loop style={{margin: 20   , width: '100%'}}></video>
          </Box>

          <Box>
            <video src={Reviews11} autoPlay muted loop style={{margin: 20   , width: '100%'}}></video>
          </Box>
        </Slider>
      </div>

    </>
  )
}

export default Review