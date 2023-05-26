import { useEffect, useState } from "react";

const useFatch = () => {
    const [doctors,setDoctors] = useState([])
    useEffect(() => {
        fetch("/doc.json")
        .then(res => res.json(99))
        .then(data => {
            setDoctors(data)
        })
    },[])

    return [doctors];
};

export default useFatch;