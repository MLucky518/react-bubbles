import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  
  useEffect(() => {
    
    getData();
  }, [setColorList])

  const getData = () =>{

    axiosWithAuth()
    .get("/colors")
    .then(res => {
      console.log(res);
      setColorList(res.data);
    })
    .catch(err => {
      console.log("error", err);
    });

  }

  return (
    <>
      <ColorList getData = {getData} colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
