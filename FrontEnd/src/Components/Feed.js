import React,{ useState, useEffect } from 'react';
import { Card,CardHeader,styled,CardMedia,IconButton,red,FavoriteIcon,ShareIcon,ExpandMoreIcon,MoreVertIcon,CardContent,CardActions,Collapse,Avatar,Box,Container,TextField,Button,Typography,Link } from '@mui/material';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Feed() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

 
  
  
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);}

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
    <React.Fragment>
        <Container maxWidth="xl" sx={{ bgcolor: 'whitesmoke', display: "flex", justifyContent: "center" }}
            >
                <Card sx={{ maxWidth: "50%", mt: 10, textAlign: 'center', overflow: "auto" }}>
                <CardHeader
                    subheader="New Post"
                    sx={{ color: "primary" }}
                />
                <Box
                component="form"
                sx={{'& > :not(style)': { mx: 1,my: 1}
                }}
                >
                <br />
                <input
                  accept="image/*"
                  type="file"
                  id="select-image"
                  style={{ display: 'none' }}
                  onChange={e => setSelectedImage(e.target.files[0])}
                />
                <label htmlFor="select-image">
                  <Button variant="outlined" color="primary" component="span">
                    Img
                  </Button>
                </label>
                {imageUrl && selectedImage && (
                  <Box mt={2} textAlign="center">
                    <div>Post Preview:</div>
                    <img src={imageUrl} alt={selectedImage.name} height="150px" />
                  </Box>
                )}
                
                <TextField
                id="name"
                label="Write a Caption.."
                color="primary"
                variant="outlined"
                size="small"
                sx={{ width: 300, color: "primary" }}
                required
                />
                <br />
                <Button variant="contained" color="primary" component="span">
                  Post
                </Button>
                </Box>
                </Card>
        </Container>
    </React.Fragment>
    </>
  );
};

export default Feed;