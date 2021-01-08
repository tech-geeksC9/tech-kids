import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { createFromIconfontCN } from '@ant-design/icons';    
import './cards/Cards';
const OurStory = () => {
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
          <h1 style={{fontFamily:"cursive",marginTop:"-30",width:"1480px",fontSize:"40px",lineHeight: "66px"}} className="courseCrard">As the world progresses further into the 21st century,<br/> programming is becoming a critical layer of all our lives.!</h1>
<div style={{float:"left",marginTop:"30px"}}>
                   <div className="image"  >
            <img src="https://d3sujgifhk94se.cloudfront.net/wp-content/uploads/2019/12/09091747/kid_loves_coding.jpg" class="attachment-large size-large" alt="child" style={{height:"600px",marginTop:"-40px",float:"left",width:"500px",marginLeft:"190px" }} />
          </div></div> 
          <div style={{marginLeft:"750px",width:"720px",borderWidth:"2px",marginTop:"0px",borderRadius:"20px", boxShadow: "5px 10px 10px orange",fontFamily:"cursive",fontSize:"23px"}}>
Tech-kids is user-friendly and intuitive. Tech-kids takes a straight-forward approach,<br/> teaching real text-based code in a manner that even 8-year-olds can understand.
Tech-kids is a web-based learning<br/> platform that offers a variety of computer programming courses and tools that <br/> bridge the gap between wanting to code and becoming an expert in the field. The uniqueness of <br />Tech-kids stems from the fact that the platform teaches children real text-based programming from day one <br/>in an easy and game-like manner. The courses are user-friendly and intuitive so children can jump right into them <br/>without needing an introductory course or previous coding background.
As the world progresses further into the 21st century,<br/> programming is becoming a critical layer of all our lives.
              </div>
          </MDBCol>
          <MDBCol md="6">
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> TECH-KIDS </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
export default OurStory;