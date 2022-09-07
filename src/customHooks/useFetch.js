import { useState, useEffect } from "react";
function useFetch (url){
     const [data, setdata] = useState([]);

    useEffect(()=> {
        fetch(url)
        .then((resp)=> resp.json())
        .then(data => setdata(data))
    },[])
    return {data}
}
export default useFetch