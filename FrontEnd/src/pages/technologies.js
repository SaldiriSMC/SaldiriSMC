import React, {useState, useContext, useEffect} from 'react';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { makeStyles } from 'tss-react/mui';
import '../components/comaon.css';
import Header from '../components/navBar'
import Footer from '../components/footer'
import { Grid } from '@mui/material';
import { FeedbackContext } from "../context/FeedbackContext";
// import PortfolioModel from './modal'
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

  useEffect(()=>{
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  },[])
  return (
<>
<Header/>
<section id="technologies" className="sect">
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

            {index >= 3 && (
              <>
             
{
  index%2 === 0 && ( <>
  

  <div className="col-xs-12 col-sm-6 col-md-6" >
        <div className="bo">
         <h3 className='text-start'>{item.title}</h3>
          <p className='tech_text_desp'>{item.description}</p>
        
        <div className="mt-4">
 
          <img className='img-fluid' src={item.logo}></img>
          
 
        </div>
        </div>
       
      </div> 

  
  
   </>)
}
{
  index%2 !== 0 && ( <>  
  

  <div className="col-xs-12 col-sm-6 col-md-6" >
  <img className='img-fluid' src={item.logo}></img>
  <div className="bo">
  <h3 className='text-start'>{item.title}</h3>
    <p className='tech_text_desp'>{item.description}</p>
  
  <div className="mt-4">

 
    

  </div>
  </div>
 
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

  </div>
  {/* <PortfolioModel
        setOpen={setOpen}
        open={open}
        services={modelData}
        description={modelData?.description}
      /> */}
</section>
<Footer/>
</>
  );
}

export default Technologies;

