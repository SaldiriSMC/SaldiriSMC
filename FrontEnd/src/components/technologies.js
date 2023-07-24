import React, {useState, useContext} from 'react';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { makeStyles } from 'tss-react/mui';
import Button from '@mui/material/Button';
import { Link, Outlet } from 'react-router-dom';
import './comaon.css';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Grid } from '@mui/material';
import { FeedbackContext } from "../context/FeedbackContext";
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
  const { TechnologiesList} = useContext(FeedbackContext);
  const [open, setOpen]=useState(false)
  const [modelData, setModelData]=useState({})
  return (
<>
<section id="technologies" className=" sect">
  <div className="container">
    <div className="section-header">
      <h3>Technologies</h3>
    </div>
    <>
  <div className="container mt-5">
    <div className="row">

    {React.Children.toArray(TechnologiesList.map((item,index)=>{
        return (
            <>

            {index <= 2 && (
              <>
             
{
  index%2 === 0 && ( <>
  

  <div className="col-xs-12 col-sm-6 col-md-4" >
        <div className="bo">
        <h3 className='text-start'>{item.title}</h3>
          <p className='tech_text_desp'>{item.description}</p>
        

           <Button
            onClick={()=>{setModelData(item);setOpen(true)}}
             endIcon={<TrendingFlatIcon />} 
                 variant=""
                 color="primary"
                 style={{width:200,borderRadius:30,marginRight:'auto',marginLeft:'auto',color:'#1BB1EA'}}
               >
                Read More
            
               </Button>

        <div className="mt-4">
 
          <img className='img-fluid'  src={item.logo} ></img>
          
 
        </div>
        </div>
       
      </div> 
  
  
   </>)
}
{
  index%2 !== 0 && ( <> 
  
  <div className="col-xs-12 col-sm-6 col-md-4" >
     <div className="mb-5">
 
 <img className='img-fluid'  src={item.logo} ></img>
 

</div>
        <div className="bo">
        <h3 className='text-start'>{item.title}</h3>
          <p className='tech_text_desp'>{item.description}</p>
        </div>

           <Button
           onClick={()=>{setModelData(item);setOpen(true)}}
             endIcon={<TrendingFlatIcon />} 
                 variant=""
                 color="primary"
                 style={{ borderRadius:30,marginRight:'auto',marginLeft:'auto',color:'#1BB1EA'}}
               >
                Read More
            
               </Button>
        
        
      </div> 
       </>)
}
</>
            )}
  
            </>
        )
     }))}
     

    </div>
  </div>
</>
<Link to="/technologies"> 
<Button
              
              variant="contained"
              color="primary"
              style={{ marginTop: '30px',width:200,borderRadius:30,marginRight:'auto',marginLeft:'auto'}}
            >
              View More
         
            </Button>
               </Link>
  
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

