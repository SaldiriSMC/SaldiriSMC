import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './comaon.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
function Footer() {

  return (
<>
<div  > 
<div >

<section className='mt-5' id="">
<div className="footer_first" >
<div className="row" >
   
   <div className="col-lg-4 col-md-4">
     <div className="">
       <img src="/assets/f1.png" alt="" />
   
   
         <h1 className='foter_title'>20+</h1>
         <p className='foter_subtitle'>Our Customers</p>
       
     </div>
   </div>
   <div className="col-lg-4 col-md-4">
     <div className="">
       <img src="/assets/f2.png" alt="" />
          
       <h1 className='foter_title'>20+</h1>
         <p className='foter_subtitle'>Completed Projects</p>
     </div>
     
   </div>
   <div className="col-lg-4 col-md-4">
     <div className=" mt-2">
       <img src="/assets/f3.png" alt="" />
        
       <h1 className='foter_title'>20+</h1>
         <p className='foter_subtitle'>Ongoing Projects</p>
     </div>

   </div>

 </div>
 </div>
  <div className="foterForm">
    
  <div className="row" >
   
   <div className="col-lg-6 col-md-6 social_wrap">
     <div className=" w-25 d-flex justify-content-around">
     <img src="/assets/flogo.png" alt="" />   
     <img src="/assets/tlogo.png" alt="" />   
     <img src="/assets/llog.png" alt="" />   
     </div>
   </div>
   <div className="col-lg-6 col-md-6 foter_inputs">
  
   <Form>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Control type="text" placeholder="Full Name *" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="text" placeholder="Last Name*" />
        </Form.Group>
        
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Control type="email" placeholder="Email*" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="text" placeholder="Cell/Phone*" />
        </Form.Group>
        
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Control type="text" placeholder="Company*" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="text" placeholder="Contact Us" />
        </Form.Group>
        
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
        <Form.Control as="textarea" placeholder="Comments* " rows={3} />
        </Form.Group>
        
      </Row>

    
      <Button variant="primary" type="submit" className='d-flex'>
        Submit
      </Button>
    </Form>
     
   </div>


 </div>
  </div>
  
</section>

</div>
</div>
</>
  );
}

export default Footer;

