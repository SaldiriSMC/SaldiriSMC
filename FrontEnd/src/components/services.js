import React, {useState} from 'react';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { makeStyles } from 'tss-react/mui';
import './comaon.css';
import {Services} from '../data'
import { Grid } from '@mui/material';
import PortfolioModel from './modal'
const useStyles = makeStyles()((theme) => {
  return {
    sectionContainer: {
        background: theme.palette.white?.main,
        padding: "40px 20px 20px 20px",
        borderRadius: 10,
        position: "relative",
        margin: "20px 0",
      },
      aboutImgs:{
        display:'flex',
        justifyContent:'center'
      }
  };
});
function Service() {
  const { classes } = useStyles();
  const [open, setOpen]=useState(false)
  const [modelData, setModelData]=useState({})
  return (
<>
<section id="services" className="section-bg sect">
  <div className="container">
    <header className="section-header">
      <h3>Services</h3>
    </header>
    <div className="row">
        {Services.map((item,index)=>{
            return<>
            <div
        className=" wow zoom my_class"
        data-wow-duration="0.9s"
        style={{ animationName: "zoom" }}
      >
        <div className="box">
          <h4 className="title">{item.title}</h4>
          <div className="d-flex">

            {index % 2 == 0 ?
        (
            <>
             <div className="icon">
              <img
                className="img_size"
                src={item.img}
                alt=""
              />
            </div>
            <p className="description">
             {item.description}
            </p>
            </>
        ):
        (
<>
            <p className="description">
              {item.description}
            </p>
            <div className="icon my_iocn">
              <img
                className="img_size"
                src={item.img}
                alt=""
              />
            </div>
</>
        )    
        }
           


            <br />
          </div>
          <div
          className='text-end'
          >
            {" "}
            <ReadMoreIcon onClick={()=>{setModelData(item);setOpen(true)}} className='more-logo'/>{" "}
            
          </div>
        </div>
      </div>
            </>
        })}
      
    </div>
    
  </div>

  
  <PortfolioModel
        setOpen={setOpen}
        open={open}
        services={modelData}
        description={modelData?.description}
      />
</section>

</>
  );
}

export default Service;

