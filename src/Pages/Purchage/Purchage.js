import React from 'react';
import { useParams } from "react-router-dom";
import usePurchage from "../../hooks/usePurchage";

const Purchage = () => {
    const { purchage } = useParams();
    const [part, setPart] = usePurchage(purchage)
    console.log('part from purchage page',part)
    return (
        <div>
            <h2>your part name : {part.name} </h2>
            <h2 className='text-primary'>Wellcome to purchage page : {purchage} </h2>
        </div>
    );
};

export default Purchage;