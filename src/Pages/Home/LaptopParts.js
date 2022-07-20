import React, { useEffect, useState } from "react";
import product1 from "../../assets/images/product1.png";
import PrimaryBtn from "../Shared/PrimaryBtn";
import Parts from "./Parts";

const LaptopParts = () => {
    const [parts, setParts] = useState([])
    useEffect(() =>{
        fetch('parts.json')
        .then(res => res.json())
        .then(data =>setParts(data))
    },[])
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-gray-50 text-gray-900 px-6">
        {
            parts.map(part => <Parts part={part} key={part.id}></Parts>)
        }
      </div>
    </>
  );
};

export default LaptopParts;
