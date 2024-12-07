import { Box, Button, Container, TextField } from '@mui/material'
import React from 'react'
import { Field, Form, Formik } from 'formik'
// import { Padding, TextFields } from '@mui/icons-material'
import Icon from "../Images/search.png";

import { useHistory } from 'react-router-dom'

const Signup = () => {
  let history = useHistory()
  const handleRedirectSignup = () => {
    history.push('/login')
  }
  return (
    <Box sx={{ mb: "100px" }}>
      <Container>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", position: "relative", top: "100px", }}>
          <Box sx={{ borderRadius: '10px', boxShadow: '9px 9px 15px -4px #3b3b3b', px: "20px", mb: '30px' }}>
            <Box sx={{ display: "flex", justifyContent: "center", fontSize: { lg: 45, md: 40, sm: 35, xs: 30 }, textTransform: "uppercase", color: "#3b3b3b", fontFamily: '"Prosto One", system-ui', margin: { lg: "36px 0px 36px 0px", md: "10px", sm: "auto" }, }}>
              Sign in
            </Box>
            <Box sx={{ mb: "40px", width: "270px", display: "flex", flexWrap: "wrap", justifyContent: "center", }}>
              <Formik initialValues={{ File: "", username: "", Email: "", password: "", number: "" }}
                onSubmit={async (values, { resetForm }) => {
                  await new Promise((r) => setTimeout(r, 500));
                  console.log(values)
                  resetForm()
                }}>
                <Form>
                  <Field as={TextField} sx={{ my: "10px", width: '100%' }} required name="File" variant="filled" type="file"></Field>
                  <Field as={TextField} sx={{ my: "10px", width: '100%' }} required label="Username" name='username' variant="filled" type="text"></Field>
                  <Field as={TextField} sx={{ my: "10px", width: '100%' }} required label="Email" name='Email' variant="filled" type="email"></Field>
                  <Field as={TextField} sx={{ my: "10px", width: '100%' }} required label="PassWord" variant="filled" name='password' type="password"></Field>
                  <Field as={TextField} sx={{ my: "10px", width: '100%' }} required label="Contact" variant="filled" name='number' type="number"></Field>
                  <Box sx={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
                    <Button sx={{ my: "10px", background: "#dd1a18" }} variant="contained" type="submit">Submit</Button>
                  </Box>
                </Form>
              </Formik>
            </Box>
          </Box>

          <Box sx={{ width: "100%", display: "flex", mt: '0px', mb: '20px' }}>
            <Box sx={{ width: "50%", color: "#000", display: "flex", justifyContent: "center", }}><Button sx={{ p: "0px", fontFamily: '"Prosto one",system-ui', fontSize: "18px", color: "#000", textTransform: "none" }} onClick={handleRedirectSignup}>Login</Button></Box>
            <Box sx={{ width: "50%", textAlign: "center", fontFamily: '"Prosto one",system-ui', fontSize: "18px", lineHeight: "31px" }}>Sign Up with Goggle <img src={Icon} alt="" /></Box>
          </Box>
        </Box>
      </Container>
    </Box>
    // <Box>
    //     <Container>
    //         <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid black', borderRadius:'10px',  position: 'relative', top:'100px'}}>
    //             {/* <Box sx={{width:'100%' ,textAlign:'center', py:'90px', position:'abdolute', top:'0px',borderRadius:'10px',backgroundImage:"url('https://i.pinimg.com/564x/4c/a7/e3/4ca7e3e9f3e02ea0b1397d563d601ff8.jpg')", backgroundSize:'cover', backgroundAttachment:'fixed',}}> */}
    //             <Box sx={{ display: 'flex', justifyContent: 'center', fontSize: { lg: 45, md: 40, sm: 35, xs: 30 }, textTransform: 'uppercase', color: '#d4c6b9', fontFamily:'"Prosto One", system-ui', margin: { lg: '36px 0px 21px 0px', md: '  10px', sm: 'auto', } }} >
    //                 Sign up
    //             </Box>
    //                 <Formik>
    //                     <Form style={{width:'100%',color:'#000', ontWeight:'600px', fontFamily:'"Prosto One", system-ui', fontSize:'24px'}}>
    //                         <Field as={TextField} type='file' placeholder='Image'></Field><br /><br /> 
    //                         <Field as={TextField} type='text' placeholder='Username'></Field><br /><br /> 
    //                         <Field as={TextField} type='email'  placeholder="Email"></Field><br /><br /> 
    //                         <Field as={TextField} type='password'  placeholder="Password"></Field><br /><br /> 
    //                         <Field as={TextField} type='number'  placeholder="Contact No"></Field><br /><br />
    //                         <button type='submit' className="log-sub">Submit</button>
    //                     </Form>
    //                 </Formik>
    //             </Box>
    //         {/* </  Box> */}
    //     </Container>

    // </Box>
  )
}

export default Signup
