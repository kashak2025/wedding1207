import { Box } from '@mui/material'
import React from 'react'
import omega from '../Images/omega.png'
import addidas from '../Images/addidas.png'
import zara from '../Images/zara.png'
import jewelry from '../Images/jewelry.png'
import aveda from '../Images/aveda.png'

function Logo() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center',  fontSize: { lg: 45, md: 40, sm: 35, xs: 30 }, textTransform: 'uppercase', fontFamily:'"Prosto One", system-ui', color: '#dd1a18', my: { lg: '25px', md: '10px', sm: 'auto', } }} >Brands</Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',  }}>
                <Box>
                    <img src={omega} alt="" />
                </Box>
                <Box>
                    <img src={addidas} alt="" />
                </Box>
                <Box>
                    <img src={zara} alt="" />
                </Box>
                <Box>
                    <img src={jewelry} alt="" />
                </Box>
                <Box>
                    <img src={aveda} alt="" />
                </Box>
            </Box>
        </>

    )
}

export default Logo