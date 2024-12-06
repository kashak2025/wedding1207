import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container } from '@mui/material';
const Faqs = () => {
    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box sx={{mt:'100px',mb:'50px'}}>
      <Container>

        <Box sx={{my:'40px',fontFamily:'"Prosto One",system-ui',color:'#3b3b3b',fontSize:'30px',width:'100%',textAlign:'center'}}>
          Frequently Asked Questions
        </Box>

        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{border:'0px',boxShadow:'0px 0px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{borderBottom:'1px solid #3b3b3b'}}
          >
            <Typography sx={{ width: '100%', flexShrink: 0, textAlign:'start', fontSize:'24px', fontFamily:'"Prosto One",system-ui' }}>
            What is Culture Studio?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Box sx={{textAlign:'center',fontSize:'20px'}}>

            Culture Studio is an online rental shop that offers a diverse collection of traditional and Western culture dresses. We aim to celebrate cultural diversity by providing unique, high-quality attire for various events, ceremonies, and personal style preferences.
              </Box>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{borderBottom:'0px',boxShadow:'0px 0px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            sx={{borderBottom:'1px solid #3b3b3b',}}
          >
            <Typography sx={{ width: '100%', flexShrink: 0, textAlign:'start', fontSize:'24px', fontFamily:'"Prosto One",system-ui' }}>
            How does the rental process work?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                <Box sx={{textAlign:'center',fontSize:'20px'}}>
                <b> Select a dress: </b>
                 Browse our collection and select the dress you wish to rent. <br />
                <b> Choose rental duration: </b>
                 Select the duration for which you want to rent the dress (usually available for 3, 7, or 10 days). <br />
                <b> Checkout: </b>
                 Provide delivery details, make the payment, and we will ship the dress to your location. <br />
                <b> Return: </b>
                 After your event, simply pack the dress in the pre-provided packaging and return it to us.
                </Box>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{borderBottom:'0px',boxShadow:'0px 0px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            sx={{borderBottom:'1px solid #3b3b3b',}}
          >
            <Typography sx={{ width: '100%', flexShrink: 0, textAlign:'start', fontSize:'24px', fontFamily:'"Prosto One",system-ui' }}>
            What types of dresses are available for rent?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography >
                    <Box sx={{textAlign:'center',fontSize:'20px'}}>
                    <li>
                        Traditional dresses (such as sarees, lehengas, kimonos, hanboks, etc.)
                    </li>
                    <li>
                        Western formalwear (like gowns, cocktail dresses, and suits)
                    </li>
                    <li>
                        Special occasion outfits for weddings, festivals, and formal events.
                    </li>
                    </Box>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{borderBottom:'0px',boxShadow:'0px 0px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            sx={{borderBottom:'1px solid #3b3b3b',}}
          >
            <Typography sx={{ width: '100%', flexShrink: 0, textAlign:'start', fontSize:'24px', fontFamily:'"Prosto One",system-ui' }}>
            Can I try the dresses on before renting?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                <Box sx={{textAlign:'center',fontSize:'20px'}}>  
                Currently, we do not offer in-person fittings. However, you can request additional photos, styling advice, and size guidance from our customer support team to help you make the best choice.
                </Box>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{borderBottom:'0px',boxShadow:'0px 0px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
            sx={{borderBottom:'1px solid #3b3b3b',}}
          >
            <Typography sx={{ width: '100%', flexShrink: 0, textAlign:'start', fontSize:'24px', fontFamily:'"Prosto One",system-ui' }}>
                Do you offer international shipping?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                <Box sx={{textAlign:'center',fontSize:'20px'}}>  
                Currently, we ship only within select regions. Please check our shipping policies on the website or contact us to inquire about your location.
                </Box>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  )
}

export default Faqs