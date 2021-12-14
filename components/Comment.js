
import React ,{ useState ,useEffect} from 'react'
import axios from "axios";

export default function Comment({comment,created_at,creator}) {
    const [state, setState] = useState([]);


    useEffect(() => {
      let config = {
        method: "get",
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        url: `/register/${creator}`,
      };
      
      axios(config).then((res) => {
        let data = res.data;
        setState(data);
      });
    }, []);




    return (
        <div className=''>
            <p>{state.username}</p>
            <p>{created_at}</p>
            <p>{comment}</p>
            
            

        </div>
    )
}
