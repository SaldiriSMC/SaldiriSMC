import * as React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { BorderColor } from '@mui/icons-material';
const useStyles = makeStyles()((theme) => {
    return {
      sectionWrapperTop: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        backgroundPosition: 'top',
        position: 'relative',
        // '&:after': {
        //   content: '""',
        //   position: 'absolute',
        //   width: '100%',
        //   height: '100%',
        //   top: 0,
        // },
        [theme.breakpoints.down('xl')]: {
          padding: '190px 0px 80px'
        },
        [theme.breakpoints.down('lg')]: {
            padding: '0px 0px 70px 0px'
        },
        [theme.breakpoints.down('md')]: {
            padding: '0px 0px 20px 0px',
        },
      },
      bannerTitle: {
        fontSize: '4rem !important',
        color: 'white',
        [theme.breakpoints.down('lg')]: {
          fontSize: '40px !important',
          marginTop: 90,
        },
        [theme.breakpoints.down('md')]: {
          fontSize: '36px !important',
          marginTop: 50,
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: '36px !important',
          marginTop: 20,
        margin:'auto'
        },
      },
      imgFullWidth:{
      width:'100%'
       },
       containerWrapper:{
        position:"absolute",
        zIndex:1,
        width:'auto'
       },
       button: {
       width:150,
       borderRadius:30,
       },
       buttonContact: {
       width:150,
       borderRadius:30,
       color:'white',
       border:'1px solid white',
       marginLeft:10,
       },
       contentContainer: {
        zIndex: 1,
        marginTop:50,
        color:'white',
        paddingTop: '50%',
        [theme.breakpoints.down('xl')]: {
          paddingTop: 0,
        },
        [theme.breakpoints.down('lg')]: {
          paddingTop: 40,
        },
        [theme.breakpoints.down('md')]: {
          fontSize: '36px !important',
          marginTop: 50,
          margin:'auto'
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: '36px !important',
          marginTop: 20,
        margin:'auto'
        },
      },
       
    };
  });
function Baner() {
    const { classes } = useStyles();
    return (
        <section  >
            <Container maxWidth="xl">
                <Grid container className={classes.containerWrapper}>
                    <Grid container item lg={12} md={12} justifyContent='center'>
                        <div className={classes.contentContainer}>
                            <Typography
                                variant="h1"
                                className={classes.bannerTitle}
                            >
                                SALDIRI
                            </Typography>
                            <Typography
                                variant="body2"
                                className={classes.subTitle}
                            >
                               Business | Technology | Empowerment
                            </Typography>
                            <Button
                            sx={{mt:1}}
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                // onClick={()=>router.push('/sign-in')}
                            >
                              Join Us
                            </Button>
                            <Button
                              sx={{mt:1}}
                                variant="outlined"
                                color="primary"
                                className={classes.buttonContact}
                                // onClick={()=>router.push('/sign-in')}
                            >
                            Contact Us
                            </Button>
                           
                        </div>
                    </Grid>
                    {/* <Grid container direction="row" item lg={6} md={12}>
                        <div className={classes.contentContainer}>
    
                        <div className="intro-img">
            <img src="/assets/Background.png" alt="" className="move_logo" />
          </div>
                        </div>
                    </Grid> */}
                </Grid>
            </Container>
      <img src="/assets/intro-bg2.png" alt="Image" className="background-image" /> 
  </section>
  )
}

export default Baner