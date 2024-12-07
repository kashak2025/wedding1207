import { Box, Button, Container, TextField } from "@mui/material";
import React from "react";
// import { TextFields } from '@mui/icons-material'
import Icon from "../Images/search.png";
import { Field, Form, Formik } from "formik";
import { useHistory } from "react-router-dom";

const Login = () => {
    let history = useHistory()
    const handleRedirectSignup = () =>{
        history.push('/signup')
      }
  return (
    <Box sx={{ mb: "100px" }}>
      <Container>
        <Box sx={{display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column",position: "relative",top: "100px",}}>
          <Box sx={{borderRadius:'10px', boxShadow:'9px 9px 15px -4px #3b3b3b', px:"20px",mb:'30px'}}>
            <Box sx={{display: "flex",justifyContent: "center",fontSize: { lg: 45, md: 40, sm: 35, xs: 30 },textTransform: "uppercase",color: "#3b3b3b",fontFamily: '"Prosto One", system-ui',margin: { lg: "36px 0px 36px 0px", md: "10px", sm: "auto" },}}>
            Sign in
            </Box>
            <Box sx={{mb: "40px",width: "270px",display: "flex",flexWrap: "wrap",justifyContent: "center",}}>
                <Formik initialValues={{   username: "",   Email: "",   password: "",}}
                onSubmit={ async(values, { resetForm }) => {
                  await new Promise((r) => setTimeout(r, 500));
                  console.log(values)
                  resetForm()
                }}
                >
                    <Form>
                      <Field as={TextField} sx={{ my: "10px", width:'100%' }} required label="UserName" name='username' variant="filled"  type="text"></Field>
                      <Field as={TextField} sx={{ my: "10px", width:'100%' }} required label="Email" name='Email' variant="filled"  type="email"></Field>
                      <Field as={TextField} sx={{ my: "10px", width:'100%' }} required label="PassWord" variant="filled"  name='password' type="password"></Field>
                      <Box sx={{width:"100%",display:'flex', justifyContent:'center'}}>
                      <Button sx={{ my: "10px", background: "#dd1a18" }} variant="contained" type="submit">Submit</Button>
                      </Box>
                    </Form>
                </Formik>
            </Box>
          </Box>
          <Box sx={{ width: "100%", display: "flex", mt:'0px', mb:'20px' }}>
            <Box sx={{width: "33.33%",color: "#000",display: "flex",justifyContent: "end",}}>
              <Button sx={{p: "0px",fontFamily: '"Prosto one",system-ui',fontSize: "18px",color: "#000",textTransform: "none"}} onClick={handleRedirectSignup}>Sign Up</Button>
            </Box>
            <Box sx={{width: "33.33%",lineHeight:'31px',textAlign: "center",fontFamily: '"Prosto one",system-ui',fontSize: "18px",}}>
              Sign In with Goggle <img src={Icon} alt="" />
            </Box>
            <Box sx={{width: "33.33%",lineHeight:'31px',textAlign: "start",fontFamily: '"Prosto one",system-ui',fontSize: "18px",}}>
              Forget Password ?
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
    
