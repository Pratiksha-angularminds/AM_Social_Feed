import React from 'react'
import { Card,CardHeader,Box,Container,TextField,Button,Typography,Link } from '@mui/material';
import GoogleLogin from 'react-google-login';
import {useNavigate} from 'react-router-dom'


function Login() {

    let navigate = useNavigate()

  return (
    <React.Fragment>
        <Container maxWidth="xl" sx={{ bgcolor: 'whitesmoke', display: "flex", justifyContent: "center" }}
            >
                <Card sx={{ maxWidth: "50%", my: 10, textAlign: 'center', overflow: "auto" }}>
                    <CardHeader
                        subheader="Login"
                        sx={{ color: "primary" }}
                    />
                    <Box
                    component="form"
                    sx={{'& > :not(style)': { mx: 4, my: 1 }
                    }}
                    >
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
                    required
                    />
                    <br />
                    <Button 
                    type="submit"
                    variant="contained"
                    color="success"
                    >
                    Login
                    </Button>
                    <br />
                    <GoogleLogin
                        clientId="971623344603-0qquan9pcdb9iu7oq9genvpnel77i7oa.apps.googleusercontent.com"
                        render={renderProps => (
                            <Button variant="contained"
                            onClick={renderProps.onClick} 
                            disabled={renderProps.disabled}>
                                Login with google
                            </Button>
                        )}
                        buttonText="Login"
                        // onSuccess={responseGoogle}
                        // onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    <br />
                    <Typography>Don't have an account? <Link href="#" onClick={()=>navigate('/sign-up')}>Sign up!</Link></Typography>
                    </Box>
                </Card>
        </Container>
    </React.Fragment>
  )
}

export default Login