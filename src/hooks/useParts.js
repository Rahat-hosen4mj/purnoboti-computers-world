import{ useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useParts = () => {
  const [user] = useAuthState(auth);
    const [parts, setParts] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/part")
        .then((res) => res.json())
        .then((data) => setParts(data));
    }, [user]);

    return [parts, setParts]
};

export default useParts;