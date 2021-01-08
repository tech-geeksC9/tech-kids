import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { createFromIconfontCN } from '@ant-design/icons';    
const FooterPage = () => {
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4" style={{backgroundImage: "url('https://i.pinimg.com/originals/ca/46/e1/ca46e126dfd4fcb68d8d3dfb349ab711.gif')"}}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <span>
            <h5  style={{color:"white", marginLeft:"350px",width:"550px",marginTop:"30px",fontFamily:"cursive"}}className="title">"I've come to believe that each of us has a personal<br/>
             calling that's as unique as a fingerprint – and that the best way
              to succeed is to discover what you love and then find a way to offer it to others<br/>
               in the form of service, working hard, and also allowing the energy of the <br/>
               universe to lead you. "
</h5>
            </span>
          </MDBCol>
          <MDBCol md="6">
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/"> TECH-KIDS </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
export default FooterPage;