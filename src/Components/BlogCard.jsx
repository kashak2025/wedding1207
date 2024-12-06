import { Box, Container } from '@mui/material'
import React from 'react'

const BlogCard = (props) => {
  return (
    
      <Box sx={{width:'calc(25% - 10px)',mx:'5px', position:'relative', marginBottom:'30px'}}>
        <Box className='box-img'>
          <img src={props.ImageCard} width={"100%"} height={"300px"} alt="" />
        </Box>
        <Box sx={{width:'100%', display:'flex',justifyContent:'center'}}>
          <Box className='boxHead'>
            {props.Title}
          </Box>
        </Box>
      </Box>
  )
}

export default BlogCard