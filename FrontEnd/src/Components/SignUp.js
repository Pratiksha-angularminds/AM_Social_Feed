import React,{useState} from 'react'
import { Card,CardHeader,Box,Container,TextField,Button,Typography,Link } from '@mui/material';
import {useNavigate} from 'react-router-dom'



function SignUp() {
    const [validPassword, setValidPassword] = useState()
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let navigate = useNavigate()

    const checkPasswordValidity = (e) => {
        let password = e.target.value
        // console.log(password);
        if(password.length<6){
            setValidPassword(false)
            console.log("length not good");
        }
        else if(format.test(password)&&(/\d/.test(password))){
            setValidPassword(true)
            console.log("includes symbol&number");
        }
        // else if{(/\d/.test(password))
        //     setValidPassword(true)
        //     console.log("includes number");
        // }
    }

    const SignUpButton = () => {
        if(validPassword){
            alert("Account created")
        }
        else{
            alert("Password must include at least 6 characters,one symbol and number")
        }
        navigate('/login')
    }

  return (
    <React.Fragment>
        <Container maxWidth="xl" sx={{ bgcolor: 'whitesmoke', display: "flex", justifyContent: "center" }}
            >
                <Card sx={{ maxWidth: "50%", my: 10, textAlign: 'center', overflow: "auto" }}>
                    <CardHeader
                    variant="h3"
                    subheader="Sign Up Form"
                    sx={{ color: "primary"}}
                    />
                    <Box
                    component="form"
                    sx={{'& > :not(style)': { mx: 4, my: 1 }
                    }}
                    >
                    <br />
                    <TextField
                    id="name"
                    label="First Name"
                    color="primary"
                    variant="outlined"
                    size="small"
                    sx={{ width: 300, color: "primary" }}
                    required
                    />
                    <br />
                    <TextField
                    id="name"
                    label="Last Name"
                    color="primary"
                    variant="outlined"
                    size="small"
                    sx={{ width: 300, color: "primary" }}
                    required
                    />
                    <br />
                    <TextField
                    id="email"
                    type="email"
                    label="Email"
                    color="primary"
                    variant="outlined"
                    size="small"
                    sx={{ width: 300, color: "primary" }}
                    required
                    />
                    <br />
                    <TextField
                    id="password"
                    type="password"
                    label="Password"
                    color="primary"
                    variant="outlined"
                    size="small"
                    sx={{ width: 300, color: "primary" }}
                    onChange={(e)=>checkPasswordValidity(e)}
                    required
                    />
                    <br />
                    {/* {validPassword?
                    null
                    :
                    <>
                    <Typography
                    variant="subtitle2" 
                    >
                        Password must include at least one special character and one number
                    </Typography>
                    <br />
                    </>} */}
                    <Button 
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={()=>SignUpButton()}
                    >
                    SignUp
                    </Button>
                    <br />
                    </Box>
                </Card>
        </Container>
    </React.Fragment>
  )
}

export default SignUp