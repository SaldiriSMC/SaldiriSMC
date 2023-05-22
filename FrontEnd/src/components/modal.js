import { makeStyles } from 'tss-react/mui';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import Slider from 'react-slick';
import Grid from '@mui/material/Grid'
import CancelIcon from '@mui/icons-material/Cancel';
const useStyles = makeStyles()((theme) => {
    return {
        mainContainer: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            background: theme.palette.white.main,
            borderRadius: 24,
            padding: '30px 30px 70px 30px',
            textAlign: 'center',
            [theme.breakpoints.down('md')]: {
                width: 'auto'
            },
            [theme.breakpoints.down('sm')]: {
                width: '300px'
            }
        },
        btn: {
            marginLeft: 10,
            marginTop: 40,
            borderRadius: 40,
            padding: '8px 40px',
        },
        imgFullWidth:{
          width:'100%'
           },
        avatar: {
          width: 160,
          height: 160,
          position: 'absolute',
          top: -90,
          left: 15,
          borderRadius: '100%',
          border: `4px solid red`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: theme.palette.primary.main,
          fontWeight: 700,
          fontSize: 18,
          marginRight: 15
        },
        uploadFileBtn: {
          position: 'absolute',
          bottom: 0,
          right: 0
        },
        iconWrapper: {
            background: 'rgba(0, 113, 188, 0.08)',
            width: 90,
            height: 90,
            margin: '0 auto 36px',
            borderRadius: '100%',
            position: 'relative'
        },
        checkIcon: {
            fontSize: 40,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        crosWrap:{
          display:'flex',
          justifyContent:'flex-end'
        }
    };
});

const MainModal = (props) => {
    const { 
      open, 
      icon, 
      description, 
      handleClose,
      handleCancel,
      setOpen,
      title,
      modelData
    } = props
    const { classes } = useStyles();
     console.log("modelData-------------",modelData)
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.mainContainer}>
          <div className={classes.crosWrap}>
          <IconButton  aria-label="upload picture" component="label" onClick={()=> setOpen(false)}>
                  <CancelIcon />      
                </IconButton>
          </div>
          <Slider {...settings}>
            {modelData?.images.map((item)=>{
              return <>
              <div style={{height:'50vh'}}>
      <img className={classes.imgFullWidth} src={item.imagePath}></img>
      </div>
              </>
            })}
      
    </Slider>
          <Typography variant='h3' sx={{ mt: 2 }}>
            {title}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            {description}
          </Typography>
          
        </Box>
      </Modal>
    </div>
  );
};

export default MainModal;