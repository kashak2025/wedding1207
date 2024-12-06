import { Box } from '@mui/material'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Card = (props) => {

  
  let history = useHistory()

  const handleRedirect = (props) =>{
    history.push(`/buynow/${props.id}`)
    
  }
  return (
    <Box sx={{width:'calc(27% - 38px)',margin:'5px', borderRadius:'10px', boxShadow: '9px 5px 15px -8px rgba(0,0,0,0.75)'}}>
      <Box sx={{borderRadius:'10px'}}>
        <img src={props.ImageCard} style={{borderRadius:'10px 10px 0px 0px'}} width={"100%"} height={"300px"} alt="" />
      </Box>
      <Box sx={{fontFamily:'"Anton", sans-serif', marginTop: '5px'}}>
        <p className='paddYaxis'>{props.HeadingCard}</p>
        <Box sx={{display:'flex'}}>
          <Stack spacing={1} className='paddYaxis'>
            <Rating name="half-rating-read" sx={{width:'50%'}} defaultValue={props.Rating.rate} precision={0.5} readOnly />
          </Stack>  
          <Box sx={{width:'50%',display:'flex',alignItems:'center',fontSize:'14px'}}>{props.Rating.count}</Box>
        </Box>
        <Box sx={{display:'flex', justifyContent:'end', width:'100%'}}>
          {/* <button className='button' onClick={this.handleClick}>Buy Now</button> */}
          <button className='button' onClick={() => handleRedirect(props)}>Buy Now</button>
        </Box>
      </Box>
    </Box>
  )
}

export default Card