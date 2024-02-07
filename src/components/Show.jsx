import React from "react";
import axios from "../utils/axios.js";
import { useEffect } from "react";

const Show = (props) => {
  const { setstudentInformation, counter } = props;

  //-------------------------------
  const fetchData = async () => {
    try {
      const res = await axios.get("/read");

      setstudentInformation(res.data.studentInformation);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, [counter]);

  return <></>;
};

export default Show;
