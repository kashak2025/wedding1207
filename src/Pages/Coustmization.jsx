import React from 'react'
import { Box, Container } from '@mui/material'

function Coustmization() {
    return (
        <>
            <Box>
                <Container>
                    <h1 className='cust-h1'>Customization</h1>
                    <h1 className='cust-h1'>Are you tired of the same old, generic clothing options? </h1>
                    <p className='cust-p'>At Culture Studio, we believe that every individual deserves to feel unique and confident in their style. That's why we offer a wide range of customization options to help you create truly personalized clothing that reflects your personality.</p>

                    {/* <p>Choose Your Fabric:-Select from a variety of high-quality fabrics, including cotton, linen, silk, and more, to suit your preferences and the occasion.</p> */}

                    <h4>Choose Your Fabric:-</h4><p>Select from a variety of high-quality fabrics, including cotton, linen, silk, and more, to suit your preferences and the occasion.</p>

                    <p>Customize the Fit:- Our expert tailors can adjust the fit of your garment to ensure a perfect silhouette that complements your body shape.</p>

                    <p>Personalize the Details :- Add your own personal touch with custom embroidery, patches, or embellishments.</p>

                    <p>Choose Your Color:- Select your favorite color or combination of colors to create a truly one-of-a-kind piece.</p>

                    <p>Design Your Own Pattern :- Work with our design team to create a custom pattern that is uniquely yours.</p>

                    <h1 className='cust-h1'>Benefits of Customization</h1>
                    <Box className='cust-box'>
                        <h4>Unique Style:-</h4><p>Stand out from the crowd with clothing that is truly one-of-a-kind.</p>
                    </Box>
                    <p>Perfect Fit:- Ensure a comfortable and flattering fit that makes you feel confident.</p>

                    <p>High Quality   :- Our high-quality materials and expert craftsmanship guarantee a durable and long-lasting garment.</p>
                    <p>ustainability :- Reduce your environmental impact by investing in clothing that is made to last.</p>
                    
                </Container>


            </Box>

        </>

    )
}

export default Coustmization