import React, {useState} from 'react';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { makeStyles } from 'tss-react/mui';
import './comaon.css';
import {TechnologiesList} from '../data'
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
function Technologies() {
  const { classes } = useStyles();
  const [open, setOpen]=useState(false)
  const [modelData, setModelData]=useState({})
  return (
<>
<section id="technologies" className="section-bg sect">
  <div className="container">
    <div className="section-header">
      <h3>Technologies</h3>
    </div>
    <div className="row no-gutters technologies-wrap clearfix wow fadeInUp">
     
     {React.Children.toArray(TechnologiesList.map((item)=>{
        return (
            <>
            <div className=" my-2 col-lg-4 col-md-4 col-xs-6">
        <div className="client-logo" onClick={()=>{setModelData(item);setOpen(true)}}>
          <img
            src={item.img}
            className="img-fluid"
            data-toggle="modal"
            data-target="#myModal10"
            alt=""
          />
        
        </div>
      </div>
            </>
        )
     }))}
      
     
   
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

export default Technologies;

