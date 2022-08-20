import { useEffect, useState } from "react";

const usePurchage = (purchage) =>{
    const [part, setPart] = useState({});

    useEffect( () =>{
      fetch(`http://localhost:5000/part/${purchage}`)
      .then(res => res.json())
      .then(data => setPart(data))
    },[purchage])
    return [part, setPart]
}
export default usePurchage;