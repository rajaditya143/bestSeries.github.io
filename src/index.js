import React from 'react';
import ReactDom from 'react-dom';
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";



ReactDom.render(
<>

 <h1 className="heading_style"> LIST OF TOP 6 NETFLIX SERIES</h1>

     {Sdata.map((val ,index)=>{
       console.log(index);
        return(
          <Card 
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
       />
        );
     })};
</>
  ,document.getElementById('root'));
