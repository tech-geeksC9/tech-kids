import React from 'react';
import { CloseSquareFilled } from '@ant-design/icons';
import { MessageFilled } from '@ant-design/icons';



// import onlineIcon from './icons/onlineIcon.png';
// import closeIcon from '../../icons/closeIcon.png';
// import {VscChromeClose } from "@react-icons/VscChromeClose";
import './InfoBar.css';
const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer" style={{marginLeft:"-2px"}}>
      <MessageFilled />


      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer" >

      <a href="/">      <CloseSquareFilled style={{marginLeft:"300px",backgroundColor:"black"}} />
<img /></a>

    </div>
  </div>
);
//
export default InfoBar;