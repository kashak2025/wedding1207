import { Box, Container } from '@mui/material'
import React from 'react'
import EastIcon from '@mui/icons-material/East';
import women from '../Images/women.png'
import men from '../Images/groom122.png'
import kids from '../Images/kids.png'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Category() {
    
    let history = useHistory()

    let handleRedirect = () => {
        history.push('/category')
    }
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center',  fontSize: { lg: 45, md: 40, sm: 35, xs: 30 }, textTransform: 'uppercase', fontFamily:'"Prosto One", system-ui', color: '#dd1a18', my: { lg: '25px', md: '10px', sm: 'auto', } }} >categories</Box>

            <Container sx={{ width:'100%'}}>
                <Box sx={{display:'flex', justifyContent:'center', flexWrap:'wrap',marginTop: { lg: '30px', md: '10px', sm: 'auto'}}}>
                    <Box sx={{width:'calc(33.33% - 20px)', px:'10px',marginTop:{ sm:'10px', xs: '5px'}}}>
                        <img src={women} alt="" width={'100%'} style={{borderRadius:'84px 84px 0px 0px'}} />
                        <Box sx={{mt:'-90px', mb:'50px',display:'flex',justifyContent:'center'}}>
                            <button onClick={handleRedirect} style={{display:'flex',alignItems:'center', justifyContent:'space-evenly',backgroundColor:'transparent', color:'#fff',fontFamily:'"Prosto One", system-ui',fontSize:'18px',margin:'0px',padding:'20px',width:'170px',height:'40px',lineHeight:'-10px',cursor:'pointer',textAlign:'left'}} className='border-gradient border-gradient-purple'>
                              Womens
                              <EastIcon sx={{lineHeight:'0px', color:'#fff'}}/>
                            </button>
                        </Box>
                    </Box>
                    <Box sx={{width:'calc(33.33% - 20px)', px:'10px',marginTop:{ sm:'10px', xs: '5px'}}}>
                        <img src={men} alt="" width={'100%'} style={{borderRadius:'80px 80px 0px 0px'}} />
                        <Box sx={{mt:'-90px', mb:'50px',display:'flex',justifyContent:'center'}}>
                            <button onClick={handleRedirect} style={{display:'flex',alignItems:'center', justifyContent:'space-evenly',backgroundColor:'transparent', color:'#fff',fontFamily:'"Prosto One", system-ui',fontSize:'18px',margin:'0px',padding:'20px',width:'160px',height:'40px',lineHeight:'-10px',cursor:'pointer',textAlign:'left'}} className='border-gradient border-gradient-purple'>
                              Mens
                              <EastIcon sx={{lineHeight:'0px', color:'#fff'}}/>
                            </button>
                        </Box>
                    </Box>
                    <Box sx={{width:'calc(33.33% - 20px)', px:'10px',marginTop:{md:'10px', sm:'10px', xs: '5px'}}}>
                        <img src={kids} alt="" width={'100%'} style={{borderRadius:'84px 84px 0px 0px'}} />
                        <Box sx={{mt:'-90px', mb:'50px',display:'flex',justifyContent:'center'}}>
                            <button onClick={handleRedirect} style={{display:'flex',alignItems:'center', justifyContent:'space-evenly',backgroundColor:'transparent', color:'#fff',fontFamily:'"Prosto One", system-ui',fontSize:'18px',margin:'0px',padding:'20px',width:'160px',height:'40px',lineHeight:'-10px',cursor:'pointer',textAlign:'left'}} className='border-gradient border-gradient-purple'>
                              Kids
                              <EastIcon sx={{lineHeight:'0px', color:'#fff'}}/>
                            </button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Category