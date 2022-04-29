import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'


const pages = [{ text: '+Add Employee', path: "/employees/add" }];

const Navbar = () => {

    return (
        <AppBar position="fixed" sx={{ bgcolor: "light-blue", mb:4 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/"
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        <Typography
                            variant="h4"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, textDecoration: "none" }}
                        >
                            AM Social Feed
                        </Typography>
                    </Link>
                    {/* <Box sx={{ justifyContent: 'flex-end', flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                        {pages.map((page) => (

                            <Button
                                key={page.text}
                                sx={{ my: 2, color: 'white', display: 'block', textDecoration: "none" }}
                            >
                                <Link to={`${page.path}`} key={`${page.path}`}
                                    style={{
                                        textDecoration: "none",
                                        color: "white"
                                    }}

                                >
                                    {page.text}
                                </Link>
                            </Button>

                        ))}
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
