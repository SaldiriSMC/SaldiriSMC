import React, {useState, useContext} from 'react';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import './comaon.css';
import PortfolioModel from './modal'
import { FeedbackContext } from "../context/FeedbackContext";
function Service() {
  const { Services} = useContext(FeedbackContext);
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
        {React.Children.toArray(Services.map((item,index)=>{
            return<>
            <div
        className={`wow zoom my_class col-5 ${index % 2 === 0 ? 'offset-lg-1' : '' }`}
        data-wow-duration="0.9s"
        style={{ animationName: "zoom" }}
      >
        <div className="box">
          <h4 className="title">{item.title}</h4>
          <div className="d-flex">

            {index % 2 === 0 ?
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
      <p className={`description`}>
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
            <ReadMoreIcon sx={{cursor:'pointer'}} onClick={()=>{setModelData(item);setOpen(true)}} className='more-logo'/>{" "}
            
          </div>
        </div>
      </div>
            </>
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

export default Service;

