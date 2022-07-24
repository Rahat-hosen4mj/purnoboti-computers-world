import { useEffect, useState } from "react";

const usePurchage = (purchage) =>{
    const [part, setPart] = useState({});

    useEffect( () =>{
      fetch(`https://rocky-earth-79278.herokuapp.com/part/${purchage}`)
      .then(res => res.json())
      .then(data => setPart(data))
    },[purchage])
    return [part, setPart]
}
export default usePurchage;